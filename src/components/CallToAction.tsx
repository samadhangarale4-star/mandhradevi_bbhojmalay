import React from 'react';
import { Phone, Utensils } from 'lucide-react';
import { CulturalMotifDivider } from './CulturalMotif';

interface CallToActionProps {
  onTableInquiry: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onTableInquiry }) => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto bg-[#2D241E] text-white rounded-[40px] p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl border border-white/10 text-center">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10 warli-pattern pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F27D26]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-[#F27D26] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs border border-white/10">
            साताऱ्याचे आपले हक्काचे भोजनालय
          </span>

          <h2
            id="cta-heading"
            className="mt-6 font-marathi-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            “आजच भेट द्या!”
          </h2>

          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px bg-gradient-to-r from-transparent to-[#F27D26] w-20" />
            <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
            <div className="h-px bg-gradient-to-l from-transparent to-[#F27D26] w-20" />
          </div>

          <p className="text-lg sm:text-2xl text-[#E8E2D9] max-w-2xl mx-auto font-medium leading-relaxed">
            “आपल्या कुटुंबासोबत अस्सल महाराष्ट्रीय जेवणाचा आनंद घ्या.”
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToMenu}
              id="cta-menu-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F27D26] hover:bg-[#d96c1e] text-white px-9 py-4 rounded-full text-base font-bold shadow-xl hover:scale-105 transition-all active:scale-98"
            >
              <Utensils className="w-4 h-4" />
              <span>🍛 मेनू पहा</span>
            </button>

            <button
              onClick={onTableInquiry}
              id="cta-table-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white px-9 py-4 rounded-full text-base font-bold transition-all active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#F27D26]" />
              <span>📞 टेबलसाठी संपर्क करा</span>
            </button>
          </div>

          <p className="mt-8 text-xs text-white/60">
            * कौटुंबिक बैठक व्यवस्था व सामूहिक जेवणासाठी संपर्क उपलब्ध
          </p>
        </div>
      </div>
    </section>
  );
};
