import React, { useState, useMemo } from 'react';
import { Filter, ArrowRight, ShieldCheck, Sparkles, Smartphone, Check } from 'lucide-react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductShowcaseProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onOpenProductModal: (product: Product) => void;
  searchQuery: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onOpenProductModal,
  searchQuery
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'Tüm Modeller' },
    { id: 'sifir-telefon', label: 'Sıfır Cep Telefonları' },
    { id: 'ikinci-el-telefon', label: '2. El Telefonlar' },
    { id: 'kilif-kapak', label: 'Telefon Kılıfları' },
    { id: 'ekran-koruyucu', label: 'Ekran & Lens Koruma' },
    { id: 'sarj-kablo', label: 'Hızlı Şarj & Kablo' },
    { id: 'ses-kulaklik', label: 'Kulaklık & Ses' },
  ];

  const brands = useMemo(() => {
    const list = Array.from(new Set(products.map(p => p.brand)));
    return ['all', ...list];
  }, [products]);

  // Filter Logic (NO PRICES)
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchBrand = selectedBrand === 'all' || p.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchCond = selectedCondition === 'all' || p.condition === selectedCondition;
      const matchQuery = !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchBrand && matchCond && matchQuery;
    });
  }, [products, selectedCategory, selectedBrand, selectedCondition, searchQuery]);

  return (
    <div id="vitrin" className="w-full flex flex-wrap folder-showcase py-6 sm:py-10 bg-[#f8f9fa]">
      <div className="w-full px-2 sm:px-4 max-w-[1448px] mx-auto">

        {/* ========================================================
            SHOWCASE HEADER (Block-title styling)
            ======================================================== */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-gray-200 pb-3">
          <div className="block-title">
            <h2 className="title text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              En Yeni Ürünler & Modeller
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-1">
              Kırşehir mağazamızdaki güncel sıfır, 2. el cihazlar ve telefon aksesuarları.{' '}
              <button
                onClick={() => {
                  onSelectCategory('all');
                  setSelectedBrand('all');
                  setSelectedCondition('all');
                }}
                className="adar-see-all text-primary font-semibold hover:underline cursor-pointer"
              >
                Tümünü İnceleyin →
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {filteredProducts.length} Model Listelendi
            </span>
          </div>
        </div>

        {/* ========================================================
            TAB BUTTONS (Showcase categories strip)
            ======================================================== */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 rounded-custom text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            SUB-FILTERS (Brand & Condition Badges)
            ======================================================== */}
        <div className="w-full bg-white border border-gray-200 rounded-custom p-3 mb-6 flex flex-wrap items-center justify-between gap-3 shadow-2xs text-xs">

          {/* Brand Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-gray-400 font-bold uppercase text-[10px] me-1 shrink-0">Marka:</span>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${selectedBrand === brand
                  ? 'bg-dark text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {brand === 'all' ? 'Tüm Markalar' : brand}
              </button>
            ))}
          </div>

          {/* Condition Filter Pills */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-gray-400 font-bold uppercase text-[10px] me-1">Durum:</span>
            <button
              onClick={() => setSelectedCondition('all')}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors cursor-pointer ${selectedCondition === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Hepsi
            </button>
            <button
              onClick={() => setSelectedCondition('sifir')}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors cursor-pointer ${selectedCondition === 'sifir' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Sıfır
            </button>
            <button
              onClick={() => setSelectedCondition('ikinci-el')}
              className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors cursor-pointer ${selectedCondition === 'ikinci-el' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              2. El
            </button>
          </div>
        </div>

        {/* Active Search Notification */}
        {searchQuery && (
          <div className="w-full mb-4 p-3 bg-sky-50 border border-sky-200 rounded-custom text-xs flex items-center justify-between text-sky-950">
            <span>
              <strong>"{searchQuery}"</strong> araması için <strong>{filteredProducts.length}</strong> sonuç bulundu.
            </span>
            <button
              onClick={() => onSelectCategory('all')}
              className="text-primary font-bold underline cursor-pointer"
            >
              Aramayı Temizle
            </button>
          </div>
        )}

        {/* ========================================================
            PRODUCTS GRID (Card Styling - NO PRICES)
            ======================================================== */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={onOpenProductModal}
              />
            ))}
          </div>
        ) : (
          <div className="w-full bg-white rounded-custom border border-gray-200 p-12 text-center my-6">
            <Smartphone className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800 mb-1">Aradığınız Kriterde Model Bulunamadı</h3>
            <p className="text-xs text-gray-500 mb-4">
              Filtreleri sıfırlayarak mağazamızdaki diğer sıfır, 2. el telefon ve orijinal telefon aksesuarlarını görebilirsiniz.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSelectedBrand('all');
                setSelectedCondition('all');
              }}
              className="bg-primary hover:bg-[#006cb3] text-white text-xs font-bold px-4 py-2 rounded-custom transition cursor-pointer"
            >
              Tüm Modelleri Göster
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
