import React, { useEffect, useRef } from 'react';

export const TaglineRevealSection: React.FC = () => {
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!taglineRef.current) return;

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        const words = taglineRef.current!.textContent!.split(/\s+/);
        const container = taglineRef.current!;
        container.innerHTML = '';
        words.forEach((word, idx) => {
          const span = document.createElement('span');
          span.textContent = word + ' ';
          span.style.opacity = '0.3';
          span.style.transition = `opacity 0.4s ease ${idx * 0.05}s`;
          span.style.cssText = 'display: inline-block;';
          container.appendChild(span);
        });
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.3 });
    observer.observe(taglineRef.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tagline-reveal" className="py-24 px-6 max-w-[680px] mx-auto z-10 relative">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">
          Strategic outcomes for
        </h2>
        <div className="text-[#5ed29c] font-medium text-3xl sm:text-4xl">
          High-impact business strategy & venture execution
        </div>
      </div>
    </section>
  );
};