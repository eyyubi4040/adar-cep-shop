import React, { useState } from 'react';
import { Smartphone, CheckCircle, HelpCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { BrandLogo, WhatsAppIcon } from './BrandLogos';

export const TradeInCalculator: React.FC = () => {
  const [brand, setBrand] = useState('Apple');
  const [model, setModel] = useState('iPhone 13 128GB');
  const [condition, setCondition] = useState('Kozmetik 10/10 - Hatasız & Çiziksiz');
  const [battery, setBattery] = useState('%85 - %100 Arası Orijinal');
  const [boxStatus, setBoxStatus] = useState('Kutu & Fatura Mevcut');

  const modelsByBrand: Record<string, string[]> = {
    Apple: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 16',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 15',
      'iPhone 14 Pro Max',
      'iPhone 14 Pro',
      'iPhone 14',
      'iPhone 13 Pro Max',
      'iPhone 13',
      'iPhone 12 Pro',
      'iPhone 12',
      'iPhone 11'
    ],
    Samsung: [
      'Galaxy S25 Ultra',
      'Galaxy S24 Ultra',
      'Galaxy S24+',
      'Galaxy S23 Ultra',
      'Galaxy S23',
      'Galaxy S22',
      'Galaxy A55 5G',
      'Galaxy A54 5G',
      'Galaxy Z Flip 5'
    ],
    Xiaomi: [
      'Xiaomi 14 Ultra',
      'Xiaomi 13T Pro',
      'Redmi Note 13 Pro+ 5G',
      'Redmi Note 13 Pro',
      'Redmi Note 12 Pro'
    ],
    Oppo: [
      'Oppo Reno 11 Pro 5G',
      'Oppo Reno 11F 5G',
      'Oppo Reno 10 5G',
      'Oppo Reno 8',
      'Oppo A98 5G',
      'Oppo A78',
      'Oppo A58'
    ]
  };

  const handleBrandChange = (newBrand: string) => {
    setBrand(newBrand);
    setModel(modelsByBrand[newBrand][0]);
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Adar Cep Shop Kırşehir, eski telefonumu nakit satmak / takas yapmak istiyorum.\n\n` +
    `• Marka: ${brand}\n` +
    `• Model: ${model}\n` +
    `• Kasa Durumu: ${condition}\n` +
    `• Pil Sağlığı: ${battery}\n` +
    `• Kutu Durumu: ${boxStatus}\n\n` +
    `Cihazım için güncel nakit değerleme teklifinizi öğrenebilir miyim?`
  );

  return (
    <div id="degerleme" className="w-full flex flex-wrap folder-banner py-8 sm:py-12 bg-[#f3f4f6]">
      <div className="w-full px-2 sm:px-4 max-w-[1448px] mx-auto">

        {/* Header Block */}
        <div className="w-full mb-6 border-b border-gray-300 pb-3 flex flex-wrap items-end justify-between gap-4">
          <div className="block-title">
            <h2 className="title text-xl sm:text-2xl font-bold text-gray-900">
              Cihazını Sat & Takas Sistemi (Kırşehir Merkez)
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-1">
              Kullanmadığınız eski telefonunuzu getirin, uzman ekibimizle değerinde anında nakit alalım.
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            ✓ 15 Dakikada Hızlı Ekspertiz
          </span>
        </div>

        {/* Interactive Valuation Panel */}
        <div className="bg-white rounded-custom shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Form Controls */}
              <div className="lg:col-span-7 space-y-5">

                {/* Step 1: Brand Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                    1. Telefon Markanızı Seçin
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Apple', 'Samsung', 'Xiaomi', 'Oppo'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => handleBrandChange(b)}
                        className={`py-2 px-2.5 rounded-custom text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${brand === b
                            ? 'bg-[#0084d6] text-white shadow-xs'
                            : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
                          }`}
                      >
                        <BrandLogo brand={b} className="h-3.5 w-auto" monochrome={brand === b} />
                        <span>{b}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Model Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                    2. Cihaz Modelini Seçin
                  </label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-custom px-4 py-2.5 text-xs sm:text-sm font-bold text-gray-900 outline-none focus:border-primary shadow-xs"
                  >
                    {modelsByBrand[brand].map((m) => (
                      <option key={m} value={m} className="text-gray-900 font-medium">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 3: Condition & Battery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                      3. Kasa & Kozmetik Durumu
                    </label>
                    <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-custom px-3 py-2 text-xs font-bold text-gray-900 outline-none focus:border-primary shadow-xs"
                    >
                      <option value="Kozmetik 10/10 - Hatasız & Çiziksiz">Kozmetik 10/10 - Çiziksiz & Temiz</option>
                      <option value="Kozmetik 9/10 - Kılcal Çizikler Mevcut">Kozmetik 9/10 - Kılcal Çizikler</option>
                      <option value="Kozmetik 7/10 - Kullanım İzi & Çizikler">Kozmetik 7/10 - Kullanım İzleri</option>
                      <option value="Ekranı Kırık veya Hasarlı">Ekranı veya Kasası Hasarlı</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                      4. Pil Sağlığı Durumu
                    </label>
                    <select
                      value={battery}
                      onChange={(e) => setBattery(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-custom px-3 py-2 text-xs font-bold text-gray-900 outline-none focus:border-primary shadow-xs"
                    >
                      <option value="%85 - %100 Arası Orijinal">%85 - %100 Arası Orijinal</option>
                      <option value="%80 - %84 Arası Orijinal">%80 - %84 Arası Orijinal</option>
                      <option value="%80 Altı (Servis Uyarısı)">%80 Altı (Servis Uyarısı)</option>
                      <option value="Yeni Değiştirilmiş Orijinal Pil">Yeni Değiştirilmiş Pil</option>
                    </select>
                  </div>
                </div>

                {/* Step 4: Box / Invoice */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                    5. Kutu & Fatura Durumu
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['Kutu & Fatura Mevcut', 'Sadece Kutu Var', 'Sadece Cihaz'].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setBoxStatus(status)}
                        className={`py-2 px-3 rounded text-xs font-bold transition cursor-pointer text-center ${boxStatus === status
                            ? 'bg-[#111827] text-white shadow-xs'
                            : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
                          }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Instant WhatsApp Proposal Card */}
              <div
                style={{ backgroundColor: '#0b132b', backgroundImage: 'linear-gradient(145deg, #0b132b 0%, #172554 100%)' }}
                className="lg:col-span-5 !bg-[#0b132b] text-white p-6 sm:p-7 rounded-custom shadow-xl border border-sky-900/50 flex flex-col justify-between h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0084d6]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700/80 mb-4">
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Seçilen Cihaz Özeti
                    </span>
                    <span className="text-[11px] bg-white/15 px-2.5 py-0.5 rounded text-gray-100 font-bold border border-white/10">
                      Kırşehir Merkez
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-sky-300 font-semibold mb-1">Değerleme Modeli:</div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {brand} <span className="text-[#00f9fd]">{model}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-gray-100 mb-5 bg-[#030712]/80 border border-white/15 p-4 rounded-xl shadow-inner">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300 font-medium">Kozmetik Durum:</span>
                      <span className="font-bold text-white text-right">{condition}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-gray-300 font-medium">Pil Sağlığı:</span>
                      <span className="font-bold text-emerald-400 text-right">{battery}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">Kutu & Fatura:</span>
                      <span className="font-bold text-white text-right">{boxStatus}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-5 font-normal">
                    Adar Cep Shop uzmanlarımız cihazınızın piyasa koşullarına göre en yüksek nakit değerlemesini hemen çıkarsın.
                  </p>
                </div>

                <div className="relative z-10 pt-2 border-t border-white/10">
                  <a
                    href={`https://wa.me/${storeInfo.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-3.5 px-4 rounded-custom flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all text-sm cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                    <span>WhatsApp'tan Nakit Teklif İste</span>
                  </a>

                  <div className="text-[11px] text-gray-300 text-center mt-2.5 font-medium">
                    * Kesin tutar Kırşehir mağazamızda fiziksel kontrol sonrası nakit olarak ödenir.
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
