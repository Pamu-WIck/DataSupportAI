import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";
import ScrollAnimation from "@/components/ui/scroll-animation";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
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
      variant: "primary" as const
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
      variant: "secondary" as const
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
      variant: "primary" as const
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
      variant: "secondary" as const
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
      variant: "primary" as const
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
      variant: "secondary" as const
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-yellow-50 relative">
      {/* Hexagon shapes */}
      <div className="absolute -left-10 top-40 opacity-10 z-0">
        <Hexagon 
          variant="secondary" 
          className="w-40 h-40" 
          content={<span></span>}
        />
      </div>
      <div className="absolute right-10 bottom-40 opacity-10 z-0">
        <Hexagon 
          variant="primary" 
          className="w-60 h-60" 
          content={<span></span>}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation variant="fadeUp" className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-yellow-400 border-2 border-black text-black font-semibold text-sm mb-3 px-4 py-2 rounded-full inline-block animate-borderPulse">
              UK CURRICULUM EXPERTISE
            </span>
          </div>
          
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4 mt-5">
            {t("services.title")}
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index}
              variant="scale" 
              delay={0.1 * index}
              duration={0.6}
            >
              <ServiceCard
                icon={service.icon}
                title={t(service.titleKey)}
                description={t(service.descriptionKey)}
                topics={service.topics}
                variant={service.variant}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
