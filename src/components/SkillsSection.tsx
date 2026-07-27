import React from 'react';
import { motion } from 'framer-motion';
import { Target, Wrench, Users, DollarSign } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Consulting & Strategy',
    icon: Target,
    skills: [
      'Business Analysis',
      'Management Consulting',
      'Strategic Planning',
      'Case Study Analysis',
      'Market Research',
      'Process Improvement',
    ],
  },
  {
    category: 'Operations & Finance',
    icon: DollarSign,
    skills: [
      'Operations Management',
      'Financial Modelling',
      'Financial Analysis',
      'Business Development',
      'Supply Chain Basics',
      'Banking & Insurance',
    ],
  },
  {
    category: 'Tools & Analytical',
    icon: Wrench,
    skills: [
      'Microsoft Excel',
      'Data Analysis',
      'Canva',
      'PowerPoint',
      'SWOT',
      'PESTLE',
      "Porter's Five Forces",
    ],
  },
  {
    category: 'Interpersonal Competencies',
    icon: Users,
    skills: [
      'Leadership',
      'Communication',
      'Negotiation',
      'Problem Solving',
      'Stakeholder Management',
      'Coachability',
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight inline-block relative">
          CORE <span className="font-serif-italic font-normal text-5xl sm:text-6xl text-[#5ed29c]">Analytical</span> SKILLS<span className="text-[#5ed29c]">.</span>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#5ed29c] to-transparent mt-2" />
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Official skill categories from professional BBA & Consulting resume.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="space-y-10">
        {skillGroups.map((group, groupIdx) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="liquid-glass-card p-8 rounded-3xl border border-[#5ed29c]/20"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E2522]">
                <div className="p-2.5 rounded-xl bg-[#5ed29c]/10 text-[#5ed29c] border border-[#5ed29c]/30">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {group.category}
                </h3>
              </div>

              {/* Animated Skill Pills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="px-4 py-2.5 rounded-xl bg-[#111614] border border-[#5ed29c]/25 text-white text-sm sm:text-base font-medium transition-all shadow-sm hover:border-[#5ed29c] hover:shadow-[0_0_15px_rgba(94,210,156,0.35)] hover:text-[#5ed29c] cursor-pointer"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
