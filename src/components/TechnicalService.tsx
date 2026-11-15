import React from 'react';
import { Clock, Phone, Sparkles } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { WhatsAppWhiteIcon } from './BrandLogos';

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
    <div id="servis" className="w-full flex flex-wrap folder-banner py-10 sm:py-16 bg-white border-t border-slate-200/80">
      <div className="w-full px-3 sm:px-6 max-w-[1448px] mx-auto">

        {/* Title */}
        <div className="w-full mb-8 pb-4 border-b border-slate-200/80 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0084d6] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Garantili Onarım Merkezi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kırşehir Hızlı Teknik Servis & Onarım Vitrini
            </h2>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Gözünüzün önünde 30 dakikada profesyonel montaj, 6 ay garantili yedek parça ve test cihazları.
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#0084d6] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/70">
            <Clock className="w-4 h-4" />
            <span>Aynı Gün Mağazada Teslimat</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/80 hover:border-[#0084d6]/40 rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{srv.icon}</span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full shadow-2xs">
                    {srv.time}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#0084d6] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">6 Ay Yazılı Garanti</span>
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                    `Merhaba Adar Cep Shop Kırşehir, "${srv.title}" işlemi için servis süresi ve uygunluk hakkında bilgi alabilir miyim?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0084d6] hover:text-[#006cb3] flex items-center gap-1 group/link"
                >
                  <span>Servis Sor</span>
                  <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Strip */}
        <div
          style={{
            backgroundColor: '#080e1e',
            backgroundImage: 'linear-gradient(145deg, #080e1e 0%, #0c1836 55%, #132b5c 100%)',
            color: '#ffffff'
          }}
          className="rounded-3xl p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-900/50 relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="text-[10px] uppercase font-bold text-sky-400 bg-white/10 px-3 py-1 rounded-full inline-block mb-2 border border-white/10">
              Kırşehir Merkez Onarım Noktası
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-1.5 text-white tracking-tight">
              Cihazınızda Bir Problem mi Var? Hemen Danışın!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Modelinizi ve arızayı belirtin, Adar Cep Shop teknisyenlerimiz size anında çözüm ve onarım süresi bildirsin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <a
              href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                'Merhaba Adar Cep Shop Kırşehir, telefonum arızalandı. Tamir için bilgi almak istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-md shadow-[#25D366]/25 transition-all active:scale-95"
            >
              <WhatsAppWhiteIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp Servis Hattı</span>
            </a>

            <a
              href={`tel:${storeInfo.phoneRaw}`}
              className="bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#0084d6]" />
              <span>{storeInfo.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
