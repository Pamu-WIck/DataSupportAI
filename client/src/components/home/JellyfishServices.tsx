import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollAnimation from "@/components/ui/scroll-animation";

/**
 * JellyfishServices component
 * Inspired by the clean, elegant service cards from the Jellyfish Squarespace template
 */

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  topics: string[];
  index: number;
};

const ServiceCard = ({ icon, title, description, topics, index }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <ScrollAnimation
      variant="fadeUp"
      delay={0.1 * index}
      className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 group"
    >
      <div className="p-8">
        <div className="bg-slate-100 w-16 h-16 rounded-md flex items-center justify-center mb-6 group-hover:bg-yellow-50 transition-colors">
          <i className={`${icon} text-slate-900 text-2xl`}></i>
        </div>
        
        <h3 className="font-playfair text-xl font-bold text-slate-900 mb-4">{title}</h3>
        
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {topics.map((topic, i) => (
            <li key={i} className="flex items-start text-sm">
              <span className="text-yellow-500 mt-1 mr-2 flex-shrink-0">
                <i className="fas fa-check"></i>
              </span>
              <span className="text-slate-700">{topic}</span>
            </li>
          ))}
        </ul>
        
        <motion.a 
          href="#contact" 
          className="inline-flex items-center text-sm font-medium text-slate-900 border-b border-slate-900 pb-1 transition-all group-hover:text-yellow-600 group-hover:border-yellow-600"
          whileHover={{ x: 5 }}
        >
          {t("services.learnMore")} 
          <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
        </motion.a>
      </div>
    </ScrollAnimation>
  );
};

const JellyfishServices = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: "fas fa-dna",
      titleKey: "services.biology.title",
      descriptionKey: "services.biology.description",
      topics: [
        t("services.biology.topic1"),
        t("services.biology.topic2"),
        t("services.biology.topic3")
      ],
    },
    {
      icon: "fas fa-flask",
      titleKey: "services.chemistry.title",
      descriptionKey: "services.chemistry.description",
      topics: [
        t("services.chemistry.topic1"),
        t("services.chemistry.topic2"),
        t("services.chemistry.topic3")
      ],
    },
    {
      icon: "fas fa-atom",
      titleKey: "services.physics.title",
      descriptionKey: "services.physics.description",
      topics: [
        t("services.physics.topic1"),
        t("services.physics.topic2"),
        t("services.physics.topic3")
      ],
    },
    {
      icon: "fas fa-microscope",
      titleKey: "services.combinedScience.title",
      descriptionKey: "services.combinedScience.description",
      topics: [
        t("services.combinedScience.topic1"),
        t("services.combinedScience.topic2"),
        t("services.combinedScience.topic3")
      ],
    },
    {
      icon: "fas fa-calculator",
      titleKey: "services.mathForScience.title",
      descriptionKey: "services.mathForScience.description",
      topics: [
        t("services.mathForScience.topic1"),
        t("services.mathForScience.topic2"),
        t("services.mathForScience.topic3")
      ],
    },
    {
      icon: "fas fa-graduation-cap",
      titleKey: "services.examPrep.title",
      descriptionKey: "services.examPrep.description",
      topics: [
        t("services.examPrep.topic1"),
        t("services.examPrep.topic2"),
        t("services.examPrep.topic3")
      ],
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#f9fafc]">
      <div className="container mx-auto px-6">
        <ScrollAnimation variant="fadeUp" className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-slate-100 text-slate-800 text-sm font-medium rounded-full mb-6">
            UK CURRICULUM EXPERTISE
          </span>
          
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-slate-900 mb-5">
            {t("services.title")}
          </h2>
          
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              topics={service.topics}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JellyfishServices;