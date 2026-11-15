import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Smartphone, Repeat } from 'lucide-react';

interface BannerPromoGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const BannerPromoGrid: React.FC<BannerPromoGridProps> = ({ onSelectCategory }) => {
  return (
    <div id="relation-613" className="w-full flex flex-wrap folder-banner py-6 sm:py-10 bg-white">
      <div className="w-full px-3 sm:px-6 max-w-[1448px] mx-auto">

        {/* Double Showcase Layout */}
        <div className="adar-category-showcase grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">

          {/* ========================================================
              CARD 1: PHONE ACCESSORIES & GLASSES
              ======================================================== */}
          <div className="adar-category-card relative rounded-3xl overflow-hidden shadow-xl group min-h-[350px] flex flex-col justify-between p-7 sm:p-9 bg-[#0b1222] text-white border border-slate-800">

            {/* Background Graphic & Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/banners/banner-accessories.jpg"
                alt="Telefon Kılıfları ve Aksesuarları"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/70 to-transparent"></div>
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0084d6] text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Geniş Aksesuar Koleksiyonu</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                Telefon Kılıfları & 9D Hayalet Gizlilik Camları
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                MagSafe manyetik kılıflar, darbeye dayanıklı zırhlı kapaklar ve parmak izi bırakmayan 9D gizlilik camları Kırşehir mağazamızda.
              </p>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
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
                className="bg-[#0084d6] hover:bg-[#006cb3] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#0084d6]/30 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Kılıfları İncele</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* ========================================================
              CARD 2: 2. EL PHONE TRADE-IN & CASH PURCHASE
              ======================================================== */}
          <div className="adar-category-card relative rounded-3xl overflow-hidden shadow-xl group min-h-[350px] flex flex-col justify-between p-7 sm:p-9 bg-[#081226] text-white border border-slate-800">

            {/* Background Graphic & Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/banners/banner-tradein.jpg"
                alt="Eski Telefonunu Getir Takas Yap"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/70 to-transparent"></div>
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
                <Repeat className="w-3.5 h-3.5" />
                <span>Kırşehir İçi Nakit Alım & Takas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                Eski Telefonunu Getir, Değerinde Nakit Alalım!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                iPhone, Samsung veya Xiaomi cihazınızı değerinde nakit olarak alıyor veya dilediğiniz sıfır / 2. el modelle takas ediyoruz.
              </p>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Anında Nakit Ödeme & Hızlı Ekspertiz</span>
              </div>

              <a
                href="/takas"
                className="bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Fiyat Teklifi Al</span>
                <ArrowRight className="w-4 h-4 text-[#0084d6]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
