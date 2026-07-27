import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Check, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Project } from './BentoGrid';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#06b6d4', '#8b5cf6', '#10b981', '#f43f5e'],
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl z-10 overflow-hidden"
        >
          {/* Top Gradient Banner */}
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3 inline-block">
              {project.category}
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              {project.longDescription}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-violet-400" /> Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-gray-200 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights & Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="glass-card p-4 rounded-xl border border-white/10">
              <span className="text-xs text-gray-400 font-medium">Performance Highlight</span>
              <div className="text-xl font-bold text-emerald-400 mt-1 flex items-center gap-2">
                <Check className="w-4 h-4" /> {project.metrics}
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/10">
              <span className="text-xs text-gray-400 font-medium">Source Status</span>
              <div className="text-xl font-bold text-cyan-400 mt-1 flex items-center gap-2">
                <GithubIcon className="w-4 h-4" /> Public Open Source
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <button
              onClick={triggerCelebration}
              className="px-5 py-2.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30 font-medium text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-violet-400" /> Celebrate Integration
            </button>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full glass-card border border-white/15 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
