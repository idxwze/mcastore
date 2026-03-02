import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Confirmation } from './pages/Confirmation';
import { Contact } from './pages/Contact';

// Keep all top-level routes in one place so it is easy to scan the app structure.
export default function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        {/* LanguageProvider controls i18n + RTL. CartProvider controls cart state app-wide. */}
        <LanguageProvider>
          <CartProvider>
            <div className="min-h-screen bg-white dark:bg-[#020617] flex flex-col transition-colors">
              <Header />
              <main className="flex-1">
                <Routes>
                  {/* Main shopping flow */}
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/confirmation" element={<Confirmation />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* Supporting pages */}
                  <Route path="/size-guide" element={<SizeGuidePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
              <Toaster position="top-right" richColors />
            </div>
          </CartProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

function SizeGuidePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16">
      <h1 className="text-4xl font-bold text-[#111827] mb-6">Size Guide</h1>
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">Jersey Size Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#E5E7EB]">
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Chest (cm)</th>
                <th className="py-3 px-4">Length (cm)</th>
                <th className="py-3 px-4">Height (cm)</th>
              </tr>
            </thead>
            <tbody className="text-[#6B7280]">
              <tr className="border-b border-[#E5E7EB]">
                <td className="py-3 px-4 font-medium">S</td>
                <td className="py-3 px-4">88-94</td>
                <td className="py-3 px-4">70</td>
                <td className="py-3 px-4">165-173</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="py-3 px-4 font-medium">M</td>
                <td className="py-3 px-4">95-101</td>
                <td className="py-3 px-4">73</td>
                <td className="py-3 px-4">171-179</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="py-3 px-4 font-medium">L</td>
                <td className="py-3 px-4">102-108</td>
                <td className="py-3 px-4">76</td>
                <td className="py-3 px-4">177-185</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="py-3 px-4 font-medium">XL</td>
                <td className="py-3 px-4">109-115</td>
                <td className="py-3 px-4">79</td>
                <td className="py-3 px-4">183-191</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">XXL</td>
                <td className="py-3 px-4">116-124</td>
                <td className="py-3 px-4">82</td>
                <td className="py-3 px-4">189-197</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-[#111827] mb-3">How to Measure</h3>
          <ul className="text-[#6B7280] space-y-2 list-disc list-inside">
            <li>Chest: Measure around the fullest part of your chest</li>
            <li>Length: Measure from the highest point of the shoulder to the hem</li>
            <li>Height: Your total height from head to toe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 text-center">
      <h1 className="text-6xl font-bold text-[#111827] mb-4">404</h1>
      <p className="text-xl text-[#6B7280] mb-8">Page not found</p>
      <Link
        to="/"
        className="inline-block px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-xl font-semibold transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
