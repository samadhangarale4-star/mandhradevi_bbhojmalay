import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { MEAL_JOURNEY_STEPS } from '../data/restaurantData';
import { CulturalMotifDivider } from './CulturalMotif';

export const MealExperience: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="meal-journey" className="py-20 md:py-28 bg-[#F7F3EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F27D26] text-xs font-bold rounded-md uppercase tracking-widest border border-orange-200/60 shadow-xs">
            महाराष्ट्राची समृद्ध भोजन परंपरा
          </span>
          <h2
            id="meal-journey-heading"
            className="mt-3 font-marathi-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] tracking-tight"
          >
            “एकदा चव घेतली की पुन्हा यावंसं वाटेल!”
          </h2>
          <CulturalMotifDivider />
          <p className="text-sm sm:text-base text-[#5C534D] mt-2">
            भाकरीपासून सुरू होणारा आणि तृप्त करणाऱ्या थंडगार ताकावर संपणारा अस्सल सातारकर भोजनाचा सुवर्ण प्रवास.
          </p>
        </div>

        {/* Visual Flow Indicator Strip */}
        <div className="mt-12 overflow-x-auto no-scrollbar pb-4">
          <div className="flex items-center justify-between min-w-[700px] sm:min-w-full px-4">
            {MEAL_JOURNEY_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <React.Fragment key={step.stepNumber}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    id={`journey-step-btn-${idx}`}
                    className={`flex flex-col items-center group transition-all ${
                      isSelected ? 'scale-105' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-marathi-heading font-bold text-lg transition-all shadow-xs ${
                        isSelected
                          ? 'bg-[#2D241E] text-white ring-4 ring-[#F27D26]/20 shadow-md'
                          : 'bg-white text-[#2D241E] border border-[#E8E2D9] group-hover:border-[#F27D26]'
                      }`}
                    >
                      {step.stepNumber}
                    </div>
                    <span
                      className={`mt-2 text-xs sm:text-sm font-bold transition-colors ${
                        isSelected ? 'text-[#F27D26]' : 'text-[#5C534D]'
                      }`}
                    >
                      {step.name}
                    </span>
                  </button>

                  {idx < MEAL_JOURNEY_STEPS.length - 1 && (
                    <div className="flex-1 flex items-center justify-center px-1 text-[#C4B3A5]">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Spotlight Active Dish Showcase Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-[#E8E2D9] shadow-xl max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Image */}
            <div className="md:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-4/3 shadow-sm border border-[#E8E2D9]">
                <img
                  src={MEAL_JOURNEY_STEPS[activeStep].image}
                  alt={`${MEAL_JOURNEY_STEPS[activeStep].name} - मांढरादेवी भोजनालय`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-3 left-3 bg-[#F27D26] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                टप्पा {MEAL_JOURNEY_STEPS[activeStep].stepNumber} / ७
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F27D26] bg-orange-100 px-3 py-1 rounded-full border border-orange-200/60">
                <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>साताऱ्याची परंपरा</span>
              </div>

              <h3 className="font-marathi-heading text-2xl sm:text-3xl font-bold text-[#2D241E]">
                {MEAL_JOURNEY_STEPS[activeStep].name}
              </h3>

              <p className="text-base font-bold text-[#F27D26]">
                {MEAL_JOURNEY_STEPS[activeStep].tagline}
              </p>

              <p className="text-sm sm:text-base text-[#5C534D] leading-relaxed">
                {MEAL_JOURNEY_STEPS[activeStep].description}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % MEAL_JOURNEY_STEPS.length)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2D241E] hover:text-[#F27D26] bg-[#E8E2D9]/40 hover:bg-[#E8E2D9] px-4 py-2 rounded-full transition-all"
                >
                  <span>पुढील पदार्थ पहा</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Horizontal Cards Grid for Desktop Scannability */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {MEAL_JOURNEY_STEPS.map((step, idx) => (
            <div
              key={step.name}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-2xl p-3 text-center border transition-all ${
                activeStep === idx
                  ? 'bg-white border-[#F27D26] shadow-sm'
                  : 'bg-white/60 border-[#E8E2D9] hover:border-[#F27D26]/40 hover:bg-white'
              }`}
            >
              <div className="text-[11px] font-bold text-[#8A8077]">टप्पा {step.stepNumber}</div>
              <div className="font-marathi-heading font-bold text-sm sm:text-base text-[#2D241E] mt-0.5">
                {step.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
