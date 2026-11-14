import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CategoryBar } from './components/CategoryBar';
import { BrandAccordion } from './components/BrandAccordion';
import { ProductShowcase } from './components/ProductShowcase';
import { BannerPromoGrid } from './components/BannerPromoGrid';
import { TradeInCalculator } from './components/TradeInCalculator';
import { BrandSlider } from './components/BrandSlider';
import { StoreSection } from './components/StoreSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { FloatingContact } from './components/FloatingContact';
import { BrandPage } from './components/BrandPage';
import { products } from './data/products';
import type { Product } from './types';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dedicated Brand Showcase Page state with URL hash routing support
  const [selectedBrand, setSelectedBrand] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#marka/')) {
      return window.location.hash.replace('#marka/', '');
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#marka/')) {
        setSelectedBrand(hash.replace('#marka/', ''));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash.startsWith('#marka')) {
        setSelectedBrand(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectBrand = (brandId: string) => {
    setSelectedBrand(brandId);
    window.location.hash = `marka/${brandId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedBrand(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (selectedBrand) {
      setSelectedBrand(null);
      window.location.hash = '';
    }
    const vitrinEl = document.getElementById('vitrin');
    if (vitrinEl) {
      vitrinEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (selectedBrand && query.trim()) {
      setSelectedBrand(null);
      window.location.hash = '';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col text-[#2c2a30]">
      {/* 1. HEADER (Top bar, Search pill, WhatsApp/Phone action, Logo Cyan "TÜM KATEGORİLER" button + Menu) */}
      <Header
        onSelectCategory={handleSelectCategory}
        onOpenProductModal={handleOpenProductModal}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onResetHome={handleBackToHome}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="flex-1">
        {selectedBrand ? (
          /* ========================================================
             DEDICATED BRAND SHOWCASE PAGE
             ======================================================== */
          <BrandPage
            brandId={selectedBrand}
            products={products}
            onBack={handleBackToHome}
            onSelectBrand={handleSelectBrand}
            onOpenProductModal={handleOpenProductModal}
          />
        ) : (
          /* ========================================================
             HOME PAGE SECTIONS
             ======================================================== */
          <>
            {/* 2. HERO SLIDER (Animated track, 1st slide 'ad.jpeg', Touch/Swipe & Auto-advance) */}
            <HeroSlider onSelectCategory={handleSelectCategory} />

            {/* 3. MARQUEE TICKER (Kayan duyuru bandı) */}
            <MarqueeTicker />

            {/* 4. QUICK CATEGORY CARDS (Hızlı Kategori Kartları) */}
            <CategoryBar
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />

            {/* 5. MARKALARI TANIYALIM (Yan Yana Akordiyon & "Modelleri Vitrinde Gör" -> Marka Sayfası) */}
            <BrandAccordion
              onSelectCategory={handleSelectCategory}
              onSelectBrand={handleSelectBrand}
            />

            {/* 6. TABBED PRODUCT SHOWCASE (Az ve Öz: En Çok Tercih Edilen Seçkin Modeller) */}
            <ProductShowcase
              products={products}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              onOpenProductModal={handleOpenProductModal}
              searchQuery={searchQuery}
            />

            {/* 7. DOUBLE BANNER PROMO (Kılıf & Takas Tanıtımı) */}
            <BannerPromoGrid onSelectCategory={handleSelectCategory} />

            {/* 8. TRADE-IN & VALUATION CALCULATOR (Cihazını Sat & Takas) */}
            <TradeInCalculator />

            {/* 9. BRANDS CAROUSEL (Markalarımız: Apple, Samsung, Xiaomi, Oppo, Spigen, Anker...) */}
            <BrandSlider
              onSelectCategory={handleSelectCategory}
              onSelectBrand={handleSelectBrand}
            />

            {/* 10. KIRŞEHİR MERKEZ STORE & GOOGLE MAPS SECTION */}
            <StoreSection />

            {/* 11. FREQUENTLY ASKED QUESTIONS (Akordiyon SSS) */}
            <FaqSection />
          </>
        )}
      </main>

      {/* 12. FOOTER (Kurumsal Bilgiler & İletişim) */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* 13. PRODUCT DETAIL MODAL (WhatsApp & Arama Butonlu) */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
      />

      {/* 14. FLOATING WHATSAPP & PHONE ACTION BUTTON */}
      <FloatingContact hide={isMobileMenuOpen || Boolean(selectedProduct)} />
    </div>
  );
}

export default App;
