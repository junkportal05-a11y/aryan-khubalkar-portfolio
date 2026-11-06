import { LenisProvider } from './components/LenisProvider';
import { HeroSection } from './components/HeroSection';
import { TaglineRevealSection } from './components/TaglineRevealSection';
import { ProjectsSection } from './components/ProjectsSection';
import { MethodologySection } from './components/MethodologySection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTASection } from './components/FinalCTASection';

export function App() {
  return (
    <LenisProvider>
      <main className="relative z-10">
        <HeroSection />
        <TaglineRevealSection />
        <ProjectsSection />
        <MethodologySection />
        <CertificationsSection />
        <ContactSection />
        <FinalCTASection />
      </main>
    </LenisProvider>
  );
}

export default App;