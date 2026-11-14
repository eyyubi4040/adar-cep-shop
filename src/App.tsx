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
import { parseRoute, navigateTo, type RouteInfo } from './utils/router';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Sync state from current clean URL
  const applyRoute = (route: RouteInfo) => {
    // If arriving with legacy hash, replace URL with clean pathname
    if (typeof window !== 'undefined' && window.location.hash) {
      let cleanPath = '/';
      if (route.type === 'brand') cleanPath = `/marka/${route.brandId}`;
      else if (route.type === 'category') cleanPath = `/kategori/${route.categoryId}`;
      else if (route.type === 'product') cleanPath = `/urun/${route.productId}`;
      else if (route.type === 'section') {
        if (route.sectionId === 'takas') cleanPath = '/takas';
        else if (route.sectionId === 'magaza') cleanPath = '/magaza';
        else if (route.sectionId === 'vitrin') cleanPath = '/vitrin';
        else if (route.sectionId === 'sss') cleanPath = '/sss';
      }
      window.history.replaceState(null, '', cleanPath);
    }

    if (route.type === 'brand') {
      setSelectedBrand(route.brandId);
      setSelectedProduct(null);
      const brandNames: Record<string, string> = {
        apple: 'Apple iPhone',
        samsung: 'Samsung Galaxy',
        spigen: 'Spigen Aksesuar',
        anker: 'Anker Hızlı Şarj',
        xiaomi: 'Xiaomi Modelleri',
        oppo: 'Oppo Modelleri'
      };
      const titlePrefix = brandNames[route.brandId] || route.brandId.toUpperCase();
      document.title = `${titlePrefix} | Adar Cep Shop Kırşehir`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route.type === 'category') {
      setSelectedBrand(null);
      setSelectedCategory(route.categoryId);
      setSelectedProduct(null);
      const catNames: Record<string, string> = {
        'sifir-telefon': 'Sıfır Cep Telefonları',
        'ikinci-el-telefon': '2. El Telefon Alım-Satım',
        'kilif-kapak': 'Telefon Kılıfları & Kapak',
        'ekran-koruyucu': 'Ekran Koruyucu Camlar',
        'sarj-kablo': 'Şarj Cihazları & Kablolar',
        'ses-kulaklik': 'Kulaklık & Ses Sistemleri'
      };
      const catTitle = catNames[route.categoryId] || 'Kategori';
      document.title = `${catTitle} | Adar Cep Shop Kırşehir`;
      setTimeout(() => {
        const el = document.getElementById('vitrin');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (route.type === 'product') {
      const found = products.find(
        (p) => p.id.toLowerCase() === route.productId.toLowerCase()
      );
      if (found) {
        setSelectedProduct(found);
        document.title = `${found.title} | Adar Cep Shop Kırşehir`;
      }
    } else if (route.type === 'section') {
      setSelectedBrand(null);
      setSelectedProduct(null);
      const sectionTargetId =
        route.sectionId === 'takas'
          ? 'degerleme'
          : route.sectionId === 'magaza'
          ? 'magaza'
          : route.sectionId === 'sss'
          ? 'sss'
          : 'vitrin';

      if (route.sectionId === 'takas') {
        document.title = 'Cihazını Sat & Takas Sistemi | Adar Cep Shop Kırşehir';
      } else if (route.sectionId === 'magaza') {
        document.title = 'Mağazamız & İletişim | Adar Cep Shop Kırşehir';
      } else if (route.sectionId === 'sss') {
        document.title = 'Sıkça Sorulan Sorular | Adar Cep Shop Kırşehir';
      }

      setTimeout(() => {
        const el = document.getElementById(sectionTargetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      // Home
      setSelectedBrand(null);
      setSelectedProduct(null);
      document.title = 'Adar Cep Shop | Kırşehir Sıfır & 2. El Cep Telefonu ve Telefon Aksesuarları';
    }
  };

  useEffect(() => {
    // Initial route parse
    if (typeof window !== 'undefined') {
      const initialRoute = parseRoute(window.location.pathname, window.location.hash);
      applyRoute(initialRoute);
    }

    const handlePopState = () => {
      const currentRoute = parseRoute(window.location.pathname, window.location.hash);
      applyRoute(currentRoute);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept click on internal <a> tags so they don't reload the page and use clean URLs
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('javascript:') ||
        target.getAttribute('target') === '_blank'
      ) {
        return;
      }

      let targetPath = href;
      if (href === '#degerleme' || href === '#takas') targetPath = '/takas';
      else if (href === '#magaza' || href === '#iletisim') targetPath = '/magaza';
      else if (href === '#vitrin') targetPath = '/vitrin';
      else if (href === '#sss') targetPath = '/sss';

      if (targetPath.startsWith('/') || targetPath.startsWith('#')) {
        e.preventDefault();
        navigateTo(targetPath, { scroll: !['/takas', '/magaza', '/vitrin', '/sss'].includes(targetPath) });
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const handleSelectBrand = (brandId: string) => {
    navigateTo(`/marka/${brandId}`);
  };

  const handleBackToHome = () => {
    navigateTo('/');
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      navigateTo('/');
      const vitrinEl = document.getElementById('vitrin');
      if (vitrinEl) vitrinEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo(`/kategori/${catId}`, { scroll: false });
      const vitrinEl = document.getElementById('vitrin');
      if (vitrinEl) vitrinEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
    navigateTo(`/urun/${product.id}`, { scroll: false });
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/urun/')) {
      if (selectedBrand) {
        navigateTo(`/marka/${selectedBrand}`, { scroll: false });
      } else if (selectedCategory && selectedCategory !== 'all') {
        navigateTo(`/kategori/${selectedCategory}`, { scroll: false });
      } else {
        navigateTo('/', { scroll: false });
      }
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (selectedBrand && query.trim()) {
      navigateTo('/', { scroll: false });
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
