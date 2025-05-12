import { useTranslation } from "@/hooks/useTranslation";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  topics: string[];
  color: string;
};

const ServiceCard = ({ icon, title, description, topics, color }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="service-card bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg ${color} mb-5 flex items-center justify-center`}>
          <i className={`${icon} text-white text-lg`}></i>
        </div>
        <h3 className="font-poppins font-semibold text-xl mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-600 mb-4 text-sm">
          {description}
        </p>
        <ul className="mb-5 space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-blue-500 mt-1 mr-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <span className="text-slate-700">{topic}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#contact" 
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
        >
          {t("services.learnMore")} 
          <i className="fas fa-arrow-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
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
      color: "bg-green-500"
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
      color: "bg-violet-500"
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
      color: "bg-blue-500"
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
      color: "bg-teal-500"
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
      color: "bg-orange-500"
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
      color: "bg-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-medium text-sm mb-3">UK CURRICULUM EXPERTISE</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
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
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
