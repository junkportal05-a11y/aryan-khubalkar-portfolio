import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock, Calendar } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  hours?: string;
  date: string;
  type?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Certificate Programme in Banking, Finance & Insurance (CPBFI)',
    issuer: 'Bajaj Finserv Limited',
    hours: '120 Hours',
    date: 'Dec 2025',
    type: 'Professional Accreditation',
  },
  {
    id: 2,
    title: 'CPBFI HR Workshop Completion',
    issuer: 'Bajaj Finserv Limited',
    date: 'Dec 2025',
    type: 'Leadership & HR Workshop',
  },
  {
    id: 3,
    title: 'Fundamentals of Bancassurance (Manzil)',
    issuer: 'KnowLens',
    date: 'Jan 2026',
    type: 'Banking & Financial Services',
  },
  {
    id: 4,
    title: 'Insurance Selling (The Leap Year)',
    issuer: 'KnowLens',
    date: 'Jan 2026',
    type: 'Sales & Client Acquisition',
  },
  {
    id: 5,
    title: 'Selling Skills (The Birth of a Salesman)',
    issuer: 'KnowLens',
    date: 'Jan 2026',
    type: 'Commercial Negotiation',
  },
  {
    id: 6,
    title: 'Toastmasters Icebreaker Speech',
    issuer: 'Emerald Toastmasters Club, G H Raisoni College',
    date: 'Jan 2025',
    type: 'Certificate of Appreciation',
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight inline-block relative">
          VERIFIED <span className="font-serif-italic font-normal text-5xl sm:text-6xl text-[#5ed29c]">Accreditations</span> CERTIFICATIONS<span className="text-[#5ed29c]">.</span>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#5ed29c] to-transparent mt-2" />
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Industry certifications from Bajaj Finserv Limited, KnowLens, and Toastmasters.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="liquid-glass-card rounded-2xl p-6 border-t-4 border-t-[#5ed29c] border-x border-b border-[#5ed29c]/20 flex flex-col justify-between hover:border-[#5ed29c]/50 transition-all relative overflow-hidden group"
          >
            {/* Top Bar Icon & Issuer */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#5ed29c]/10 text-[#5ed29c] border border-[#5ed29c]/30 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono-accent text-[#5ed29c] bg-[#5ed29c]/10 px-2.5 py-1 rounded-full border border-[#5ed29c]/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#5ed29c] transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-xs font-medium mb-4 font-mono-accent">
                {cert.issuer}
              </p>
            </div>

            {/* Metadata Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1E2522] text-xs text-gray-400 font-mono-accent">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#5ed29c]" /> {cert.date}
              </div>
              {cert.hours && (
                <div className="flex items-center gap-1 text-[#5ed29c] font-semibold">
                  <Clock className="w-3.5 h-3.5" /> {cert.hours}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
