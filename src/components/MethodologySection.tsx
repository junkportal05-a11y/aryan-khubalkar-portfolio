import React from 'react';
import { motion } from 'framer-motion';

export const MethodologySection: React.FC = () => {
  return (
    <section id="methodology" className="py-24 px-6 max-w-[680px] mx-auto z-10 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Our <span className="font-serif-italic font-normal text-5xl sm:text-6xl text-[#5ed29c]">Methodology</span><span className="text-[#5ed29c]">.</span>
        </h2>
        <p className="text-gray-400 text-lg font-light">
          A proven three-step advisory workflow delivering measurable business outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="liquid-glass-card rounded-2xl p-6 text-center border border-white/[0.08] transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-[#5ed29c]/10 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#5ed29c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v2h2l12 8v4h-2v4h-6v-4H7v-4H3zm6.46 6.46l-.71-.71a4.95 4.95 0 0 0-6.95 6.95l.71.71a4.95 4.95 0 0 0 6.95-6.95l-.71-.71A11.95 11.95 0 0 0 12 2.98 4.95 4.95 0 0 0 1 8.95z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Discovery & Diagnosis</h3>
          <p className="text-[#AAAAAA] text-sm leading-relaxed">
            We begin with a deep-dive analysis of your business challenges, market position, and operational constraints.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="liquid-glass-card rounded-2xl p-6 text-center border border-white/[0.08] transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-[#5ed29c]/10 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#5ed29c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4m0 10v4M4.93 4.93l2.83 2.83m2.16-.79l2.83-2.83M15.07 15.07l2.83 2.83m2.16-.79l2.83-2.83M1 12h4m10 0h4m-7-7l-2.83 2.83m2.16.79l2.83 2.83M21 12h-4m-10 0h-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Strategic Intervention</h3>
          <p className="text-[#AAAAAA] text-sm leading-relaxed">
            We design customized strategies and operational frameworks aligned with your executive objectives and growth targets.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="liquid-glass-card rounded-2xl p-6 text-center border border-white/[0.08] transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-[#5ed29c]/10 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#5ed29c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4m0 10v4m.01-8h.01M9 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.93m-3.07 1.07l-1.42 1.42M4.98 4.98l1.42 1.42M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Quantified Impact</h3>
          <p className="text-[#AAAAAA] text-sm leading-relaxed">
            We deliver measurable results through defined KPIs, ROI projections, and executive reporting formats.
          </p>
        </motion.div>
      </div>
    </section>
  );
};