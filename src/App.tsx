import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { AboutSection } from './components/AboutSection';
import { SpecialDishes } from './components/SpecialDishes';
import { InteractiveMenu } from './components/InteractiveMenu';
import { MealExperience } from './components/MealExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PhotoGallery } from './components/PhotoGallery';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { OrderInquiryModal } from './components/OrderInquiryModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    dishName?: string;
    isTableInquiry?: boolean;
  }>({
    isOpen: false,
    dishName: undefined,
    isTableInquiry: false,
  });

  const handleOpenDishOrder = (dishName: string) => {
    setModalState({
      isOpen: true,
      dishName,
      isTableInquiry: false,
    });
  };

  const handleOpenTableInquiry = () => {
    setModalState({
      isOpen: true,
      dishName: undefined,
      isTableInquiry: true,
    });
  };

  const handleGeneralCall = () => {
    setModalState({
      isOpen: true,
      dishName: undefined,
      isTableInquiry: false,
    });
  };

  const handleGeneralWhatsApp = () => {
    setModalState({
      isOpen: true,
      dishName: undefined,
      isTableInquiry: false,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      dishName: undefined,
      isTableInquiry: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D241E] flex flex-col font-marathi selection:bg-[#F27D26]/20 selection:text-[#D96A1C]">
      {/* Top Sticky Navigation */}
      <Navbar onCallClick={handleGeneralCall} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onCallClick={handleGeneralCall} />

        {/* 2. Hero Quick Information Strip */}
        <QuickInfoStrip />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Today's Specials */}
        <SpecialDishes onOrderDish={handleOpenDishOrder} />

        {/* 5. Interactive Menu */}
        <InteractiveMenu onOrderDish={handleOpenDishOrder} />

        {/* 6. Signature Maharashtrian Meal Experience (भाकरी → भाजी → पिठलं → ठेचा → आमटी → भात → ताक) */}
        <MealExperience />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Photo Gallery with Lightbox */}
        <PhotoGallery />

        {/* 9. Customer Testimonials */}
        <Testimonials />

        {/* 10. Location Section */}
        <LocationSection
          onCallClick={handleGeneralCall}
          onWhatsAppClick={handleGeneralWhatsApp}
        />

        {/* 11. Contact Section */}
        <ContactSection />

        {/* 12. Table Booking / Order CTA */}
        <CallToAction onTableInquiry={handleOpenTableInquiry} />
      </main>

      {/* Footer */}
      <Footer
        onCallClick={handleGeneralCall}
        onWhatsAppClick={handleGeneralWhatsApp}
      />

      {/* Sticky Bottom Action Bar for Mobile Viewers */}
      <MobileActionBar
        onCallClick={handleGeneralCall}
        onWhatsAppClick={handleGeneralWhatsApp}
      />

      {/* Interactive Order / Table Inquiry Modal */}
      <OrderInquiryModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        dishName={modalState.dishName}
        isTableInquiry={modalState.isTableInquiry}
      />

      {/* Back to top smooth navigation */}
      <BackToTop />
    </div>
  );
}
