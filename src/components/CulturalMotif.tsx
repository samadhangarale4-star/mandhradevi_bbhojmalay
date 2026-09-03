import React from 'react';

export const CulturalMotifDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`} aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-[#F27D26]/40 to-[#F27D26]/80 w-16 md:w-28" />
      <div className="flex items-center gap-1.5 text-[#F27D26]">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
        <svg className="w-4 h-4 text-[#F27D26]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
      </div>
      <div className="h-px bg-gradient-to-l from-transparent via-[#F27D26]/40 to-[#F27D26]/80 w-16 md:w-28" />
    </div>
  );
};

export const CulturalBorderCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const classes = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2 rotate-90',
    'bottom-left': 'bottom-2 left-2 -rotate-90',
    'bottom-right': 'bottom-2 right-2 rotate-180',
  }[position];

  return (
    <div className={`absolute ${classes} w-6 h-6 pointer-events-none opacity-30 text-[#F27D26]`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12V2H12" />
        <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};
