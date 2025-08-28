import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import Hexagon from "@/components/ui/hexagon";

/**
 * CallToActionSection component
 * Inspired by the elegant, animated design of St Helens School and NLCS websites
 */
const CallToActionSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 opacity-10">
          <Hexagon
            variant="primary"
            className="w-64 h-64"
            content={<span></span>}
          />
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10">
          <Hexagon
            variant="secondary"
            className="w-96 h-96"
            content={<span></span>}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <ScrollAnimation variant="fadeRight" delay={0.1}>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6">
                  Begin Your Academic Journey With Us
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation variant="fadeRight" delay={0.3}>
                <p className="text-slate-700 mb-8">
                  Book a free consultation with our expert science tutors specialising in the UK curriculum. We'll help you create a personalised learning path to achieve academic excellence.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation variant="fadeRight" delay={0.5}>
                <motion.a 
                  href="#contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-montserrat font-medium px-6 py-3 rounded-3xl shadow-sm transition-all hover:shadow-md text-center border-2 border-black inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Your Free Session
                </motion.a>
              </ScrollAnimation>
            </div>
            
            <div className="bg-[#009688] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Using a solid teal/green color that matches The Study Hive logo */}
              
              <div className="relative z-10">
                <ScrollAnimation variant="fadeLeft" delay={0.2}>
                  <h3 className="font-poppins font-bold text-2xl text-black mb-8">
                    Our Academic Support Includes:
                  </h3>
                </ScrollAnimation>
                
                <ul className="space-y-4">
                  {[
                    "Personalized UK curriculum tutoring",
                    "Expert GCSE & IGCSE exam preparation",
                    "Targeted academic skill development",
                    "Confidence building in science subjects"
                  ].map((item, index) => (
                    <ScrollAnimation key={index} variant="fadeLeft" delay={0.3 + (index * 0.1)}>
                      <li className="flex items-center">
                        <motion.div 
                          className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center mr-3 border-2 border-black"
                          initial={{ scale: 0 }}
                          animate={{ scale: isVisible ? 1 : 0 }}
                          transition={{ delay: 0.4 + (index * 0.15), type: "spring" }}
                        >
                          <i className="fas fa-check text-black"></i>
                        </motion.div>
                        <span className="text-black font-medium">{item}</span>
                      </li>
                    </ScrollAnimation>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;