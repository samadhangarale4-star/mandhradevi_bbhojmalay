import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, Check, Copy, AlertCircle, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  dishName?: string;
  isTableInquiry?: boolean;
}

export const OrderInquiryModal: React.FC<OrderInquiryModalProps> = ({
  isOpen,
  onClose,
  dishName,
  isTableInquiry = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [customerNote, setCustomerNote] = useState('');

  if (!isOpen) return null;

  const inquiryTitle = isTableInquiry
    ? 'कौटुंबिक टेबल / जेवणासाठी संपर्क'
    : dishName
    ? `${dishName} - ऑर्डर व चौकशी`
    : 'मांढरादेवी भोजनालय - थेट संपर्क';

  const defaultMessage = isTableInquiry
    ? `नमस्कार मांढरादेवी भोजनालय, आम्हाला कुटुंबासोबत जेवणासाठी यायचे आहे. आजची सोय आणि वेळेबाबत माहिती हवी आहे.${customerNote ? ` (टीप: ${customerNote})` : ''}`
    : `नमस्कार मांढरादेवी भोजनालय, मला '${dishName || 'महाराष्ट्रीय जेवण'}' बद्दल आणि आजच्या उपलब्धतेबाबत चौकशी करायची आहे.${customerNote ? ` (टीप: ${customerNote})` : ''}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(defaultMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCall = () => {
    // Prompt states: phone is placeholder [फोन नंबर], provide user-friendly direct feedback
    window.location.href = `tel:${RESTAURANT_INFO.phonePlaceholder}`;
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8E2D9] relative space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#8A8077] hover:text-[#2D241E] p-2 rounded-full hover:bg-[#FDFBF7] transition-colors"
            aria-label="खिडकी बंद करा"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-3.5 pr-8">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F27D26] flex items-center justify-center shrink-0 border border-orange-100/80">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-marathi-heading font-bold text-xl sm:text-2xl text-[#2D241E] leading-tight">
                {inquiryTitle}
              </h3>
              <p className="text-xs text-[#5C534D] mt-1">
                {RESTAURANT_INFO.nameMr} • {RESTAURANT_INFO.locationShort}
              </p>
            </div>
          </div>

          {/* Authentic Bhojanalay Note */}
          <div className="p-4 bg-[#FDFBF7] rounded-2xl border border-[#E8E2D9] text-xs text-[#5C534D] leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
            <span>
              आमच्या भोजनालयात दररोज ताजे अन्न मर्यादित प्रमाणात व प्रेमाने तयार केले जाते. योग्य माहिती व बुकिंगसाठी थेट फोन किंवा WhatsApp वर संपर्क साधावा.
            </span>
          </div>

          {/* Message Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#2D241E]">
              <span>तयार मराठी संदेश (व्हॉट्सॲप / एसएमएससाठी):</span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[#F27D26] hover:underline font-bold"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'कॉपी झाले!' : 'कॉपी करा'}</span>
              </button>
            </div>
            
            <div className="p-3.5 rounded-2xl bg-[#F8F5EE] border border-[#E8E2D9] text-xs sm:text-sm text-[#2D241E] font-marathi leading-relaxed select-all">
              {defaultMessage}
            </div>

            <input
              type="text"
              value={customerNote}
              onChange={(e) => setCustomerNote(e.target.value)}
              placeholder="आपली काही विशेष विनंती असल्यास येथे लिहा (उदा. ४ व्यक्तींसाठी, कमी तिखट)..."
              className="w-full mt-2 px-4 py-2.5 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-xs text-[#2D241E] focus:outline-none focus:border-[#F27D26] shadow-xs"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-4 rounded-full text-sm font-bold shadow-xs transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp वर थेट संदेश पाठवा</span>
            </button>

            <button
              onClick={handleCall}
              className="w-full flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#d96c1e] text-white py-3.5 px-4 rounded-full text-sm font-bold shadow-md transition-all active:scale-98"
            >
              <Phone className="w-4 h-4" />
              <span>थेट कॉल करा ({RESTAURANT_INFO.phonePlaceholder})</span>
            </button>
          </div>

          <div className="text-center pt-1">
            <button
              onClick={onClose}
              className="text-xs text-[#8A8077] hover:text-[#2D241E] hover:underline"
            >
              मागे फिरा
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
