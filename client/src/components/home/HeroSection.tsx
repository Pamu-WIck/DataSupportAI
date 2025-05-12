import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="mb-3 inline-block">
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                {t("hero.curriculumTags")}
              </span>
            </div>
            
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
              {t("hero.title").split(" ").map((word, index) => 
                index === 1 ? (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">{word} </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-medium px-6 py-3 rounded-lg shadow-sm transition-colors text-center"
              >
                {t("hero.cta.book")}
              </a>
              <a 
                href="#services" 
                className="bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 font-montserrat font-medium px-6 py-3 rounded-lg shadow-sm border border-slate-200 transition-colors text-center"
              >
                {t("hero.cta.explore")}
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="UK students conducting science experiments" 
                className="rounded-xl w-full h-auto"
              />
            </div>
            
            {/* Stat cards */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-white rounded-lg shadow-lg p-4 w-32">
                <div className="text-blue-600 text-center">
                  <div className="font-bold text-2xl">95%</div>
                  <div className="text-xs text-slate-600 font-medium">Exam Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 hidden md:block">
              <div className="bg-white rounded-lg shadow-lg p-4 w-32">
                <div className="text-blue-600 text-center">
                  <div className="font-bold text-2xl">5000+</div>
                  <div className="text-xs text-slate-600 font-medium">Students Helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
