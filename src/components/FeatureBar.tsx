import React from 'react';
import { MapPin, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import { WhatsAppIcon } from './BrandLogos';

export const FeatureBar: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Kırşehir Merkez Mağaza',
      desc: 'Deneyerek, görerek elden teslim',
      color: 'text-primary',
      bgColor: 'bg-sky-50'
    },
    {
      icon: ShieldCheck,
      title: '6-12 Ay Mağaza Garantisi',
      desc: '40 nokta ekspertizli 2. el cihazlar',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Sparkles,
      title: 'Kaliteli Aksesuar',
      desc: '10.000+ çeşit kılıf, cam ve şarj',
      color: 'text-[#0284c7]',
      bgColor: 'bg-sky-50'
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp Hızlı Fiyat',
      desc: 'Tek tıkla anında fiyat & stok bilgisi',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Wrench,
      title: '30 Dk Teknik Servis',
      desc: 'Aynı gün ekran ve batarya değişimi',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3 p-2 ${idx > 0 ? 'pt-3 md:pt-2 md:pl-4' : ''}`}
              >
                <div className={`w-11 h-11 rounded-lg ${item.bgColor} ${item.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 truncate mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
