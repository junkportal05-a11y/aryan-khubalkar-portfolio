import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, CheckCircle, ArrowUpRight } from 'lucide-react';

export interface ProjectCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  metrics: string[];
  tags: string[];
  featured?: boolean;
  buttonText: string;
  buttonType: 'filled' | 'outline';
}

export const sampleProjectCards: ProjectCard[] = [
  {
    id: 'logistics-hub',
    title: 'Centralized Logistics Hub — Nagpur',
    tag: 'Key Project · Consulting Feasibility Study',
    description: 'A 9-slide executive study for a Tier-2 D2C e-commerce client evaluating a Mumbai → Nagpur MIHAN SEZ distribution shift.',
    longDescription: 'Strategic Infrastructure Optimization & Feasibility Study for a Tier-2 D2C electronics client. Evaluated shifting distribution center from Mumbai to Nagpur MIHAN SEZ using PESTLE, Porter’s Five Forces, Hub-and-Spoke modeling, CapEx/OpEx financial modeling (₹2.2Cr CapEx, ₹1.45Cr annual savings), TAT/CPO/RTO KPI framework, and a 3-step risk mitigation plan.',
    metrics: ['145% Projected ROI', '18% Cost Reduction', '₹1.45Cr Annual Savings', '8-Month Transition'],
    tags: ['PESTLE', "Porter's Five Forces", 'Hub-and-Spoke', 'Excel Financial Model'],
    featured: true,
    buttonText: 'View Feasibility Study',
    buttonType: 'filled',
  },
  {
    id: 'kashti-fest',
    title: 'Kashti & PAE — University Flagship Fests',
    tag: 'Event Leadership & Operations',
    description: 'Directed end-to-end logistics, budgets, 20+ task checklists, and core team of 15–20 members reaching 3,000+ students.',
    longDescription: 'As President of the Culture Forum at G H Raisoni Skilltech University, coordinated 25+ events and initiatives reaching 2,000–3,000+ students. Led core team of 15–20 members across flagship events including Kashti & PAE. Managed vendor logistics, sponsor outreach templates for 100+ clients, and drove 35% engagement growth.',
    metrics: ['3,000+ Students Reached', '25+ Events Led', '35% Engagement Growth', '100+ Sponsors Contacted'],
    tags: ['Event Strategy', 'Operations Management', 'Budgeting', 'Stakeholder Communication'],
    buttonText: 'View Leadership Impact',
    buttonType: 'filled',
  },
  {
    id: 'nagpur-cafe-study',
    title: 'Tier-2 Market Entry & Category Study',
    tag: 'Market Research · Competitive Analysis',
    description: 'Field analysis evaluating market entry strategies across 3 product categories and 10 local business establishments in Nagpur.',
    longDescription: 'Self-initiated market research analyzing entry strategies, SWOT analysis, competitive landscape mapping, pricing elasticity, and operational viability across 3 product categories and local commercial establishments in Tier-2 Indian cities (Nagpur).',
    metrics: ['3 Product Categories', '10 Establishments Audited', 'SWOT Mapping'],
    tags: ['Market Research', 'SWOT Analysis', 'Competitive Mapping', 'Field Strategy'],
    buttonText: 'View Analysis',
    buttonType: 'outline',
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectCard | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight inline-block relative">
          KEY <span className="font-serif-italic font-normal text-5xl sm:text-6xl text-[#5ed29c]">Consulting</span> PROJECTS<span className="text-[#5ed29c]">.</span>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#5ed29c] to-transparent mt-2" />
        </h2>
        <p className="text-gray-400 text-lg font-light mt-2">
          Consulting-grade feasibility studies, campus initiative leadership, and market research.
        </p>
      </div>

      {/* 3 Liquid Glass Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sampleProjectCards.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className={`liquid-glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group ${
              project.featured ? 'ring-1 ring-[#5ed29c]/50' : ''
            }`}
          >
            {/* Ambient Hover Glare */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5ed29c]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono-accent font-semibold bg-[#5ed29c]/10 text-[#5ed29c] border border-[#5ed29c]/30">
                  {project.tag}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5ed29c] text-[#070B0A] flex items-center gap-1 shadow-md shadow-[#5ed29c]/30">
                    <Star className="w-3 h-3 fill-[#070B0A]" /> Featured
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#5ed29c] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              {/* Key Metrics */}
              <div className="mb-6 p-3 rounded-xl bg-[#070B0A]/90 border border-[#1E2522]">
                <span className="text-[11px] font-mono-accent text-gray-400 block mb-1 uppercase tracking-wider">
                  Key Metrics & Impact
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono-accent font-bold text-[#5ed29c]">
                  {project.metrics.map((m, i) => (
                    <span key={i} className="bg-[#5ed29c]/10 px-2.5 py-1 rounded-md border border-[#5ed29c]/25">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono-accent text-gray-400 bg-white/5 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setActiveModalProject(project);
                }}
                className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  project.buttonType === 'filled'
                    ? 'bg-[#5ed29c] text-[#070B0A] shadow-md shadow-[#5ed29c]/20 hover:bg-[#4bc089]'
                    : 'border border-[#5ed29c] text-white hover:bg-[#5ed29c]/15'
                }`}
              >
                {project.buttonText} <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail Viewer */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl liquid-glass-card rounded-3xl p-8 border border-[#5ed29c]/35 z-10 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full text-xs font-mono-accent font-semibold bg-[#5ed29c]/10 text-[#5ed29c] border border-[#5ed29c]/30 mb-3 inline-block">
                {activeModalProject.tag}
              </span>

              <h3 className="text-3xl font-extrabold text-white mb-4">
                {activeModalProject.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {activeModalProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono-accent text-gray-400 font-bold mb-2">
                  Impact & Results
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.metrics.map((m, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[#5ed29c]/10 text-[#5ed29c] text-sm font-mono-accent font-bold border border-[#5ed29c]/25 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-[#5ed29c]" /> {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-[#1E2522]">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#5ed29c] text-[#070B0A] font-bold text-sm uppercase"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
