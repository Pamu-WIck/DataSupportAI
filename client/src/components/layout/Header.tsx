import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white backdrop-blur-sm bg-white/90 border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SH</span>
            </div>
            <span className="text-gray-900 font-poppins font-bold text-2xl">The Study Hive</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a 
              href="#home" 
              className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("nav.home")}
            </a>
            <a 
              href="#services" 
              className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("nav.services")}
            </a>
            <a 
              href="#tutors" 
              className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("nav.tutors")}
            </a>
            <a 
              href="#resources" 
              className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("nav.resources")}
            </a>
            <a 
              href="#contact" 
              className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("nav.contact")}
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </a>
              <a 
                href="#services" 
                className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.services")}
              </a>
              <a 
                href="#tutors" 
                className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.tutors")}
              </a>
              <a 
                href="#resources" 
                className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.resources")}
              </a>
              <a 
                href="#contact" 
                className="font-montserrat font-medium text-gray-600 hover:text-blue-600 transition-colors"
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
