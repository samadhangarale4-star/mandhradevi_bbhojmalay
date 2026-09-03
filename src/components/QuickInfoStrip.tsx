import React from 'react';
import { UtensilsCrossed, MapPin, Users, Heart } from 'lucide-react';

export const QuickInfoStrip: React.FC = () => {
  const items = [
    {
      icon: UtensilsCrossed,
      title: 'अस्सल महाराष्ट्रीय जेवण',
      subtitle: 'पारंपरिक गावरान पद्धत',
      badge: '१००% अस्सल',
    },
    {
      icon: MapPin,
      title: 'सातारा, महाराष्ट्र',
      subtitle: 'स्थानिक सातारकरांची पसंती',
      badge: 'सातारा',
    },
    {
      icon: Users,
      title: 'कुटुंबासाठी योग्य',
      subtitle: 'स्वच्छ व कौटुंबिक वातावरण',
      badge: 'कौटुंबिक',
    },
    {
      icon: Heart,
      title: 'घरगुती चव',
      subtitle: 'आईच्या हातच्या जेवणाची चव',
      badge: 'आपुलकी',
    },
  ];

  return (
    <section
      id="quick-info"
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="महत्त्वाची वैशिष्ट्ये"
    >
      <div className="bg-[#2D241E] text-white rounded-3xl sm:rounded-full shadow-2xl border border-white/10 p-5 sm:p-6 lg:py-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index !== 0 ? 'pt-3 sm:pt-0 lg:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-[#F27D26] flex items-center justify-center shrink-0 border border-white/10">
                  <Icon className="w-5 h-5 text-[#F27D26]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-marathi-heading font-bold text-sm sm:text-base text-white truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/60 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
