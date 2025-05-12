import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as any);
  };

  return (
    <section className="py-8 bg-[#FAFAFA] border-t border-[#F5F5F5]/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <span className="mr-4 text-[#424242]/70">{t("language.select")}:</span>
          <select 
            className="bg-white border border-[#F5F5F5] rounded-lg px-4 py-2 text-[#424242] focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default LanguageSelector;
