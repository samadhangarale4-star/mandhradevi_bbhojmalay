import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onCallClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCallClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['hero', 'about', 'specials', 'menu', 'meal-journey', 'gallery', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'मुख्यपृष्ठ' },
    { id: 'about', label: 'आमच्याबद्दल' },
    { id: 'specials', label: 'खास पदार्थ' },
    { id: 'menu', label: 'मेनू' },
    { id: 'meal-journey', label: 'भोजन परंपरा' },
    { id: 'gallery', label: 'फोटो' },
    { id: 'reviews', label: 'अभिप्राय' },
    { id: 'contact', label: 'संपर्क' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3'
          : 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 sm:py-5 border-b border-[#E8E2D9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center gap-3 group focus:outline-none"
          id="navbar-brand"
        >
          <div className="w-10 h-10 rounded-full bg-[#F27D26] flex items-center justify-center text-white shadow-md shadow-orange-200/50 shrink-0 group-hover:bg-[#D96A1C] transition-colors">
            <span className="font-marathi-heading font-bold text-lg leading-none">मां</span>
          </div>
          <div className="flex flex-col">
            <span className="font-marathi-heading text-xl sm:text-2xl font-bold tracking-tight text-[#F27D26] group-hover:text-[#D96A1C] transition-colors">
              {RESTAURANT_INFO.nameMr}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-medium text-[#2D241E]">
                {RESTAURANT_INFO.nameEn}
              </span>
              <span className="text-[9px] bg-orange-100 text-[#F27D26] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider border border-orange-200/60 flex items-center gap-0.5">
                <MapPin className="w-2.5 h-2.5 text-[#F27D26]" /> सातारा
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all relative ${
                  isActive
                    ? 'text-[#F27D26] bg-orange-50 font-bold'
                    : 'text-[#2D241E] hover:text-[#F27D26] hover:bg-[#F7F3EB]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#F27D26] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCallClick}
            id="nav-call-btn"
            className="hidden sm:inline-flex items-center gap-2 bg-[#F27D26] hover:bg-[#D96A1C] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-200 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>कॉल करा</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 rounded-full text-[#2D241E] hover:bg-[#E8E2D9] transition-colors focus:outline-none"
            aria-label="मेनू उघडा"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-[#FDFBF7] border-b border-[#E8E2D9] px-4 pt-3 pb-6 shadow-xl transition-all"
        >
          <div className="flex flex-col space-y-1 divide-y divide-[#E8E2D9]">
            <div className="pb-2 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`mobile-link-${link.id}`}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-orange-50 text-[#F27D26] font-bold'
                      : 'text-[#2D241E] hover:bg-[#F7F3EB]'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCallClick();
                }}
                id="mobile-menu-call-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#D96A1C] text-white py-3 rounded-full text-base font-bold shadow-lg shadow-orange-200 active:scale-98"
              >
                <Phone className="w-5 h-5" />
                <span>कॉल करा (थेट संपर्क)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
