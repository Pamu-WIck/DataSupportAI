import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  variant?: "fadeIn" | "fadeUp" | "fadeRight" | "fadeLeft" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

/**
 * ScrollAnimation component that animates elements as they enter the viewport
 * Inspired by St Helens School website animations
 */
export const ScrollAnimation = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className = "",
  threshold = 0.2,
  once = true,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: once 
  });

  // Animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;