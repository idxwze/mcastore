import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage, Language } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import mcaLogo from 'figma:asset/dd6d4e88e74039dd1dc618d9d69ef46f0c873e04.png';

export function Header() {
  const { cartCount } = useCart();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
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
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0B1220] border-b border-gray-border dark:border-[#334155] transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <img 
              src={mcaLogo} 
              alt="MCA Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-semibold text-[#111827] dark:text-[#E2E8F0]">MCA Store</span>
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
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-[#E2E8F0]'
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
                className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#111827] rounded-lg hover:bg-[#E5E7EB] dark:hover:bg-[#1E293B] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#6B7280] dark:text-[#94A3B8]" />
                <span className="text-sm font-medium text-[#111827] dark:text-[#E2E8F0]">
                  {language.toUpperCase()}
                </span>
              </button>
              {languageMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setLanguageMenuOpen(false)}
                  />
                  <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 bg-white dark:bg-[#0B1220] border border-[#E5E7EB] dark:border-[#334155] rounded-lg shadow-lg py-1 min-w-[100px] z-20`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLanguageMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-sm text-left hover:bg-[#F9FAFB] dark:hover:bg-[#111827] transition-colors ${
                          language === lang.code
                            ? 'text-[#D32F2F] font-medium bg-[#FEF2F2] dark:bg-[#3F1D1D]'
                            : 'text-[#6B7280] dark:text-[#94A3B8]'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 bg-[#F9FAFB] dark:bg-[#111827] hover:bg-[#E5E7EB] dark:hover:bg-[#1E293B] rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#FCD34D]" />
              ) : (
                <Moon className="w-5 h-5 text-[#6B7280]" />
              )}
            </button>

            {/* Search - Desktop */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] dark:bg-[#111827] rounded-lg hover:bg-[#E5E7EB] dark:hover:bg-[#1E293B] transition-colors">
              <Search className="w-4 h-4 text-[#6B7280] dark:text-[#94A3B8]" />
            </button>

            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#111827] rounded-lg transition-colors">
              <Search className="w-5 h-5 text-[#6B7280] dark:text-[#94A3B8]" />
            </button>

            {/* Account */}
            <Link
              to="/contact"
              className="p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#111827] rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-[#6B7280] dark:text-[#94A3B8]" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#111827] rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-[#6B7280] dark:text-[#94A3B8]" />
              {cartCount > 0 && (
                <span className={`absolute ${isRTL ? 'left-0' : 'right-0'} -top-1 w-5 h-5 bg-[#D32F2F] text-white text-xs rounded-full flex items-center justify-center font-medium`}>
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#111827] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#6B7280] dark:text-[#94A3B8]" />
              ) : (
                <Menu className="w-5 h-5 text-[#6B7280] dark:text-[#94A3B8]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-border dark:border-[#334155]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#D32F2F] font-medium'
                    : 'text-[#6B7280] dark:text-[#94A3B8]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Selector - Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-border dark:border-[#334155]">
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
                        : 'bg-[#F9FAFB] dark:bg-[#111827] text-[#6B7280] dark:text-[#94A3B8] hover:bg-[#E5E7EB] dark:hover:bg-[#1E293B]'
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
