import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/products';
import { ImageWithFallback } from './common/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t, isRTL } = useLanguage();
  
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden">
        <ImageWithFallback
          src={`https://source.unsplash.com/600x800/?${encodeURIComponent(product.image)}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <div
            className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} px-3 py-1 rounded-lg text-xs font-semibold text-white ${
              product.badge === 'NEW' ? 'bg-[#2E7D32]' : 'bg-[#D32F2F]'
            }`}
          >
            {t(`product.${product.badge.toLowerCase()}`)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-4 ${isRTL ? 'text-right' : ''}`}>
        <div className={`flex items-start justify-between gap-2 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h3 className="font-semibold text-[#111827] group-hover:text-[#D32F2F] transition-colors">
            {product.name}
          </h3>
          {product.season && (
            <span className="text-xs text-[#6B7280] whitespace-nowrap">
              {product.season}
            </span>
          )}
        </div>

        {product.rating && (
          <div className={`flex items-center gap-1 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <Star className="w-3.5 h-3.5 fill-[#FCD34D] text-[#FCD34D]" />
            <span className="text-sm text-[#6B7280]">{product.rating}</span>
          </div>
        )}

        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-lg font-semibold text-[#111827]">
            {product.price.toLocaleString()} DZD
          </span>
          <button className="p-2 bg-[#F9FAFB] hover:bg-[#D32F2F] hover:text-white rounded-lg transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
