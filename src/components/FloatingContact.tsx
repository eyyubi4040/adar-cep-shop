import React, { useState } from 'react';
import { Phone, X, ChevronUp, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './BrandLogos';
import { storeInfo } from '../data/storeInfo';

interface FloatingContactProps {
  hide?: boolean;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ hide = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Hide button when mobile menu or modal is open
  if (hide) return null;

  return (
    <div className="adar-floating-whatsapp-container fixed bottom-6 right-6 z-[999] flex flex-col items-end">

      {/* Expanded Popup Menu */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-72 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-900">Kırşehir Adar Cep Shop</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-0.5 cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-gray-500 my-2 leading-relaxed">
            Sıfır/2. el telefon modelleri, telefon aksesuarları ve teknik servis için hemen bize ulaşın:
          </p>

          <div className="space-y-2 pt-1">
            <a
              href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(storeInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25D366' }}
              className="flex items-center gap-2.5 w-full !bg-[#25D366] hover:!bg-[#20ba59] text-white p-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <div className="text-left text-white">
                <div className="font-bold">WhatsApp'tan Yazın</div>
                <div className="text-[10px] font-normal opacity-95">Anında Fiyat & Stok Bilgisi</div>
              </div>
            </a>

            <a
              href={`tel:${storeInfo.phoneRaw}`}
              className="flex items-center gap-2.5 w-full bg-gray-900 hover:bg-black text-white p-2.5 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left">
                <div>Telefonla Arayın</div>
                <div className="text-[10px] font-normal opacity-90">{storeInfo.phone}</div>
              </div>
            </a>

            <a
              href="#magaza"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-xl text-xs font-semibold justify-center transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Kırşehir Mağaza Adresi</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button - Guaranteed Solid Vibrant WhatsApp Green with White Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#25D366',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          border: 'none',
        }}
        className="adar-floating-whatsapp-btn group flex items-center gap-2.5 !bg-[#25D366] hover:!bg-[#20ba59] text-white py-3 px-4 sm:px-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer select-none"
        aria-label="WhatsApp İletişim"
      >
        <WhatsAppIcon className="w-5 h-5 fill-white shrink-0 transition-transform group-hover:scale-110" />
        <span className="font-bold text-xs sm:text-sm text-white tracking-wide">
          {isOpen ? 'Kapat' : 'WhatsApp Fiyat Al'}
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
      </button>

    </div>
  );
};
