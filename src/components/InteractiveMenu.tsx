import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Sparkles, Filter } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { MenuCategoryId } from '../types';
import { CulturalMotifDivider } from './CulturalMotif';

interface InteractiveMenuProps {
  onOrderDish: (dishName: string) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onOrderDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60">
            शुद्ध व चविष्ट • गावरान पद्धत
          </span>
          <h2
            id="menu-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “आमचा मेनू”
          </h2>
          <CulturalMotifDivider />
          <p className="text-sm sm:text-base text-[#5C534D] mt-2">
            आईच्या हातच्या चवीसारखे बनवलेले आमचे सर्व पारंपरिक पदार्थ. आपल्या आवडीनुसार निवडा.
          </p>
        </div>

        {/* Search Bar & Category Navigation Controls */}
        <div className="mt-10 space-y-6">
          {/* Quick Search */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8A8077]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="पदार्थ शोधा (उदा. भाकरी, वांगी, ठेचा, ताक)..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-[#E8E2D9] bg-white text-sm text-[#2D241E] placeholder-[#8A8077] focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-[#8A8077] hover:text-[#F27D26]"
              >
                रद्द करा
              </button>
            )}
          </div>

          {/* Horizontal Scrollable Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-2 px-1 gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              id="category-tab-all"
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-[#2D241E] text-white shadow-xs'
                  : 'bg-white text-[#2D241E] border border-[#E8E2D9] hover:bg-[#E8E2D9]/40'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>सर्व पदार्थ</span>
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  id={`category-tab-${cat.id}`}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#2D241E] text-white shadow-xs'
                      : 'bg-white text-[#2D241E] border border-[#E8E2D9] hover:bg-[#E8E2D9]/40'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="mt-10">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DFD3] p-8 max-w-md mx-auto">
              <p className="text-lg font-bold text-[#241A15]">कोणताही पदार्थ सापडला नाही</p>
              <p className="text-sm text-[#736357] mt-1">
                कृपया वेगळा शब्द शोधून पहा किंवा सर्व पदार्थ श्रेणी निवडा.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 bg-[#D9531E] text-white text-xs font-semibold rounded-lg"
              >
                सर्व मेनू दाखवा
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[24px] border border-[#E8E2D9] overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div className="flex p-4 gap-4">
                      {/* Thumbnail image */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-[#E8E2D9] relative">
                        <img
                          src={item.image}
                          alt={`${item.name} - मांढरादेवी भोजनालय`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        {item.isPopular && (
                          <div className="absolute top-1.5 left-1.5 bg-[#F27D26] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                            लोकप्रिय
                          </div>
                        )}
                      </div>

                      {/* Content details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h3 className="font-marathi-heading font-bold text-base sm:text-lg text-[#2D241E] group-hover:text-[#F27D26] transition-colors">
                              {item.name}
                            </h3>
                            <span className="font-bold text-xs px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F27D26] border border-orange-100 shrink-0">
                              {item.pricePlaceholder}
                            </span>
                          </div>

                          <p className="text-xs text-[#5C534D] mt-1.5 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-[11px] text-[#3A5A40] font-bold bg-[#EBF4EE] px-2.5 py-0.5 rounded-full">
                            {item.tag || 'ताजे पदार्थ'}
                          </span>

                          <button
                            onClick={() => onOrderDish(item.name)}
                            id={`menu-item-order-${item.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D241E] hover:text-white bg-orange-100/70 hover:bg-[#F27D26] px-3.5 py-1.5 rounded-full transition-colors active:scale-95"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            <span>ऑर्डर</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Note regarding authentic bhojanalay policy */}
        <div className="mt-12 text-center text-xs text-[#5C534D] bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D9] max-w-xl mx-auto shadow-xs">
          💡 <span className="font-bold text-[#2D241E]">टीप:</span> दररोज ताजे अन्न बनवले जात असल्याने पदार्थांचे अचूक दर आणि दिवसाची विशेष मेजवानी जाणून घेण्यासाठी भोजनालयात थेट संपर्क साधावा.
        </div>

      </div>
    </section>
  );
};
