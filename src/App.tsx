import { LenisProvider } from './components/LenisProvider';
import { ThreeGoldBackground } from './components/ThreeGoldBackground';
import { GoldCursor } from './components/GoldCursor';
import { FloatingDock } from './components/FloatingDock';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[#070B0A] text-white overflow-x-hidden noise-overlay">
        
        {/* Three.js 3D WebGL Background Canvas */}
        <ThreeGoldBackground />

        {/* Cursor Glow Follow */}
        <GoldCursor />

        {/* 3 Thin Vertical Grid Lines (25%, 50%, 75%) across Desktop */}
        <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block">
          <div className="absolute top-0 bottom-0 left-[25%] w-px bg-white/[0.05]" />
          <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/[0.05]" />
          <div className="absolute top-0 bottom-0 left-[75%] w-px bg-white/[0.05]" />
        </div>

        {/* Central Ambient SVG Radial Glow Filter (Cyan/Emerald Hue) */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none z-0 opacity-40 blur-[90px]">
          <div className="w-full h-full bg-gradient-to-b from-[#5ed29c] via-[#BF914A]/40 to-transparent rounded-full" />
        </div>

        {/* Main Single Page Sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Floating Dock Navigation */}
        <FloatingDock />

        {/* Footer */}
        <footer className="relative z-10 py-8 px-6 border-t border-[#1E2522] text-center bg-[#070B0A]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-accent text-xs">
            <div className="text-[#5ed29c] font-bold tracking-wider flex items-center gap-1.5">
              <span>Aryan Khubalkar</span> <span className="text-[#BF914A]">© 2026</span>
            </div>
            <div className="text-gray-400">
              Business Consulting & Strategy Portfolio | G H Raisoni Skilltech University
            </div>
          </div>
        </footer>

      </div>
    </LenisProvider>
  );
}

export default App;
