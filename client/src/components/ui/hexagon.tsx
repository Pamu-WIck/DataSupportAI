import React from "react";

interface HexagonProps {
  className?: string;
  content: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  rotateHover?: boolean;
  pulsate?: boolean;
}

const Hexagon: React.FC<HexagonProps> = ({ 
  className = "", 
  content, 
  variant = "primary",
  rotateHover = false,
  pulsate = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-yellow-400 border-2 border-black";
      case "secondary":
        return "bg-teal-400 border-2 border-black";
      case "outline":
        return "bg-white border-2 border-yellow-400";
      case "gradient":
        return "bg-gradient-to-br from-yellow-400 to-yellow-300 border-2 border-black";
      default:
        return "bg-yellow-400 border-2 border-black";
    }
  };

  const rotateClass = rotateHover ? "hover:rotate-[30deg]" : "";
  const pulsateClass = pulsate ? "animate-pulse" : "";

  return (
    <div 
      className={`clip-hex ${getVariantClasses()} ${rotateClass} ${pulsateClass} transition-all duration-300 ${className}`}
    >
      {content}
    </div>
  );
};

export default Hexagon;
