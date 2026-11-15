import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { products } from '../data/products';
import { MegaMenu } from './MegaMenu';
import { WhatsAppWhiteIcon, InstagramIcon } from './BrandLogos';
import type { Product } from '../types';

interface HeaderProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenProductModal: (product: Product) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  onResetHome?: () => void;
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSelectCategory,
  onOpenProductModal,
  onSearch,
  searchQuery,
  onResetHome,
  isMobileMenuOpen: propIsMobileMenuOpen,
  setIsMobileMenuOpen: propSetIsMobileMenuOpen
}) => {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const isMobileMenuOpen = propIsMobileMenuOpen !== undefined ? propIsMobileMenuOpen : internalMobileMenuOpen;
  const setIsMobileMenuOpen = propSetIsMobileMenuOpen || setInternalMobileMenuOpen;
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync body scroll & attribute when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-mobile-menu-open', 'true');
    } else {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // Keyboard shortcut (Ctrl+K or Cmd+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setSearchFocused(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    { label: 'Sıfır Telefon', catId: 'sifir-telefon', badge: null },
    { label: '2. El Telefon', catId: 'ikinci-el-telefon', badge: 'Garantili' },
    { label: 'Kılıf & Kapak', catId: 'kilif-kapak', badge: null },
    { label: 'Ekran Koruma', catId: 'ekran-koruyucu', badge: null },
    { label: 'Şarj & Kablo', catId: 'sarj-kablo', badge: null },
    { label: 'Kulaklık & Ses', catId: 'ses-kulaklik', badge: null },
    { label: 'Cihazını Sat', href: '/takas', badge: 'Nakit' },
    { label: 'Mağazamız & İletişim', href: '/magaza', badge: null },
  ];

  return (
    <div id="relation-585" className="w-full flex flex-wrap folder-header sticky top-0 z-50 shadow-sm">
      <header className="w-full relative z-50 mb-0 header text-sm leading-none bg-white">

        {/* ========================================================
            ROW 1: TOP NOTIFICATION BAR (Deep Navy Glass Style)
            ======================================================== */}
        <div className="w-full bg-[#080e1e] text-slate-300 text-xs border-b border-slate-800/80 relative z-20">
          <div className="max-w-[1448px] mx-auto px-3 sm:px-6">
            <div className="w-full flex items-center justify-between py-2 min-h-[36px]">

              {/* Left: Support Phone */}
              <div className="hidden lg:flex items-center gap-2">
                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0084d6]" />
                  <span className="text-slate-400 font-medium">Danışma Hattı:</span>
                  <span className="font-bold text-white tracking-wide" dir="ltr">{storeInfo.phone}</span>
                </a>
              </div>

              {/* Center: Store Status & Announcement */}
              <div className="w-full lg:w-auto flex justify-center text-center">
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-slate-300">
                    <strong className="text-white font-bold">Kırşehir Mağazamız Açık:</strong> Sıfır & 2. El Telefon ve Orijinal Aksesuar Merkezi
                  </span>
                </div>
              </div>

              {/* Right: Instagram, Working Hours & Address */}
              <div className="hidden lg:flex items-center justify-end gap-3.5 text-[11px] text-slate-300">
                <a
                  href={storeInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
                  title="Adar Cep Shop Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span className="font-semibold text-slate-200 hover:text-pink-400">{storeInfo.instagramHandle}</span>
                </a>
                <span className="text-slate-700">|</span>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-[#0084d6]" />
                  <span>Pzt-Cmt: 09:00 - 20:30</span>
                </div>
                <span className="text-slate-700">|</span>
                <a
                  href="/magaza"
                  className="flex items-center gap-1 text-slate-300 hover:text-[#0084d6] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0084d6]" />
                  <span>Kırşehir Merkez</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 2: MAIN HEADER (Logo, Refined Search, Actions)
            ======================================================== */}
        <div className="w-full bg-white relative z-10 border-b border-slate-100">
          <div className="max-w-[1448px] mx-auto px-3 sm:px-6 py-3">
            <div className="flex items-center justify-between gap-4 lg:gap-8">

              {/* Mobile Menu Toggle */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-xl text-slate-800 hover:text-primary hover:bg-slate-100 active:scale-95 transition"
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
                  className="flex items-center py-0.5 cursor-pointer group"
                >
                  <img
                    src="/adarcepshoplogo.png?v=20261114v3"
                    alt="Adar Cep Shop - Kırşehir Sıfır & 2. El Cep Telefonu ve Aksesuar"
                    className="h-10 sm:h-12 w-auto max-w-[210px] sm:max-w-[250px] object-contain group-hover:opacity-95 transition-opacity"
                  />
                </a>
              </div>

              {/* Modern Search Bar with Shortcut Pill */}
              <div className="flex-1 max-w-xl mx-2 hidden sm:block relative" ref={searchContainerRef}>
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0084d6] transition-colors z-10">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    placeholder="iPhone 18 Pro Max, Galaxy S25 Ultra, Kılıf, Şarj..."
                    style={{ paddingLeft: '48px', paddingRight: '96px' }}
                    className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white h-11 border border-slate-200/90 focus:border-[#0084d6] focus:ring-4 focus:ring-[#0084d6]/10 rounded-full text-xs sm:text-sm transition-all outline-none text-slate-900 placeholder-slate-400 font-medium"
                    aria-label="Arama"
                  />
                  <div className="absolute inset-y-0 end-0 pe-2.5 flex items-center gap-1.5">
                    <span className="hidden md:inline-flex items-center px-2 py-0.5 text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded-md shadow-2xs">
                      Ctrl K
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const vitrin = document.getElementById('vitrin');
                        if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-2.5 py-1.5 rounded-full bg-[#0084d6] hover:bg-[#006cb3] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer"
                      aria-label="Ara"
                    >
                      <Search className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Live Search Results Popup (Frosted Glass Elevation) */}
                {searchFocused && liveSearchResults.length > 0 && (
                  <div className="absolute top-full mt-2 inset-x-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="p-3 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0084d6]" />
                        <span>Bulunan Modeller ({liveSearchResults.length})</span>
                      </span>
                      <span className="text-[11px] text-slate-400">Detay için tıklayın</span>
                    </div>
                    <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                      {liveSearchResults.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => handleLiveItemClick(prod)}
                          className="p-3 flex items-center gap-3 hover:bg-blue-50/50 transition cursor-pointer group"
                        >
                          <img
                            src={prod.image}
                            alt={prod.title}
                            className="w-12 h-12 object-contain rounded-xl bg-white border border-slate-100 p-1 group-hover:scale-105 transition-transform"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[10px] font-bold uppercase text-[#0084d6]">{prod.brand}</span>
                              <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
                                {prod.conditionBadge}
                              </span>
                            </div>
                            <h4 className="text-xs font-semibold text-slate-900 group-hover:text-[#0084d6] truncate">
                              {prod.title}
                            </h4>
                          </div>
                          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md shrink-0">
                            Stokta ✓
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="p-2.5 bg-slate-50/80 text-center border-t border-slate-100">
                      <button
                        onClick={() => {
                          setSearchFocused(false);
                          const vitrin = document.getElementById('vitrin');
                          if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-[#0084d6] hover:text-[#006cb3] transition"
                      >
                        Tüm Vitrini Gör →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Header Right Actions (Polished Pills) */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                    'Merhaba Adar Cep Shop, modelleriniz ve aksesuarlarınız hakkında bilgi almak istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white text-xs font-bold px-3.5 sm:px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm shadow-[#25D366]/25 transition-all"
                  title="WhatsApp ile İletişime Geçin"
                >
                  <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                {/* Call Store Button */}
                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="border border-slate-200 hover:border-[#0084d6] hover:text-[#0084d6] text-slate-800 text-xs font-semibold px-3.5 py-2.5 rounded-full hidden md:flex items-center gap-1.5 transition-colors"
                  title="Telefonla Ulaşın"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0084d6]" />
                  <span>{storeInfo.phone}</span>
                </a>

                {/* Store Location Button */}
                <a
                  href="/magaza"
                  className="border border-slate-200 hover:border-[#0084d6] hover:text-[#0084d6] text-slate-800 text-xs font-semibold px-3.5 py-2.5 rounded-full hidden xl:flex items-center gap-1.5 transition-colors"
                  title="Kırşehir Mağaza Adresi ve Harita"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0084d6]" />
                  <span>Mağazamız</span>
                </a>
              </div>
            </div>

            {/* Mobile Search Row */}
            <div className="w-full mt-2.5 sm:hidden relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Model veya aksesuar ara..."
                style={{ paddingLeft: '40px', paddingRight: '16px' }}
                className="w-full bg-slate-50 h-10 border border-slate-200 rounded-full text-xs outline-none focus:border-[#0084d6] focus:bg-white text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 3: CATEGORY NAVIGATION (Modern Glass & Auto Layout)
            ======================================================== */}
        <div className="w-full hidden lg:block bg-white border-y border-slate-200/90 relative">
          <div className="max-w-[1448px] mx-auto px-3 sm:px-6">
            <div className="flex items-center justify-between py-1 gap-2">

              <div className="flex items-center gap-2 min-w-0 flex-1">
                {/* ADAR SIGNATURE "TÜM KATEGORİLER" PILL */}
                <div className="relative shrink-0">
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    style={{ backgroundColor: '#0084d6', color: '#ffffff' }}
                    className="hover:!bg-[#006cb3] !text-white font-extrabold text-[11px] xl:text-xs uppercase px-3 xl:px-4 h-10 flex items-center gap-2 rounded-xl transition-all shadow-xs cursor-pointer select-none shrink-0"
                    aria-label="Tüm Kategoriler Menüsü"
                  >
                    <Menu className="w-4 h-4 text-white shrink-0" />
                    <span className="text-white whitespace-nowrap">TÜM KATEGORİLER</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-white transition-transform duration-200 shrink-0 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isMegaMenuOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 z-50 w-[1040px] max-w-[calc(100vw-32px)]"
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
                <nav className="flex items-center gap-0.5 xl:gap-1 overflow-x-auto no-scrollbar ms-1 min-w-0" data-toggle="menu">
                  {navMenuItems.map((item, idx) => {
                    const isAnchor = !!item.href;
                    if (isAnchor) {
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-center font-semibold whitespace-nowrap text-[11px] xl:text-xs px-2 xl:px-2.5 h-10 rounded-lg transition-colors hover:text-[#0084d6] hover:bg-slate-50 text-slate-700 gap-1 shrink-0"
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[9px] xl:text-[10px] bg-sky-50 text-[#0084d6] border border-sky-200/60 font-bold px-1.5 py-0.5 rounded-md uppercase">
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
                        className="flex items-center font-semibold whitespace-nowrap text-[11px] xl:text-xs px-2 xl:px-2.5 h-10 rounded-lg transition-colors hover:text-[#0084d6] hover:bg-slate-50 text-slate-700 gap-1 cursor-pointer shrink-0"
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className={`text-[9px] xl:text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase ${item.badge.includes('Garantili')
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                            : 'bg-sky-50 text-[#0084d6] border border-sky-200/60'
                            }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Right: Location Tag - only on wide screens so it never pushes the menu */}
              <div className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#0084d6]" />
                <span>Kırşehir Merkez</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE DRAWER MENU (Refined & Touch-Friendly)
            ======================================================== */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[10000] lg:hidden bg-slate-950/70 backdrop-blur-sm flex animate-in fade-in duration-200">
            <div className="w-4/5 max-w-sm bg-white h-full overflow-y-auto p-5 flex flex-col justify-between shadow-2xl relative z-10">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <img
                    src="/adarcepshoplogo.png?v=20261114v3"
                    alt="Adar Cep Shop"
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl mb-4 text-xs border border-slate-100">
                  <div className="font-bold text-slate-900 mb-0.5">Adar Cep Shop Kırşehir</div>
                  <div className="text-slate-500 text-[11px] leading-relaxed">Sıfır & 2. El Telefon Alım-Satımı ve Garantili Aksesuar Merkezi</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase text-slate-400 px-2 py-1 tracking-wider">Kategoriler</div>
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
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 hover:bg-blue-50/70 hover:text-[#0084d6] flex items-center justify-between transition min-h-[44px]"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] bg-sky-50 text-[#0084d6] font-bold px-2 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Footer Contact */}
              <div className="pt-4 border-t border-slate-100 mt-6 space-y-2">
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm shadow-[#25D366]/25 min-h-[44px]"
                >
                  <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp ile İletişim</span>
                </a>
                <a
                  href={storeInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <InstagramIcon className="w-4 h-4 fill-white shrink-0" />
                  <span>Instagram: {storeInfo.instagramHandle}</span>
                </a>
                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="w-full bg-[#080e1e] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-[#0084d6]" />
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
