import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export function Shop() {
  const { t, isRTL } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const categories = ['All', 'Jersey', 'Training', 'Apparel', 'Accessories'];
  const seasons = ['All', '24/25'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedSeason !== 'All') {
      filtered = filtered.filter((p) => p.season === selectedSeason);
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSeason, sortBy, priceRange]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 md:py-12">
      <div className={`mb-8 ${isRTL ? 'text-right' : ''}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-2">{t('shop.title')}</h1>
        <p className="text-[#6B7280]">
          {t('shop.description')}
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 mb-8">
        <div className={`flex flex-wrap items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`lg:hidden flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] hover:bg-[#E5E7EB] rounded-lg transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            {t('shop.filters')}
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            {/* Category */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#6B7280]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#D32F2F]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Season */}
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#D32F2F]"
            >
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season === 'All' ? 'All Seasons' : season}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B7280]">Price:</span>
              <select
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'all') setPriceRange([0, 10000]);
                  else if (value === 'low') setPriceRange([0, 3000]);
                  else if (value === 'mid') setPriceRange([3000, 6000]);
                  else if (value === 'high') setPriceRange([6000, 10000]);
                }}
                className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#D32F2F]"
              >
                <option value="all">All Prices</option>
                <option value="low">Under 3000 DZD</option>
                <option value="mid">3000-6000 DZD</option>
                <option value="high">6000+ DZD</option>
              </select>
            </div>
          </div>

          {/* Sort */}
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-sm text-[#6B7280] hidden sm:inline">{t('shop.sort')}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#2E7D32] ${isRTL ? 'text-right' : ''}`}
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        {showFilters && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#E5E7EB] space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#D32F2F]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                Season
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#D32F2F]"
              >
                {seasons.map((season) => (
                  <option key={season} value={season}>
                    {season === 'All' ? 'All Seasons' : season}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                Price Range
              </label>
              <select
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'all') setPriceRange([0, 10000]);
                  else if (value === 'low') setPriceRange([0, 3000]);
                  else if (value === 'mid') setPriceRange([3000, 6000]);
                  else if (value === 'high') setPriceRange([6000, 10000]);
                }}
                className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#D32F2F]"
              >
                <option value="all">All Prices</option>
                <option value="low">Under 3000 DZD</option>
                <option value="mid">3000-6000 DZD</option>
                <option value="high">6000+ DZD</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className={`mb-6 ${isRTL ? 'text-right' : ''}`}>
        <p className="text-sm text-[#6B7280]">
          {t('shop.showing')} {filteredProducts.length} {t('shop.products')}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {filteredProducts.length > 8 && (
        <div className="flex items-center justify-center gap-2">
          <button className="px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-[#D32F2F] text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
            Next
          </button>
        </div>
      )}
    </div>
  );
}
