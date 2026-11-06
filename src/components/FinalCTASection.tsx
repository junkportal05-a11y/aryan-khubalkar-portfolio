import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTASection: React.FC = () => {
  return (
    <section id="final-cta" className="py-24 px-6 bg-[#070B0A] z-10 relative">
      <div className="max-w-[680px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-white"
        >
          Let's Build Something Exceptional Together
        </motion.h2>
        <p className="text-[#AAAAAA] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Ready to elevate your business with strategic advisory and operational excellence? I'm available for strategic consulting engagements that deliver quantified results.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 max-w-[680px] mx-auto"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, translateY: 1 }}
            href="#contact"
            className="px-3 py-2 rounded-full bg-[#5ed29c] text-[#070B0A] font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#4bc089] transition-colors cursor-pointer"
          >
            Schedule a strategy call
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, translateY: 1 }}
            href="#contact"
            className="px-3 py-2 rounded-full border border-white/[0.08] text-white font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-white/[0.1] transition-colors cursor-pointer"
          >
            Inquire for consulting
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};