import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderGit2, Briefcase, Target, Award, Mail } from 'lucide-react';
import { LinkedinIcon } from './Icons';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Target },
  { id: 'certifications', label: 'Certs', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const FloatingDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 px-4 py-3 rounded-full liquid-glass-card border border-[#5ed29c]/30 shadow-2xl backdrop-blur-xl"
      >
        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredIndex === index;

            return (
              <motion.button
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => scrollToSection(item.id)}
                animate={{
                  scale: isHovered ? 1.25 : 1,
                  y: isHovered ? -4 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className={`relative p-2.5 sm:p-3 rounded-full transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#5ed29c] bg-white/10 shadow-inner'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5ed29c] shadow-[0_0_8px_#5ed29c]"
                  />
                )}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-mono-accent font-semibold bg-[#070B0A] text-[#5ed29c] border border-[#5ed29c]/30 whitespace-nowrap shadow-lg pointer-events-none"
                  >
                    {item.label}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="h-5 w-px bg-[#1E2522] mx-1" />

        {/* LinkedIn Quick Link */}
        <a
          href="https://linkedin.com/in/aryan-khubalkar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-gray-400 hover:text-[#5ed29c] hover:bg-white/10 transition-colors"
          title="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
};
