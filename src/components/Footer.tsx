import React from 'react';
import { Phone, MapPin, MessageSquare, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCallClick, onWhatsAppClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2D241E] text-[#E8E2D9] pt-16 pb-24 sm:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F27D26] flex items-center justify-center text-white font-marathi-heading font-bold text-lg shadow-sm">
                मां
              </div>
              <div>
                <h3 className="font-marathi-heading text-2xl font-bold text-white tracking-tight">
                  {RESTAURANT_INFO.nameMr}
                </h3>
                <p className="text-xs text-[#E8E2D9]/60 uppercase tracking-wider font-semibold">
                  {RESTAURANT_INFO.nameEn}
                </p>
              </div>
            </div>

            <p className="font-marathi-heading text-lg text-[#F27D26] font-semibold">
              “{RESTAURANT_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-[#E8E2D9]/70 leading-relaxed max-w-sm">
              अस्सल महाराष्ट्रीय पद्धतीचे शुद्ध व सात्विक जेवण. घरगुती चव आणि मनापासून केलेली आपुलकीची सेवा हेच आमचे ब्रीदवाक्य आहे.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-marathi-heading font-bold text-base text-white tracking-wide border-b border-white/10 pb-2">
              महत्त्वाच्या लिंक्स
            </h4>
            <ul className="space-y-2 text-sm text-[#E8E2D9]/80">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-[#F27D26] transition-colors"
                >
                  मुख्यपृष्ठ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#F27D26] transition-colors"
                >
                  आमच्याबद्दल
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('menu')}
                  className="hover:text-[#F27D26] transition-colors"
                >
                  मेनू
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-[#F27D26] transition-colors"
                >
                  फोटो गॅलरी
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('reviews')}
                  className="hover:text-[#F27D26] transition-colors"
                >
                  अभिप्राय
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-[#F27D26] transition-colors"
                >
                  संपर्क
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details with Placeholders */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-marathi-heading font-bold text-base text-white tracking-wide border-b border-white/10 pb-2">
              संपर्क माहिती
            </h4>
            <ul className="space-y-3 text-sm text-[#E8E2D9]/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F27D26] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-white/50 block">फोन:</span>
                  <button
                    onClick={onCallClick}
                    className="font-mono text-white hover:text-[#F27D26] text-sm font-semibold"
                  >
                    {RESTAURANT_INFO.phonePlaceholder}
                  </button>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F27D26] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-white/50 block">पत्ता:</span>
                  <span className="text-xs text-[#E8E2D9]/80">
                    सातारा, महाराष्ट्र • {RESTAURANT_INFO.addressPlaceholder}
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-[#F27D26] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-white/50 block">WhatsApp:</span>
                  <button
                    onClick={onWhatsAppClick}
                    className="font-mono text-white hover:text-[#F27D26] text-sm font-semibold"
                  >
                    {RESTAURANT_INFO.whatsappPlaceholder}
                  </button>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 text-center sm:text-left">
          <p>
            © 2026 मांढरादेवी भोजनालय. सर्व हक्क राखीव.
          </p>
          <div className="flex items-center gap-1.5">
            <span>साताऱ्याच्या मातीतली अस्सल चव</span>
            <Heart className="w-3.5 h-3.5 text-[#F27D26] fill-[#F27D26]" />
            <span>घरगुती आपुलकी</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
