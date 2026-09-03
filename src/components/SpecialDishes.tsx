import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { TODAY_SPECIALS } from '../data/restaurantData';
import { CulturalMotifDivider } from './CulturalMotif';

interface SpecialDishesProps {
  onOrderDish: (dishName: string) => void;
}

export const SpecialDishes: React.FC<SpecialDishesProps> = ({ onOrderDish }) => {
  return (
    <section id="specials" className="py-20 md:py-28 bg-[#F7F3EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60 shadow-xs">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
              दररोज ताजे व गरमागरम
            </span>
          </div>
          <h2
            id="specials-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “आजचे खास”
          </h2>
          <CulturalMotifDivider />
          <p className="text-sm sm:text-base text-[#5C534D] mt-2">
            साताऱ्याची अस्सल गावरान चव देणारे आमचे सर्वात जास्त पसंतीचे खास पदार्थ.
          </p>
        </div>

        {/* Food Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TODAY_SPECIALS.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[32px] overflow-hidden border border-[#E8E2D9] shadow-sm hover:shadow-2xl transition-all flex flex-col group"
            >
              {/* Image Container with tag */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-[#E8E2D9]">
                <img
                  src={dish.image}
                  alt={`${dish.name} - मांढरादेवी भोजनालय सातारा`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                
                {/* Cultural Tag */}
                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[#F27D26] font-bold text-xs px-3 py-1 rounded-full border border-white/60 shadow-xs">
                  {dish.tag}
                </div>

                {/* Subtitle pill */}
                {dish.marathiSubname && (
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white text-xs font-semibold drop-shadow-sm truncate">
                    {dish.marathiSubname}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-marathi-heading font-bold text-xl sm:text-2xl text-[#2D241E] group-hover:text-[#F27D26] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-bold text-xs sm:text-sm px-3 py-1 rounded-full bg-orange-50 text-[#F27D26] border border-orange-100 whitespace-nowrap">
                      {dish.pricePlaceholder}
                    </span>
                  </div>

                  <p className="text-sm text-[#5C534D] line-clamp-3 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                  <span className="text-xs text-[#8A8077] font-medium">
                    दररोज ताजे उपलब्ध
                  </span>
                  
                  <button
                    onClick={() => onOrderDish(dish.name)}
                    id={`order-btn-${dish.id}`}
                    className="inline-flex items-center gap-2 bg-[#2D241E] hover:bg-[#F27D26] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>ऑर्डर करा</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
