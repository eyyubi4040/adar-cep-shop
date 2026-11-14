import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogos';

interface BrandSliderProps {
  onSelectCategory?: (category: string) => void;
  onSelectBrand?: (brandId: string) => void;
}

export const BrandSlider: React.FC<BrandSliderProps> = ({ onSelectCategory, onSelectBrand }) => {
  const brandList = [
    {
      id: 'apple',
      name: 'Apple',
      badge: 'Sıfır & 2. El Garantili',
      category: 'sifir-telefon',
      tag: 'iPhone 16 / 15 / 14 / 13'
    },
    {
      id: 'samsung',
      name: 'Samsung',
      badge: 'Galaxy AI Destekli',
      category: 'sifir-telefon',
      tag: 'S24 Ultra / S23 / A Serisi'
    },
    {
      id: 'xiaomi',
      name: 'Xiaomi',
      badge: 'Redmi & Xiaomi TR',
      category: 'sifir-telefon',
      tag: '14T Pro / Note 13 Pro'
    },
    {
      id: 'oppo',
      name: 'Oppo',
      badge: 'Reno & A Serisi',
      category: 'sifir-telefon',
      tag: 'Reno 11 / A98 / A78'
    },
    {
      id: 'spigen',
      name: 'Spigen',
      badge: 'Zırhlı Kılıf & 9D Cam',
      category: 'kilif-kapak',
      tag: 'MagSafe / Tough Armor'
    },
    {
      id: 'anker',
      name: 'Anker',
      badge: 'GaN Yeni Nesil Şarj',
      category: 'sarj-kablo',
      tag: '65W GaN / Kırılmaz Kablo'
    },
    {
      id: 'baseus',
      name: 'Baseus',
      badge: 'Aksesuar & Araç İçi',
      category: 'sarj-kablo',
      tag: 'MagSafe / Hızlı Şarj / Tutucu'
    },
    {
      id: 'jbl',
      name: 'JBL',
      badge: 'TWS Kulaklık & Ses',
      category: 'kulaklik-ses',
      tag: 'Wave Buds / Bluetooth Hoparlör'
    },
    {
      id: 'sony',
      name: 'Sony',
      badge: 'Ses & Yüksek Çözünürlük',
      category: 'kulaklik-ses',
      tag: 'TWS & Hi-Res Kulaklık'
    },
    {
      id: 'wiwu',
      name: 'Wiwu',
      badge: 'Akıllı Masaüstü & Hub',
      category: 'sarj-kablo',
      tag: 'Type-C Hub & Kablosuz Şarj'
    },
    {
      id: 'benks',
      name: 'Benks',
      badge: 'MagSafe & Soğutma',
      category: 'kilif-kapak',
      tag: 'MagClap & Karbon Kılıf'
    },
    {
      id: 'huawei',
      name: 'Huawei',
      badge: 'Akıllı Cihaz & Aksesuar',
      category: 'sifir-telefon',
      tag: 'FreeBuds / Watch / Telefon'
    },
    {
      id: 'google',
      name: 'Google Pixel',
      badge: 'Saf Android Deneyimi',
      category: 'sifir-telefon',
      tag: 'Pixel 9 / 8 Pro Çözümleri'
    }
  ];

  const handleBrandClick = (brandId: string, category: string) => {
    if (onSelectBrand) {
      onSelectBrand(brandId);
      return;
    }
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const vitrin = document.getElementById('vitrin');
    if (vitrin) {
      vitrin.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="markalar" className="w-full py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <div className="w-full px-3 sm:px-4 max-w-[1448px] mx-auto">

        {/* Header */}
        <div className="w-full mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-4">
          <div className="block-title">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Orijinal & Garantili Ürün Ağı</span>
            </div>
            <h2 className="title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Popüler Markalarımız
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-1">
              Dünyanın en güvenilir akıllı telefon ve mobil aksesuar markaları Adar Cep Shop Kırşehir'de.
            </div>
          </div>

          <a
            href="#vitrin"
            className="text-xs font-bold text-primary hover:text-gray-900 transition flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 px-3.5 py-2 rounded-lg"
          >
            <span>Tüm Modelleri Gör</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {brandList.map((brand) => (
            <div
              key={brand.id}
              onClick={() => handleBrandClick(brand.id, brand.category)}
              className="bg-white border border-gray-200 hover:border-primary/60 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group cursor-pointer min-h-[136px] relative overflow-hidden"
            >
              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-primary transition-colors" />

              {/* Logo Area */}
              <div className="h-10 sm:h-12 flex items-center justify-center w-full my-auto transition-transform duration-300 group-hover:scale-110">
                <BrandLogo brand={brand.name} className="max-h-8 sm:max-h-9 max-w-[110px] w-auto object-contain text-gray-800 group-hover:text-primary transition-colors" />
              </div>

              {/* Info & Category Badge */}
              <div className="w-full pt-2 border-t border-gray-100 mt-2">
                <span className="text-[10px] font-bold text-gray-700 block truncate group-hover:text-primary transition-colors">
                  {brand.badge}
                </span>
                <span className="text-[9px] text-gray-400 block truncate mt-0.5 font-medium">
                  {brand.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Assurance Band */}
        <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-gray-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>%100 Orijinal Marka Lisanslı Aksesuarlar</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Sıfır Cihazlarda 2 Yıl Türkiye Garantisi</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>İkinci El Telefonlarda 6-12 Ay Mağaza Güvencesi</span>
          </div>
        </div>

      </div>
    </section>
  );
};
