import React from "react";

interface HexagonProps {
  className?: string;
  content: React.ReactNode;
}

const Hexagon: React.FC<HexagonProps> = ({ className = "", content }) => {
  return (
    <div className={`clip-hex ${className}`}>
      {content}
    </div>
  );
};

export default Hexagon;
