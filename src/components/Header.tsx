import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  Smartphone,
  ShieldCheck,
  Grid
} from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { products } from '../data/products';
import { MegaMenu } from './MegaMenu';
import { WhatsAppWhiteIcon } from './BrandLogos';
import type { Product } from '../types';

interface HeaderProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenProductModal: (product: Product) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  onResetHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSelectCategory,
  onOpenProductModal,
  onSearch,
  searchQuery,
  onResetHome
}) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Live search preview results
  const liveSearchResults = searchQuery.trim().length > 1
    ? products.filter(p => {
      const q = searchQuery.toLowerCase();
      return p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
    }).slice(0, 5)
    : [];

  // Close live search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLiveItemClick = (product: Product) => {
    onOpenProductModal(product);
    setSearchFocused(false);
  };

  const navMenuItems = [
    { label: 'Öne Çıkanlar', catId: 'all', badge: null },
    { label: 'Sıfır Cep Telefonları', catId: 'sifir-telefon', badge: 'Apple / Samsung' },
    { label: '2. El Telefon Alım-Satım', catId: 'ikinci-el-telefon', badge: 'Garantili' },
    { label: 'Telefon Kılıfları', catId: 'kilif-kapak', badge: 'MagSafe' },
    { label: 'Ekran Koruyucular', catId: 'ekran-koruyucu', badge: '9D Cam' },
    { label: 'Şarj & Kablo', catId: 'sarj-kablo', badge: null },
    { label: 'Kulaklık & Ses', catId: 'ses-kulaklik', badge: null },
    { label: 'Cihazını Sat & Takas', href: '#degerleme', badge: 'Nakit Alım' },
    { label: 'Mağazamız & İletişim', href: '#magaza', badge: null },
  ];

  return (
    <div id="relation-585" className="w-full flex flex-wrap folder-header sticky top-0 z-50 shadow-xs">
      <header className="w-full relative z-50 mb-0 header text-sm leading-none bg-white">

        {/* ========================================================
            ROW 1: TOP BAR (Adar style dark bar, single language)
            ======================================================== */}
        <div className="w-full bg-dark text-white text-xs border-b border-[#3e3c42] relative z-20">
          <div className="w-full px-4">
            <div className="w-full flex items-center justify-between py-2 max-h-16">

              {/* Left: Support Phone */}
              <div className="hidden lg:flex items-center gap-2">
                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="font-light hover:text-primary transition flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span className="text-gray-400">Danışma Hattı:</span>
                  <span className="font-semibold text-white tracking-wide" dir="ltr">{storeInfo.phone}</span>
                </a>
              </div>

              {/* Center: Store Announcement */}
              <div className="w-full lg:w-2/4 flex justify-center text-center">
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                  <span className="font-medium text-gray-200">
                    <strong className="text-white font-bold">Adar Cep Shop Kırşehir:</strong> Sıfır & 2. El Telefon Alım-Satımı ve Telefon Aksesuarları
                  </span>
                </div>
              </div>

              {/* Right: Working Hours & Store Address */}
              <div className="hidden lg:flex items-center justify-end gap-3 text-[11px] text-gray-300">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Pzt-Cmt: 09:00 - 20:30</span>
                </div>
                <span className="text-[#5B5A5C]">|</span>
                <a
                  href="#magaza"
                  className="flex items-center gap-1 hover:text-primary transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Kırşehir Merkez</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 2: MAIN HEADER (Logo, Search, Direct Contact Actions)
            ======================================================== */}
        <div className="w-full bg-white relative z-10 border-b border-gray-100">
          <div className="w-full px-4 py-2.5">
            <div className="flex items-center justify-between gap-4">

              {/* Mobile Menu Toggle */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-1.5 rounded-custom text-gray-800 hover:text-primary hover:bg-gray-100 transition"
                  aria-label="Menü"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Brand Logo */}
              <div className="flex shrink-0">
                <a
                  href="/"
                  onClick={(e) => {
                    if (onResetHome) {
                      e.preventDefault();
                      onResetHome();
                    }
                  }}
                  className="flex items-center py-1 cursor-pointer"
                >
                  <img
                    src="/adarcepshoplogo.png"
                    alt="Adar Cep Shop - Kırşehir Sıfır & 2. El Cep Telefonu ve Aksesuar"
                    className="h-10 sm:h-12 w-auto max-w-[220px] sm:max-w-[260px] object-contain"
                  />
                </a>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl mx-2 hidden sm:block relative" ref={searchContainerRef}>
                <div className="relative w-full">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    placeholder="Ürün, marka veya model ara (örn: iPhone 18 Pro Max, S25 Ultra, Kılıf...)"
                    className="form-control w-full !bg-[#f8f9fa] !h-10 !border !border-gray-200 focus:!border-primary !rounded-full !text-xs !px-4 !pe-10 transition-all outline-none"
                    aria-label="Arama"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const vitrin = document.getElementById('vitrin');
                      if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="absolute inset-y-0 end-0 px-3.5 flex items-center justify-center text-gray-500 hover:text-primary transition-colors cursor-pointer"
                    aria-label="Ara"
                  >
                    <Search className="w-4 h-4 text-primary" />
                  </button>
                </div>

                {/* Live Search Results Popup */}
                {searchFocused && liveSearchResults.length > 0 && (
                  <div className="absolute top-full mt-2 inset-x-0 bg-white rounded-custom shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-gray-800">Bulunan Modeller ({liveSearchResults.length})</span>
                    </div>
                    <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                      {liveSearchResults.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => handleLiveItemClick(prod)}
                          className="p-3 flex items-center gap-3 hover:bg-gray-50 transition cursor-pointer group"
                        >
                          <img
                            src={prod.image}
                            alt={prod.title}
                            className="w-12 h-12 object-contain rounded bg-white border border-gray-100 p-1"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold uppercase text-primary">{prod.brand}</span>
                              <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded font-semibold">
                                {prod.conditionBadge}
                              </span>
                            </div>
                            <h4 className="text-xs font-semibold text-gray-900 group-hover:text-primary truncate">
                              {prod.title}
                            </h4>
                          </div>
                          <span className="text-xs font-bold text-emerald-600 shrink-0">Stokta ✓</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 bg-gray-50 text-center border-t border-gray-100">
                      <button
                        onClick={() => {
                          setSearchFocused(false);
                          const vitrin = document.getElementById('vitrin');
                          if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-primary hover:underline"
                      >
                        Tüm Sonuçları Gör →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                    'Merhaba Adar Cep Shop, modelleriniz ve aksesuarlarınız hakkında bilgi almak istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 sm:px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xs transition-colors"
                  title="WhatsApp ile İletişime Geçin"
                >
                  <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                {/* Call Store Button */}
                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="border border-gray-200 hover:border-primary hover:text-primary text-gray-800 text-xs font-semibold px-3 py-2 rounded-full hidden md:flex items-center gap-1.5 transition-colors"
                  title="Telefonla Ulaşın"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>{storeInfo.phone}</span>
                </a>

                {/* Store Location Button */}
                <a
                  href="#magaza"
                  className="border border-gray-200 hover:border-primary hover:text-primary text-gray-800 text-xs font-semibold px-3 py-2 rounded-full hidden xl:flex items-center gap-1.5 transition-colors"
                  title="Kırşehir Mağaza Adresi ve Harita"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Mağazamız</span>
                </a>
              </div>
            </div>

            {/* Mobile Search Row */}
            <div className="w-full mt-2 sm:hidden relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Ürün veya model ara..."
                className="w-full bg-[#f8f9fa] h-9 border border-gray-200 rounded-full text-xs px-4 pe-9 outline-none focus:border-primary"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 3: CATEGORY NAVIGATION BAR (Adar signature red button + links)
            ======================================================== */}
        <div className="w-full hidden lg:block shadow-xs bg-white border-y border-gray-200 relative">
          <div className="w-full px-4">
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-1">
                {/* ADAR SIGNATURE LOGO-CYAN "TÜM KATEGORİLER" BUTTON */}
                <div className="relative">
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className="bg-primary hover:bg-[#006cb3] text-white font-bold text-xs uppercase px-5 h-11 flex items-center gap-2 rounded-t-custom transition-all shadow-xs cursor-pointer select-none"
                    aria-label="Tüm Kategoriler Menüsü"
                  >
                    <Menu className="w-4 h-4" />
                    <span>TÜM KATEGORİLER</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isMegaMenuOpen && (
                    <div
                      className="absolute top-full left-0 z-50 w-[720px] bg-white shadow-2xl rounded-b-custom border border-gray-200 p-6 animate-fadeIn"
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <MegaMenu
                        isOpen={isMegaMenuOpen}
                        onSelectCategory={(id) => {
                          onSelectCategory(id);
                          setIsMegaMenuOpen(false);
                        }}
                        onClose={() => setIsMegaMenuOpen(false)}
                      />
                    </div>
                  )}
                </div>

                {/* Horizontal Category Nav Items */}
                <nav className="flex items-center overflow-x-auto no-scrollbar ms-2" data-toggle="menu">
                  {navMenuItems.map((item, idx) => {
                    const isAnchor = !!item.href;
                    if (isAnchor) {
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-center font-semibold whitespace-nowrap text-xs px-3.5 h-11 transition hover:text-primary text-gray-800 gap-1.5 relative border-b-2 border-transparent hover:border-primary"
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[9px] bg-sky-100 text-primary font-bold px-1.5 py-0.2 rounded uppercase">
                              {item.badge}
                            </span>
                          )}
                        </a>
                      );
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (item.catId) onSelectCategory(item.catId);
                          const vitrin = document.getElementById('vitrin');
                          if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center font-semibold whitespace-nowrap text-xs px-3.5 h-11 transition hover:text-primary text-gray-800 gap-1.5 cursor-pointer relative border-b-2 border-transparent hover:border-primary"
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${item.badge.includes('Garantili')
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-primary/10 text-primary'
                            }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Right: Store City */}
              <div className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Kırşehir Merkez</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE DRAWER MENU
            ======================================================== */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden bg-black/60 flex">
            <div className="w-4/5 max-w-sm bg-white h-full overflow-y-auto p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
                  <img
                    src="/adarcepshoplogo.png"
                    alt="Adar Cep Shop"
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded text-gray-600 hover:text-primary"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-custom mb-4 text-xs">
                  <div className="font-bold text-gray-900 mb-1">Adar Cep Shop Kırşehir</div>
                  <div className="text-gray-600">Sıfır & 2. El Telefon Alım-Satımı ve Telefon Aksesuarları</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase text-gray-400 px-2 py-1">Kategoriler</div>
                  {navMenuItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (item.href) {
                          const target = document.querySelector(item.href);
                          if (target) target.scrollIntoView({ behavior: 'smooth' });
                        } else if (item.catId) {
                          onSelectCategory(item.catId);
                          const vitrin = document.getElementById('vitrin');
                          if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-custom text-xs font-semibold text-gray-800 hover:bg-gray-100 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] bg-sky-50 text-primary font-bold px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Footer Contact */}
              <div className="pt-4 border-t border-gray-200 mt-6 space-y-2">
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  className="w-full bg-[#25D366] text-white py-2.5 rounded-custom text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
                >
                  <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp ile İletişim</span>
                </a>
                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="w-full bg-dark text-white py-2.5 rounded-custom text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{storeInfo.phone} Arayın</span>
                </a>
              </div>
            </div>
            <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)}></div>
          </div>
        )}
      </header>
    </div>
  );
};
