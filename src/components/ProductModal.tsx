import React from 'react';
import { X, Phone, ShieldCheck, CheckCircle2, Battery, Smartphone, Award, MapPin } from 'lucide-react';
import type { Product } from '../types';
import { storeInfo } from '../data/storeInfo';
import { WhatsAppIcon } from './BrandLogos';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-custom shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-gray-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-primary tracking-wider">
              {product.brand}
            </span>
            <span className="text-gray-300">|</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase text-white ${product.condition === 'sifir' ? 'bg-blue-600' : product.condition === 'ikinci-el' ? 'bg-purple-700' : 'bg-primary'
              }`}>
              {product.conditionBadge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="size-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">

          {/* Top Section: Image + Key Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

            {/* Image */}
            <div className="aspect-square bg-gray-50 rounded-custom p-6 flex items-center justify-center border border-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-64 w-auto object-contain"
              />
            </div>

            {/* Info */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {product.title}
              </h2>

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-custom border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kırşehir Mağazamızda Stokta</span>
              </div>

              {/* Specs List */}
              <div className="space-y-1.5 text-xs text-gray-700 bg-gray-50 p-3 rounded-custom border border-gray-100">
                {product.specs.storage && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dahili Hafıza:</span>
                    <span className="font-bold text-gray-900">{product.specs.storage}</span>
                  </div>
                )}
                {product.specs.batteryHealth && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pil Sağlığı:</span>
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <Battery className="w-3.5 h-3.5 text-emerald-600" />
                      {product.specs.batteryHealth}
                    </span>
                  </div>
                )}
                {product.specs.color && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Renk / Kasa:</span>
                    <span className="font-bold text-gray-900">{product.specs.color}</span>
                  </div>
                )}
                {product.specs.warranty && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Garanti Durumu:</span>
                    <span className="font-bold text-primary flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      {product.specs.warranty}
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Description & Feature Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Model Detayları & Açıklama
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-[#fafafa] p-4 rounded-custom border border-gray-100">
              {product.description}
            </p>

            {product.specs.features && product.specs.features.length > 0 && (
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-800 mb-2">Öne Çıkan Özellikler:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.specs.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons: WhatsApp & Direct Call */}
          <div className="pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${storeInfo.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-custom flex items-center justify-center gap-2 shadow-md transition-colors text-center"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>WhatsApp ile Bilgi Al</span>
            </a>

            <a
              href={`tel:${storeInfo.phoneRaw}`}
              className="w-full bg-dark hover:bg-black text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-custom flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{storeInfo.phone} Arayın</span>
            </a>
          </div>

          <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span>Adar Cep Shop — Terme Cad. Kırşehir Merkez</span>
          </div>

        </div>

      </div>
    </div>
  );
};
