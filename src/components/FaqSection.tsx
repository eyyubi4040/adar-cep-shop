import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './BrandLogos';
import { storeInfo } from '../data/storeInfo';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Mağazanızda hangi cep telefonu modelleri bulunmaktadır?',
      a: 'Adar Cep Shop olarak Apple iPhone (11 serisinden 18 Pro Max\'e kadar), Samsung Galaxy (S25 Ultra, S24 Ultra, A serisi), Oppo ve Xiaomi modellerinin sıfır kapalı kutu ile 40 nokta kontrollü 2. el seçeneklerini sunuyoruz.'
    },
    {
      q: 'İkinci el telefon alımlarında garanti veriyor musunuz?',
      a: 'Evet. Satışa sunduğumuz her 2. el cihaz uzmanlarımız tarafından donanım, ekran, batarya, kamera ve Face ID testlerinden geçirilir. Cihazınız adınıza düzenlenen 6 ila 12 ay mağaza garanti belgesi ile teslim edilir.'
    },
    {
      q: 'Eski telefonumu nakit satabilir veya takas yapabilir miyim?',
      a: 'Evet. Mevcut telefonunuzu Kırşehir merkezdeki mağazamıza getirebilir veya sitemizdeki takas formundan WhatsApp üzerinden hızlı değerleme teklifi alabilirsiniz. Cihazınız kontrol edildikten sonra ödemeniz nakit olarak anında yapılır.'
    },
    {
      q: 'Telefon kılıfı ve ekran koruyucular orijinal Adar marka mı?',
      a: 'Evet. Mağazamız Telefon Aksesuarları yetkili satış noktasıdır. Magsafe kılıflar, 9D hayalet gizlilik camları, kamera koruyucuları ve GaN hızlı şarj adaptörleri %100 orijinal ve faturalıdır.'
    },
    {
      q: 'Beğendiğim bir cihazı veya aksesuarı nasıl temin edebilirim?',
      a: 'Kırşehir merkez Terme Caddesi\'ndeki mağazamıza gelerek ürünleri inceleyip elden teslim alabilir ya da WhatsApp hattımız üzerinden stok durumunu sorup adınıza ayırtabilirsiniz.'
    }
  ];

  return (
    <div id="sss" className="w-full flex flex-wrap folder-banner py-8 sm:py-12 bg-white">
      <div className="w-full px-2 sm:px-4 max-w-[1000px] mx-auto">
        
        {/* Title */}
        <div className="w-full mb-8 text-center">
          <div className="block-title">
            <h2 className="title text-2xl sm:text-3xl font-bold text-gray-900">
              Sıkça Sorulan Sorular
            </h2>
            <div className="subtitle text-xs sm:text-sm text-gray-500 mt-2">
              Mağazamız, telefon modelleri ve aksesuarlarımız hakkında merak edilenler.
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-custom overflow-hidden transition-all bg-[#fafafa]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-gray-900 hover:text-primary transition-colors cursor-pointer bg-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-primary font-black text-sm">Q.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-[#fbfbfb]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="mt-8 p-6 bg-sky-50/70 border border-sky-200 rounded-custom text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-gray-900">Merak ettiğiniz bir model mi var?</div>
            <div className="text-xs text-gray-600 mt-0.5">Adar Cep Shop Kırşehir ekibimiz WhatsApp üzerinden anında yardımcı olmaktadır.</div>
          </div>
          <a
            href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Merhaba Adar Cep Shop, bir model hakkında bilgi almak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-[#006cb3] text-white text-xs font-bold px-5 py-2.5 rounded-custom flex items-center gap-2 shrink-0 transition-colors shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp ile Sorun</span>
          </a>
        </div>

      </div>
    </div>
  );
};
