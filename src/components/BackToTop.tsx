import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top-btn"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 p-3.5 rounded-full bg-[#F27D26] text-white shadow-xl hover:bg-[#d96c1e] active:scale-95 transition-all focus:outline-none border border-white/20"
      aria-label="वरती जा"
      title="वरती जा"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
