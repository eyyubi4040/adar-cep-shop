import React from 'react';
import { megaMenuColumns } from '../data/categories';
import { Smartphone, ShieldCheck, Zap, Sparkles, Headphones, ArrowRight, RotateCcw } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';

interface MegaMenuProps {
  isOpen: boolean;
  onSelectCategory: (categoryId: string) => void;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onSelectCategory, onClose }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-[#0084d6]" />;
      case 'Shield':
        return <ShieldCheck className="w-4 h-4 text-[#0084d6]" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#0084d6]" />;
      case 'Headphones':
        return <Headphones className="w-4 h-4 text-[#0084d6]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#0084d6]" />;
    }
  };

  return (
    <div
      className="w-full bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-200/90 p-6 sm:p-7 relative z-50 animate-in fade-in zoom-in-95 duration-150"
      onMouseLeave={onClose}
    >
      {/* 5-Column Balanced Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
        
        {/* Category Columns (1 - 4) */}
        {megaMenuColumns.map((col, idx) => (
          <div key={idx} className="space-y-3">
            {/* Column Header */}
            <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                {getIcon(col.icon)}
              </div>
              <h4 className="font-extrabold text-slate-900 text-xs tracking-wider uppercase">
                {col.title}
              </h4>
            </div>

            {/* Links List */}
            <ul className="space-y-1">
              {col.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <button
                    onClick={() => {
                      onSelectCategory(link.categoryId);
                      onClose();
                      const vitrin = document.getElementById('vitrin');
                      if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group flex items-center justify-between w-full text-left py-1.5 px-2 -mx-2 rounded-lg text-xs text-slate-600 hover:text-[#0084d6] hover:bg-blue-50/70 transition-all cursor-pointer"
                  >
                    <span className="font-medium group-hover:translate-x-0.5 transition-transform truncate pr-1">
                      {link.name}
                    </span>
                    {link.badge && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 uppercase tracking-wider ${
                        link.badge.includes('Garanti')
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                          : link.badge.includes('Yeni')
                            ? 'bg-blue-50 text-[#0084d6] border border-blue-200/80'
                            : 'bg-amber-50 text-amber-700 border border-amber-200/80'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 5: Right Luxury Promo Card (2. El Takas) */}
        <div
          style={{
            backgroundColor: '#080e1e',
            backgroundImage: 'linear-gradient(145deg, #080e1e 0%, #0c1836 55%, #132b5c 100%)',
            color: '#ffffff'
          }}
          className="hidden lg:flex flex-col justify-between p-5 rounded-2xl border border-blue-900/50 shadow-xl relative overflow-hidden group"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#0084d6]/25 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0084d6]/35 transition-all"></div>

          <div className="relative z-10">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full mb-3 w-fit">
              <RotateCcw className="w-3.5 h-3.5 text-emerald-400 animate-spin-reverse" />
              <span>Nakit Alım & Takas</span>
            </div>

            <h5 className="font-extrabold text-sm sm:text-base text-white leading-snug mb-2 tracking-tight">
              Eski Cihazını Değerinde Nakit Sat!
            </h5>

            <p className="text-[11px] text-slate-200 leading-relaxed mb-4">
              Kırşehir mağazamızda 15 dakikada ekspertiz yapalım, eski telefonunuzun bedelini anında nakit ödeyelim.
            </p>

            {/* Micro Feature Bullets */}
            <div className="space-y-1.5 mb-5 text-[11px] text-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>40 Nokta Ücretsiz Ekspertiz</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                <span>Anında Elden Nakit & Havale</span>
              </div>
            </div>
          </div>

          <a
            href="/takas"
            onClick={onClose}
            style={{ backgroundColor: '#0084d6', color: '#ffffff' }}
            className="relative z-10 w-full py-2.5 px-4 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:brightness-110 active:scale-95 text-center cursor-pointer"
          >
            <span>Cihazını Değerle</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Mega Menu Bottom Bar (Popular Searches & Store Contact) */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-slate-700 flex items-center gap-1">
            <span>🔥</span>
            <span>Popüler:</span>
          </span>
          <button
            onClick={() => { onSelectCategory('sifir-telefon'); onClose(); }}
            className="hover:text-[#0084d6] hover:underline cursor-pointer text-slate-600"
          >
            iPhone 18 Pro Max
          </button>
          <span className="text-slate-300">•</span>
          <button
            onClick={() => { onSelectCategory('sifir-telefon'); onClose(); }}
            className="hover:text-[#0084d6] hover:underline cursor-pointer text-slate-600"
          >
            Galaxy S25 Ultra
          </button>
          <span className="text-slate-300">•</span>
          <button
            onClick={() => { onSelectCategory('kilif-kapak'); onClose(); }}
            className="hover:text-[#0084d6] hover:underline cursor-pointer text-slate-600"
          >
            MagSafe Kılıflar
          </button>
          <span className="text-slate-300">•</span>
          <button
            onClick={() => { onSelectCategory('ekran-koruyucu'); onClose(); }}
            className="hover:text-[#0084d6] hover:underline cursor-pointer text-slate-600"
          >
            9D Hayalet Cam
          </button>
        </div>

        <div className="text-slate-500 font-medium">
          Kırşehir Adar Cep Shop • <strong className="text-slate-800">{storeInfo.phone}</strong>
        </div>
      </div>
    </div>
  );
};
