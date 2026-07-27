import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  bullets: string[];
}

const experienceData: TimelineItem[] = [
  {
    period: 'Jan 2025 – Present',
    role: 'Business Research Analyst',
    organization: 'Self-Initiated Consulting Project · Nagpur, India',
    bullets: [
      'Produced a 9-slide consulting-grade feasibility study for a Tier-2 D2C electronics client, recommending a logistics hub shift from Mumbai to Nagpur — projecting 145% ROI and 18% supply chain cost reduction within Year 2',
      'Applied Porter\'s Five Forces, PESTLE, and Hub-and-Spoke modelling to evaluate geographic, financial, and operational viability across a phased 8-month transition plan',
      'Delivered a KPI framework (TAT, CPO, RTO, inventory accuracy) and risk mitigation plan presented in executive-board format',
      'Analysed market entry strategies across 3 product categories in Tier-2 Indian cities using SWOT and competitive landscape mapping',
    ],
  },
  {
    period: 'Jan 2025 – Present',
    role: 'President — Culture Forum',
    organization: 'G H Raisoni Skilltech University · Nagpur, India',
    bullets: [
      'Coordinated 25+ events and initiatives reaching 2,000–3,000+ students, managing end-to-end logistics, budgets, and stakeholder communication',
      'Led a core team of 15–20 members across flagship events including Kashti, driving execution from planning through delivery',
      'Drove measurable increase in student engagement and event reach year-on-year through structured planning and team coordination',
    ],
  },
  {
    period: 'Jul 2025 – May 2026',
    role: 'Marketing & Operations Volunteer',
    organization: 'G H Raisoni Skilltech University · Nagpur, India',
    bullets: [
      'Grew social media page engagement by 35% over 8 weeks through structured content planning and audience targeting strategy',
      'Managed a 20+ task operations checklist for college events PAE and Kashti — coordinating vendor, logistics, and on-ground execution',
      'Drafted outreach templates used to contact 100+ prospective clients and sponsors, achieving above-average response rates',
    ],
  },
  {
    period: 'Jun 2025 – Present',
    role: 'President — Arts & Crafts Club',
    organization: 'G H Raisoni Skilltech University · Nagpur, India',
    bullets: [
      'Leading the club for the 2025–26 session with 20+ active members — managing operations, events, and student initiative programmes',
      'Organised 3+ creative workshops and exhibitions, handling end-to-end logistics, budgeting, and cross-team coordination',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto z-10 relative">
      
      {/* Section Heading */}
      <div className="mb-16 border-l-4 border-[#5ed29c] pl-6">
        <span className="text-xs font-mono-accent uppercase tracking-wider text-[#5ed29c] block mb-1">
          Leadership & Professional Experience
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          WORK & <span className="font-serif-italic font-normal text-5xl sm:text-6xl text-[#5ed29c]">Leadership</span> EXPERIENCE<span className="text-[#5ed29c]">.</span>
        </h2>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l-2 border-[#5ed29c]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Emerald Dot Marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#070B0A] border-2 border-[#5ed29c] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#5ed29c] transition-all shadow-[0_0_12px_#5ed29c]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5ed29c] group-hover:bg-[#070B0A]" />
            </div>

            {/* Experience Card */}
            <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 border border-[#5ed29c]/20 hover:border-[#5ed29c]/50 transition-all">
              {/* Period Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5ed29c]/10 border border-[#5ed29c]/25 text-[#5ed29c] text-xs font-mono-accent font-semibold mb-3">
                <Calendar className="w-3.5 h-3.5" /> {item.period}
              </div>

              {/* Role & Org */}
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#5ed29c] transition-colors">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 font-mono-accent">
                <Building2 className="w-4 h-4 text-[#5ed29c]" /> {item.organization}
              </div>

              {/* Bullets List */}
              <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base leading-relaxed font-light bg-[#070B0A]/70 p-5 rounded-xl border border-[#1E2522]">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#5ed29c] font-bold text-base select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
