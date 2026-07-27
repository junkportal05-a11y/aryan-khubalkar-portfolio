import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Award, Users, Calendar, TrendingUp, GraduationCap, Globe } from 'lucide-react';
import * as THREE from 'three';

export const AboutSection: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x5ed29c, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x5ed29c, 2.2);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // 3D Emerald Wireframe Box
    const geometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
    const material = new THREE.MeshStandardMaterial({
      color: 0x5ed29c,
      wireframe: true,
      emissive: 0x22553b,
      emissiveIntensity: 0.5,
      metalness: 0.9,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.015;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12">
        
        {/* Left Column: Bio & Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-3/5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5ed29c]/10 border border-[#5ed29c]/30 text-[#5ed29c] text-xs font-semibold uppercase tracking-wider mb-4 font-mono-accent">
            <User className="w-3.5 h-3.5" /> Objective & Profile
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Structured Analytical<span className="text-[#5ed29c]">.</span> <span className="font-serif-italic text-5xl text-[#5ed29c] font-normal">Commercial</span> Awareness<span className="text-[#5ed29c]">.</span>
          </h2>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 font-light">
            Final-year BBA student targeting a <strong className="text-white font-semibold">Business Consulting or Strategy internship</strong> where I can apply structured analytical thinking, case-study methodology, and commercial awareness to deliver real client value. Proven track record of leading large-scale initiatives, self-initiating consulting-grade research, and building financial models — while still in the classroom.
          </p>

          {/* Education Box */}
          <div className="liquid-glass-card p-5 rounded-2xl mb-8 border border-[#5ed29c]/25">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-[#5ed29c]/10 text-[#5ed29c]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">G H Raisoni Skilltech University</h3>
                <span className="text-xs text-[#5ed29c] font-mono-accent font-semibold">
                  Bachelor of Business Administration (BBA) · Sep 2024 – Jun 2027 (Expected)
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-300 font-light mt-2 leading-relaxed">
              <strong>Relevant Focus:</strong> Business Strategy, Operations Management, Consulting, Market Research & Financial Analysis · <strong>Campus Leadership:</strong> President of two student organisations simultaneously.
            </p>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#1E2522]">
            {[
              { value: '145%', label: 'Projected ROI', icon: TrendingUp },
              { value: '3,000+', label: 'Students Reached', icon: Users },
              { value: '25+', label: 'Events Led', icon: Calendar },
              { value: '5+', label: 'Certifications', icon: Award },
            ].map((stat, idx) => (
              <div key={idx} className="liquid-glass-card p-4 rounded-xl text-left">
                <stat.icon className="w-4 h-4 text-[#5ed29c] mb-2" />
                <div className="text-2xl sm:text-3xl font-black text-[#5ed29c] font-mono-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Languages & 3D Interactive Emerald Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/5 flex flex-col justify-between"
        >
          <div className="liquid-glass-card p-6 rounded-3xl mb-6 relative flex items-center justify-center">
            <div ref={canvasRef} className="w-[280px] h-[280px]" />
          </div>

          {/* Languages Section from Resume */}
          <div className="liquid-glass-card p-6 rounded-3xl border border-[#5ed29c]/25">
            <div className="flex items-center gap-2 text-[#5ed29c] font-mono-accent font-bold text-xs uppercase mb-3">
              <Globe className="w-4 h-4" /> Languages
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center text-gray-200">
                <span className="font-semibold text-white">English</span>
                <span className="text-xs text-[#5ed29c] font-mono-accent">Professional Working</span>
              </div>
              <div className="flex justify-between items-center text-gray-200 pt-2 border-t border-[#1E2522]">
                <span className="font-semibold text-white">Hindi</span>
                <span className="text-xs text-[#5ed29c] font-mono-accent">Native / Bilingual</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
