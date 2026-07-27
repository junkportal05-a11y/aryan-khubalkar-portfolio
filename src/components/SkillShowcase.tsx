import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Palette, CheckCircle2, Zap } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  skills: Array<{ name: string; level: number; highlight?: string }>;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & Motion',
    icon: Palette,
    skills: [
      { name: 'Vue 3 & Nuxt 4 (Inspira UI)', level: 96, highlight: 'Showcase Engine' },
      { name: 'React 19 & Next.js (Animate UI)', level: 98, highlight: 'Core Stack' },
      { name: 'Lenis Smooth Scrolling', level: 95, highlight: 'Inertia Physics' },
      { name: 'Tailwind CSS v4 & Glassmorphism', level: 98, highlight: 'Design Tokens' },
      { name: 'Framer Motion & GSAP', level: 92, highlight: 'Micro-Animations' },
      { name: 'Three.js & Canvas Shaders', level: 88, highlight: '3D Backgrounds' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: Database,
    skills: [
      { name: 'Node.js & Express / Fastify', level: 94, highlight: 'High Throughput' },
      { name: 'Python & FastAPI', level: 90, highlight: 'Async Services' },
      { name: 'PostgreSQL & Supabase', level: 92, highlight: 'Relational DB' },
      { name: 'GraphQL & REST Architecture', level: 95, highlight: 'API Design' },
      { name: 'Redis Caching & Sockets', level: 89, highlight: 'Realtime Data' },
    ],
  },
  {
    id: 'ai-ml',
    name: 'AI & Engineering',
    icon: Cpu,
    skills: [
      { name: 'Antigravity & Agentic Frameworks', level: 98, highlight: 'Subagents & Tooling' },
      { name: 'Claude Code & OpenAI APIs', level: 96, highlight: 'LLM Orchestration' },
      { name: 'MCP Servers & Extensions', level: 94, highlight: 'Custom Tools' },
      { name: 'Prompt Engineering & GSD', level: 99, highlight: 'Structured Specs' },
    ],
  },
];

export const SkillShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const currentCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Zap className="w-3.5 h-3.5" /> Skill Matrix
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight"
        >
          Technical <span className="gradient-text">Proficiency & Tooling</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Explore engineering capabilities powered by modern frontend frameworks, AI orchestration, and motion physics.
        </motion.p>
      </div>

      {/* Category Tabs (Animate UI Spring Tab Style) */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeTab === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                isActive
                  ? 'text-white shadow-lg shadow-violet-500/25'
                  : 'text-gray-400 hover:text-white glass-card border border-white/10'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="w-4 h-4" /> {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Animated Skill Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-violet-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold text-base sm:text-lg">{skill.name}</span>
                </div>
                {skill.highlight && (
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {skill.highlight}
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                  <span>Proficiency Level</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
