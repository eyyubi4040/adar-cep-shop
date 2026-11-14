import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShieldCheck } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { WhatsAppIcon } from './BrandLogos';

export const StoreSection: React.FC = () => {
  return (
    <div id="magaza" className="w-full flex flex-wrap folder-banner py-8 sm:py-12 bg-[#f8f9fa] border-t border-gray-200">
      <div className="w-full px-2 sm:px-4 max-w-[1448px] mx-auto">

        {/* Title */}
        <div className="w-full mb-8 border-b border-gray-200 pb-3 flex flex-wrap items-end justify-between gap-4">
          <div className="block-title">
            <h2 className="title text-xl sm:text-2xl font-bold text-gray-900">
              Kırşehir Merkez Mağazamız & İletişim
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-1">
              Cihazları elden görmek, denemek ve Telefon Aksesuarlarını taktırarak almak için mağazamıza bekleriz.
            </div>
          </div>
          <span className="text-xs font-bold text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-full">
            📍 Kırşehir Merkezdeyiz
          </span>
        </div>

        {/* 2-Column Grid: Store Info + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column: Store Details */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-custom p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/adarcepshoplogo.png"
                  alt="Adar Cep Shop Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Adar Cep Shop Kırşehir
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Sıfır kapalı kutu cep telefonları, 6-12 ay garantili 2. el modeller, Orijinal kılıf ve ekran koruyucular ile 30 dakikada teknik servis noktanız.
              </p>

              <div className="space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-custom">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-bold mb-0.5">Adres:</strong>
                    <span className="text-gray-600">{storeInfo.address}</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-custom">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-bold mb-0.5">Çalışma Saatleri:</strong>
                    <div className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 20:30</div>
                    <div className="text-gray-600">Pazar: 11:00 - 19:00</div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-custom">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-bold mb-0.5">Telefon & WhatsApp:</strong>
                    <a
                      href={`tel:${storeInfo.phoneRaw}`}
                      className="text-gray-900 font-bold hover:text-primary transition"
                    >
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-100 mt-6 grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Merhaba Adar Cep Shop, mağaza konumunuz hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 rounded-custom flex items-center justify-center gap-1.5 transition shadow-xs text-center"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={storeInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-[#006cb3] text-white text-xs font-bold py-2.5 px-3 rounded-custom flex items-center justify-center gap-1.5 transition shadow-xs text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Yol Tarifi Al</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-custom overflow-hidden shadow-xs min-h-[360px] flex flex-col">
            <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs">
              <span className="font-bold text-gray-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kırşehir Harita Konumu</span>
              </span>
              <a
                href={storeInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                Google Haritalar'da Aç ↗
              </a>
            </div>

            <div className="flex-1 w-full h-full min-h-[320px] relative">
              <iframe
                title="Adar Cep Shop Kırşehir Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49168.21950451871!2d34.13745262335198!3d39.14588939634938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d5727e4d825313%3A0x8670ce151528b122!2zS8SxcsWfZWhpciwgS8SxcsWfZWhpciBNZXJrZXovS8SxcsWfZWhpcg!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
