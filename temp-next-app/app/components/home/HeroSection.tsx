import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-16 pb-20 md:pt-24 md:pb-32 honeycomb-pattern relative overflow-hidden">
      {/* Floating hexagons in background */}
      <div className="absolute -left-20 top-20 opacity-30 z-0 animate-float" style={{animationDelay: "0.5s"}}>
        <Hexagon
          variant="secondary"
          className="w-40 h-40"
          content={<span></span>}
        />
      </div>
      <div className="absolute right-10 top-40 opacity-20 z-0 animate-float" style={{animationDelay: "1.2s"}}>
        <Hexagon
          variant="primary"
          className="w-24 h-24"
          content={<span></span>}
        />
      </div>
      <div className="absolute left-1/3 bottom-20 opacity-20 z-0 animate-float" style={{animationDelay: "0.8s"}}>
        <Hexagon
          variant="primary"
          className="w-32 h-32"
          content={<span></span>}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-3 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full border-2 border-black">
                {t("hero.curriculumTags")}
              </span>
            </motion.div>

            <motion.h1
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t("hero.title").split(" ").map((word, index) =>
                index === 1 ? (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{word} </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-700 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-montserrat font-medium px-6 py-3 rounded-full shadow-sm transition-all hover:shadow-md text-center border-2 border-black"
              >
                {t("hero.cta.book")}
              </a>
              <a
                href="#services"
                className="bg-teal-400 hover:bg-teal-500 text-black font-montserrat font-medium px-6 py-3 rounded-full shadow-sm border-2 border-black transition-all hover:shadow-md text-center"
              >
                {t("hero.cta.explore")}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Main image with hexagon clip */}
            <div className="relative">
              <motion.div
                initial={{ rotate: -5, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <Hexagon
                  variant="primary"
                  className="w-full aspect-square max-w-lg mx-auto p-2"
                  content={
                    <img
                      src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                      alt="UK students conducting science experiments"
                      className="w-full h-full object-cover rounded-[20%]"
                    />
                  }
                />
              </motion.div>

              {/* Decorative hexagons */}
              <motion.div
                className="absolute -bottom-6 -left-6 hidden md:block z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 1.0 }}
              >
                <Hexagon
                  variant="gradient"
                  className="w-28 h-28 flex items-center justify-center animate-float"
                  content={
                    <div className="text-black text-center">
                      <div className="font-bold text-2xl">95%</div>
                      <div className="text-xs font-medium">Exam Success</div>
                    </div>
                  }
                />
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 hidden md:block z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                <Hexagon
                  variant="secondary"
                  className="w-28 h-28 flex items-center justify-center animate-float"
                  content={
                    <div className="text-black text-center">
                      <div className="font-bold text-2xl">5000+</div>
                      <div className="text-xs font-medium">Students Helped</div>
                    </div>
                  }
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
