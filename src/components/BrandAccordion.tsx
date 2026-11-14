import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { BrandLogo, AppleLogo, SamsungLogo, SpigenLogo, AnkerLogo, WhatsAppIcon } from './BrandLogos';

interface BrandAccordionProps {
  onSelectCategory: (categoryId: string) => void;
  onSelectBrand?: (brandId: string) => void;
}

interface BrandItem {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  desc: string;
  image: string;
  fallbackImage: string;
  models: string[];
  catId: string;
  logo: React.ReactNode;
}

export const BrandAccordion: React.FC<BrandAccordionProps> = ({ onSelectCategory, onSelectBrand }) => {
  const [activeBrandId, setActiveBrandId] = useState<string>('apple');

  const brands: BrandItem[] = [
    {
      id: 'apple',
      name: 'Apple iPhone',
      shortName: 'Apple',
      badge: 'Sıfır & 2. El Garantili',
      tagline: 'iPhone 18 Pro Max, 17 Pro, 16 ve 15 Serisi',
      desc: 'A20 Pro ve A19 Pro çipli en yeni Apple iPhone modelleri. Sıfır kapalı kutu ve 40 nokta donanım onaylı 6-12 ay mağaza garantili temiz 2. el cihazlar Kırşehir mağazamızda.',
      image: '/images/brands/brand_apple.jpg',
      fallbackImage: '/images/banners/banner-phones.jpg',
      models: ['iPhone 18 Pro Max', 'iPhone 18 Pro', 'iPhone 17 Pro Max', 'iPhone 16 Pro', 'iPhone 15'],
      catId: 'sifir-telefon',
      logo: <AppleLogo className="h-5 w-auto text-white" />
    },
    {
      id: 'samsung',
      name: 'Samsung Galaxy',
      shortName: 'Samsung',
      badge: 'Galaxy AI Destekli',
      tagline: 'Galaxy S25 Ultra, S24 Ultra ve A Serisi Modeller',
      desc: 'Snapdragon 8 Elite ve Galaxy AI yapay zeka destekli üst segment S25 Ultra, S24 Ultra ve bütçe dostu Galaxy A serisi. Sıfır kapalı kutu ve garantili 2. el seçenekleriyle.',
      image: '/images/brands/brand_samsung.jpg',
      fallbackImage: '/images/banners/banner-phones.jpg',
      models: ['Galaxy S25 Ultra', 'Galaxy S24 Ultra', 'Galaxy S23', 'Galaxy A55 5G', 'Galaxy A35'],
      catId: 'sifir-telefon',
      logo: <SamsungLogo className="h-4 w-auto text-white" />
    },
    {
      id: 'spigen',
      name: 'Spigen & Kılıf Koruması',
      shortName: 'Spigen',
      badge: 'Askeri Düzey Koruma',
      tagline: 'MagSafe Kılıflar, Zırhlı Kapaklar ve 9D Gizlilik Camları',
      desc: 'Güçlü MagSafe mıknatıslı şeffaf kılıflar, hava yastıklı düşme emici zırhlı kapaklar ve parmak izi tutmayan 9D hayalet temperli ekran koruyucu camlar.',
      image: '/images/brands/brand_spigen.jpg',
      fallbackImage: '/images/banners/banner-accessories.jpg',
      models: ['MagSafe Şeffaf Kılıf', 'Tough Armor Zırhlı Kapak', '9D Hayalet Gizlilik Camı', 'Safir Lens Koruyucu'],
      catId: 'kilif-kapak',
      logo: <SpigenLogo className="h-4 w-auto text-white" />
    },
    {
      id: 'anker',
      name: 'Anker & Hızlı Şarj',
      shortName: 'Anker',
      badge: 'GaN Yeni Nesil Güç',
      tagline: '65W GaN Adaptörler, Kırılmaz Kablolar ve Powerbankler',
      desc: 'Power Delivery (PD) hızlı şarj adaptörleri, bükülmelere karşı test edilmiş dayanıklı Type-C & Lightning kablolar ile telefonunuza güvenli hızlı enerji.',
      image: '/images/brands/brand_anker.jpg',
      fallbackImage: '/images/banners/banner-accessories.jpg',
      models: ['65W GaN Şarj Cihazı', 'Kırılmaz Örgülü Type-C', 'MagSafe Manyetik Powerbank', '20W Mini Hızlı Adaptör'],
      catId: 'sarj-kablo',
      logo: <AnkerLogo className="h-4 w-auto text-white" />
    }
  ];

  const handleGoToVitrin = (catId: string) => {
    onSelectCategory(catId);
    const vitrin = document.getElementById('vitrin');
    if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="markalari-taniyalim" className="w-full py-8 sm:py-12 bg-white border-y border-gray-200">
      <div className="w-full px-3 sm:px-4 max-w-[1448px] mx-auto">
        
        {/* Section Header */}
        <div className="w-full mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-3">
          <div className="block-title">
            <h2 className="title text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Markaları Tanıyalım
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-1">
              Adar Cep Shop Kırşehir'de en çok tercih edilen lider teknoloji ve aksesuar markalarını yakından inceleyin.
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Brand Switcher Pills with Brand Logos */}
            <div className="hidden sm:flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl">
              {brands.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBrandId(b.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeBrandId === b.id
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-white/70'
                  }`}
                >
                  <BrandLogo brand={b.shortName} className="h-3.5 w-auto" monochrome={activeBrandId === b.id} />
                  <span>{b.shortName}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleGoToVitrin('all')}
              className="text-xs font-semibold text-primary underline hover:text-gray-900 transition flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Tüm Modelleri Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Side-by-Side Expanding Accordion */}
        <div className="w-full">
          <div className="flex flex-row gap-2.5 sm:gap-3.5 h-[460px] lg:h-[500px] w-full overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0">
            {brands.map((b) => {
              const isActive = activeBrandId === b.id;

              return (
                <div
                  key={b.id}
                  onMouseEnter={() => setActiveBrandId(b.id)}
                  onClick={() => setActiveBrandId(b.id)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-500 ease-out border ${
                    isActive
                      ? 'flex-[3.5] lg:flex-[4] min-w-[280px] md:min-w-0 border-primary shadow-xl ring-2 ring-primary/20'
                      : 'flex-1 min-w-[70px] md:min-w-0 border-gray-200 hover:border-gray-400 bg-gray-900'
                  }`}
                >
                  {/* Background Image with Zoom Effect */}
                  <img
                    src={b.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = b.fallbackImage;
                    }}
                    alt={b.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? 'scale-105' : 'scale-100 group-hover:scale-105'
                    }`}
                    loading="lazy"
                  />

                  {/* Dark Vignette / Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? 'bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-100'
                        : 'bg-black/65 group-hover:bg-black/45 opacity-100'
                    }`}
                  />

                  {/* Red Top Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                      isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/50'
                    }`}
                  />

                  {/* Collapsed State Visual (Side-by-side slim card) */}
                  {!isActive && (
                    <div className="absolute inset-0 flex flex-col justify-between items-center p-3 sm:p-4 text-white z-10">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-all duration-300 shadow-md">
                        {b.logo}
                      </div>

                      {/* Brand Label on Collapsed Panel */}
                      <div className="flex flex-col items-center gap-2 my-auto">
                        <span className="text-xs sm:text-sm font-black tracking-widest text-white [writing-mode:vertical-rl] rotate-180 drop-shadow-md group-hover:text-primary transition-colors">
                          {b.name}
                        </span>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Expanded State Content (Rich Full Panel) */}
                  {isActive && (
                    <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 text-white z-10 animate-fadeIn">
                      {/* Top Header Row of Open Card with Logo */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold shadow-sm">
                          {b.logo}
                          <span className="text-gray-300 font-normal">|</span>
                          <span className="text-white">{b.badge}</span>
                        </div>

                        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-gray-200 border border-white/10 hidden sm:inline-block">
                          Adar Cep Shop Kırşehir
                        </span>
                      </div>

                      {/* Bottom Info & Action Area */}
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{b.tagline}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-md">
                              {b.name}
                            </h3>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 sm:line-clamp-3 leading-relaxed mt-1 max-w-2xl drop-shadow-xs">
                            {b.desc}
                          </p>
                        </div>

                        {/* Model Chips Strip */}
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block mb-1.5">
                            Öne Çıkan Modeller:
                          </span>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {b.models.map((model, mIdx) => (
                              <button
                                key={mIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (onSelectBrand) {
                                    onSelectBrand(b.id);
                                  } else {
                                    handleGoToVitrin(b.catId);
                                  }
                                }}
                                className="text-[11px] sm:text-xs bg-white/15 hover:bg-primary backdrop-blur-md border border-white/20 hover:border-primary px-2.5 py-1 rounded-lg font-semibold text-white transition-all cursor-pointer flex items-center gap-1"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>{model}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Dual Action Buttons */}
                        <div className="pt-2 sm:pt-3 border-t border-white/15 flex flex-wrap items-center gap-2.5 sm:gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onSelectBrand) {
                                onSelectBrand(b.id);
                              } else {
                                handleGoToVitrin(b.catId);
                              }
                            }}
                            className="bg-primary hover:bg-[#006cb3] text-white text-xs font-bold px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
                          >
                            <span>Modelleri Vitrinde Gör</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                              `Merhaba Adar Cep Shop Kırşehir, ${b.name} modelleri ve stok durumu hakkında bilgi almak istiyorum.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 active:scale-95"
                          >
                            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                            <span>WhatsApp'tan Sor</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
