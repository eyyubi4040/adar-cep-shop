import React from 'react';
import { Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '5.000+',
      title: 'Mutlu Kırşehir Müşterisi',
      desc: 'Güvenle teslim ettiğimiz sıfır & 2. el cihazlar',
      icon: Users
    },
    {
      number: '10+ Yıl',
      title: 'Sektörel Tecrübe',
      desc: 'Kırşehir merkezde kesintisiz esnaf güveni',
      icon: Award
    },
    {
      number: '1.500+',
      title: 'Garantili 2. El Teslimi',
      desc: '40 nokta kontrolünden geçmiş faturalı cihazlar',
      icon: ShieldCheck
    },
    {
      number: '%100',
      title: 'Orijinal Adar Lisansı',
      desc: 'Faturalı ve garantili telefon aksesuarları',
      icon: CheckCircle2
    }
  ];

  return (
    <div id="relation-603" className="w-full flex flex-wrap folder-banner py-8 sm:py-12 bg-white">
      <div className="w-full px-2 sm:px-4 max-w-[1448px] mx-auto">
        
        {/* Title matching Adar */}
        <div className="w-full mb-8 text-center">
          <div className="block-title">
            <h2 className="title text-2xl sm:text-3xl font-bold text-gray-900">
              İstatistiklerimiz - Teknolojiyi Yakından Takip Ediyoruz
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-2 max-w-xl mx-auto">
              Adar Cep Shop olarak Kırşehir halkına sıfır kapalı kutu telefonlar, garantili 2. el modeller ve En Yüksek Kaliteyle hizmet veriyoruz.
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f9fa] border border-gray-100 rounded-custom p-6 text-center hover:shadow-md transition-shadow group"
              >
                <div className="size-12 rounded-full bg-sky-50 text-primary mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">
                  {s.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800 mb-1">
                  {s.title}
                </div>
                <div className="text-[11px] text-gray-500 leading-relaxed">
                  {s.desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
