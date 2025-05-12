import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Hexagon from "@/components/ui/hexagon";

const Footer = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubscribing(true);
    
    try {
      const response = await apiRequest("POST", "/api/subscribers", { email });
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
          variant: "default",
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-[#424242] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Hexagon
                className="w-10 h-10 bg-[#FFC107] flex items-center justify-center"
                content={<span className="text-white font-bold">SH</span>}
              />
              <span className="text-white font-poppins font-bold text-xl">The Study Hive</span>
            </div>
            <p className="text-white/70 mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-[#FFC107] transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-[#FFC107] transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-[#FFC107] transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-[#FFC107] transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-[#FFC107] transition">{t("nav.home")}</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFC107] transition">{t("nav.services")}</a></li>
              <li><a href="#tutors" className="text-white/70 hover:text-[#FFC107] transition">{t("nav.tutors")}</a></li>
              <li><a href="#resources" className="text-white/70 hover:text-[#FFC107] transition">{t("nav.resources")}</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-[#FFC107] transition">{t("nav.contact")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">{t("footer.services")}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-[#FFC107] transition">{t("services.biology.title")} {t("nav.tutors")}</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFC107] transition">{t("services.chemistry.title")} {t("nav.tutors")}</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFC107] transition">{t("services.physics.title")} {t("nav.tutors")}</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFC107] transition">{t("services.earthScience.title")}</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#FFC107] transition">{t("services.ap.title")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">{t("footer.subscribe")}</h4>
            <p className="text-white/70 mb-4">
              {t("footer.subscribeText")}
            </p>
            <form className="mb-4" onSubmit={handleSubscribe}>
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder")} 
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-[#424242]"
                />
                <button 
                  type="submit" 
                  className="bg-[#FFC107] hover:bg-[#FFA000] text-white px-4 py-2 rounded-r-lg transition"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                </button>
              </div>
            </form>
            <p className="text-white/50 text-sm">
              {t("footer.privacyNote")}
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
