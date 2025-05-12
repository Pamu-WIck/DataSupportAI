import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <img 
                src="/assets/images/study-hive-logo.png" 
                alt="The Study Hive Logo" 
                className="w-full h-full"
              />
            </div>
            <span className="text-slate-900 font-poppins font-bold text-2xl">The Study Hive</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-1 py-2"
            >
              {t("nav.home")}
            </a>
            <a 
              href="#services" 
              className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-1 py-2"
            >
              {t("nav.services")}
            </a>
            <Link 
              href="/founder" 
              className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-1 py-2"
            >
              Founder
            </Link>
            <Link 
              href="/videos" 
              className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-1 py-2"
            >
              {t("nav.videos")}
            </Link>
            <Link 
              href="/past-papers" 
              className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-1 py-2"
            >
              Past Papers
            </Link>
            <a 
              href="#resources" 
              className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-1 py-2"
            >
              {t("nav.resources")}
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-3xl transition-colors border-2 border-black"
            >
              {t("nav.contact")}
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 focus:outline-none p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <a 
                href="#home" 
                className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </a>
              <a 
                href="#services" 
                className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.services")}
              </a>
              <Link 
                href="/founder" 
                className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Founder
              </Link>
              <Link 
                href="/videos" 
                className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.videos")}
              </Link>
              <Link 
                href="/past-papers" 
                className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Past Papers
              </Link>
              <a 
                href="#resources" 
                className="font-montserrat font-medium text-slate-700 hover:text-yellow-500 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.resources")}
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-3xl transition-colors border-2 border-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
