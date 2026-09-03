import React from 'react';
import { motion } from 'motion/react';
import { CookingPot, Wheat, HeartHandshake } from 'lucide-react';
import { CulturalMotifDivider } from './CulturalMotif';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      id: 'home-taste',
      icon: CookingPot,
      title: 'घरगुती चव',
      quote: 'आईच्या हातच्या जेवणाची आठवण करून देणारी चव.',
      desc: 'मसाल्यांचे अचूक प्रमाण, सात्विक तयारी आणि पारंपरिक चव. हॉटेलसारखे अति-मसालेदार न करता पोटाला शांत वाटेल असे घरगुती अन्न.',
    },
    {
      id: 'fresh-ingredients',
      icon: Wheat,
      title: 'ताजे साहित्य',
      quote: 'दर्जेदार आणि ताज्या साहित्यापासून तयार केलेले पदार्थ.',
      desc: 'गावरान ज्वारी, बाजरी, ताजी कोथिंबीर, गावरान लसूण आणि दर्जेदार शेंगदाणे. रोज सकाळी ताजे दळून आणलेले पीठ आणि स्वच्छ पाणी.',
    },
    {
      id: 'heartfelt-service',
      icon: HeartHandshake,
      title: 'आपुलकीची सेवा',
      quote: 'प्रत्येक ग्राहकाला आपल्या माणसासारखी सेवा.',
      desc: 'आमच्या भोजनालयात येणारा प्रत्येक जण आमच्यासाठी पाहुणा असतो. तृप्त होऊन समाधानाने हसतमुखाने जेवणाचा आस्वाद घेणे हीच आमची कमाई.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60">
            आमच्याबद्दल • साताऱ्याची परंपरा
          </span>
          <h2
            id="about-heading"
            className="mt-4 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “आपल्या घरचीच चव…”
          </h2>
          <CulturalMotifDivider />
          <p className="text-base sm:text-lg text-[#5C534D] leading-relaxed mt-4 font-normal">
            मांढरादेवी भोजनालयात महाराष्ट्राच्या पारंपरिक चवी जपण्याचा आम्ही मनापासून प्रयत्न करतो. ताजे साहित्य, घरगुती पद्धतीने बनवलेले पदार्थ आणि आपुलकीची सेवा हीच आमची ओळख आहे.
          </p>
        </div>

        {/* 3 Elegant Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group bg-white rounded-[32px] p-7 sm:p-8 border border-[#E8E2D9] shadow-xs hover:shadow-xl transition-all hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center mb-6 group-hover:bg-[#F27D26] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-marathi-heading text-xl sm:text-2xl font-bold text-[#2D241E] mb-3">
                    {card.title}
                  </h3>

                  <blockquote className="text-sm sm:text-base font-semibold text-[#F27D26] border-l-2 border-[#F27D26] pl-3 my-3 italic">
                    “{card.quote}”
                  </blockquote>

                  <p className="text-sm text-[#5C534D] leading-relaxed mt-3">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E2D9] flex items-center text-xs text-[#8A8077] font-medium">
                  <span>साताऱ्याची अस्सल परंपरा</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
