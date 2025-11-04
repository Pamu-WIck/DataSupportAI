import { Link } from "wouter";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";

/**
 * CallToAction component
 * Encourages users to book a tutoring session
 */
export const CallToAction = () => {
  return (
    <div className="mt-16">
      <ScrollAnimation variant="fadeUp">
        <div className="bg-[#2dd4bf] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-slate-900 opacity-10 pattern-hexagons"></div>
          <div className="p-8 md:p-10 relative z-10 text-center">
            <h3 className="font-playfair font-bold text-2xl md:text-3xl text-white mb-4">
              Need Help With Your Exam Preparation?
            </h3>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              Our experienced tutors can guide you through past papers, explain difficult concepts,
              and help you develop effective exam strategies.
            </p>
            <Link href="/#contact">
              <motion.button
                className="px-8 py-3 bg-white text-teal-600 font-bold rounded-3xl hover:bg-slate-100 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Session
              </motion.button>
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};
