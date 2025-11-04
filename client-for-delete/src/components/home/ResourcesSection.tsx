import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";

type ResourceCardProps = {
  icon: string;
  subject: string;
  title: string;
  description: string;
  actionText: string;
  actionIcon: string;
};

const ResourceCard = ({ icon, subject, title, description, actionText, actionIcon }: ResourceCardProps) => {
  return (
    <div className="bg-[#FAFAFA] rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Hexagon
            className="w-12 h-12 bg-[#FFC107] flex items-center justify-center"
            content={<i className={`${icon} text-white text-lg`}></i>}
          />
          <span className="bg-[#03A9F4]/10 text-[#0288D1] px-3 py-1 rounded-full text-xs font-medium">
            {subject}
          </span>
        </div>
        <h3 className="font-poppins font-semibold text-lg mb-2 text-[#424242]">
          {title}
        </h3>
        <p className="text-[#424242]/70 text-sm mb-4">
          {description}
        </p>
        <a href="#" className="inline-flex items-center font-montserrat font-medium text-[#0288D1] hover:text-[#03A9F4] transition text-sm">
          {actionText} <i className={`${actionIcon} ml-2`}></i>
        </a>
      </div>
    </div>
  );
};

const ResourcesSection = () => {
  const { t } = useTranslation();
  
  const resources = [
    {
      icon: "fas fa-file-pdf",
      subject: "Biology",
      title: "Cell Division & Mitosis Study Guide",
      description: "A comprehensive guide to understanding the stages of mitosis with diagrams and key terminology.",
      actionText: t("resources.download"),
      actionIcon: "fas fa-download"
    },
    {
      icon: "fas fa-file-pdf",
      subject: "Chemistry",
      title: "Periodic Table Interactive Guide",
      description: "An interactive reference with element properties, trends, and quiz questions to test your knowledge.",
      actionText: t("resources.accessOnline"),
      actionIcon: "fas fa-external-link-alt"
    },
    {
      icon: "fas fa-file-pdf",
      subject: "Physics",
      title: "Newton's Laws Problem Set",
      description: "Practice problems with full solutions to master the applications of Newton's three laws of motion.",
      actionText: t("resources.download"),
      actionIcon: "fas fa-download"
    },
    {
      icon: "fas fa-video",
      subject: "Chemistry",
      title: "Chemical Reactions Video Series",
      description: "A collection of video demonstrations of different types of chemical reactions with explanations.",
      actionText: t("resources.watchVideos"),
      actionIcon: "fas fa-play"
    },
    {
      icon: "fas fa-calculator",
      subject: "Math for Science",
      title: "Scientific Calculation Worksheets",
      description: "Practice sheets for common science calculations, unit conversions, and data analysis.",
      actionText: t("resources.download"),
      actionIcon: "fas fa-download"
    },
    {
      icon: "fas fa-flask",
      subject: "Lab Skills",
      title: "Lab Report Writing Guide",
      description: "A comprehensive template and guidelines for writing effective science lab reports.",
      actionText: t("resources.download"),
      actionIcon: "fas fa-download"
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#424242] mb-4">
            {t("resources.title")}
          </h2>
          <p className="text-[#424242]/70 max-w-2xl mx-auto">
            {t("resources.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              icon={resource.icon}
              subject={resource.subject}
              title={resource.title}
              description={resource.description}
              actionText={resource.actionText}
              actionIcon={resource.actionIcon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="bg-white border-2 border-[#FFC107] hover:bg-[#FFC107] text-[#FFC107] hover:text-white font-montserrat font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 inline-block">
            {t("resources.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
