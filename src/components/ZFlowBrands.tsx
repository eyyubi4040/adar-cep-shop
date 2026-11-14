import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ZFlowBrandsProps {
  onSelectBrand?: (brand: string) => void;
}

export const ZFlowBrands: React.FC<ZFlowBrandsProps> = ({ onSelectBrand }) => {
  const brandCards = [
    {
      name: 'Telefon Aksesuarları',
      tagline: 'Türkiye’nin Lider Telefon Aksesuarı',
      desc: 'Magsafe kılıflar, 9D gizlilik camları, GaN hızlı şarj adaptörleri ve orijinal lisanslı ürünler.',
      bgGradient: 'from-sky-950 via-zinc-900 to-black',
      accentColor: 'text-sky-400',
      badge: 'Yetkili Satış Noktası',
      category: 'kilif-kapak'
    },
    {
      name: 'Apple iPhone',
      tagline: 'Sıfır Kapalı Kutu & 2. El Garantili',
      desc: 'iPhone 18 Pro Max, iPhone 17 ve 11-16 serisi 6 ila 12 ay mağaza garantisiyle Kırşehir’de.',
      bgGradient: 'from-slate-900 via-neutral-900 to-zinc-950',
      accentColor: 'text-sky-400',
      badge: '2 Yıl TR Garanti & 2. El',
      category: 'sifir-telefon'
    },
    {
      name: 'Samsung Galaxy',
      tagline: 'S25 Ultra, S24 & A Serisi',
      desc: 'Snapdragon 8 Elite ve Galaxy AI destekli son teknoloji Samsung modelleri, sıfır ve temiz ikinci el seçenekleriyle.',
      bgGradient: 'from-blue-950 via-slate-900 to-black',
      accentColor: 'text-blue-400',
      badge: 'Galaxy AI & Orijinal',
      category: 'sifir-telefon'
    },
    {
      name: 'Spigen & Wiwu',
      tagline: 'Zırhlı Koruma & Akıllı Güç Çözümleri',
      desc: 'Darbeye dayanıklı sert zırhlı kılıflar, GaN 65W/100W masaüstü şarj istasyonları ve örgülü kablolar.',
      bgGradient: 'from-zinc-900 via-stone-900 to-neutral-950',
      accentColor: 'text-amber-400',
      badge: 'Askeri Standart Koruma',
      category: 'sarj-kablo'
    }
  ];

  return (
    <div id="relation-646" className="w-full flex flex-wrap folder-slider">
      <div className="w-full px-2 sm:px-4 mb-8 lg:mb-12 max-w-[1448px] mx-auto">
        
        {/* Title Bar matching Adar exact block-title */}
        <div className="w-full mb-4 flex items-end justify-between gap-4 border-b border-gray-200 pb-3">
          <div className="block-title">
            <div className="title text-xl sm:text-2xl font-bold text-gray-900">
              Markaları Tanıyalım
            </div>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-1">
              Adar Cep Shop güvencesiyle dünyaca ünlü markaların orijinal ürünleri Kırşehir mağazamızda.
            </div>
          </div>
          <a
            href="#vitrin"
            className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-primary underline transition-colors hover:text-gray-900"
          >
            <span>Tüm Modelleri Gör</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Cards Flow Grid matching Adar's flow pane */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {brandCards.map((b, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-custom p-6 bg-gradient-to-br ${b.bgGradient} text-white shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between min-h-[220px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-gray-200 border border-white/10">
                    {b.badge}
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1 ${b.accentColor}`}>
                  {b.name}
                </h3>
                <div className="text-xs font-semibold text-gray-300 mb-2">
                  {b.tagline}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#vitrin"
                  className="text-xs font-bold text-white group-hover:text-primary flex items-center gap-1 transition-colors"
                >
                  <span>Modelleri İncele</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
