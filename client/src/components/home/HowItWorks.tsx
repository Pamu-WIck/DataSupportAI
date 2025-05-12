import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";

type StepProps = {
  number: string;
  title: string;
  description: string;
};

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="text-center">
      <Hexagon
        className="w-20 h-20 bg-[#FFC107] flex items-center justify-center mx-auto mb-6"
        content={<span className="font-poppins font-bold text-white text-2xl">{number}</span>}
      />
      <h3 className="font-poppins font-semibold text-xl mb-3">{title}</h3>
      <p className="text-[#424242]/70">
        {description}
      </p>
    </div>
  );
};

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: "1",
      titleKey: "howItWorks.step1.title",
      descriptionKey: "howItWorks.step1.description"
    },
    {
      number: "2",
      titleKey: "howItWorks.step2.title",
      descriptionKey: "howItWorks.step2.description"
    },
    {
      number: "3",
      titleKey: "howItWorks.step3.title",
      descriptionKey: "howItWorks.step3.description"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#03A9F4]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#424242] mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-[#424242]/70 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={t(step.titleKey)}
              description={t(step.descriptionKey)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-[#FFC107] hover:bg-[#FFA000] text-white font-montserrat font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 inline-block">
            {t("howItWorks.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
