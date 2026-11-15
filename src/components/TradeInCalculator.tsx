import React, { useState } from 'react';
import { Smartphone, CheckCircle, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import { BrandLogo, WhatsAppWhiteIcon } from './BrandLogos';

const modelsByBrand: Record<string, string[]> = {
  Apple: [
    'iPhone 16 Pro Max',
    'iPhone 16 Pro',
    'iPhone 16 Plus',
    'iPhone 16',
    'iPhone 15 Pro Max',
    'iPhone 15 Pro',
    'iPhone 15 Plus',
    'iPhone 15',
    'iPhone 14 Pro Max',
    'iPhone 14 Pro',
    'iPhone 14',
    'iPhone 13 Pro Max',
    'iPhone 13 Pro',
    'iPhone 13',
    'iPhone 12 Pro Max',
    'iPhone 12 Pro',
    'iPhone 12',
    'iPhone 11 Pro Max',
    'iPhone 11'
  ],
  Samsung: [
    'Galaxy S25 Ultra',
    'Galaxy S24 Ultra',
    'Galaxy S24+',
    'Galaxy S24',
    'Galaxy S23 Ultra',
    'Galaxy S23',
    'Galaxy S22 Ultra',
    'Galaxy S22',
    'Galaxy A55 5G',
    'Galaxy A54 5G',
    'Galaxy A35 5G',
    'Galaxy Z Fold 6',
    'Galaxy Z Flip 6',
    'Galaxy Z Flip 5'
  ],
  Xiaomi: [
    'Xiaomi 14 Ultra',
    'Xiaomi 14',
    'Xiaomi 13T Pro',
    'Xiaomi 13T',
    'Redmi Note 13 Pro+ 5G',
    'Redmi Note 13 Pro',
    'Redmi Note 13',
    'Redmi Note 12 Pro',
    'Poco X6 Pro',
    'Poco F6'
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

export const TradeInCalculator: React.FC = () => {
  const [brand, setBrand] = useState('Apple');
  const [model, setModel] = useState(modelsByBrand.Apple[0]);
  const [condition, setCondition] = useState('Kozmetik 10/10 - Hatasız & Çiziksiz');
  const [battery, setBattery] = useState('%85 - %100 Arası Orijinal');
  const [boxStatus, setBoxStatus] = useState('Kutu & Fatura Mevcut');

  const availableModels = modelsByBrand[brand] || [];
  const currentModel = availableModels.includes(model) ? model : (availableModels[0] || '');

  const handleBrandChange = (newBrand: string) => {
    setBrand(newBrand);
    const brandModels = modelsByBrand[newBrand] || [];
    setModel(brandModels[0] || '');
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Adar Cep Shop Kırşehir, eski telefonumu nakit satmak / takas yapmak istiyorum.\n\n` +
    `• Marka: ${brand}\n` +
    `• Model: ${currentModel}\n` +
    `• Kasa Durumu: ${condition}\n` +
    `• Pil Sağlığı: ${battery}\n` +
    `• Kutu Durumu: ${boxStatus}\n\n` +
    `Cihazım için güncel nakit değerleme teklifinizi öğrenebilir miyim?`
  );

  return (
    <div id="degerleme" className="w-full flex flex-wrap folder-banner py-10 sm:py-16 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div id="takas" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="w-full px-3 sm:px-6 max-w-[1448px] mx-auto">

        {/* Header Block */}
        <div className="w-full mb-8 pb-4 border-b border-slate-200/80 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0084d6] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nakit Alım & Takas Motoru</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Eski Telefonunu Nakit Sat veya Yenisiyle Değiştir
            </h2>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Kullanmadığınız eski telefonunuzu Kırşehir mağazamıza getirin, 40 nokta kontrolüyle değerinde anında nakit alalım.
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            15 Dakikada Hızlı Ekspertiz & Nakit Ödeme
          </span>
        </div>

        {/* Interactive Valuation Panel */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden">
          <div className="p-6 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

              {/* Left Column: Form Controls */}
              <div className="lg:col-span-7 space-y-6">

                {/* Step 1: Brand Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
                    <span className="size-5 rounded-full bg-[#0084d6] text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Telefon Markanızı Seçin</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['Apple', 'Samsung', 'Xiaomi', 'Oppo'].map((b) => {
                      const isSelected = brand === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleBrandChange(b)}
                          style={
                            isSelected
                              ? { backgroundColor: '#0084d6', color: '#ffffff', borderColor: '#0084d6' }
                              : { backgroundColor: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }
                          }
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 border ${
                            isSelected
                              ? 'shadow-md shadow-[#0084d6]/30 ring-2 ring-[#0084d6]/25 font-black'
                              : 'hover:bg-slate-100'
                          }`}
                        >
                          <BrandLogo brand={b} className="h-4 w-auto" monochrome={isSelected} />
                          <span>{b}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Model Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                    <span className="size-5 rounded-full bg-[#0084d6] text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Cihaz Modelini Seçin</span>
                  </label>
                  <select
                    value={currentModel}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-[#0084d6] focus:ring-4 focus:ring-[#0084d6]/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold text-slate-900 outline-none shadow-2xs transition-all"
                  >
                    {availableModels.map((m) => (
                      <option key={m} value={m} className="text-slate-900 font-medium">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 3: Condition & Battery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                      <span className="size-5 rounded-full bg-[#0084d6] text-white flex items-center justify-center text-[10px]">3</span>
                      <span>Kasa & Kozmetik Durumu</span>
                    </label>
                    <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-[#0084d6] focus:ring-4 focus:ring-[#0084d6]/10 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 outline-none shadow-2xs transition-all"
                    >
                      <option value="Kozmetik 10/10 - Hatasız & Çiziksiz">Kozmetik 10/10 - Çiziksiz & Hatasız</option>
                      <option value="Kozmetik 9/10 - Kılcal Çizikler Mevcut">Kozmetik 9/10 - Kılcal Çizikler</option>
                      <option value="Kozmetik 7/10 - Kullanım İzi & Çizikler">Kozmetik 7/10 - Kullanım İzleri</option>
                      <option value="Ekranı Kırık veya Hasarlı">Ekranı veya Kasası Hasarlı</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                      <span className="size-5 rounded-full bg-[#0084d6] text-white flex items-center justify-center text-[10px]">4</span>
                      <span>Pil Sağlığı Durumu</span>
                    </label>
                    <select
                      value={battery}
                      onChange={(e) => setBattery(e.target.value)}
                      className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-[#0084d6] focus:ring-4 focus:ring-[#0084d6]/10 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 outline-none shadow-2xs transition-all"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
                    <span className="size-5 rounded-full bg-[#0084d6] text-white flex items-center justify-center text-[10px]">5</span>
                    <span>Kutu & Fatura Durumu</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {['Kutu & Fatura Mevcut', 'Sadece Kutu Var', 'Sadece Cihaz'].map((status) => {
                      const isSelected = boxStatus === status;
                      return (
                        <button
                          key={status}
                          type="button"
                          onClick={() => setBoxStatus(status)}
                          style={
                            isSelected
                              ? { backgroundColor: '#0f172a', color: '#ffffff', borderColor: '#0f172a' }
                              : { backgroundColor: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }
                          }
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center active:scale-95 border ${
                            isSelected
                              ? 'shadow-md shadow-slate-900/30 font-black ring-2 ring-slate-900/20'
                              : 'hover:bg-slate-100'
                          }`}
                        >
                          {status}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Instant WhatsApp Proposal Card */}
              <div
                style={{
                  backgroundColor: '#080e1e',
                  backgroundImage: 'linear-gradient(145deg, #080e1e 0%, #0c1836 55%, #132b5c 100%)',
                  color: '#ffffff'
                }}
                className="lg:col-span-5 p-6 sm:p-8 rounded-3xl shadow-2xl border border-blue-900/50 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#0084d6]/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Seçilen Cihaz Özeti
                    </span>
                    <span className="text-[11px] bg-white/10 px-2.5 py-0.5 rounded-full text-slate-200 font-bold border border-white/10">
                      Kırşehir Merkez
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-sky-300 font-medium mb-1">Değerleme Modeli:</div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {brand} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#0084d6]">{currentModel}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-200 mb-5 bg-slate-950/70 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400 font-medium">Kozmetik Durum:</span>
                      <span className="font-bold text-white text-right">{condition}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-slate-400 font-medium">Pil Sağlığı:</span>
                      <span className="font-bold text-emerald-400 text-right">{battery}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Kutu & Fatura:</span>
                      <span className="font-bold text-white text-right">{boxStatus}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                    Adar Cep Shop uzmanlarımız cihazınızın piyasa koşullarına göre en yüksek nakit değerlemesini hemen çıkarsın.
                  </p>
                </div>

                <div className="relative z-10 pt-3 border-t border-white/10">
                  <a
                    href={`https://wa.me/${storeInfo.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/25 hover:shadow-2xl transition-all text-xs sm:text-sm cursor-pointer active:scale-95"
                  >
                    <WhatsAppWhiteIcon className="w-5 h-5 shrink-0" />
                    <span>WhatsApp'tan Nakit Teklif İste</span>
                  </a>

                  <div className="text-[11px] text-slate-400 text-center mt-2.5 font-medium">
                    * Kesin tutar Kırşehir mağazamızda fiziksel kontrol sonrası anında nakit ödenir.
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
