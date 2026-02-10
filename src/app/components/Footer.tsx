import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import mcaLogo from 'figma:asset/dd6d4e88e74039dd1dc618d9d69ef46f0c873e04.png';

export function Footer() {
  const { isRTL } = useLanguage();
  
  return (
    <footer className="bg-[#111827] text-white mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16">
        {/* Logo Section */}
        <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <img 
            src={mcaLogo} 
            alt="MCA Logo" 
            className="h-12 w-auto object-contain"
          />
          <span className="text-2xl font-semibold">MCA Store</span>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ${isRTL ? 'text-right' : ''}`}>
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About MCA</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Club History
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Delivery & Returns */}
          <div>
            <h3 className="font-semibold mb-4">Delivery & Returns</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-white transition-colors">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className={`flex gap-3 ${isRTL ? 'justify-end' : ''}`}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 hover:bg-[#2E7D32] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 hover:bg-[#2E7D32] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 hover:bg-[#2E7D32] rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 hover:bg-[#2E7D32] rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <input
                type="email"
                placeholder="Your email"
                className={`flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#2E7D32] ${isRTL ? 'text-right' : ''}`}
              />
              <button className="px-4 py-2 bg-[#D32F2F] hover:bg-[#B71C1C] rounded-lg text-sm font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-sm text-gray-400">
            © 2026 MCA Store. All rights reserved.
          </p>
          <div className={`flex gap-6 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
