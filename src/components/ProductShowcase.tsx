import React, { useState, useMemo } from 'react';
import { Sparkles, Smartphone, Check } from 'lucide-react';
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
    <div id="vitrin" className="w-full flex flex-wrap folder-showcase py-8 sm:py-14 bg-slate-50/70 border-t border-slate-200/80">
      <div className="w-full px-3 sm:px-6 max-w-[1448px] mx-auto">

        {/* ========================================================
            SHOWCASE HEADER
            ======================================================== */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0084d6] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Güncel Mağaza Vitrini</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Öne Çıkan Modeller & Aksesuarlar
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Kırşehir mağazamızdaki garantili sıfır, 2. el cihazlar ve orijinal koruyucu aksesuarlar.{' '}
              <button
                onClick={() => {
                  onSelectCategory('all');
                  setSelectedBrand('all');
                  setSelectedCondition('all');
                }}
                className="text-[#0084d6] font-semibold hover:underline cursor-pointer"
              >
                Filtreleri Sıfırla →
              </button>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {filteredProducts.length} Model Listelendi
            </span>
          </div>
        </div>

        {/* ========================================================
            TAB PILLS (Category Strip)
            ======================================================== */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2.5 mb-5">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0084d6] text-white shadow-md shadow-[#0084d6]/25 scale-102'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            SUB-FILTERS (Brand & Condition Segmented Toolbar)
            ======================================================== */}
        <div className="w-full bg-white border border-slate-200/90 rounded-2xl p-3.5 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xs text-xs">

          {/* Brand Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-slate-400 font-bold uppercase text-[10px] me-1 shrink-0 tracking-wider">Marka:</span>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedBrand === brand
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {brand === 'all' ? 'Tüm Markalar' : brand}
              </button>
            ))}
          </div>

          {/* Condition Filter Pills */}
          <div className="flex items-center gap-1.5 shrink-0 bg-slate-100/90 p-1 rounded-xl">
            <span className="text-slate-400 font-bold uppercase text-[10px] px-2 shrink-0 tracking-wider">Durum:</span>
            <button
              onClick={() => setSelectedCondition('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCondition === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hepsi
            </button>
            <button
              onClick={() => setSelectedCondition('sifir')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCondition === 'sifir' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sıfır
            </button>
            <button
              onClick={() => setSelectedCondition('ikinci-el')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCondition === 'ikinci-el' ? 'bg-purple-700 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. El
            </button>
          </div>
        </div>

        {/* Active Search Notification */}
        {searchQuery && (
          <div className="w-full mb-6 p-3.5 bg-blue-50 border border-blue-200/80 rounded-xl text-xs flex items-center justify-between text-blue-950">
            <span>
              <strong>"{searchQuery}"</strong> araması için <strong>{filteredProducts.length}</strong> sonuç bulundu.
            </span>
            <button
              onClick={() => onSelectCategory('all')}
              className="text-[#0084d6] font-bold hover:underline cursor-pointer"
            >
              Aramayı Temizle
            </button>
          </div>
        )}

        {/* ========================================================
            PRODUCTS GRID
            ======================================================== */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={onOpenProductModal}
              />
            ))}
          </div>
        ) : (
          <div className="w-full bg-white rounded-3xl border border-slate-200 p-12 text-center my-6 shadow-xs">
            <Smartphone className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">Aradığınız Kriterde Model Bulunamadı</h3>
            <p className="text-xs text-slate-500 mb-4 max-w-md mx-auto">
              Filtreleri sıfırlayarak mağazamızdaki diğer sıfır, 2. el telefon ve orijinal telefon aksesuarlarını inceleyebilirsiniz.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSelectedBrand('all');
                setSelectedCondition('all');
              }}
              className="bg-[#0084d6] hover:bg-[#006cb3] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition cursor-pointer shadow-md shadow-[#0084d6]/20"
            >
              Tüm Modelleri Göster
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
