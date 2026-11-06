export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  diagnosis: string;
  intervention: string;
  impact: string;
  metrics: string[];
  buttonText: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'logistics-hub',
    title: 'Centralized Logistics Hub',
    tagline: 'Nagpur D2C Distribution Optimization',
    problem: 'A Tier-2 D2C electronics client faced escalating supply chain costs and 3-month delivery windows shifting distribution from Mumbai to a new SEZ hub.',
    diagnosis: 'Applied PESTLE and Porter\'s Five Forces analysis across geographic, financial, and operational dimensions. Identified hub location optimization using Hub-and-Spoke modeling.',
    intervention: 'Designed an 8-month transition plan with CapEx of ₹2.2Cr projecting ₹1.45Cr annual savings. Built KPI framework (TAT, CPO, RTO) and risk mitigation plan for executive-board presentation.',
    impact: 'Projected 145% ROI and 18% supply chain cost reduction within Year 2.',
    metrics: ['145% Projected ROI', '18% Cost Reduction', '₹1.45Cr Annual Savings', '8-Month Transition'],
    buttonText: 'View Feasibility Study',
  },
  {
    id: 'kashti-fest',
    title: 'Kashti & PAE Festival Leadership',
    tagline: 'University Flagship Event Operations',
    problem: 'Coordinating 25+ events reaching 2,000-3,000+ students with dispersed vendor teams, sparse budgets, and no centralized logistics framework.',
    diagnosis: 'Built a core team of 15-20 members with defined task checklists, vendor templates, and sponsor outreach systems. Created end-to-end event delivery pipeline from planning to on-ground execution.',
    intervention: 'Managed vendor logistics for 100+ clients, drove 35% engagement growth year-on-year, and standardized sponsor templates reaching 100+ prospective clients.',
    impact: '3,000+ students reached across flagship events; 35% engagement growth; 100+ sponsors contacted.',
    metrics: ['3,000+ Students Reached', '35% Engagement Growth', '100+ Sponsors Contacted', '25+ Events Led'],
    buttonText: 'View Leadership Impact',
  },
  {
    id: 'nagpur-market-study',
    title: 'Tier-2 Market Entry Study',
    tagline: 'Category Strategy & Competitive Positioning',
    problem: 'Limited data on market entry strategies across product categories in Tier-2 Indian cities. No competitive landscape mapping available for local business establishments.',
    diagnosis: 'Conducted field analysis across 10 local business establishments and 3 product categories. Performed SWOT analysis, pricing elasticity assessment, and competitive landscape mapping.',
    intervention: 'Delivered a category-entry framework with operational viability scoring, pricing recommendations, and market positioning strategy for Tier-2 commercial establishments.',
    impact: '3 product categories audited; 10 establishments evaluated; SWOT mapping completed.',
    metrics: ['3 Product Categories', '10 Establishments Audited', 'SWOT Mapping'],
    buttonText: 'View Analysis',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-[680px] mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight inline-block relative">
          Problem-to-Solution <span className="font-serif-italic font-normal text-5xl sm:text-6xl text-[#5ed29c]">Case Studies</span><span className="text-[#5ed29c]">.</span>
          <div className="h-1 w-full bg-[#5ed29c]/20 mt-2" />
        </h2>
        <p className="text-gray-400 text-lg font-light mt-2">
          Outcome-driven consulting case studies following Problem → Diagnosis → Intervention → Quantified Metric Impact.
        </p>
      </div>

      {/* 3 Case Study Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="liquid-glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.12] transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {study.title}
                </h3>
                <p className="text-[#5ed29c] text-sm font-medium">
                  {study.tagline}
                </p>
              </div>
              <div className="p-2 rounded-xl bg-[#111614] border border-white/[0.08]">
                <span className="text-xs font-mono-accent text-[#5ed29c] uppercase tracking-wider">#{study.id}</span>
              </div>
            </div>

            {/* Problem */}
            <div className="mb-4 p-3 rounded-xl bg-[#070B0A]/70 border border-white/[0.08]">
              <p className="text-xs font-mono-accent text-gray-400 uppercase tracking-wider mb-1">
                Problem
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {study.problem}
              </p>
            </div>

            {/* Diagnosis */}
            <div className="mb-4 p-3 rounded-xl bg-[#070B0A]/70 border border-white/[0.08]">
              <p className="text-xs font-mono-accent text-gray-400 uppercase tracking-wider mb-1">
                Diagnosis
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {study.diagnosis}
              </p>
            </div>

            {/* Intervention */}
            <div className="mb-4 p-3 rounded-xl bg-[#070B0A]/70 border border-white/[0.08]">
              <p className="text-xs font-mono-accent text-gray-400 uppercase tracking-wider mb-1">
                Intervention
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {study.intervention}
              </p>
            </div>

            {/* Quantified Metric Impact */}
            <div>
              <p className="text-xs font-mono-accent text-gray-400 uppercase tracking-wider mb-1">
                Impact
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono-accent font-bold text-[#5ed29c]">
                {study.metrics.map((m, i) => (
                  <span key={i} className="bg-[#5ed29c]/10 px-2.5 py-1 rounded-md border border-[#5ed29c]/25">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-white/[0.08]">
              <button
                className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer bg-[#5ed29c] text-[#070B0A] hover:bg-[#4bc089]"
              >
                {study.buttonText} <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};