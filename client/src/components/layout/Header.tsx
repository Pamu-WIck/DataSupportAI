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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hexagon
              className="w-10 h-10 bg-[#FFC107] flex items-center justify-center"
              content={<span className="text-white font-bold">SH</span>}
            />
            <span className="text-[#FFA000] font-poppins font-bold text-2xl">The Study Hive</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home">
              <a className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition">
                {t("nav.home")}
              </a>
            </Link>
            <Link href="#services">
              <a className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition">
                {t("nav.services")}
              </a>
            </Link>
            <Link href="#tutors">
              <a className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition">
                {t("nav.tutors")}
              </a>
            </Link>
            <Link href="#resources">
              <a className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition">
                {t("nav.resources")}
              </a>
            </Link>
            <Link href="#contact">
              <a className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition">
                {t("nav.contact")}
              </a>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#424242] focus:outline-none" 
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
                className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </a>
              <a 
                href="#services" 
                className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.services")}
              </a>
              <a 
                href="#tutors" 
                className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.tutors")}
              </a>
              <a 
                href="#resources" 
                className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.resources")}
              </a>
              <a 
                href="#contact" 
                className="font-montserrat font-medium text-[#424242] hover:text-[#FFA000] transition"
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
