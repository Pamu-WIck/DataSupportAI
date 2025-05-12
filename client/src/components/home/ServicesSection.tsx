import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  topics: string[];
};

const ServiceCard = ({ icon, title, description, topics }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="service-card bg-[#FAFAFA] rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <Hexagon
          className="w-16 h-16 mb-4 bg-[#FFC107] flex items-center justify-center"
          content={<i className={`${icon} text-white text-2xl`}></i>}
        />
        <h3 className="font-poppins font-semibold text-xl mb-3 text-[#424242]">{title}</h3>
        <p className="text-[#424242]/70 mb-4">
          {description}
        </p>
        <ul className="mb-4 space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-[#4CAF50] mt-1 mr-2"></i>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="inline-block font-montserrat font-medium text-[#0288D1] hover:text-[#03A9F4] transition">
          {t("services.learnMore")} <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </div>
  );
};

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
      ]
    },
    {
      icon: "fas fa-flask",
      titleKey: "services.chemistry.title",
      descriptionKey: "services.chemistry.description",
      topics: [
        t("services.chemistry.topic1"),
        t("services.chemistry.topic2"),
        t("services.chemistry.topic3")
      ]
    },
    {
      icon: "fas fa-atom",
      titleKey: "services.physics.title",
      descriptionKey: "services.physics.description",
      topics: [
        t("services.physics.topic1"),
        t("services.physics.topic2"),
        t("services.physics.topic3")
      ]
    },
    {
      icon: "fas fa-globe-americas",
      titleKey: "services.earthScience.title",
      descriptionKey: "services.earthScience.description",
      topics: [
        t("services.earthScience.topic1"),
        t("services.earthScience.topic2"),
        t("services.earthScience.topic3")
      ]
    },
    {
      icon: "fas fa-calculator",
      titleKey: "services.mathForScience.title",
      descriptionKey: "services.mathForScience.description",
      topics: [
        t("services.mathForScience.topic1"),
        t("services.mathForScience.topic2"),
        t("services.mathForScience.topic3")
      ]
    },
    {
      icon: "fas fa-graduation-cap",
      titleKey: "services.ap.title",
      descriptionKey: "services.ap.description",
      topics: [
        t("services.ap.topic1"),
        t("services.ap.topic2"),
        t("services.ap.topic3")
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#424242] mb-4">
            {t("services.title")}
          </h2>
          <p className="text-[#424242]/70 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              topics={service.topics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
