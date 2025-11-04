import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * JellyfishHero component
 * Inspired by the Jellyfish Squarespace template with clean design and modern animations
 */
const JellyfishHero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-[#f9fafc]">
      {/* Background decorative elements - subtle, elegant circles */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-yellow-100/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-t from-teal-100/20 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full border border-yellow-200">
              {t("hero.curriculumTags")}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Excellence in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Science Education
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.a
              href="#contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-md transition-all shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              {t("hero.cta.book")}
            </motion.a>
            <motion.a
              href="#services"
              className="bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-medium px-8 py-4 rounded-md transition-all shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
            >
              {t("hero.cta.explore")}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Feature stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {[
            { value: "95%", label: "Exam Success" },
            { value: "5000+", label: "Students Helped" },
            { value: "UK", label: "Curriculum Focus" },
            { value: "Expert", label: "Science Tutors" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JellyfishHero;