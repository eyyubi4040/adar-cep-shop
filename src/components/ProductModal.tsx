import React from 'react';
import { X, Phone, ShieldCheck, CheckCircle2, Battery, MapPin } from 'lucide-react';
import type { Product } from '../types';
import { storeInfo } from '../data/storeInfo';
import { WhatsAppWhiteIcon } from './BrandLogos';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Merhaba Adar Cep Shop Kırşehir, web sitenizdeki "${product.title}" modelini inceledim.\n\n` +
    `• Marka: ${product.brand}\n` +
    `• Durum: ${product.conditionBadge}\n` +
    `• Hafıza: ${product.specs.storage || '-'}\n` +
    `• Garanti: ${product.specs.warranty || '-'}\n\n` +
    `Kırşehir mağazanızdaki stok durumu hakkında bilgi alabilir miyim?`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-[#0084d6] tracking-wider">
              {product.brand}
            </span>
            <span className="text-slate-300">|</span>
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase text-white shadow-2xs tracking-wider ${
              product.condition === 'sifir' ? 'bg-blue-600' : product.condition === 'ikinci-el' ? 'bg-purple-700' : 'bg-[#0084d6]'
            }`}>
              {product.conditionBadge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">

          {/* Top Section: Image + Key Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

            {/* Image */}
            <div className="aspect-square bg-slate-50/80 rounded-2xl p-6 flex items-center justify-center border border-slate-100">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-60 w-auto object-contain"
              />
            </div>

            {/* Info */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">
                {product.title}
              </h2>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kırşehir Mağazamızda Stokta</span>
              </div>

              {/* Specs List */}
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                {product.specs.storage && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Dahili Hafıza:</span>
                    <span className="font-bold text-slate-900">{product.specs.storage}</span>
                  </div>
                )}
                {product.specs.batteryHealth && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Pil Sağlığı:</span>
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <Battery className="w-3.5 h-3.5 text-emerald-600" />
                      {product.specs.batteryHealth}
                    </span>
                  </div>
                )}
                {product.specs.color && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Renk / Kasa:</span>
                    <span className="font-bold text-slate-900">{product.specs.color}</span>
                  </div>
                )}
                {product.specs.warranty && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Garanti Durumu:</span>
                    <span className="font-bold text-[#0084d6] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0084d6]" />
                      {product.specs.warranty}
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Description & Feature Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Model Detayları & Açıklama
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
              {product.description}
            </p>

            {product.specs.features && product.specs.features.length > 0 && (
              <div className="mt-3.5">
                <h4 className="text-xs font-bold text-slate-800 mb-2">Öne Çıkan Özellikler:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.specs.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons: WhatsApp & Direct Call */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${storeInfo.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/25 transition-all text-center active:scale-95"
            >
              <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp ile Bilgi Al</span>
            </a>

            <a
              href={`tel:${storeInfo.phoneRaw}`}
              className="w-full bg-[#080e1e] hover:bg-slate-900 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-center active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#0084d6]" />
              <span>{storeInfo.phone} Arayın</span>
            </a>
          </div>

          <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
            <MapPin className="w-3.5 h-3.5 text-[#0084d6]" />
            <span>Adar Cep Shop — Terme Cad. Kırşehir Merkez</span>
          </div>

        </div>

      </div>
    </div>
  );
};
