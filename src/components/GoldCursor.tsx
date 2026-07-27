import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GoldCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Glowing Dot (#5ed29c) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#5ed29c] rounded-full pointer-events-none z-50 shadow-[0_0_14px_#5ed29c]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />
      {/* Outer Ring Glow (#5ed29c) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#5ed29c]/60 rounded-full pointer-events-none z-50 shadow-[0_0_22px_rgba(94,210,156,0.4)]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    </>
  );
};
