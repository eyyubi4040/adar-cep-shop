# Adar Cep Shop - Kırşehir Tanıtım & Vitrin Web Sitesi

Bu proje, **Adar Cep Shop (Kırşehir)** için **https://www.zoreaksesuar.com/** kurumsal e-ticaret/katalog mimarisi, renk paleti ve vitrin düzeni referans alınarak **Bun + Vite + React 19 + TypeScript + Tailwind CSS** son teknolojileriyle geliştirilmiş modern bir tanıtım ve ürün vitrini web sitesidir.

---

## 📌 Proje Özellikleri

- **Zore Aksesuar Birebir Mimarisi:**
  - Kırmızı (`#c8102e`), koyu kurumsal gri ve beyaz renk paleti.
  - Üst duyuru ve acil iletişim bandı (Kırşehir çalışma saatleri, telefon, WhatsApp).
  - Canlı Arama Çubuğu (Kategori seçici, anlık arama önerileri ve açılır ürün önizleme kartları).
  - Kırmızı açılır **"TÜM KATEGORİLER" Mega Menü** (Zore stilinde 4 sütunlu zengin navigasyon).
  - 8+4 Düzeninde Manşet Hero Slider (Garantili 2. El, Sıfır Telefonlar, Zore Aksesuarları ve 30 Dk Teknik Servis).
  - Yan Tanıtım Kartları (Eski Cihazını Nakit Sat, Kırşehir Merkez Mağaza Güvencesi).
  - 5'li Kurumsal Güven Rozetleri (Kırşehir elden teslim, 6 ay mağaza garantisi, Zore lisanslı ürünler).
  - Görsel Kategori Gezinti Şeridi (İkonlu yuvarlak kategori kartları).
- **Tanıtım & Vitrin Kataloğu:**
  - Kullanıcının talebi doğrultusunda **internet üzerinden doğrudan ödeme/sepet bulunmamaktadır.**
  - Her üründe **"WhatsApp ile Bilgi Al"** butonu yer alır. Tıklandığında ürünün adı, modeli ve fiyatı otomatik olarak WhatsApp mesajına doldurulur.
  - **"Detaylı İncele"** modalı ile cihazın pil sağlığı, kozmetik durumu, garanti süresi ve Kırşehir mağaza stok durumu görüntülenir.
- **İnteraktif "2. El Cihazını Değerle & Takas" Aracı:**
  - Kırşehir'deki müşteriler eski Apple, Samsung veya Xiaomi telefonlarının modelini, hafızasını, kozmetik durumunu ve pil sağlığını seçerek anında tahmini nakit alım/takas fiyatını görür ve tek tıkla WhatsApp'tan teklif alabilir.
- **Kırşehir Teknik Servis Vitrini:**
  - 30 dakikada ekran değişimi, orijinal pil montajı, kasa ve soket tamiri hizmetleri.
- **Kırşehir Mağaza & Google Harita Entegrasyonu:**
  - Adres, telefon, çalışma saatleri ve interaktif harita.
- **Sıkça Sorulan Sorular (Accordion FAQ)**
- **5 Sütunlu Kurumsal Mega Footer**
- **Sağ Altta Sabit WhatsApp & Hızlı İletişim Butonu**

---

## 🚀 Çalıştırma Talimatları (Bun İle)

### 1. Geliştirici Modu (Hot Reload):
```bash
bun run dev
```

### 2. Canlı Sunucu (Bun Native Server):
```bash
bun run start
```
Veya klasör içindeki **`baslat.bat`** dosyasına çift tıklayarak doğrudan başlatabilirsiniz!

### 3. Yeni Build Almak:
```bash
bun run build
```

---

## 📁 Proje Dosya Yapısı

- `public/adarcepshoplogo.png` - Kullanıcının sağladığı orijinal logo
- `public/images/products/` - Yüksek çözünürlüklü ürün görselleri
- `public/images/banners/` - Manşet slider arka planları
- `src/data/products.ts` - Sıfır, 2. el ve Zore aksesuar ürün veritabanı
- `src/data/categories.ts` - Kategori listesi ve Mega Menü sütunları
- `src/data/storeInfo.ts` - Kırşehir mağaza adres, telefon ve çalışma saatleri
- `src/data/faq.ts` - Sıkça sorulan sorular
- `src/components/Header.tsx` - Üst bar, logo, canlı arama ve mega menü
- `src/components/HeroSlider.tsx` - 4 slaytlı manşet ve yan kartlar
- `src/components/TradeInCalculator.tsx` - İnteraktif 2. el değerleme hesaplayıcı
- `src/components/TechnicalService.tsx` - Kırşehir hızlı tamir vitrini
- `src/components/StoreSection.tsx` - Mağaza adresi ve Google Harita
- `server.ts` - Bun yerel statik HTTP sunucusu
