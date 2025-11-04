import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  topics: string[];
  variant: "primary" | "secondary";
};

const ServiceCard = ({ icon, title, description, topics, variant }: ServiceCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="service-card bg-white rounded-2xl shadow-md border-2 border-black overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 elegant-transition">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
              <Hexagon
                variant={variant}
                className="w-14 h-14 flex items-center justify-center"
                rotateHover={false}
                content={<i className={`${icon} text-black text-lg`}></i>}
              />
            </motion.div>
          </div>
          <motion.h3
            className="font-poppins font-bold text-xl text-slate-900 pt-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {title}
          </motion.h3>
        </div>

        <p className="text-slate-700 mb-5 text-sm">
          {description}
        </p>

        <ul className="mb-5 space-y-3">
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              className="flex items-start text-sm bg-yellow-50 p-2 rounded-lg border border-yellow-200"
              whileHover={{ x: 5, backgroundColor: "rgba(254, 240, 138, 0.8)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0">
                <i className="fas fa-check-circle"></i>
              </span>
              <span className="text-slate-800 font-medium">{topic}</span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className={`inline-flex items-center text-sm font-bold ${
            variant === "primary" ? "text-yellow-600 hover:text-yellow-800" : "text-teal-600 hover:text-teal-800"
          } transition-colors group mt-2`}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {t("services.learnMore")}
          <motion.i
            className="fas fa-chevron-right ml-1 group-hover:ml-2 transition-all duration-300"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          ></motion.i>
        </motion.a>
      </div>
    </div>
  );
};

export default ServiceCard;