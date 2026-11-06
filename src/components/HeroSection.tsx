export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[700px] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden z-10">
      <div className="max-w-[680px] mx-auto text-center">
        
        {/* Headline with gradient */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 gradient-text">
          Strategic Advisory &<br />
          Business Consulting
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-base text-[#AAAAAA] mb-8 max-w-[680px] mx-auto leading-relaxed">
          Strategic advisory, operational analysis, and venture execution for strategy leads, executive recruiters, startup founders, and venture investors.
        </p>
        
        {/* CTA Buttons - using regular anchors with inline styles for hover */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-[680px] mx-auto">
          {/* Primary CTA - solid */}
          <a
            href="#contact"
            className="px-3 py-2 rounded-full bg-[#5ed29c] text-[#070B0A] font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#4bc089] transition-colors cursor-pointer"
          >
            Schedule a strategy call
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          
          {/* Secondary CTA - ghost */}
          <a
            href="#contact"
            className="px-3 py-2 rounded-full border border-white/[0.08] text-white font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-white/[0.1] transition-colors cursor-pointer"
          >
            Inquire for consulting
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Proof signal - verified metrics */}
        <div className="mt-12 max-w-[680px] mx-auto grid grid-cols-2 gap-4">
          <div className="py-2 px-4 rounded-xl bg-[#111614] border border-white/[0.08]">
            <span className="text-[#5ed29c] font-medium">15+</span>
            <span className="text-base">Active Projects</span>
          </div>
          <div className="py-2 px-4 rounded-xl bg-[#111614] border border-white/[0.08]">
            <span className="text-[#5ed29c] font-medium">5yr</span>
            <span className="text-base">Industry Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};