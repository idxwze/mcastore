import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t, isRTL } = useLanguage();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'shipping' | 'returns'>('details');

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#111827] mb-4">Product not found</h1>
        <Link to="/shop" className="text-[#D32F2F] hover:underline">
          {t('btn.continueShopping')}
        </Link>
      </div>
    );
  }

  const isInStock = true; // You can add stock status to product data later

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(t('product.selectSize'));
      return;
    }
    addToCart(product, quantity, selectedSize);
    toast.success(t('btn.addToCart'));
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error(t('product.selectSize'));
      return;
    }
    addToCart(product, quantity, selectedSize);
    navigate('/cart');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-2 text-sm mb-8 text-[#6B7280] ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Link to="/" className="hover:text-[#111827]">{t('nav.home')}</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[#111827]">{t('nav.shop')}</Link>
        <span>/</span>
        <span className="text-[#111827]">{product.name}</span>
      </nav>

      <div className={`grid lg:grid-cols-2 gap-12 mb-16 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image Gallery */}
        <div className={isRTL ? 'lg:col-start-2' : ''}>
          <div className="relative aspect-[3/4] bg-[#F9FAFB] rounded-2xl overflow-hidden mb-4">
            <ImageWithFallback
              src={`https://source.unsplash.com/800x1000/?${encodeURIComponent(product.image)}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex flex-col gap-2`}>
              {product.badge && (
                <div
                  className={`px-4 py-2 rounded-lg font-semibold text-white ${
                    product.badge === 'NEW' ? 'bg-[#2E7D32]' : 'bg-[#D32F2F]'
                  }`}
                >
                  {t(`product.${product.badge.toLowerCase()}`)}
                </div>
              )}
              {isInStock && (
                <div className="px-4 py-2 rounded-lg font-semibold text-white bg-[#2E7D32]">
                  {t('product.inStock')}
                </div>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                className="aspect-square bg-[#F9FAFB] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#D32F2F] transition-colors"
              >
                <ImageWithFallback
                  src={`https://source.unsplash.com/200x200/?${encodeURIComponent(product.image)}&sig=${i}`}
                  alt={`${product.name} view ${i}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className={`${isRTL ? 'lg:col-start-1 lg:row-start-1 text-right' : ''}`}>
          <div className={`flex items-start justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : ''}>
              <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2">
                {product.name}
              </h1>
              {product.rating && (
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-[#FCD34D] text-[#FCD34D]'
                            : 'text-[#E5E7EB]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#6B7280]">
                    {product.rating} (128 reviews)
                  </span>
                </div>
              )}
            </div>
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button className="p-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                <Heart className="w-5 h-5 text-[#6B7280]" />
              </button>
              <button className="p-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                <Share2 className="w-5 h-5 text-[#6B7280]" />
              </button>
            </div>
          </div>

          <div className="text-3xl font-bold text-[#111827] mb-6">
            {product.price.toLocaleString()} DZD
          </div>

          <p className="text-[#6B7280] mb-8">{product.description}</p>

          {/* Size Selector */}
          <div className="mb-6">
            <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <label className="font-semibold text-[#111827]">{t('product.selectSize')}</label>
              <Link to="/size-guide" className="text-sm text-[#D32F2F] hover:underline">
                {t('nav.sizeGuide')}
              </Link>
            </div>
            <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-[#D32F2F] text-white'
                      : 'bg-[#F9FAFB] text-[#111827] hover:bg-[#E5E7EB]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="font-semibold text-[#111827] mb-3 block">Quantity</label>
            <div className="flex items-center gap-3">
              <div className={`flex items-center border border-[#E5E7EB] rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-[#F9FAFB] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-[#F9FAFB] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className={`flex flex-col sm:flex-row gap-3 mb-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-xl font-semibold transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {t('btn.addToCart')}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 px-8 py-4 bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl font-semibold transition-colors"
            >
              {t('btn.buyNow')}
            </button>
          </div>

          {/* Features */}
          <div className="space-y-3 border-t border-[#E5E7EB] pt-6">
            <div className={`flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Truck className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-[#6B7280]">{t('trust.fastDeliveryDesc')}</span>
            </div>
            <div className={`flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <RotateCcw className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-[#6B7280]">30-day return policy</span>
            </div>
            <div className={`flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Shield className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-[#6B7280]">100% authentic merchandise</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-[#E5E7EB]">
        <div className="flex gap-8 mb-8">
          {(['details', 'shipping', 'returns'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 border-b-2 transition-colors capitalize ${
                activeTab === tab
                  ? 'border-[#D32F2F] text-[#D32F2F] font-semibold'
                  : 'border-transparent text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pb-8">
          {activeTab === 'details' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-[#111827] mb-4">Product Details</h3>
              <ul className="text-[#6B7280] space-y-2">
                <li>Official licensed MCA merchandise</li>
                <li>Premium quality fabric with moisture-wicking technology</li>
                <li>Machine washable (cold water, gentle cycle)</li>
                <li>Imported and distributed by MCA Store</li>
                <li>Club badge and sponsor logos included</li>
              </ul>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-[#111827] mb-4">Shipping Information</h3>
              <p className="text-[#6B7280] mb-4">
                We offer fast and reliable shipping across Algeria.
              </p>
              <ul className="text-[#6B7280] space-y-2">
                <li>Standard delivery: 3-5 business days</li>
                <li>Express delivery: 1-2 business days (additional fee)</li>
                <li>Free shipping on orders over 5000 DZD</li>
                <li>Track your order online with tracking number</li>
              </ul>
            </div>
          )}
          {activeTab === 'returns' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-[#111827] mb-4">Returns Policy</h3>
              <p className="text-[#6B7280] mb-4">
                We want you to be completely satisfied with your purchase.
              </p>
              <ul className="text-[#6B7280] space-y-2">
                <li>30-day return window from date of delivery</li>
                <li>Items must be unworn with original tags attached</li>
                <li>Original packaging must be included</li>
                <li>Refund processed within 7-10 business days</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
