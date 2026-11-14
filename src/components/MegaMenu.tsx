import React from 'react';
import { megaMenuColumns } from '../data/categories';
import { Smartphone, Shield, Zap, Sparkles, Headphones, ArrowRight } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onSelectCategory: (categoryId: string) => void;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onSelectCategory, onClose }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-primary" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-primary" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-primary" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-primary" />;
      default:
        return <Sparkles className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b-2 border-primary shadow-2xl z-50 transition-all duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {megaMenuColumns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                {getIcon(col.icon)}
                <h4 className="font-bold text-[#1f2937] text-sm tracking-wide uppercase">
                  {col.title}
                </h4>
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => {
                        onSelectCategory(link.categoryId);
                        onClose();
                      }}
                      className="group flex items-center justify-between w-full text-left text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors py-1"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className="text-[10px] font-semibold bg-sky-50 text-primary px-1.5 py-0.5 rounded border border-sky-200 group-hover:bg-primary group-hover:text-white transition-colors">
                          {link.badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Right Promo Card inside Mega Menu (Adar style) */}
          <div
            style={{ backgroundColor: '#0c1836', backgroundImage: 'linear-gradient(135deg, #0c1836 0%, #0f2854 100%)' }}
            className="hidden lg:block !bg-[#0c1836] p-5 rounded-xl text-white relative overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-primary/20 rounded-full blur-2xl"></div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2 py-0.5 rounded mb-3">
              Kırşehir Mağaza
            </span>
            <h5 className="font-bold text-base mb-2 text-white">2. El Telefonunu Nakit Sat</h5>
            <p className="text-xs text-gray-200 mb-4 leading-relaxed">
              Mevcut telefonunu mağazamızda değerinde nakite çevir veya yeni cihazla takas et.
            </p>
            <a
              href="#degerleme"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00f9fd] hover:underline"
            >
              Cihazını Değerle <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mega Menu Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-gray-800">Popüler Aramalar:</span>
            <span className="hover:text-primary cursor-pointer" onClick={() => { onSelectCategory('sifir-telefon'); onClose(); }}>iPhone 18 Pro Max</span>
            <span className="hover:text-primary cursor-pointer" onClick={() => { onSelectCategory('ikinci-el-telefon'); onClose(); }}>Garantili iPhone 13</span>
            <span className="hover:text-primary cursor-pointer" onClick={() => { onSelectCategory('kilif-kapak'); onClose(); }}>Adar Magsafe Kılıf</span>
            <span className="hover:text-primary cursor-pointer" onClick={() => { onSelectCategory('ekran-koruyucu'); onClose(); }}>9D Hayalet Cam</span>
            <span className="hover:text-primary cursor-pointer" onClick={() => { onSelectCategory('sarj-kablo'); onClose(); }}>GaN 35W Hızlı Şarj</span>
          </div>
          <span className="text-primary font-medium">
            Kırşehir Adar Cep Shop • 0546 743 14 37
          </span>
        </div>
      </div>
    </div>
  );
};
