import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

interface MobileActionBarProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  onCallClick,
  onWhatsAppClick,
}) => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Satara,+Maharashtra', '_blank');
  };

  return (
    <div
      id="mobile-sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#E8E2D9] py-2 px-3 sm:hidden shadow-xl pb-safe"
      aria-label="जलद संपर्क साधने"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call */}
        <button
          onClick={onCallClick}
          id="mobile-action-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-orange-50 border border-orange-100/80 text-[#F27D26] active:bg-orange-100 transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5 text-[#F27D26]" />
          <span className="text-xs font-bold leading-tight">कॉल</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={onWhatsAppClick}
          id="mobile-action-whatsapp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#E8F8EE] border border-green-100 text-[#1E7D46] active:bg-[#D2F2DC] transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 text-[#25D366]" />
          <span className="text-xs font-bold leading-tight">WhatsApp</span>
        </button>

        {/* Directions */}
        <button
          onClick={handleDirections}
          id="mobile-action-directions"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#2D241E] text-white active:bg-black transition-colors"
        >
          <Navigation className="w-5 h-5 mb-0.5 text-[#F27D26]" />
          <span className="text-xs font-bold leading-tight">दिशा</span>
        </button>
      </div>
    </div>
  );
};
