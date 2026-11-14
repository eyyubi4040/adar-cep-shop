import React, { useState, useMemo } from 'react';
import { ArrowLeft, ShieldCheck, Sparkles, Filter, Search, RotateCcw, Smartphone, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { BrandLogo, AppleLogo, SamsungLogo, XiaomiLogo, OppoLogo, SpigenLogo, AnkerLogo, WhatsAppIcon } from './BrandLogos';
import { storeInfo } from '../data/storeInfo';

interface BrandPageProps {
  brandId: string;
  products: Product[];
  onBack: () => void;
  onSelectBrand: (brandId: string) => void;
  onOpenProductModal: (product: Product) => void;
}

interface BrandConfig {
  id: string;
  name: string;
  shortName: string;
  title: string;
  badge: string;
  tagline: string;
  desc: string;
  bannerImage: string;
  accentGradient: string;
  logoComponent: React.ReactNode;
}

export const BrandPage: React.FC<BrandPageProps> = ({
  brandId,
  products,
  onBack,
  onSelectBrand,
  onOpenProductModal
}) => {
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const brandConfigs: Record<string, BrandConfig> = {
    apple: {
      id: 'apple',
      name: 'Apple',
      shortName: 'Apple',
      title: 'Apple iPhone & Orijinal Aksesuar Koleksiyonu',
      badge: 'Sıfır & 2. El Garantili',
      tagline: 'iPhone 18 Pro Max, 18 Pro, 17 Pro, 16 ve 15 Serisi',
      desc: 'En yeni Apple A20 Pro işlemcili kapalı kutu iPhone 18 Pro Max ve 18 Pro modelleri ile 40 nokta donanım kontrolünden geçmiş garantili ikinci el cihazlar Kırşehir Adar Cep Shop güvencesiyle.',
      bannerImage: '/images/brands/brand_apple.jpg',
      accentGradient: 'from-slate-950 via-gray-900 to-[#0c1836]',
      logoComponent: <AppleLogo className="h-8 sm:h-10 w-auto text-white" />
    },
    samsung: {
      id: 'samsung',
      name: 'Samsung',
      shortName: 'Samsung',
      title: 'Samsung Galaxy & Galaxy AI Modelleri',
      badge: 'Galaxy AI Destekli',
      tagline: 'Galaxy S25 Ultra, S24 Ultra, S23 ve Galaxy A Serisi',
      desc: 'Snapdragon 8 Elite ve Galaxy AI teknolojili en yeni Galaxy S25 Ultra, S24 Ultra ve dayanıklı Galaxy A modelleri sıfır ve garantili ikinci el seçenekleriyle.',
      bannerImage: '/images/brands/brand_samsung.jpg',
      accentGradient: 'from-[#030b2e] via-[#091b4f] to-slate-950',
      logoComponent: <SamsungLogo className="h-6 sm:h-7 w-auto text-white" />
    },
    oppo: {
      id: 'oppo',
      name: 'Oppo',
      shortName: 'Oppo',
      title: 'Oppo Reno & A Serisi Akıllı Telefonlar',
      badge: 'Portre Uzmanı & 67W-80W Şarj',
      tagline: 'Reno 11 Pro 5G, Reno 10 ve A Serisi Modeller',
      desc: 'Gelişmiş telefoto portre kameraları, göz alıcı kavisli 3D AMOLED ekranları ve SuperVOOC süper hızlı şarj teknolojisiyle Oppo modelleri Adar Cep Shop reyonlarında.',
      bannerImage: '/images/banners/banner-phones.jpg',
      accentGradient: 'from-[#022818] via-[#043d26] to-slate-950',
      logoComponent: <OppoLogo className="h-6 sm:h-7 w-auto text-white" />
    },
    xiaomi: {
      id: 'xiaomi',
      name: 'Xiaomi',
      shortName: 'Xiaomi',
      title: 'Xiaomi & Redmi Serisi Akıllı Telefonlar',
      badge: 'Leica Kamera & 120W Şarj',
      tagline: 'Xiaomi 14T Pro, 13T ve Redmi Note 13 Serisi',
      desc: 'Leica profesyonel optik lensleri, 120W HyperCharge ultra hızlı şarj gücü ve yüksek performanslı Redmi modelleri resmi distribütör garantisiyle.',
      bannerImage: '/images/banners/banner-phones.jpg',
      accentGradient: 'from-[#331400] via-[#4d1f00] to-slate-950',
      logoComponent: <XiaomiLogo className="h-8 sm:h-9 w-auto text-white" />
    },
    spigen: {
      id: 'spigen',
      name: 'Spigen',
      shortName: 'Spigen',
      title: 'Spigen Zırhlı Kılıf, MagSafe & 9D Cam Çözümleri',
      badge: 'Askeri Düzey Koruma (MIL-STD)',
      tagline: 'Tough Armor, Ultra Hybrid ve Glas.tR EZ Fit',
      desc: 'Hava yastıklı darbe emici zırhlı kapaklar, sararmaya dayanıklı MagSafe şeffaf kılıflar ve parmak izi tutmayan 9D hayalet gizlilik temperli cam koruyucular.',
      bannerImage: '/images/brands/brand_spigen.jpg',
      accentGradient: 'from-[#2b1202] via-[#381a05] to-slate-950',
      logoComponent: <SpigenLogo className="h-6 sm:h-7 w-auto text-white" />
    },
    anker: {
      id: 'anker',
      name: 'Anker',
      shortName: 'Anker',
      title: 'Anker GaN Hızlı Şarj, Kablo & Powerbankler',
      badge: 'GaNPrime Yeni Nesil Güç',
      tagline: '65W GaN Adaptörler, Kırılmaz Kablolar ve MagGo',
      desc: 'Telefon, tablet ve laptopları aynı anda en yüksek hızda güvenle şarj eden GaNPrime adaptörler, manyetik kablosuz powerbankler ve 25.000 bükülme testli kablolar.',
      bannerImage: '/images/brands/brand_anker.jpg',
      accentGradient: 'from-[#012236] via-[#02334f] to-slate-950',
      logoComponent: <AnkerLogo className="h-6 sm:h-7 w-auto text-white" />
    }
  };

  const currentBrand = brandConfigs[brandId.toLowerCase()] || brandConfigs.apple;

  // Filter products for this brand
  const brandProducts = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = p.brand.toLowerCase() === currentBrand.name.toLowerCase() ||
        (currentBrand.id === 'spigen' && (p.brand.toLowerCase() === 'spigen' || p.brand.toLowerCase() === 'armorglass')) ||
        (currentBrand.id === 'xiaomi' && (p.brand.toLowerCase() === 'xiaomi' || p.title.toLowerCase().includes('redmi')));

      if (!matchBrand) return false;

      // Condition filter
      if (selectedCondition === 'sifir' && p.condition !== 'sifir') return false;
      if (selectedCondition === 'ikinci-el' && p.condition !== 'ikinci-el') return false;
      if (selectedCondition === 'aksesuar' && p.category !== 'kilif-kapak' && p.category !== 'ekran-koruyucu' && p.category !== 'sarj-kablo' && p.category !== 'ses-kulaklik') return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.specs.color && p.specs.color.toLowerCase().includes(q)) ||
          (p.specs.storage && p.specs.storage.toLowerCase().includes(q));
      }

      return true;
    });
  }, [products, currentBrand, selectedCondition, searchQuery]);

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pb-16 animate-fadeIn">
      
      {/* 1. BREADCRUMB STRIP */}
      <div className="w-full bg-white border-b border-gray-200 py-3">
        <div className="max-w-[1448px] mx-auto px-4 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onBack}
              className="hover:text-primary transition font-medium cursor-pointer flex items-center gap-1"
            >
              <span>Ana Sayfa</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-400">Markalar</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-bold text-gray-900">{currentBrand.title}</span>
          </div>

          <button
            onClick={onBack}
            className="hidden sm:inline-flex items-center gap-1.5 font-bold text-primary hover:text-gray-900 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </button>
        </div>
      </div>

      {/* 2. BRAND HERO BANNER */}
      <div className={`w-full relative overflow-hidden bg-gradient-to-r ${currentBrand.accentGradient} text-white py-10 sm:py-16 border-b border-gray-800`}>
        {/* Background Visual with Subtle Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentBrand.bannerImage}
            alt={currentBrand.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="max-w-[1448px] mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
                  {currentBrand.logoComponent}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentBrand.badge}</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                {currentBrand.title}
              </h1>

              <p className="text-xs sm:text-base text-gray-300 leading-relaxed max-w-xl">
                {currentBrand.desc}
              </p>

              {/* Guarantees Row */}
              <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-gray-200">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Kırşehir Merkez Mağaza Güvencesi</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>6-12 Ay Yazılı Mağaza Garantisi</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 max-w-sm shrink-0">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  Doğrudan Mağaza İletişimi
                </span>
                <h3 className="text-base font-bold text-white mb-1">
                  {currentBrand.name} Stok ve Fiyat Danışma
                </h3>
                <p className="text-xs text-gray-300">
                  İstediğiniz modelin mağazamızdaki güncel stok durumu, renk ve hafıza seçenekleri için tek tıkla WhatsApp'tan yazın.
                </p>
              </div>

              <a
                href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                  `Merhaba Adar Cep Shop, ${currentBrand.name} modelleriniz ve güncel stok durumu hakkında bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp'tan Anında Bilgi Al</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 3. QUICK BRAND SWITCHER TABS */}
      <div className="w-full bg-white border-b border-gray-200 py-3 sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1448px] mx-auto px-4 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden lg:inline-block mr-1">
              Marka Değiştir:
            </span>
            {Object.values(brandConfigs).map((b) => (
              <button
                key={b.id}
                onClick={() => onSelectBrand(b.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                  b.id === currentBrand.id
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <BrandLogo brand={b.shortName} className="h-3.5 w-auto" monochrome={b.id === currentBrand.id} />
                <span>{b.shortName}</span>
              </button>
            ))}
          </div>

          <button
            onClick={onBack}
            className="text-xs font-bold text-gray-600 hover:text-primary transition shrink-0 ml-auto flex items-center gap-1 cursor-pointer"
          >
            <span>Tüm Vitrine Dön</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4. MAIN CATALOG BODY */}
      <div className="max-w-[1448px] mx-auto px-4 mt-8">
        
        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          
          {/* Condition Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedCondition('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCondition === 'all'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Tüm Modeller ({products.filter(p => p.brand.toLowerCase() === currentBrand.name.toLowerCase() || (currentBrand.id === 'spigen' && (p.brand.toLowerCase() === 'spigen' || p.brand.toLowerCase() === 'armorglass')) || (currentBrand.id === 'xiaomi' && (p.brand.toLowerCase() === 'xiaomi' || p.title.toLowerCase().includes('redmi')))).length})
            </button>

            <button
              onClick={() => setSelectedCondition('sifir')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCondition === 'sifir'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Sıfır Kapalı Kutu
            </button>

            <button
              onClick={() => setSelectedCondition('ikinci-el')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCondition === 'ikinci-el'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Garantili 2. El
            </button>

            <button
              onClick={() => setSelectedCondition('aksesuar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCondition === 'aksesuar'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Orijinal Aksesuarlar
            </button>
          </div>

          {/* Search inside this brand */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`${currentBrand.name} modellerinde ara...`}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[11px] text-gray-400 hover:text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer font-bold"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Product Count & Notice */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 px-1">
          <span>
            Toplam <strong className="text-gray-900">{brandProducts.length}</strong> {currentBrand.name} ürünü listeleniyor.
          </span>
          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-semibold">
            Tüm cihazlar Kırşehir mağazamızda fiziki olarak incelenebilir
          </span>
        </div>

        {/* Products Grid */}
        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {brandProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={onOpenProductModal}
              />
            ))}
          </div>
        ) : (
          <div className="w-full bg-white rounded-2xl border border-gray-200 p-12 text-center my-6">
            <Smartphone className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800 mb-1">
              Aradığınız kriterde {currentBrand.name} modeli bulunamadı
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Arama filtresini temizleyerek mağazamızdaki diğer {currentBrand.name} modellerine göz atabilirsiniz.
            </p>
            <button
              onClick={() => {
                setSelectedCondition('all');
                setSearchQuery('');
              }}
              className="bg-primary hover:bg-[#006cb3] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Filtreleri Temizle</span>
            </button>
          </div>
        )}

        {/* Bottom Trade-in Banner for this Brand */}
        <div className="mt-12 bg-gradient-to-r from-[#0c1836] to-[#0f2854] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-gray-800">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Kırşehir İçi Takas & Nakit Alım</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Eski Telefonunu Getir, {currentBrand.name} Modellerine Geç!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Mevcut telefonunuzu Adar Cep Shop Kırşehir mağazamıza getirin, 15 dakikada ücretsiz ekspertiz yapıp en yüksek değerden nakit alalım veya dilediğiniz sıfır/2. el {currentBrand.name} modeliyle takas edelim.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="#degerleme"
              onClick={onBack}
              className="bg-primary hover:bg-[#006cb3] text-white text-xs font-bold px-5 py-3 rounded-xl transition shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Eski Cihazını Değerle</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={onBack}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold px-5 py-3 rounded-xl transition cursor-pointer"
            >
              Tüm Vitrini Gör
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
