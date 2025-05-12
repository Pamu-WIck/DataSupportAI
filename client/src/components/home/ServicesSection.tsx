import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";
import ScrollAnimation from "@/components/ui/scroll-animation";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  topics: string[];
  variant: "primary" | "secondary";
};

const ServiceCard = ({ icon, title, description, topics, variant }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="service-card bg-white rounded-2xl shadow-md border-2 border-black overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <Hexagon
              variant={variant}
              className="w-14 h-14 flex items-center justify-center"
              rotateHover={true}
              content={<i className={`${icon} text-black text-lg`}></i>}
            />
          </div>
          <h3 className="font-poppins font-bold text-xl text-slate-900 pt-3">{title}</h3>
        </div>
        
        <p className="text-slate-700 mb-5 text-sm">
          {description}
        </p>
        
        <ul className="mb-5 space-y-3">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start text-sm bg-yellow-50 p-2 rounded-lg border border-yellow-200">
              <span className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <span className="text-slate-800 font-medium">{topic}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className={`inline-flex items-center text-sm font-bold ${
            variant === "primary" ? "text-yellow-600 hover:text-yellow-800" : "text-teal-600 hover:text-teal-800"
          } transition-colors group mt-2`}
        >
          {t("services.learnMore")} 
          <i className="fas fa-chevron-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
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
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-yellow-400 border-2 border-black text-black font-semibold text-sm mb-3 px-4 py-2 rounded-full inline-block">
              UK CURRICULUM EXPERTISE
            </span>
          </div>
          
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4 mt-5">
            {t("services.title")}
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
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
              variant={service.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
