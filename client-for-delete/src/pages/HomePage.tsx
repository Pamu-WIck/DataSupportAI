import JellyfishHero from "@/components/home/JellyfishHero";
import JellyfishServices from "@/components/home/JellyfishServices"; 
import HowItWorks from "@/components/home/HowItWorks";
import TutorsSection from "@/components/home/TutorsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ContactSection from "@/components/home/ContactSection";
import VideosSection from "@/components/home/VideosSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import LanguageSelector from "@/components/LanguageSelector";

const HomePage = () => {
  return (
    <>
      <JellyfishHero />
      <JellyfishServices />
      <HowItWorks />
      <TutorsSection />
      <TestimonialsSection />
      <VideosSection />
      <ResourcesSection />
      <CallToActionSection />
      <LanguageSelector />
      <ContactSection />
    </>
  );
};

export default HomePage;
