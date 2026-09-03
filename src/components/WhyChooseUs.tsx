import React from 'react';
import { Star, Salad, Users, HeartHandshake } from 'lucide-react';
import { CulturalMotifDivider } from './CulturalMotif';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      id: 'why-taste',
      icon: Star,
      title: 'अस्सल महाराष्ट्रीय चव',
      description: 'कोणतीही बनावट किंवा कृत्रिम चव नाही. केवळ पारंपरिक घरगुती मसाले आणि साताऱ्याची खरी गावरान चव.',
    },
    {
      id: 'why-fresh',
      icon: Salad,
      title: 'ताजे आणि दर्जेदार पदार्थ',
      description: 'दररोज सकाळी ताजे धान्य आणि स्थानिक शेतकऱ्यांचा भाजीपाला वापरून तयार केलेले सकस अन्न.',
    },
    {
      id: 'why-family',
      icon: Users,
      title: 'कुटुंबासाठी योग्य',
      description: 'शांत, स्वच्छ आणि कौटुंबिक वातावरण, जिथे आबालवृद्ध संपूर्ण कुटुंबासह आनंदाने जेवू शकतात.',
    },
    {
      id: 'why-satara',
      icon: HeartHandshake,
      title: 'साताऱ्याची आपुलकी',
      description: 'हसतमुखाने वाढले जाणारे सात्विक अन्न आणि घरच्या पाहुण्यांसारखे आदरपूर्वक केलेले आतिथ्य.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60">
            आमची ओळख
          </span>
          <h2
            id="why-choose-us-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “मांढरादेवी भोजनालय का?”
          </h2>
          <CulturalMotifDivider />
          <p className="text-sm sm:text-base text-[#5C534D] mt-2">
            स्थानिक सातारकर आणि प्रवाशांच्या विश्वासास पात्र ठरलेली आमची चार प्रमुख वैशिष्ट्ये.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8E2D9] shadow-xs hover:shadow-xl hover:border-[#F27D26]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F27D26] border border-orange-100/80 flex items-center justify-center mb-5 group-hover:bg-[#F27D26] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-marathi-heading font-bold text-lg sm:text-xl text-[#2D241E] mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5C534D] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2D9] text-[11px] text-[#8A8077] font-medium">
                  सातारा भोजनालय हमी
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
