import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/inquiries", data);
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll contact you soon!",
          variant: "default",
        });
        reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#FFC107]/10 to-[#03A9F4]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#424242] mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-[#424242]/70 mb-8">
              {t("contact.subtitle")}
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#424242] font-medium mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-[#F5F5F5]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]`} 
                    placeholder={t("contact.form.name")}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#424242] font-medium mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-[#F5F5F5]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]`} 
                    placeholder={t("contact.form.email")}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-[#424242] font-medium mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <select 
                    id="subject" 
                    className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-[#F5F5F5]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]`}
                    {...register("subject")}
                  >
                    <option value="" disabled>{t("contact.form.selectSubject")}</option>
                    <option value="biology">{t("services.biology.title")}</option>
                    <option value="chemistry">{t("services.chemistry.title")}</option>
                    <option value="physics">{t("services.physics.title")}</option>
                    <option value="earth-science">{t("services.earthScience.title")}</option>
                    <option value="math">{t("services.mathForScience.title")}</option>
                    <option value="ap-ib">{t("services.ap.title")}</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#424242] font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-[#F5F5F5]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]`} 
                    placeholder={t("contact.form.messagePlaceholder")}
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#FFC107] hover:bg-[#FFA000] text-white font-montserrat font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</span>
                  ) : (
                    t("contact.form.submit")
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531496731261-9c68164268ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Students in a tutoring session at The Study Hive" 
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <h3 className="font-poppins font-semibold text-2xl mb-4 text-[#424242]">{t("contact.info.title")}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#FFC107]/10 text-[#FFC107] p-3 rounded-lg mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#424242]">{t("contact.info.location")}</h4>
                      <p className="text-[#424242]/70">123 Education Avenue, Suite 101<br/>Science District, CA 94107</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FFC107]/10 text-[#FFC107] p-3 rounded-lg mr-4">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#424242]">{t("contact.info.phone")}</h4>
                      <p className="text-[#424242]/70">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FFC107]/10 text-[#FFC107] p-3 rounded-lg mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#424242]">{t("contact.info.email")}</h4>
                      <p className="text-[#424242]/70">thestudyhive@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FFC107]/10 text-[#FFC107] p-3 rounded-lg mr-4">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#424242]">{t("contact.info.hours")}</h4>
                      <p className="text-[#424242]/70">Monday - Friday: 9am - 8pm<br/>Saturday: 10am - 5pm<br/>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-poppins font-medium text-lg mb-3 text-[#424242]">{t("contact.info.followUs")}</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#FFC107]/10 hover:bg-[#FFC107] text-[#FFC107] hover:text-white p-3 rounded-lg transition-all">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-[#FFC107]/10 hover:bg-[#FFC107] text-[#FFC107] hover:text-white p-3 rounded-lg transition-all">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-[#FFC107]/10 hover:bg-[#FFC107] text-[#FFC107] hover:text-white p-3 rounded-lg transition-all">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-[#FFC107]/10 hover:bg-[#FFC107] text-[#FFC107] hover:text-white p-3 rounded-lg transition-all">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
