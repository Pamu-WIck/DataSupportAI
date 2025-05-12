import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-br from-[#FFC107]/10 to-[#03A9F4]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-[#424242] mb-4">
              {t("hero.title").split(" ").map((word, index, array) => 
                index === array.length - 2 ? (
                  <span key={index}>
                    <span className="text-[#FFA000]">{word} </span>
                    {array[array.length - 1]}
                  </span>
                ) : index < array.length - 2 ? (
                  <span key={index}>{word} </span>
                ) : null
              )}
            </h1>
            <p className="text-lg md:text-xl text-[#424242]/80 mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#FFA000] hover:bg-[#FFC107] text-white font-montserrat font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 text-center">
                {t("hero.cta.book")}
              </a>
              <a href="#services" className="bg-white hover:bg-[#03A9F4] hover:text-white text-[#0288D1] font-montserrat font-semibold px-8 py-3 rounded-lg shadow-md border border-[#0288D1]/20 transition duration-300 text-center">
                {t("hero.cta.explore")}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Students conducting science experiments" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <Hexagon
                className="w-24 h-24 bg-[#FFC107] flex items-center justify-center shadow-lg"
                content={
                  <div className="text-white text-center">
                    <div className="font-bold text-2xl">95%</div>
                    <div className="text-xs">Success Rate</div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
