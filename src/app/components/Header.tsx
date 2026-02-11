import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage, Language } from '../context/LanguageContext';
import mcaLogo from 'figma:asset/dd6d4e88e74039dd1dc618d9d69ef46f0c873e04.png';

export function Header() {
  const { cartCount } = useCart();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.shop'), path: '/shop' },
    { name: t('nav.newArrivals'), path: '/shop?new=true' },
    { name: t('nav.sizeGuide'), path: '/size-guide' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
    { code: 'fr', label: 'FR' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-border">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <img 
              src={mcaLogo} 
              alt="MCA Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-semibold text-[#111827]">MCA Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#D32F2F] font-medium'
                    : 'text-[#6B7280] hover:text-[#111827]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Language Selector - Desktop */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm font-medium text-[#111827]">
                  {language.toUpperCase()}
                </span>
              </button>
              {languageMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setLanguageMenuOpen(false)}
                  />
                  <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 min-w-[100px] z-20`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLanguageMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-sm text-left hover:bg-[#F9FAFB] transition-colors ${
                          language === lang.code
                            ? 'text-[#D32F2F] font-medium bg-[#FEF2F2]'
                            : 'text-[#6B7280]'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Search - Desktop */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors">
              <Search className="w-4 h-4 text-[#6B7280]" />
            </button>

            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors">
              <Search className="w-5 h-5 text-[#6B7280]" />
            </button>

            {/* Account */}
            <Link
              to="/contact"
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-[#6B7280]" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-[#6B7280]" />
              {cartCount > 0 && (
                <span className={`absolute ${isRTL ? 'left-0' : 'right-0'} -top-1 w-5 h-5 bg-[#D32F2F] text-white text-xs rounded-full flex items-center justify-center font-medium`}>
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#6B7280]" />
              ) : (
                <Menu className="w-5 h-5 text-[#6B7280]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#D32F2F] font-medium'
                    : 'text-[#6B7280]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Selector - Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-border">
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-[#D32F2F] text-white'
                        : 'bg-[#F9FAFB] text-[#6B7280] hover:bg-[#E5E7EB]'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
