import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';
import { CulturalMotifDivider } from './CulturalMotif';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide effect every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swiped left -> Next
      handleNext();
    } else if (diff < -50) {
      // Swiped right -> Prev
      handlePrev();
    }
    touchStartX.current = null;
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60">
            <span>समाधानी ग्राहक • सातारकर</span>
          </div>
          <h2
            id="testimonials-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “आमच्या ग्राहकांच्या मनातली चव ❤️”
          </h2>
          <CulturalMotifDivider />
          
          {/* Note indicating placeholder reviews */}
          <div className="inline-flex items-center gap-1.5 text-xs text-[#5C534D] bg-[#E8E2D9]/40 px-3.5 py-1.5 rounded-full border border-[#E8E2D9]">
            <Info className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>खालील अभिप्राय प्रातिनिधिक / नमुना स्वरूपातील आहेत.</span>
          </div>
        </div>

        {/* Testimonial Carousel Card */}
        <div
          className="mt-12 max-w-3xl mx-auto relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E8E2D9] shadow-xl relative">
            <div className="absolute top-6 right-8 text-[#F27D26]/15">
              <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 relative z-10"
              >
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#F27D26]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F27D26]" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="font-marathi-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#2D241E] leading-snug">
                  “{current.review}”
                </blockquote>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#2D241E] text-white flex items-center justify-center font-marathi-heading font-bold text-base shadow-xs">
                      {current.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-marathi-heading font-bold text-base text-[#2D241E]">
                        {current.name}
                      </h4>
                      <p className="text-xs text-[#5C534D]">
                        {current.location}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs bg-orange-50 text-[#F27D26] font-bold px-3 py-1 rounded-full border border-orange-100">
                    {current.dateTag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Desktop Carousel Arrows */}
            <div className="flex items-center justify-between mt-8 pt-4">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx
                        ? 'w-6 bg-[#F27D26]'
                        : 'w-2 bg-[#E8E2D9] hover:bg-[#CBBBA9]'
                    }`}
                    aria-label={`अभिप्राय क्रमांक ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  id="testimonial-prev-btn"
                  className="p-2.5 rounded-full border border-[#E8E2D9] bg-white text-[#2D241E] hover:text-[#F27D26] hover:border-[#F27D26] transition-colors shadow-xs"
                  aria-label="मागील अभिप्राय"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  id="testimonial-next-btn"
                  className="p-2.5 rounded-full border border-[#E8E2D9] bg-white text-[#2D241E] hover:text-[#F27D26] hover:border-[#F27D26] transition-colors shadow-xs"
                  aria-label="पुढील अभिप्राय"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
