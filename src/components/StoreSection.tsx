import React from 'react';
import { MapPin, Phone, Clock, Navigation, Sparkles } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { WhatsAppWhiteIcon, InstagramIcon } from './BrandLogos';

export const StoreSection: React.FC = () => {
  return (
    <div id="magaza" className="w-full flex flex-wrap folder-banner py-10 sm:py-16 bg-slate-50/70 border-t border-slate-200/80">
      <div className="w-full px-3 sm:px-6 max-w-[1448px] mx-auto">

        {/* Title */}
        <div className="w-full mb-8 pb-4 border-b border-slate-200/80 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0084d6] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mağaza & Lokasyon</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kırşehir Merkez Mağazamız & İletişim
            </h2>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Cihazları elden görmek, test etmek ve telefon aksesuarlarını deneyerek almak için mağazamıza bekleriz.
            </div>
          </div>
          <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            📍 Kırşehir Merkezdeyiz
          </span>
        </div>

        {/* 2-Column Grid: Store Info + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Left Column: Store Details */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-200/40">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/adarcepshoplogo.png?v=20261114v3"
                  alt="Adar Cep Shop Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Adar Cep Shop Kırşehir
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Sıfır kapalı kutu telefonlar, 6-12 ay garantili 2. el modeller, orijinal kılıf ve ekran koruyucular ile 30 dakikada teknik servis noktanız.
              </p>

              <div className="space-y-3.5 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <MapPin className="w-5 h-5 text-[#0084d6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Adres:</strong>
                    <span className="text-slate-600 leading-relaxed">{storeInfo.address}</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <Clock className="w-5 h-5 text-[#0084d6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Çalışma Saatleri:</strong>
                    <div className="text-slate-600">Pazartesi - Cumartesi: 09:00 - 20:30</div>
                    <div className="text-slate-600">Pazar: 11:00 - 19:00</div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <Phone className="w-5 h-5 text-[#0084d6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Telefon & WhatsApp:</strong>
                    <a
                      href={`tel:${storeInfo.phoneRaw}`}
                      className="text-slate-900 font-bold hover:text-[#0084d6] transition-colors"
                    >
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Merhaba Adar Cep Shop, mağaza konumunuz hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm shadow-[#25D366]/20 text-center active:scale-95"
              >
                <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={storeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-xs text-center active:scale-95"
              >
                <InstagramIcon className="w-4 h-4 fill-white shrink-0" />
                <span>Instagram</span>
              </a>

              <a
                href={storeInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0084d6] hover:bg-[#006cb3] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-md shadow-[#0084d6]/25 text-center active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Yol Tarifi</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 min-h-[380px] flex flex-col">
            <div className="p-3.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0084d6]" />
                <span>Kırşehir Harita Konumu</span>
              </span>
              <a
                href={storeInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0084d6] font-bold hover:underline"
              >
                Google Haritalar'da Aç ↗
              </a>
            </div>

            <div className="flex-1 w-full h-full min-h-[340px] relative">
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
