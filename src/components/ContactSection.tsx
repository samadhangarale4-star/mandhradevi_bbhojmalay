import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CulturalMotifDivider } from './CulturalMotif';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('कृपया आपले नाव आणि मोबाईल नंबर भरा.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60">
            थेट संपर्क • सातारकर सेवा
          </span>
          <h2
            id="contact-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “आमच्याशी संपर्क साधा”
          </h2>
          <CulturalMotifDivider />
          <p className="text-sm sm:text-base text-[#5C534D] mt-2">
            भोजनालयाविषयी विचारणा करण्यासाठी किंवा आपल्या कुटुंबाच्या आगमनाबाबत माहिती देण्यासाठी खालील संपर्क वापरा.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Official Contact Details with strict placeholders */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8E2D9] shadow-xl space-y-6">
            <h3 className="font-marathi-heading font-bold text-xl sm:text-2xl text-[#2D241E]">
              संपर्क माहिती
            </h3>
            <p className="text-sm text-[#5C534D] leading-relaxed">
              आपल्या सेवेसाठी मांढरादेवी भोजनालय नेहमी तत्पर आहे. अधिक माहितीसाठी खालील अधिकृत तपशील पहा:
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E2D9]">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#8A8077] uppercase">
                    फोन:
                  </h4>
                  <p className="font-semibold text-sm sm:text-base text-[#2D241E] font-mono mt-0.5">
                    {RESTAURANT_INFO.phonePlaceholder}
                  </p>
                  <span className="text-[11px] text-[#5C534D]">कॉल करून चौकशी करू शकता</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E2D9]">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#8A8077] uppercase">
                    पत्ता:
                  </h4>
                  <p className="font-semibold text-sm sm:text-base text-[#2D241E] font-mono mt-0.5">
                    {RESTAURANT_INFO.addressPlaceholder}
                  </p>
                  <span className="text-[11px] text-[#5C534D]">सातारा, महाराष्ट्र</span>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E2D9]">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#8A8077] uppercase">
                    वेळ:
                  </h4>
                  <p className="font-semibold text-sm sm:text-base text-[#2D241E] font-mono mt-0.5">
                    {RESTAURANT_INFO.timingPlaceholder}
                  </p>
                  <span className="text-[11px] text-[#5C534D]">दुपार व संध्याकाळची सेवा</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E2D9]">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#8A8077] uppercase">
                    WhatsApp:
                  </h4>
                  <p className="font-semibold text-sm sm:text-base text-[#2D241E] font-mono mt-0.5">
                    {RESTAURANT_INFO.whatsappPlaceholder}
                  </p>
                  <span className="text-[11px] text-[#5C534D]">व्हॉट्सॲपवर विचारणा उपलब्ध</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8E2D9] shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EBF4EE] text-[#2D6A4F] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-marathi-heading font-bold text-2xl text-[#2D241E]">
                  आपला संदेश प्राप्त झाला!
                </h3>
                <p className="text-sm sm:text-base text-[#5C534D] max-w-md mx-auto">
                  धन्यवाद {formData.name}! मांढरादेवी भोजनालय लवकरच आपल्याशी दिलेल्या मोबाईल नंबरवर ({formData.phone}) संपर्क साधेल.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 inline-flex items-center gap-2 bg-[#F27D26] hover:bg-[#d96c1e] text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all active:scale-98"
                >
                  दुसरा संदेश पाठवा
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="restaurant-contact-form">
                <div>
                  <h3 className="font-marathi-heading font-bold text-xl sm:text-2xl text-[#2D241E]">
                    आम्हाला थेट संदेश पाठवा
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C534D] mt-1">
                    आपला प्रश्न किंवा अभिप्राय खालील फॉर्ममध्ये नोंदवा.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-2xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* नाव */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-bold text-[#2D241E] mb-1.5">
                    नाव <span className="text-[#F27D26]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="उदा. रमेश पाटील"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-sm text-[#2D241E] placeholder-[#8A8077] focus:outline-none focus:border-[#F27D26] focus:bg-white transition-all shadow-xs"
                  />
                </div>

                {/* मोबाईल नंबर */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs sm:text-sm font-bold text-[#2D241E] mb-1.5">
                    मोबाईल नंबर <span className="text-[#F27D26]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="उदा. 98XXXXXXXX"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-sm text-[#2D241E] placeholder-[#8A8077] focus:outline-none focus:border-[#F27D26] focus:bg-white transition-all shadow-xs"
                  />
                </div>

                {/* संदेश */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs sm:text-sm font-bold text-[#2D241E] mb-1.5">
                    संदेश
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="आपला संदेश, कौटुंबिक जेवणाची चौकशी किंवा इतर विचारणा येथे लिहा..."
                    className="w-full px-4 py-3 rounded-2xl border border-[#E8E2D9] bg-[#FDFBF7] text-sm text-[#2D241E] placeholder-[#8A8077] focus:outline-none focus:border-[#F27D26] focus:bg-white transition-all resize-none shadow-xs"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#d96c1e] text-white py-4 px-6 rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>संदेश पाठवा</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
