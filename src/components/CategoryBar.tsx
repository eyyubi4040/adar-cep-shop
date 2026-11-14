import React from 'react';
import { Smartphone, Shield, Sparkles, BatteryCharging, Headphones, Layers } from 'lucide-react';

interface CategoryBarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const quickCategories = [
    { id: 'sifir-telefon', name: 'Sıfır Telefon', icon: Smartphone, badge: 'Kapalı Kutu' },
    { id: 'ikinci-el-telefon', name: '2. El Telefon', icon: Shield, badge: '6-12 Ay Garanti' },
    { id: 'kilif-kapak', name: 'Kılıf & Kapak', icon: Layers, badge: 'MagSafe' },
    { id: 'ekran-koruyucu', name: 'Ekran Koruma', icon: Sparkles, badge: '9D Hayalet' },
    { id: 'sarj-kablo', name: 'Şarj & Güç', icon: BatteryCharging, badge: 'GaN Hızlı' },
    { id: 'ses-kulaklik', name: 'Kulaklık & Ses', icon: Headphones, badge: 'Bluetooth' },
  ];

  return (
    <div id="relation-609" className="w-full flex flex-wrap folder-slider py-6 sm:py-8 bg-white">
      <div className="w-full px-2 sm:px-4 max-w-[1448px] mx-auto">
        
        {/* Title */}
        <div className="w-full mb-4 flex items-center justify-between border-b border-gray-200 pb-2">
          <div className="block-title">
            <h3 className="title text-base sm:text-lg font-bold text-gray-900">
              Hızlı Kategori Kartları
            </h3>
          </div>
          <span className="text-[11px] text-gray-400 font-medium">
            Kırşehir Mağaza Reyonları
          </span>
        </div>

        {/* Quick Category Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const vitrin = document.getElementById('vitrin');
                  if (vitrin) vitrin.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-3.5 rounded-custom border transition-all cursor-pointer flex flex-col items-center text-center group ${
                  isSelected
                    ? 'border-primary bg-sky-50/60 shadow-xs'
                    : 'border-gray-200 bg-[#f8f9fa] hover:border-primary/40 hover:bg-white hover:shadow-xs'
                }`}
              >
                <div
                  className={`size-11 rounded-full flex items-center justify-center mb-2 transition-transform group-hover:scale-110 ${
                    isSelected
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-800 shadow-2xs group-hover:bg-primary group-hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-xs font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {cat.name}
                </div>

                <span className="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-100 font-medium">
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
