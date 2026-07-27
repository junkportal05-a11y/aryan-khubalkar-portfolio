import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  metrics: string;
  github: string;
  live: string;
  featured?: boolean;
  colSpan?: string;
  gradient: string;
}

export const sampleProjects: Project[] = [
  {
    id: 'inspira-ui-showcase',
    title: 'Inspira Motion Design Engine',
    category: 'Vue & Nuxt UI Framework',
    description: 'High-performance micro-interaction library built with 3D canvas particles, Lenis smooth scrolling, and custom shaders.',
    longDescription: 'Inspira UI brings high-end motion design and interactive components to Vue and Nuxt 4 developers. Built with GPU-accelerated GLSL shaders, spring animation engines, and smooth inertia physics.',
    tech: ['Vue 3', 'Nuxt 4', 'Three.js', 'Lenis', 'TailwindCSS'],
    metrics: '60FPS Motion Physics',
    github: 'https://github.com/unovue/inspira-ui',
    live: 'https://inspira-ui.com',
    featured: true,
    colSpan: 'md:col-span-2 md:row-span-2',
    gradient: 'from-cyan-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'animate-ui-suite',
    title: 'Animate UI Suite',
    category: 'React & Tailwind Components',
    description: 'Animated component library featuring spring physics, floating docks, interactive sheets, and glassmorphic cards.',
    longDescription: 'Animate UI offers modular React components crafted with Framer Motion and Tailwind CSS v4. Designed for ultra-fluid user interactions and seamless accessibility.',
    tech: ['React 19', 'Framer Motion', 'Tailwind CSS v4', 'TypeScript'],
    metrics: '954 Installed Packages',
    github: 'https://github.com/imskyleen/animate-ui',
    live: 'https://animate-ui.com',
    colSpan: 'md:col-span-1',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'lenis-smooth-scroll',
    title: 'Lenis Inertia Engine',
    category: 'Smooth Scroll Framework',
    description: 'Next-generation web smooth scrolling library providing lightweight inertia, scroll-snapping, and touch acceleration.',
    longDescription: 'Lenis is a lightweight, performant smooth scrolling library designed for modern web applications. Built by Darkroom Engineering for creative studios and interactive web experiences.',
    tech: ['TypeScript', 'WebGL', 'RAFLoop', 'Vanilla JS'],
    metrics: 'Sub-millisecond latency',
    github: 'https://github.com/darkroomengineering/lenis',
    live: 'https://lenis.darkroom.engineering',
    colSpan: 'md:col-span-1',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'trade-ai-platform',
    title: 'Trade AI Analytics Dashboard',
    category: 'Quantitative Finance & AI',
    description: 'Real-time financial market analytics dashboard with custom technical indicator charts, sentiment analysis, and live sockets.',
    longDescription: 'Real-time quantitative trading analysis platform integrating multi-factor technical analysis, geopolitical risk scoring, and interactive order-book heatmaps.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Chart.js', 'WebSockets'],
    metrics: '<10ms WebSocket Stream',
    github: 'https://github.com',
    live: 'https://trade-ai.example.com',
    colSpan: 'md:col-span-2',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
  },
];

interface BentoGridProps {
  onSelectProject: (project: Project) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Layers className="w-3.5 h-3.5" /> Featured Architecture
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight"
        >
          Integrated <span className="gradient-text">Inspira & Animate UI</span> Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Select a project card below to inspect component specs, interactive demos, and tech stack details.
        </motion.p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {sampleProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => onSelectProject(project)}
            className={`group relative rounded-3xl p-8 glass-card border border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between ${project.colSpan || ''}`}
          >
            {/* Ambient Card Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md">
                {project.category}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </button>
                <div className="p-2 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Middle & Bottom Content */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base line-clamp-2 mb-6 font-light">
                {project.description}
              </p>

              {/* Tech Tags & Metrics */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" /> {project.metrics}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
