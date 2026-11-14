import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandLogos';
import { storeInfo } from '../data/storeInfo';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <div id="relation-587" className="w-full flex flex-wrap folder-footer">
      <footer className="w-full bg-gray-50 text-sm">

        {/* ========================================================
            MAIN FOOTER WRAPPER (Adar exact bg-dark and divide styling)
            ======================================================== */}
        <div className="bg-dark text-white text-base py-8 lg:py-16 relative w-full">
          <div className="w-full px-4 max-w-[1448px] mx-auto">

            {/* Top Row: Logo & Social Media Icons */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-[#3e3c42] mb-10">
              <div className="flex items-center">
                <a href="/" className="inline-block">
                  <img
                    src="/adarcepshoplogo.png?v=20261114v3"
                    alt="Adar Cep Shop Kırşehir"
                    className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
                  />
                </a>
              </div>

              {/* Social Media & Fast Contact Badges */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp Hattı</span>
                </a>

                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>{storeInfo.phone}</span>
                </a>

                <a
                  href={storeInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-full bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition"
                  title="Instagram: @adar_cepshop"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 4-Column Grid: Phones, Accessories, Trade-In, Store Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">

              {/* Col 1: About Adar Cep Shop */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
                  Adar Cep Shop Kırşehir
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Kırşehir merkezde sıfır kapalı kutu ve 6-12 ay garantili 2. el cep telefonları alım-satımı, Kaliteli kılıf ve ekran koruyucuları noktası.
                </p>
                <div className="text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Kırşehir Güvenilir Esnaf Hizmeti</span>
                </div>
              </div>

              {/* Col 2: Phone Categories */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
                  Telefon Modelleri
                </h4>
                <ul className="space-y-2.5 text-gray-300">
                  <li>
                    <button
                      onClick={() => onSelectCategory('sifir-telefon')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      Sıfır iPhone Modelleri (16 / 15 Serisi)
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectCategory('sifir-telefon')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      Samsung Galaxy S24 & A Serisi
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectCategory('ikinci-el-telefon')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      6-12 Ay Garantili 2. El iPhone'lar
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectCategory('ikinci-el-telefon')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      Garantili 2. El Samsung & Xiaomi
                    </button>
                  </li>
                  <li>
                    <a href="/takas" className="hover:text-primary transition-colors">
                      Eski Telefonunu Nakit Sat & Takas Yap
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Adar Accessories */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
                  Telefon Aksesuarları
                </h4>
                <ul className="space-y-2.5 text-gray-300">
                  <li>
                    <button
                      onClick={() => onSelectCategory('kilif-kapak')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      Adar Magsafe Manyetik Kılıflar
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectCategory('kilif-kapak')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      Darbeye Dayanıklı Zırhlı Kapaklar
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectCategory('ekran-koruyucu')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      9D Hayalet Gizlilik Ekran Camları
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectCategory('ekran-koruyucu')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      Kamera Lens Koruyucuları
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectCategory('sarj-kablo')}
                      className="hover:text-primary transition-colors text-left"
                    >
                      GaN Hızlı Şarj Adaptörleri & Kablolar
                    </button>
                  </li>
                </ul>
              </div>

              {/* Col 4: Store Address & Hours */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
                  Mağaza & İletişim
                </h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{storeInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${storeInfo.phoneRaw}`} className="hover:text-primary font-bold text-white">
                      {storeInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                    <a
                      href={storeInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-400 font-medium text-gray-200 transition"
                    >
                      {storeInfo.instagramHandle}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div>Pzt - Cmt: 09:00 - 20:30</div>
                      <div>Pazar: 11:00 - 19:00</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Copyright & EyCodex Agency Credit */}
            <div className="mt-12 pt-6 border-t border-[#3e3c42] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <div className="text-center md:text-left">
                Adar Cep Shop Kırşehir — Sıfır & 2. El Cep Telefonu Alım-Satımı ve Adar Telefon Aksesuarları.
              </div>

              {/* EyCodex Design & Development Credit - Kibar & Minimal Tasarım */}
              <div className="flex items-center gap-1.5 text-center my-1 md:my-0 text-xs text-gray-400">
                <span className="text-gray-400 text-xs">Tasarım & Yazılım:</span>
                <a
                  href="https://eycodex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#0084d6]/60 transition-all opacity-85 hover:opacity-100 group/ey cursor-pointer"
                  title="EyCodex | Profesyonel Web Tasarım & Dijital Ajans"
                >
                  <img
                    src="/images/eycodexlogo.png"
                    alt="EyCodex"
                    height="12"
                    style={{ height: '12px', maxHeight: '12px', width: 'auto', display: 'block' }}
                    className="object-contain brightness-95 group-hover/ey:brightness-110 transition-transform group-hover/ey:scale-105"
                  />
                </a>
              </div>

              <div className="shrink-0 text-center md:text-right font-medium">
                © 2026 Adar Cep Shop Kırşehir. Tüm Hakları Saklıdır.
              </div>
            </div>

          </div>
        </div>

      </footer>
    </div>
  );
};
