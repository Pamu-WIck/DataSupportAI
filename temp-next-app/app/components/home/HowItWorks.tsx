import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";

type StepProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
  variant: "primary" | "secondary";
};

const Step = ({ number, title, description, icon, variant }: StepProps) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop connector line (hidden on mobile) */}
      <div className="hidden md:block absolute top-14 left-0 w-full h-2 border-t-2 border-b-2 border-dashed border-black z-0 opacity-30">
      </div>

      <div className="md:text-center relative z-10">
        <div className="flex md:block items-center mb-4">
          <div className="md:mx-auto">
            <Hexagon
              variant={variant}
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
              content={
                <div className="text-center">
                  <div className="text-lg font-bold">{number}</div>
                  <i className={`${icon} text-lg`}></i>
                </div>
              }
            />
          </div>
          <div className="md:mt-5 ml-4 md:ml-0">
            <h3 className="font-poppins font-bold text-xl text-slate-900">{title}</h3>
          </div>
        </div>
        <div className="md:bg-white md:rounded-lg md:p-4 md:border-2 md:border-black md:shadow-md">
          <p className="text-slate-700 text-sm leading-relaxed">
            {description}
          </p>
        </div>
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
      icon: "fas fa-clipboard-check",
      variant: "primary" as const
    },
    {
      number: "2",
      titleKey: "howItWorks.step2.title",
      descriptionKey: "howItWorks.step2.description",
      icon: "fas fa-user-graduate",
      variant: "secondary" as const
    },
    {
      number: "3",
      titleKey: "howItWorks.step3.title",
      descriptionKey: "howItWorks.step3.description",
      icon: "fas fa-chart-line",
      variant: "primary" as const
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white honeycomb-pattern relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-teal-400 border-2 border-black text-black font-semibold text-sm mb-3 px-4 py-2 rounded-full inline-block">
              OUR METHODOLOGY
            </span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4 mt-5">
            {t("howItWorks.title")}
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Mobile view - stack vertically */}
        <div className="md:hidden space-y-10 mb-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={t(step.titleKey)}
              description={t(step.descriptionKey)}
              icon={step.icon}
              variant={step.variant}
            />
          ))}
        </div>

        {/* Desktop view - horizontal with connected hexagons */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 mb-16 relative">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={t(step.titleKey)}
              description={t(step.descriptionKey)}
              icon={step.icon}
              variant={step.variant}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-montserrat font-medium px-6 py-3 rounded-full border-2 border-black shadow-sm transition-colors"
          >
            {t("howItWorks.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
