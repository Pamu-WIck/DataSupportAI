import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleUp";
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimation = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  className = "",
}: ScrollAnimationProps) => {
  const getAnimationVariants = () => {
    switch (variant) {
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "scaleUp":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getAnimationVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;