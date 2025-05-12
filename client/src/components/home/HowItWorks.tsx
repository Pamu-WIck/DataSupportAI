import { useTranslation } from "@/hooks/useTranslation";

type StepProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

const Step = ({ number, title, description, icon }: StepProps) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop number line (hidden on mobile) */}
      <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-blue-100 z-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full bg-blue-100"></div>
      </div>
      
      <div className="md:text-center relative z-10">
        <div className="flex md:block items-center mb-4">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-blue-600 border-2 border-blue-100 flex items-center justify-center mx-auto shadow-sm">
            <i className={`${icon} text-xl`}></i>
          </div>
          <div className="md:mt-4 ml-4 md:ml-0">
            <div className="text-xs text-blue-600 font-semibold mb-1 md:mb-2 uppercase tracking-wider">Step {number}</div>
            <h3 className="font-poppins font-semibold text-xl text-slate-900">{title}</h3>
          </div>
        </div>
        <p className="text-slate-600 text-sm md:px-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: "1",
      titleKey: "howItWorks.step1.title",
      descriptionKey: "howItWorks.step1.description",
      icon: "fas fa-clipboard-check"
    },
    {
      number: "2",
      titleKey: "howItWorks.step2.title",
      descriptionKey: "howItWorks.step2.description",
      icon: "fas fa-user-graduate"
    },
    {
      number: "3",
      titleKey: "howItWorks.step3.title",
      descriptionKey: "howItWorks.step3.description",
      icon: "fas fa-chart-line"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-medium text-sm mb-3">METHODOLOGY</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={t(step.titleKey)}
              description={t(step.descriptionKey)}
              icon={step.icon}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-medium px-6 py-3 rounded-lg shadow-sm transition-colors"
          >
            {t("howItWorks.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
