import React from 'react';
import { Wrench, Clock, ShieldCheck, Zap, Phone, CheckCircle } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { WhatsAppIcon } from './BrandLogos';

export const TechnicalService: React.FC = () => {
  const services = [
    {
      title: 'Ekran & Dokunmatik Değişimi',
      time: '30 - 45 Dakika',
      desc: 'Orijinal kalitede OLED / LCD ekran değişimi. TrueTone ve Face ID fonksiyonları korunarak aktarılır.',
      icon: '📱'
    },
    {
      title: 'Orijinal Batarya / Pil Değişimi',
      time: '20 - 30 Dakika',
      desc: '%100 pil sağlığı, hızlı şarj desteği ve garantili yüksek kaliteli pil montajı.',
      icon: '🔋'
    },
    {
      title: 'Kamera & Lens Camı Onarımı',
      time: '30 Dakika',
      desc: 'Kırılan veya çizilen kamera camlarının toza ve neme karşı korumalı orijinal montajı.',
      icon: '📸'
    },
    {
      title: 'Şarj Soketi & Mikrofon Tamiri',
      time: '30 Dakika',
      desc: 'Temassızlık yapan, şarj almayan veya ses gitmeyen soketlerin yerinde temizliği ve onarımı.',
      icon: '⚡'
    },
    {
      title: 'Kasa, Kapak & Arka Cam Değişimi',
      time: 'Aynı Gün',
      desc: 'Lazer teknolojisiyle arka cam değişimi ve kasa doğrultma onarım hizmeti.',
      icon: '🛠️'
    },
    {
      title: 'Sıvı Teması & Ücretsiz Arıza Tespiti',
      time: 'Anında Kontrol',
      desc: 'Cihazınızı açmadan önce ultrasonik temizlik ve mikroskobik anakart arıza tespiti (Ücretsizdir).',
      icon: '💧'
    }
  ];

  return (
    <div id="servis" className="w-full flex flex-wrap folder-banner py-8 sm:py-12 bg-white">
      <div className="w-full px-2 sm:px-4 max-w-[1448px] mx-auto">
        
        {/* Title */}
        <div className="w-full mb-8 border-b border-gray-200 pb-3 flex flex-wrap items-end justify-between gap-4">
          <div className="block-title">
            <h2 className="title text-xl sm:text-2xl font-bold text-gray-900">
              Kırşehir Hızlı Teknik Servis & Onarım Vitrini
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-1">
              Gözünüzün önünde 30 dakikada profesyonel montaj, 6 ay garantili yedek parça ve test cihazları.
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200">
            <Clock className="w-4 h-4" />
            <span>Aynı Gün Mağazada Teslimat</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#f8f9fa] border border-gray-100 hover:border-primary/40 rounded-custom p-5 transition-all hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{srv.icon}</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {srv.time}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-medium">6 Ay Yazılı Garanti</span>
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                    `Merhaba Adar Cep Shop Kırşehir, "${srv.title}" işlemi için servis süresi ve uygunluk hakkında bilgi alabilir miyim?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Servis Sor</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Strip */}
        <div className="bg-gradient-to-r from-dark to-[#1f2937] text-white rounded-custom p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <span className="text-[10px] uppercase font-bold text-primary bg-white/10 px-2.5 py-1 rounded inline-block mb-2">
              Kırşehir Merkez Onarım Merkezi
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Cihazınızda Bir Problem mi Var? Hemen Danışın!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Modelinizi ve arızayı belirtin, Adar Cep Shop teknisyenlerimiz size anında çözüm ve onarım süresi bildirsin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                'Merhaba Adar Cep Shop Kırşehir, telefonum arızalandı. Tamir için bilgi almak istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-5 py-3 rounded-custom flex items-center gap-2 shadow-md transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp Servis Hattı</span>
            </a>

            <a
              href={`tel:${storeInfo.phoneRaw}`}
              className="bg-white hover:bg-gray-100 text-dark text-xs font-bold px-5 py-3 rounded-custom flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>0538 522 93 40</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
