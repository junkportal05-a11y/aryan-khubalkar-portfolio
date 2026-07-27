import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const typewriterPhrases = [
  'Business Consultant',
  'Strategy Analyst',
  'Problem Solver',
  'Future Entrepreneur',
];

export const HeroSection: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typewriterPhrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden z-10">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Floating Liquid Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="liquid-glass-card rounded-2xl p-5 mb-8 max-w-xs text-center relative overflow-hidden backdrop-blur-md"
        >
          <div className="flex items-center justify-between text-[11px] font-mono-accent text-[#5ed29c] font-bold uppercase mb-2">
            <span>[ 2026 ]</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#5ed29c]" /> AVAILABLE FOR INTERNSHIPS
            </span>
          </div>

          <h3 className="text-base font-medium text-white mb-1 leading-snug">
            Trained in <span className="font-serif-italic text-lg text-[#5ed29c] font-normal">Business</span> Consulting & Strategy
          </h3>

          <p className="text-[11px] text-gray-400 font-light">
            G H Raisoni Skilltech University · Final-Year BBA
          </p>
        </motion.div>

        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-jakarta uppercase font-bold text-xs tracking-widest text-[#5ed29c] mb-4 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#5ed29c] animate-ping inline-block" />
          Business Analyst & Strategy Intern
        </motion.div>

        {/* Main Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-5"
        >
          ARYAN RAJESH <span className="emerald-gradient-text">KHUBALKAR</span><span className="text-[#5ed29c]">.</span>
        </motion.h1>

        {/* Sub-Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl font-light tracking-wide text-gray-300 mb-6 uppercase"
        >
          BUSINESS <span className="font-serif-italic font-normal text-2xl sm:text-3xl text-[#5ed29c] lowercase">consulting</span> & STRATEGY INTERN
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-xl text-gray-300 italic max-w-2xl mx-auto mb-6 font-light"
        >
          "I don't wait for experience. I <span className="font-serif-italic text-2xl text-[#5ed29c]">build</span> it."
        </motion.p>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-8 mb-10 text-xl sm:text-2xl font-mono-accent text-[#5ed29c] font-semibold"
        >
          <span>{currentText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 rounded-full bg-[#5ed29c] text-[#070B0A] font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-lg shadow-[#5ed29c]/25 hover:bg-[#4bc089] transition-all cursor-pointer"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Aryan_Khubalkar_Resume.pdf"
            className="px-8 py-4 rounded-full border border-[#5ed29c]/60 text-white font-bold text-sm tracking-wider uppercase flex items-center gap-3 hover:bg-[#5ed29c]/15 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#5ed29c]" /> Download Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
