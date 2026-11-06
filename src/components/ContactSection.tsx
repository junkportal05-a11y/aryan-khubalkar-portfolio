import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-24 px-6 max-w-[680px] mx-auto z-10 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          LET'S <span className="font-serif-italic font-normal text-5xl sm:text-6xl text-[#5ed29c]">Connect</span><span className="text-[#5ed29c]">.</span>
        </h2>
        <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Open to internships in <strong className="text-[#5ed29c]">Business Consulting, Strategy & Business Analysis</strong>. Based in Nagpur — available remote & pan-India.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.08] shadow-2xl relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:aryankhubalkar01@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111614] border border-[#5ed29c]/25 hover:border-[#5ed29c] transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#5ed29c]/10 text-[#5ed29c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono-accent block">Email</span>
                  <span className="text-white font-medium text-sm sm:text-base group-hover:text-[#5ed29c] transition-colors">
                    aryankhubalkar01@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+917588620507"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111614] border border-[#5ed29c]/25 hover:border-[#5ed29c] transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#5ed29c]/10 text-[#5ed29c]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono-accent block">Phone</span>
                  <span className="text-white font-medium text-sm sm:text-base group-hover:text-[#5ed29c] transition-colors">
                    +91 7588620507
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/aryan-khubalkar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111614] border border-[#5ed29c]/25 hover:border-[#5ed29c] transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#5ed29c]/10 text-[#5ed29c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono-accent block">LinkedIn</span>
                  <span className="text-white font-medium text-sm sm:text-base group-hover:text-[#5ed29c] transition-colors">
                    linkedin.com/in/aryan-khubalkar
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111614] border border-[#5ed29c]/25">
                <div className="p-3 rounded-lg bg-[#5ed29c]/10 text-[#5ed29c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono-accent block">Location</span>
                  <span className="text-white font-medium text-sm sm:text-base">
                    Nagpur, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 bg-[#070B0A] rounded-2xl border border-white/[0.08] p-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#5ed29c]/20 text-[#5ed29c] flex items-center justify-center mx-auto mb-4 border border-[#5ed29c]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300 text-sm">
                  Thank you for getting in touch, Aryan will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-mono-accent tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#5ed29c]" /> Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111614] border border-[#5ed29c]/35 text-white placeholder-gray-500 focus:outline-none focus:border-[#5ed29c] focus:ring-1 focus:ring-[#5ed29c] transition-all font-mono-accent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono-accent tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#5ed29c]" /> Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111614] border border-[#5ed29c]/35 text-white placeholder-gray-500 focus:outline-none focus:border-[#5ed29c] focus:ring-1 focus:ring-[#5ed29c] transition-all font-mono-accent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono-accent tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#5ed29c]" /> Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can Aryan assist with strategy or business consulting?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111614] border border-[#5ed29c]/35 text-white placeholder-gray-500 focus:outline-none focus:border-[#5ed29c] focus:ring-1 focus:ring-[#5ed29c] transition-all font-mono-accent text-sm resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#5ed29c] text-[#070B0A] font-bold text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#5ed29c]/25 hover:bg-[#4bc089] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Message
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </motion.div>
    </section>
  );
};