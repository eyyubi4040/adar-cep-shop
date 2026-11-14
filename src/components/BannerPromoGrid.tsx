import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Smartphone, Repeat } from 'lucide-react';

interface BannerPromoGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const BannerPromoGrid: React.FC<BannerPromoGridProps> = ({ onSelectCategory }) => {
  return (
    <div id="relation-613" className="w-full flex flex-wrap folder-banner py-4 sm:py-8 bg-white">
      <div className="w-full px-2 sm:px-4 max-w-[1448px] mx-auto">

        {/* Double Showcase Layout */}
        <div className="adar-category-showcase grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

          {/* ========================================================
              CARD 1: PHONE ACCESSORIES & GLASSES
              ======================================================== */}
          <div className="adar-category-card relative rounded-custom overflow-hidden shadow-md group min-h-[340px] flex flex-col justify-between p-6 sm:p-8 bg-[#111827] text-white">

            {/* Background Graphic & Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/banners/banner-accessories.jpg"
                alt="Telefon Kılıfları ve Aksesuarları"
                className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0084d6] text-white text-[11px] font-black uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Geniş Aksesuar Çeşidi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                Telefon Kılıfları & 9D Hayalet Gizlilik Camları
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
                MagSafe manyetik kılıflar, darbeye dayanıklı zırhlı kapaklar ve parmak izi bırakmayan 9D gizlilik camları Adar Cep Shop Kırşehir mağazamızda.
              </p>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Orijinal & Mağazada Birebir Deneme</span>
              </div>

              <button
                onClick={() => {
                  onSelectCategory('kilif-kapak');
                  const vitrin = document.getElementById('vitrin');
                  if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                }}
                className="adar-discover-btn bg-[#0084d6] hover:bg-[#006cb3] text-white text-xs font-bold px-5 py-2.5 rounded-custom transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Kılıfları İncele</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* ========================================================
              CARD 2: 2. EL PHONE TRADE-IN & CASH PURCHASE
              ======================================================== */}
          <div className="adar-category-card relative rounded-custom overflow-hidden shadow-md group min-h-[340px] flex flex-col justify-between p-6 sm:p-8 bg-[#0b132b] text-white">

            {/* Background Graphic & Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/banners/banner-tradein.jpg"
                alt="Eski Telefonunu Getir Takas Yap"
                className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider mb-3">
                <Repeat className="w-3.5 h-3.5" />
                <span>Kırşehir İçi Nakit Alım & Takas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                Eski Telefonunu Getir, Değerinde Nakit Alalım!
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
                iPhone, Samsung veya Xiaomi cihazınızı değerinde nakit olarak alıyor veya dilediğiniz sıfır / 2. el modelle takas ediyoruz.
              </p>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Anında Nakit Ödeme & Hızlı Ekspertiz</span>
              </div>

              <a
                href="#degerleme"
                className="adar-discover-btn bg-white hover:bg-gray-100 text-gray-900 text-xs font-bold px-5 py-2.5 rounded-custom transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Fiyat Teklifi Al</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
