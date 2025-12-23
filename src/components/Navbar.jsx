import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logoMaria.svg";
import languageIcon from "@assets/languageIcon.svg";
import { useTranslation } from "@hooks/useTranslation";
import PrimaryButton from "@components/PrimaryButton";
import { useClickOutside } from "@hooks/useClickOutside";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);
  const dropdownRef = useClickOutside(closeDropdown);
  
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  
  const { t, changeLanguage, currentLanguage } = useTranslation();

  const handleLanguageChange = () => {
    changeLanguage(currentLanguage === 'de' ? 'en' : 'de');
  };

  return (
    <nav className="bg-green-100 text-green-900 border-b border-green-700 fixed w-full z-50" role="navigation" aria-label="Main navigation">
      <div className="mx-4 md:mx-8 flex items-center justify-between h-20">

        {/* Links: Sprachenwechsel */}
        <div className="flex items-center">
          <button 
            onClick={handleLanguageChange}
            className="flex items-center gap-2 hover:text-green-700 transition-colors p-2 rounded-lg hover:bg-green-200"
            aria-label={t('a11y.switchLanguage')}
            title={t('a11y.switchLanguage')}
          >
            <img src={languageIcon} alt="" className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
          </button>
        </div>

        {/* Mitte: Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <Link to="/about" className="hover:text-green-700 transition">
            {t('nav.about')}
          </Link>
          
          <Link to="/portfolio" className="hover:text-green-700 transition">
            {t('nav.portfolio')}
          </Link>

          <Link to="/" className="flex items-center">
            <img src={logo} alt={t('a11y.logoAlt')} className="max-h-14" />
          </Link>

          <Link to="/" className="hover:text-green-700 transition">
            {t('nav.home')}
          </Link>
        </div>

        {/* Mobile: Logo in der Mitte */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex items-center">
            <img src={logo} alt={t('a11y.logoAlt')} className="max-h-12" />
          </Link>
        </div>

        {/* Rechts: Kontakt Button (Desktop) / Hamburger (Mobile) */}
        <div className="flex items-center">
          {/* Desktop */}
          <div className="hidden md:block">
            <Link to="/contact">
              <PrimaryButton label={t('nav.contact')} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-green-200 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-100 border-t border-green-700 pb-4">
          <div className="flex flex-col space-y-2 px-4 pt-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-green-200 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 hover:bg-green-200 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/portfolio" 
              className="px-4 py-2 hover:bg-green-200 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.portfolio')}
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-green-900 text-green-200 rounded-lg hover:bg-green-800 transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
