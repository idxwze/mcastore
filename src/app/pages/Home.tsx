import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, RotateCcw, Shield, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import aliAmmarStadiumImage from '../../assets/ali-ammar-stadium.jpg';

export function Home() {
  const { t, isRTL } = useLanguage();
  const bestSellers = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-[#020617] text-[#111827] dark:text-[#E2E8F0]">
        {/* Three diagonal club-color bands with staggered entrance from the right */}
        <div className="absolute inset-y-0 left-[18%] w-[18%] bg-[#D32F2F]/92 band-diagonal band-enter band-delay-0"></div>
        <div className="absolute inset-y-0 left-[34%] w-[14%] bg-[#D4AF37]/86 band-diagonal band-enter band-delay-1"></div>
        <div className="absolute inset-y-0 left-[46%] w-[18%] bg-[#2E7D32]/90 band-diagonal band-enter band-delay-2"></div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-20 md:py-32">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`space-y-6 bg-white/80 dark:bg-[#020617]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 ${isRTL ? 'lg:col-start-2 text-right' : ''}`}>
              {/* Slogan */}
              <div className="mb-4 reveal-up">
                <p className="text-lg md:text-xl font-semibold text-[#111827] dark:text-[#E2E8F0] tracking-wide">
                  {t('hero.slogan')}
                </p>
              </div>
              
              <div className="inline-block px-4 py-2 bg-[#111827]/10 dark:bg-white/10 rounded-full text-sm font-medium reveal-up reveal-delay-1">
                {t('hero.newCollection')}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight reveal-up reveal-delay-2">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-[#374151] dark:text-[#CBD5E1] max-w-md reveal-up reveal-delay-3">
                {t('hero.description')}
              </p>
              <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''} reveal-up reveal-delay-4`}>
                <Link
                  to="/shop"
                  className={`inline-flex items-center gap-2 px-8 py-4 bg-[#D32F2F] text-white rounded-xl font-semibold hover:bg-[#B71C1C] transition-colors hover-lift ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('btn.shopNow')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#111827] dark:border-[#E2E8F0] text-[#111827] dark:text-[#E2E8F0] rounded-xl font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-colors hover-lift"
                >
                  {t('btn.viewCollection')}
                </Link>
              </div>
            </div>
            <div className={`relative hidden lg:block reveal-right reveal-delay-2 ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="absolute inset-0 bg-white/10 rounded-3xl rotate-6"></div>
              <ImageWithFallback
                src={aliAmmarStadiumImage}
                alt="Ali Ammar Stadium"
                className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover object-center float-soft"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 dark:from-black/30 to-transparent"></div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 md:py-24">
        <div className={`flex items-center justify-between mb-8 reveal-up ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2">
              {t('page.bestSellers')}
            </h2>
            <p className="text-[#6B7280]">
              {t('page.bestSellersDesc')}
            </p>
          </div>
          <Link
            to="/shop"
            className={`hidden sm:inline-flex items-center gap-2 text-[#D32F2F] font-semibold hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('btn.viewAll')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up reveal-delay-1">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/shop"
            className={`inline-flex items-center gap-2 text-[#D32F2F] font-semibold ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('btn.viewAll')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`flex items-start gap-4 reveal-up ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="w-12 h-12 bg-[#2E7D32] rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">{t('trust.fastDelivery')}</h3>
                <p className="text-sm text-[#6B7280]">
                  {t('trust.fastDeliveryDesc')}
                </p>
              </div>
            </div>

            <div className={`flex items-start gap-4 reveal-up reveal-delay-1 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="w-12 h-12 bg-[#2E7D32] rounded-xl flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">{t('trust.easyReturns')}</h3>
                <p className="text-sm text-[#6B7280]">
                  {t('trust.easyReturnsDesc')}
                </p>
              </div>
            </div>

            <div className={`flex items-start gap-4 reveal-up reveal-delay-2 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="w-12 h-12 bg-[#2E7D32] rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">{t('trust.securePayment')}</h3>
                <p className="text-sm text-[#6B7280]">
                  {t('trust.securePaymentDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 md:py-24">
        <div className={`bg-gradient-to-br from-[#111827] to-[#374151] rounded-3xl p-8 md:p-12 text-white text-center reveal-up ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('newsletter.description')}
          </p>
          <form className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className={`flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 ${isRTL ? 'text-right' : ''}`}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] rounded-xl font-semibold transition-colors"
            >
              {t('btn.subscribe')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
