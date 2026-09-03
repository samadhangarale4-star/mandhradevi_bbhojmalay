import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { CulturalMotifDivider } from './CulturalMotif';

export const PhotoGallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  }, [activePhotoIndex]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
      );
    }
  }, [activePhotoIndex]);

  const handleClose = () => {
    setActivePhotoIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60">
            छायाचित्रे • भोजनालयाची झलक
          </span>
          <h2
            id="gallery-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “भोजनालयाची खास छायाचित्रे”
          </h2>
          <CulturalMotifDivider />
          <p className="text-sm sm:text-base text-[#5C534D] mt-2">
            आमचे स्वच्छ वातावरण, अस्सल खाद्यपदार्थ आणि प्रसन्न बैठक व्यवस्थेची एक झलक.
          </p>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setActivePhotoIndex(index)}
              id={`gallery-item-${photo.id}`}
              className="group cursor-pointer rounded-[32px] overflow-hidden bg-white border border-[#E8E2D9] shadow-xs hover:shadow-xl transition-all relative aspect-4/3"
            >
              <img
                src={photo.image}
                alt={`${photo.title} - मांढरादेवी भोजनालय`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold bg-[#F27D26] px-3 py-1 rounded-full shadow-xs">
                    {photo.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-marathi-heading font-bold text-base sm:text-lg">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              id="lightbox-close-btn"
              className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="बंद करा"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              id="lightbox-prev-btn"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="मागील छायाचित्र"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              id="lightbox-next-btn"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="पुढील छायाचित्र"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <div
              className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-[32px] overflow-hidden shadow-2xl bg-black max-h-[75vh] flex items-center justify-center border border-white/10">
                <img
                  src={GALLERY_PHOTOS[activePhotoIndex].image}
                  alt={GALLERY_PHOTOS[activePhotoIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption & Indicator */}
              <div className="mt-4 text-center text-white px-4 max-w-xl">
                <div className="flex items-center justify-center gap-2 text-xs text-stone-400 mb-1">
                  <span>{activePhotoIndex + 1} / {GALLERY_PHOTOS.length}</span>
                  <span>•</span>
                  <span className="text-[#F27D26] font-bold">{GALLERY_PHOTOS[activePhotoIndex].category}</span>
                </div>
                <h4 className="font-marathi-heading font-bold text-lg sm:text-xl">
                  {GALLERY_PHOTOS[activePhotoIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  {GALLERY_PHOTOS[activePhotoIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
