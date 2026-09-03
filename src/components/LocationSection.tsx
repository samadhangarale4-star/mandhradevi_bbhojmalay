import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CulturalMotifDivider } from './CulturalMotif';

interface LocationSectionProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onCallClick,
  onWhatsAppClick,
}) => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Satara,+Maharashtra', '_blank');
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60">
            स्थानिक सातारकरांसाठी • प्रवासी भाविकांसाठी
          </span>
          <h2
            id="location-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “आम्हाला भेट द्या”
          </h2>
          <CulturalMotifDivider />
          <p className="text-sm sm:text-base text-[#5C534D] mt-2">
            साताऱ्यात आपले सहकुटुंब सहर्ष स्वागत आहे. अस्सल महाराष्ट्रीय चवीची मेजवानी घेण्यासाठी आजच पधारा.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8E2D9] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-[#F27D26] uppercase tracking-widest">
                  पारंपरिक भोजनालय
                </span>
                <h3 className="font-marathi-heading text-2xl sm:text-3xl font-bold text-[#2D241E] mt-1">
                  {RESTAURANT_INFO.nameMr}
                </h3>
                <p className="text-xs text-[#5C534D] mt-0.5">
                  {RESTAURANT_INFO.nameEn}
                </p>
              </div>

              {/* Exact Location Placeholders (Strictly no invented info) */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E2D9]">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#8A8077] uppercase">
                      पत्ता:
                    </h4>
                    <p className="font-semibold text-sm sm:text-base text-[#2D241E] mt-0.5">
                      सातारा, महाराष्ट्र
                    </p>
                    <p className="text-xs text-[#F27D26] font-mono mt-0.5 bg-orange-50/80 border border-orange-100/60 px-2 py-0.5 rounded-md inline-block">
                      {RESTAURANT_INFO.addressPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E2D9]">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#8A8077] uppercase">
                      उघडण्याची वेळ:
                    </h4>
                    <p className="font-semibold text-sm sm:text-base text-[#2D241E] mt-0.5">
                      दुपार व रात्रीचे जेवण
                    </p>
                    <p className="text-xs text-[#F27D26] font-mono mt-0.5 bg-orange-50/80 border border-orange-100/60 px-2 py-0.5 rounded-md inline-block">
                      {RESTAURANT_INFO.timingPlaceholder}
                    </p>
                  </div>
                </div>
              </div>

              {/* Helpful local guidance note */}
              <div className="p-3.5 bg-[#F4F8F5] rounded-2xl border border-[#D5E5DA] text-xs text-[#215E3E] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#2D6A4F]" />
                <span>
                  साताऱ्यात स्थानिक नागरिकांसाठी तसेच मांढरादेवी देवस्थान व महाबळेश्वर मार्गाने जाणाऱ्या प्रवाशांसाठी सोयीचे भोजनालय.
                </span>
              </div>
            </div>

            {/* Three Large Action Buttons (Touch Friendly) */}
            <div className="space-y-3 pt-4 border-t border-[#E8E2D9]">
              <button
                onClick={handleDirections}
                id="location-directions-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#d96c1e] text-white py-3.5 px-4 rounded-full text-base font-bold shadow-md active:scale-98 transition-all"
              >
                <Navigation className="w-5 h-5" />
                <span>📍 दिशा मिळवा (Google Maps)</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={onCallClick}
                  id="location-call-btn"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#2D241E] border border-[#E8E2D9] py-3 px-3 rounded-full text-sm font-bold active:scale-98 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#F27D26]" />
                  <span>📞 कॉल करा</span>
                </button>

                <button
                  onClick={onWhatsAppClick}
                  id="location-whatsapp-btn"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-3 rounded-full text-sm font-bold shadow-xs active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>💬 WhatsApp करा</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-[32px] overflow-hidden border border-[#E8E2D9] shadow-xl relative flex flex-col min-h-[360px] lg:min-h-full">
            {/* Map styling header strip */}
            <div className="bg-[#FDFBF7] px-6 py-3.5 border-b border-[#E8E2D9] flex items-center justify-between text-xs text-[#5C534D]">
              <span className="font-bold flex items-center gap-1.5 text-[#2D241E]">
                <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
                सातारा शहर व परिसर नकाशा
              </span>
              <span className="bg-[#E8E2D9]/70 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#2D241E]">
                महाराष्ट्र • Satara
              </span>
            </div>

            {/* Visual interactive map frame */}
            <div className="relative flex-1 bg-[#F2EDE4] min-h-[300px] flex items-center justify-center overflow-hidden p-6">
              {/* Stylized schematic background representing Satara streets & landmarks */}
              <div className="absolute inset-0 opacity-40">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8BCAE" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Road paths */}
                  <path d="M 0 120 Q 200 150 400 100 T 800 200" fill="none" stroke="#D5C5B5" strokeWidth="12" />
                  <path d="M 150 0 Q 180 200 300 400" fill="none" stroke="#D5C5B5" strokeWidth="8" />
                  <path d="M 350 0 L 350 400" fill="none" stroke="#F27D26" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>

              {/* Center Landmark Marker Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-[28px] shadow-2xl border border-[#E8E2D9] max-w-sm text-center">
                <div className="w-12 h-12 rounded-full bg-[#F27D26] text-white flex items-center justify-center mx-auto mb-3 shadow-md animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-marathi-heading font-bold text-lg text-[#2D241E]">
                  मांढरादेवी भोजनालय
                </h4>
                <p className="text-xs text-[#5C534D] mt-1 font-mono">
                  {RESTAURANT_INFO.addressPlaceholder}
                </p>
                <p className="text-xs text-[#8A8077] mt-0.5">
                  सातारा, महाराष्ट्र
                </p>

                <div className="mt-4 pt-3 border-t border-[#E8E2D9] flex justify-center">
                  <button
                    onClick={handleDirections}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F27D26] hover:underline"
                  >
                    <span>गुगल मॅपवर दिशा पहा</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom overlay helper */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] text-[#5C534D] border border-[#E8E2D9] shadow-xs">
                नकाशा पूर्वावलोकन (सातारा)
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
