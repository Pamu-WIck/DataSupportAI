import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (key: string): string => {
    // Get the translations for the current language
    const currentLangTranslations = translations[language] || {};
    
    // Return the translation or the key if not found
    return currentLangTranslations[key] || translations["en"][key] || key;
  };

  return { t, language };
};
