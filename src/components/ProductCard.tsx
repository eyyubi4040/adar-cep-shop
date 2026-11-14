import React from 'react';
import { Eye, ShieldCheck, Battery, CheckCircle2 } from 'lucide-react';
import type { Product } from '../types';
import { storeInfo } from '../data/storeInfo';
import { BrandMiniIcon, WhatsAppIcon } from './BrandLogos';

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
      className="w-full h-full group rounded-custom bg-white hover:custom-shadow transition-all duration-300 border border-gray-100 flex flex-col justify-between overflow-hidden relative"
      data-toggle="product"
    >
      <div className="relative flex flex-col bg-white h-full justify-between">

        {/* ========================================================
            IMAGE WRAPPER & BADGES (Adar aspect-product)
            ======================================================== */}
        <div className="w-full self-start relative p-3 bg-white">

          {/* Top-Left Category / Condition Badges */}
          <div className="absolute start-3 top-3 flex flex-col items-start gap-1 z-[3] *:flex *:items-center *:rounded-custom *:text-white *:text-[10px] *:font-bold *:uppercase *:px-2 *:py-0.5 shadow-xs">
            {product.conditionBadge && (
              <div
                className={
                  product.condition === 'sifir'
                    ? 'bg-blue-600'
                    : product.condition === 'ikinci-el'
                      ? 'bg-purple-700'
                      : 'bg-primary'
                }
              >
                {product.conditionBadge}
              </div>
            )}
            {product.badge && (
              <div className="bg-amber-500">
                {product.badge}
              </div>
            )}
          </div>

          {/* Quick View Button (Top-Right Eye Icon) */}
          <div className="absolute top-3 end-3 z-[3]">
            <button
              onClick={() => onOpenModal(product)}
              className="size-9 rounded-full bg-white/90 hover:bg-primary hover:text-white text-gray-700 flex items-center justify-center shadow-xs transition-colors cursor-pointer border border-gray-100"
              title="Mağazada Detaylı İncele"
              aria-label="Hızlı Gör"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Aspect Product Image */}
          <div
            onClick={() => onOpenModal(product)}
            className="w-full block relative aspect-square cursor-pointer overflow-hidden rounded-custom p-4 flex items-center justify-center bg-[#fafafa]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* ========================================================
            PRODUCT DETAILS (Brand, Title, Specs - STRICTLY NO PRICE)
            ======================================================== */}
        <div className="w-full relative p-3 sm:p-4 flex flex-col grow justify-between gap-3">

          <div>
            {/* Brand & Warranty Guarantee */}
            <div className="flex items-center justify-between text-[11px] mb-1.5">
              <span className="font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                <BrandMiniIcon brand={product.brand} className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{product.brand}</span>
              </span>
              <span className="text-gray-500 text-[10px] flex items-center gap-0.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{product.specs.warranty}</span>
              </span>
            </div>

            {/* Product Title */}
            <h3
              onClick={() => onOpenModal(product)}
              className="w-full font-bold text-xs sm:text-sm text-gray-900 hover:text-primary cursor-pointer leading-snug line-clamp-2 transition-colors mb-2"
              title={product.title}
            >
              {product.title}
            </h3>

            {/* Key Specs Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              {product.specs.storage && (
                <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-semibold">
                  {product.specs.storage}
                </span>
              )}
              {product.specs.batteryHealth && (
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Battery className="w-3 h-3 text-emerald-600" />
                  <span>{product.specs.batteryHealth}</span>
                </span>
              )}
              {product.specs.color && (
                <span className="text-[10px] bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded font-medium">
                  {product.specs.color}
                </span>
              )}
            </div>

            {/* In-Stock Indicator */}
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Kırşehir Mağazasında Stokta</span>
            </div>
          </div>

          {/* ========================================================
              ACTION BUTTONS (WhatsApp Inquiry + Details Modal)
              STRICTLY NO PRICE / NO CART BUTTON!
              ======================================================== */}
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary hover:bg-[#006cb3] text-white text-xs font-bold py-2.5 px-3 rounded-custom flex items-center justify-center gap-2 transition-colors shadow-xs"
              title="WhatsApp ile stok ve bilgi sor"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp ile Bilgi Al</span>
            </a>

            <button
              onClick={() => onOpenModal(product)}
              className="w-full bg-[#f3f4f6] hover:bg-gray-200 text-gray-800 text-xs font-semibold py-2 px-3 rounded-custom transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Mağazada İncele</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
