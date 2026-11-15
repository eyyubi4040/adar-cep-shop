import React from 'react';
import { Eye, ShieldCheck, Battery, CheckCircle2 } from 'lucide-react';
import type { Product } from '../types';
import { storeInfo } from '../data/storeInfo';
import { BrandMiniIcon, WhatsAppWhiteIcon } from './BrandLogos';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
    `Merhaba Adar Cep Shop, web sitenizdeki "${product.title}" modelini inceledim. Kırşehir mağazanızdaki stok durumu ve detayları hakkında bilgi alabilir miyim?`
  )}`;

  return (
    <div
      className="w-full h-full group rounded-2xl bg-white hover:shadow-xl hover:border-[#0084d6]/30 hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 flex flex-col justify-between overflow-hidden relative"
      data-toggle="product"
    >
      <div className="relative flex flex-col bg-white h-full justify-between">

        {/* ========================================================
            IMAGE WRAPPER & BADGES
            ======================================================== */}
        <div className="w-full relative p-3 bg-gradient-to-b from-slate-50/60 to-white">

          {/* Top-Left Category / Condition Badges */}
          <div className="absolute start-3 top-3 flex flex-col items-start gap-1 z-[3]">
            {product.conditionBadge && (
              <span
                className={`inline-flex items-center rounded-md text-white text-[10px] font-bold uppercase px-2 py-0.5 shadow-2xs tracking-wider ${
                  product.condition === 'sifir'
                    ? 'bg-blue-600'
                    : product.condition === 'ikinci-el'
                      ? 'bg-purple-700'
                      : 'bg-[#0084d6]'
                }`}
              >
                {product.conditionBadge}
              </span>
            )}
            {product.badge && (
              <span className="inline-flex items-center rounded-md bg-amber-500 text-white text-[10px] font-bold uppercase px-2 py-0.5 shadow-2xs tracking-wider">
                {product.badge}
              </span>
            )}
          </div>

          {/* Quick View Button (Top-Right Eye Icon) */}
          <div className="absolute top-3 end-3 z-[3]">
            <button
              onClick={() => onOpenModal(product)}
              className="size-8 sm:size-9 rounded-full bg-white/90 hover:bg-[#0084d6] hover:text-white text-slate-600 flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer border border-slate-200/80 backdrop-blur-xs"
              title="Mağazada Detaylı İncele"
              aria-label="Hızlı Gör"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Aspect Product Image */}
          <div
            onClick={() => onOpenModal(product)}
            className="w-full block relative aspect-square cursor-pointer overflow-hidden rounded-xl p-3 sm:p-4 flex items-center justify-center bg-slate-50/70 border border-slate-100 group-hover:border-slate-200 transition-colors"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          </div>
        </div>

        {/* ========================================================
            PRODUCT DETAILS (Brand, Title, Specs)
            ======================================================== */}
        <div className="w-full relative p-3.5 sm:p-4 flex flex-col grow justify-between gap-3">

          <div>
            {/* Brand & Warranty Guarantee */}
            <div className="flex items-center justify-between text-[11px] mb-1.5">
              <span className="font-bold text-[#0084d6] uppercase tracking-wider flex items-center gap-1.5">
                <BrandMiniIcon brand={product.brand} className="w-3.5 h-3.5 text-[#0084d6] shrink-0" />
                <span>{product.brand}</span>
              </span>
              <span className="text-slate-500 text-[10px] flex items-center gap-1 font-medium bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>{product.specs.warranty}</span>
              </span>
            </div>

            {/* Product Title */}
            <h3
              onClick={() => onOpenModal(product)}
              className="w-full font-bold text-xs sm:text-sm text-slate-900 hover:text-[#0084d6] cursor-pointer leading-snug line-clamp-2 transition-colors mb-2.5"
              title={product.title}
            >
              {product.title}
            </h3>

            {/* Key Specs Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
              {product.specs.storage && (
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                  {product.specs.storage}
                </span>
              )}
              {product.specs.batteryHealth && (
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2 py-0.5 rounded-md font-bold flex items-center gap-1">
                  <Battery className="w-3 h-3 text-emerald-600" />
                  <span>{product.specs.batteryHealth}</span>
                </span>
              )}
              {product.specs.color && (
                <span className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                  {product.specs.color}
                </span>
              )}
            </div>

            {/* In-Stock Indicator */}
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold bg-emerald-50/60 px-2.5 py-1 rounded-lg border border-emerald-100 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Kırşehir Mağazasında Stokta</span>
            </div>
          </div>

          {/* ========================================================
              ACTION BUTTONS (WhatsApp Inquiry + Details Modal)
              ======================================================== */}
          <div className="pt-2.5 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm shadow-[#25D366]/20 active:scale-[0.98]"
              title="WhatsApp ile stok ve bilgi sor"
            >
              <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp ile Bilgi Al</span>
            </a>

            <button
              onClick={() => onOpenModal(product)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer active:scale-[0.98]"
            >
              <span>Mağazada İncele</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
