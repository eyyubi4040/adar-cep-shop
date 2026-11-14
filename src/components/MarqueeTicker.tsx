import React from 'react';
import { storeInfo } from '../data/storeInfo';
import { AppleLogo, SamsungLogo, XiaomiLogo, OppoLogo, SpigenLogo, AnkerLogo, JblLogo } from './BrandLogos';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    {
      logo: <AppleLogo className="h-4 w-auto text-gray-900" />,
      text: 'iPhone 18 Pro Max, 17 & 16 Serisi Kapalı Kutu & 2. El Temiz Cihazlar',
      link: '#vitrin'
    },
    {
      logo: <SamsungLogo className="h-3.5 w-auto" />,
      text: 'Galaxy S25 Ultra, S24 & Galaxy AI Modelleri Kırşehir Mağazamızda',
      link: '#vitrin'
    },
    {
      logo: <OppoLogo className="h-3.5 w-auto" />,
      text: 'Oppo Reno & A Serisi Sıfır ve Garantili İkinci El Cihazlar',
      link: '#vitrin'
    },
    {
      logo: <SpigenLogo className="h-3.5 w-auto" />,
      text: 'MagSafe Uyumlu Zırhlı Kılıflar ve 9D Hayalet Gizlilik Camları',
      link: '#vitrin'
    },
    {
      logo: <AnkerLogo className="h-3.5 w-auto" />,
      text: '65W GaN Yeni Nesil Hızlı Şarj Adaptörleri ve Kırılmaz Kablolar',
      link: '#vitrin'
    },
    {
      logo: <XiaomiLogo className="h-4 w-auto" />,
      text: 'Xiaomi 14T Pro & Redmi Serisi Türkiye Garantili Seçenekler',
      link: '#vitrin'
    },
    {
      logo: <JblLogo className="h-3.5 w-auto" />,
      text: 'JBL Wave Buds ve Kablosuz Bluetooth Hoparlörler',
      link: '#vitrin'
    },
    {
      text: '📍 Adar Cep Shop Kırşehir Merkez Mağazası (Terme Cad.)',
      link: '#magaza'
    },
    {
      text: '🔄 Eski Telefonunu Getir, Değerinde Nakit Alalım (Takas İmkanı)',
      link: '#degerleme'
    }
  ];

  return (
    <div id="relation-597" className="w-full flex flex-wrap folder-slider">
      <div className="w-full bg-[#fcfcfd] flex flex-wrap lg:flex-nowrap py-1 mb-6 lg:mb-8 border-y border-gray-200">
        <div className="w-full overflow-hidden">
          <div className="relative flex overflow-x-hidden mx-auto w-auto marquee-container group">
            <div className="whitespace-nowrap inline-flex items-center gap-8 marquee group-hover:[animation-play-state:paused] py-2 text-xs lg:text-sm font-semibold text-gray-800">
              {tickerItems.concat(tickerItems).map((item, idx) => (
                <React.Fragment key={idx}>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group/item"
                  >
                    {item.logo && (
                      <span className="shrink-0 p-1 rounded-md bg-white border border-gray-200 shadow-2xs flex items-center justify-center">
                        {item.logo}
                      </span>
                    )}
                    <span className="group-hover/item:text-primary transition-colors">{item.text}</span>
                    <span className="text-primary font-bold">→</span>
                  </a>
                  <span className="text-gray-300 select-none">|</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
