import React from 'react';
import { motion } from 'motion/react';
import { Utensils, MapPin, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CulturalMotifDivider } from './CulturalMotif';

interface HeroProps {
  onCallClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCallClick }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FDFBF7]"
    >
      {/* Subtle traditional backdrop texture & gentle warm lighting */}
      <div className="absolute inset-0 opacity-15 pointer-events-none warli-pattern" aria-hidden="true" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3A5A40]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Marathi Hero Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left z-10"
          >
            {/* Top Cultural Badge */}
            <div className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60 shadow-xs">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
                अस्सल महाराष्ट्रीय चव • सातारा भोजनालय
              </span>
            </div>

            {/* Main Brand Title & Supporting Headline */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#8A8077]">
                  {RESTAURANT_INFO.nameEn} • SATARA
                </span>
              </div>
              <h1
                id="hero-main-title"
                className="font-marathi-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2D241E] tracking-tight leading-[1.1]"
              >
                साताऱ्याच्या मातीतली <br className="hidden sm:inline" />
                <span className="text-[#F27D26] italic font-marathi-serif">अस्सल</span> चव!
              </h1>
              <h2
                id="hero-supporting-title"
                className="font-marathi-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#F27D26] leading-snug"
              >
                “{RESTAURANT_INFO.nameMr} - {RESTAURANT_INFO.tagline}”
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-[#5C534D] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {RESTAURANT_INFO.subTagline}
            </p>

            {/* Traditional Key Dishes Highlights Pill */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#2D241E]">
              <span className="font-bold text-[#F27D26]">खास मेजवानी:</span>
              <span className="flex items-center gap-1 font-medium">• ज्वारीची भाकरी</span>
              <span className="flex items-center gap-1 font-medium">• पिठलं</span>
              <span className="flex items-center gap-1 font-medium">• भरली वांगी</span>
              <span className="flex items-center gap-1 font-medium">• झणझणीत ठेचा</span>
              <span className="flex items-center gap-1 font-medium">• आमटी-भात</span>
              <span className="flex items-center gap-1 font-medium">• गार ताक</span>
            </div>

            {/* CTAs (3 distinct clear actions per Editorial layout) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('menu')}
                id="hero-primary-menu-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#2D241E] hover:bg-[#1a1410] text-white px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-base font-bold shadow-md hover:scale-102 transition-all active:scale-98"
              >
                <span>🍛 मेनू पहा</span>
              </button>

              <button
                onClick={() => scrollToSection('location')}
                id="hero-secondary-location-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-[#E8E2D9] text-[#2D241E] border-2 border-[#E8E2D9] px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-base font-bold transition-all active:scale-98"
              >
                <MapPin className="w-4 h-4 text-[#F27D26]" />
                <span>आम्हाला भेट द्या</span>
              </button>

              <button
                onClick={onCallClick}
                id="hero-tertiary-call-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#2D241E] hover:text-[#F27D26] hover:bg-[#F7F3EB] px-5 py-3.5 rounded-full text-base font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-[#F27D26]" />
                <span>कॉल करा</span>
              </button>
            </div>

            {/* Reassurance tags */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-[#5C534D]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3A5A40]" />
                <span>१००% शुद्ध व सात्विक</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3A5A40]" />
                <span>साताऱ्याची अस्सल चव</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3A5A40]" />
                <span>कौटुंबिक बैठक व्यवस्था</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High Quality Maharashtrian Thali Visual with Editorial Aesthetic Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center p-2 sm:p-6"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer rotated editorial card */}
              <div className="w-full h-[380px] sm:h-[460px] lg:h-[500px] bg-[#E8E2D9] rounded-[40px] relative overflow-hidden shadow-2xl rotate-1 sm:rotate-2 group border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=85"
                  alt="मांढरादेवी भोजनालय - अस्सल महाराष्ट्रीय थाळी जेवण सातारा"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

                {/* Floating Price Tag */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg p-3 sm:p-4 rounded-2xl border border-white/30 text-white flex flex-col items-center z-20 shadow-md">
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-90">थाळी</span>
                  <span className="text-lg sm:text-xl font-black text-white">ताजी</span>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80 text-orange-200">
                    आजचे खास
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold font-marathi-heading mt-0.5">
                    झणझणीत पिठलं-भाकरी थाळी
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    भाकरी, पिठलं, भरली वांगी, झणझणीत ठेचा व गार ताक
                  </p>
                </div>
              </div>

              {/* Circular Stamp / Seal Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-8 w-36 h-36 sm:w-44 sm:h-44 bg-white p-2 rounded-full shadow-xl -rotate-12 border-8 border-[#FDFBF7] z-20 flex items-center justify-center text-center">
                <div>
                  <p className="text-[#F27D26] font-extrabold text-base sm:text-lg leading-tight font-marathi-heading">
                    १००% <br />
                    घरगुती
                  </p>
                  <p className="text-[10px] sm:text-xs font-bold text-[#2D241E] uppercase tracking-wider mt-0.5">
                    अस्सल चव
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
