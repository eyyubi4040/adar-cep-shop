import type { Product } from '../types';

export const products: Product[] = [
  // =========================================================================
  // APPLE iPHONE MODELLERİ & ORİJİNAL AKSESUARLARI
  // =========================================================================
  {
    id: 'prod-ip18-promax',
    title: 'Apple iPhone 18 Pro Max 512GB - Bordo Titanyum',
    brand: 'Apple',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'En Yeni 2026 Zirve Flagship',
    image: '/images/products/iphone18promax.jpg',
    specs: {
      storage: '512 GB / 1 TB',
      ram: '12 GB LPDDR5X',
      color: 'Bordo Titanyum (Burgundy Titanium)',
      warranty: '2 Yıl Apple Türkiye Garantili',
      features: ['Apple A20 Pro Çip', 'Değişken Diyafram Pro Kamera', '6.9" 3000 Nit OLED Ekran', 'Gelişmiş Apple Intelligence']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Apple’ın en yeni 2026 amiral gemisi. A20 Pro çip, devrimsel değişken diyaframlı 48MP Pro Fusion kamera ve büyüleyici Bordo Titanyum rengi ile kapalı kutu.'
  },
  {
    id: 'prod-ip18-pro',
    title: 'Apple iPhone 18 Pro 256GB - Buzul Titanyum',
    brand: 'Apple',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Yeni Pro Seri',
    image: '/images/products/iphone18pro.jpg',
    specs: {
      storage: '256 GB',
      ram: '12 GB LPDDR5X',
      color: 'Buzul Mavisi Titanyum (Glacier)',
      warranty: '2 Yıl Apple Türkiye Garantili',
      features: ['Apple A20 Pro Çip', 'Küçültülmüş Dinamik Ada', '48MP Pro Fusion Kamera', 'Buhar Odası Soğutma']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Kompakt Pro boyutunda maksimum güç. 2 yıl Apple Türkiye garantili, sıfır jelatinli kapalı kutu.'
  },
  {
    id: 'prod-ip17-promax',
    title: 'Apple iPhone 17 Pro Max 256GB - Kozmik Turuncu / Gümüş',
    brand: 'Apple',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'A19 Pro Gücü',
    image: '/images/products/iphone17pro.jpg',
    specs: {
      storage: '256 GB',
      ram: '12 GB',
      color: 'Kozmik Turuncu / Gümüş',
      warranty: '2 Yıl Apple Türkiye Garantili',
      features: ['A19 Pro Çip', 'Buhar Odalı Gövde', '48MP Üçlü Periskop Kamera', 'Ceramic Shield 2']
    },
    inStock: true,
    featured: true,
    bestSeller: false,
    description: 'A19 Pro işlemci ve 12GB RAM ile yüksek performanslı oyun ve fotoğrafçılık amiral gemisi.'
  },
  {
    id: 'prod-ip16-promax',
    title: 'Apple iPhone 16 Pro Max 256GB - Çöl Titanyum',
    brand: 'Apple',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Yeni Flagship',
    image: '/images/products/iphone16pro.jpg',
    specs: {
      storage: '256 GB',
      ram: '8 GB',
      color: 'Çöl Titanyum (Desert Titanium)',
      warranty: '2 Yıl Apple Türkiye Garantili',
      features: ['A18 Pro Çip', '5X Optik Zoom Periskop', '48MP Fusion Kamera', 'Kırşehir Mağaza Teslim']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Sıfır açılmamış jelatinli kutusunda, 2 yıl Apple Türkiye garantili ve faturalı.'
  },
  {
    id: 'prod-ip16-pro',
    title: 'Apple iPhone 16 Pro 128GB - Doğal Titanyum',
    brand: 'Apple',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Yeni Model',
    image: '/images/products/iphone16pro.jpg',
    specs: {
      storage: '128 GB',
      ram: '8 GB',
      color: 'Doğal Titanyum',
      warranty: '2 Yıl Apple Türkiye Garantili',
      features: ['A18 Pro Çip', 'Kamera Kontrol Butonu', 'Titanyum Kasa', 'Apple Intelligence Uyumlu']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'En yeni nesil A18 Pro işlemci ve geliştirilmiş kamera kontrol tuşu ile kapalı kutu.'
  },
  {
    id: 'prod-ip15-128',
    title: 'Apple iPhone 15 128GB - Siyah',
    brand: 'Apple',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Çok Satan',
    image: '/images/products/iphone15.jpg',
    specs: {
      storage: '128 GB',
      ram: '6 GB',
      color: 'Siyah',
      warranty: '2 Yıl Apple Türkiye Garantili',
      features: ['Dinamik Ada (Dynamic Island)', '48MP Ana Kamera', 'Type-C Bağlantı', 'A16 Bionic Çip']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Sıfır kapalı kutu, faturalı ve 2 yıl resmi Türkiye garantili.'
  },
  {
    id: 'prod-ip15-pro-2el',
    title: 'Apple iPhone 15 Pro 128GB - Mavi Titanyum (Garantili 2. El)',
    brand: 'Apple',
    category: 'ikinci-el-telefon',
    condition: 'ikinci-el',
    conditionBadge: '2. El Garantili',
    badge: '12 Ay Garanti',
    image: '/images/products/iphone15.jpg',
    specs: {
      storage: '128 GB',
      batteryHealth: '%96 Pil Sağlığı',
      color: 'Mavi Titanyum',
      warranty: '12 Ay Apple + Mağaza Garantisi Devam Ediyor',
      features: ['A17 Pro Çip', 'Hatasız & Çiziksiz Kasa', 'Orijinal Kutu ve Fatura', '40 Nokta Kontrollü']
    },
    inStock: true,
    featured: false,
    bestSeller: true,
    description: 'Türkiye cihazı, Apple garantisi süren, kozmetik 10/10 temizlikte garantili 2. el.'
  },
  {
    id: 'prod-ip14-pro-2el',
    title: 'Apple iPhone 14 Pro 128GB - Derin Mor (Garantili 2. El)',
    brand: 'Apple',
    category: 'ikinci-el-telefon',
    condition: 'ikinci-el',
    conditionBadge: '2. El Garantili',
    badge: '6 Ay Garanti',
    image: '/images/products/iphone14pro.jpg',
    specs: {
      storage: '128 GB',
      batteryHealth: '%91 Pil Sağlığı',
      color: 'Derin Mor (Deep Purple)',
      warranty: '6 Ay Yazılı Mağaza Garantili',
      features: ['Kozmetik 10/10 Hatasız', 'TrueTone & Face ID Aktif', 'Kutulu ve Faturalı', 'Orijinal Ekran']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: '40 nokta kontrolünden geçmiş, hatasız ve çiziksiz 2. el cihaz. 6 ay yazılı mağaza garantisiyle.'
  },
  {
    id: 'prod-ip13-128-2el',
    title: 'Apple iPhone 13 128GB - Yıldız Işığı (Garantili 2. El)',
    brand: 'Apple',
    category: 'ikinci-el-telefon',
    condition: 'ikinci-el',
    conditionBadge: '2. El Garantili',
    badge: 'Fırsat Modeli',
    image: '/images/products/iphone13.jpg',
    specs: {
      storage: '128 GB',
      batteryHealth: '%88 Pil Sağlığı',
      color: 'Yıldız Işığı (Starlight)',
      warranty: '6 Ay Yazılı Mağaza Garantili',
      features: ['Kılcal Çiziksiz Kasa', 'Orijinal Şarj ve Kutu', 'Donanım Onaylı', 'Değişensiz']
    },
    inStock: true,
    featured: true,
    bestSeller: false,
    description: 'Temiz kullanılmış, pili ve tüm donanımı orijinal garantili 2. el iPhone 13.'
  },
  {
    id: 'prod-ip12-128-2el',
    title: 'Apple iPhone 12 128GB - Mavi (Garantili 2. El)',
    brand: 'Apple',
    category: 'ikinci-el-telefon',
    condition: 'ikinci-el',
    conditionBadge: '2. El Garantili',
    badge: 'Bütçe Dostu',
    image: '/images/products/iphone12.jpg',
    specs: {
      storage: '128 GB',
      batteryHealth: '%86 Pil Sağlığı',
      color: 'Pasifik Mavisi',
      warranty: '6 Ay Yazılı Mağaza Garantili',
      features: ['OLED Super Retina Ekran', 'A14 Bionic Çip', 'Face ID Aktif', 'Kutulu Teslim']
    },
    inStock: true,
    featured: false,
    bestSeller: false,
    description: 'Kırşehir mağazamızda test edilmiş, donanım kontrolünden tam not almış temiz cihaz.'
  },
  {
    id: 'prod-ip11-64-2el',
    title: 'Apple iPhone 11 64GB / 128GB - Siyah (Garantili 2. El)',
    brand: 'Apple',
    category: 'ikinci-el-telefon',
    condition: 'ikinci-el',
    conditionBadge: '2. El Garantili',
    badge: 'Ekonomik',
    image: '/images/products/iphone11.jpg',
    specs: {
      storage: '64 GB / 128 GB',
      batteryHealth: '%85 Pil Sağlığı',
      color: 'Siyah',
      warranty: '6 Ay Yazılı Mağaza Garantili',
      features: ['Çift Kamera Sistemi', 'Geniş Açı Çekim', 'Değişensiz Orijinal Kasa', 'Yazılı Garanti']
    },
    inStock: true,
    featured: false,
    bestSeller: false,
    description: 'En çok tercih edilen ikinci el giriş modeli, temiz ve garantili.'
  },
  {
    id: 'prod-apple-airpods',
    title: 'Apple AirPods Pro 2. Nesil (USB-C MagSafe Kutulu)',
    brand: 'Apple',
    category: 'ses-kulaklik',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'Aktif Gürültü Engelleme',
    image: '/images/products/airpods-tws.jpg',
    specs: {
      color: 'Beyaz',
      warranty: '2 Yıl Apple Türkiye Garantili',
      features: ['H2 Kulaklık Çipi', '2 Kat Daha Güçlü ANC', 'Kişiselleştirilmiş Uzamsal Ses', 'Type-C Şarj']
    },
    inStock: true,
    featured: false,
    bestSeller: true,
    description: 'Resmi Apple Türkiye garantili, kapalı kutu yeni nesil AirPods Pro 2.'
  },

  // =========================================================================
  // SAMSUNG GALAXY MODELLERİ & ORİJİNAL AKSESUARLARI
  // =========================================================================
  {
    id: 'prod-s25-ultra',
    title: 'Samsung Galaxy S25 Ultra 512GB - Titanyum Gümüş Mavi',
    brand: 'Samsung',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Snapdragon 8 Elite',
    image: '/images/products/samsung-s25ultra.jpg',
    specs: {
      storage: '512 GB',
      ram: '12 GB / 16 GB',
      color: 'Titanyum Gümüş Mavi (Silverblue)',
      warranty: '2 Yıl Samsung Türkiye Garantili',
      features: ['Snapdragon 8 Elite Çip', '200MP OIS Kamera', 'Dahili S-Pen & Galaxy AI', 'Yansıma Önleyici Gorilla Armor']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Samsung amiral gemisi. En güçlü Snapdragon 8 Elite çip, 200MP yapay zekalı kamera ve dahili S-Pen ile sıfır kapalı kutu.'
  },
  {
    id: 'prod-s24-ultra',
    title: 'Samsung Galaxy S24 Ultra 512GB - Titanyum Gri',
    brand: 'Samsung',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Galaxy AI',
    image: '/images/products/samsung-s24ultra.png',
    specs: {
      storage: '512 GB',
      ram: '12 GB',
      color: 'Titanyum Gri',
      warranty: '2 Yıl Samsung Türkiye Garantili',
      features: ['Snapdragon 8 Gen 3', '200MP Kamera', 'Dahili S-Pen Kalem', 'Galaxy AI Yapay Zeka']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Samsung Türkiye garantili, kapalı kutu sıfır ambalajında.'
  },
  {
    id: 'prod-s24-plus',
    title: 'Samsung Galaxy S24+ 256GB - Onyx Siyah',
    brand: 'Samsung',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Galaxy AI',
    image: '/images/products/s24ultra.jpg',
    specs: {
      storage: '256 GB',
      ram: '12 GB',
      color: 'Onyx Siyah',
      warranty: '2 Yıl Samsung Türkiye Garantili',
      features: ['QHD+ Dynamic AMOLED 2X', '4900 mAh Batarya', '45W Hızlı Şarj', 'Galaxy AI Çeviri']
    },
    inStock: true,
    featured: false,
    bestSeller: false,
    description: 'Geniş ekran ve üstün pil ömrüyle Galaxy AI destekli sıfır S24+.'
  },
  {
    id: 'prod-s23-2el',
    title: 'Samsung Galaxy S23 128GB - Phantom Black (Garantili 2. El)',
    brand: 'Samsung',
    category: 'ikinci-el-telefon',
    condition: 'ikinci-el',
    conditionBadge: '2. El Garantili',
    badge: '6 Ay Garanti',
    image: '/images/products/samsung-s23.png',
    specs: {
      storage: '128 GB',
      batteryHealth: '%95 Pil Durumu',
      color: 'Phantom Black',
      warranty: '6 Ay Yazılı Mağaza Garantili',
      features: ['Snapdragon 8 Gen 2', 'Dynamic AMOLED 2X Ekran', 'Kusursuz Kasa', 'Kutulu']
    },
    inStock: true,
    featured: true,
    bestSeller: false,
    description: 'Kozmetik olarak sıfırdan farksız, kontrolleri yapılmış garantili Samsung S23.'
  },
  {
    id: 'prod-a55-5g',
    title: 'Samsung Galaxy A55 5G 128GB/256GB - Buz Mavisi',
    brand: 'Samsung',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Çok Satan',
    image: '/images/products/samsung-a55.jpg',
    specs: {
      storage: '128 GB / 256 GB',
      ram: '8 GB',
      color: 'Buz Mavisi (Ice Blue)',
      warranty: '2 Yıl Samsung Türkiye Garantili',
      features: ['Metal Çerçeve & Cam Arka Panel', '50MP OIS Kamera', '5000 mAh Batarya', 'IP67 Suya Dayanıklı']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Metal çerçeve, şık tasarım ve yüksek pil performansıyla orta-üst segment lideri.'
  },
  {
    id: 'prod-samsung-45w',
    title: 'Samsung 45W Type-C Süper Hızlı Şarj Cihazı (EP-T4510)',
    brand: 'Samsung',
    category: 'sarj-kablo',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'Süper Hızlı 2.0',
    image: '/images/products/samsung-45w.png',
    specs: {
      color: 'Siyah',
      warranty: '2 Yıl Samsung Garantili',
      features: ['45W Power Delivery', '5A Type-C Örgülü Kablo Dahil', 'Akıllı Isı Yönetimi']
    },
    inStock: true,
    featured: false,
    bestSeller: true,
    description: 'S24 Ultra ve Galaxy modelleriniz için orijinal Samsung 45W şarj adaptörü.'
  },

  // =========================================================================
  // OPPO MODELLERİ & AKSESUARLARI
  // =========================================================================
  {
    id: 'prod-oppo-reno11-pro',
    title: 'Oppo Reno 11 Pro 5G 512GB - İnci Beyazı',
    brand: 'Oppo',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Portre Uzmanı',
    image: '/images/products/oppo-reno11-pro.png',
    specs: {
      storage: '512 GB',
      ram: '12 GB',
      color: 'İnci Beyazı (Pearl White)',
      warranty: '2 Yıl Oppo Türkiye Garantili',
      features: ['80W SuperVOOC Şarj', '32MP Telefoto Portre Kamera', '120Hz Kavisli 3D AMOLED Ekran']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Studio kalitesinde portre çekimleri ve 80W anında hızlı şarj gücüyle sıfır kapalı kutu.'
  },
  {
    id: 'prod-oppo-reno10',
    title: 'Oppo Reno 10 5G 256GB - Buz Mavisi (Sıfır & 2. El Seçenekli)',
    brand: 'Oppo',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır / 2. El Mevcut',
    badge: 'Popüler',
    image: '/images/products/oppo-reno10.png',
    specs: {
      storage: '256 GB',
      ram: '8 GB',
      color: 'Buz Mavisi (Ice Blue)',
      warranty: 'Resmi Garanti & Mağaza Güvencesi',
      features: ['67W SuperVOOC Şarj', '64MP Ana Kamera', '5000 mAh Pil', 'İnce & Hafif Kasa']
    },
    inStock: true,
    featured: false,
    bestSeller: false,
    description: 'Kırşehir mağazamızda hem sıfır kapalı kutu hem de temiz garantili ikinci el seçenekleriyle.'
  },
  {
    id: 'prod-oppo-a98-5g',
    title: 'Oppo A98 5G 256GB - Rüya Mavisi',
    brand: 'Oppo',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Uzun Pil Ömrü',
    image: '/images/products/oppo-a98.png',
    specs: {
      storage: '256 GB',
      ram: '8 GB',
      color: 'Rüya Mavisi (Dreamy Blue)',
      warranty: '2 Yıl Oppo Türkiye Garantili',
      features: ['67W Hızlı Şarj', '120Hz Akıcı Ekran', '64MP Yapay Zeka Kamera', 'Mikro Lens 40x']
    },
    inStock: true,
    featured: false,
    bestSeller: false,
    description: 'Geniş depolama, dayanıklı batarya ve mikroskopik lens kamerasıyla güçlü Oppo.'
  },
  {
    id: 'prod-oppo-a78',
    title: 'Oppo A78 128GB - Parıltılı Siyah',
    brand: 'Oppo',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Fiyat Performans',
    image: '/images/products/oppo-a78.png',
    specs: {
      storage: '128 GB',
      ram: '8 GB',
      color: 'Parıltılı Siyah (Glowing Black)',
      warranty: '2 Yıl Oppo Türkiye Garantili',
      features: ['67W SuperVOOC', 'FHD+ AMOLED Ekran', 'Çift Stereo Hoparlör', 'Ultra İnce Tasarım']
    },
    inStock: true,
    featured: false,
    bestSeller: true,
    description: 'Ekonomik fiyatıyla 67W hızlı şarj ve AMOLED ekran sunan popüler model.'
  },

  // =========================================================================
  // XIAOMI & REDMI MODELLERİ
  // =========================================================================
  {
    id: 'prod-xiaomi-14t-pro',
    title: 'Xiaomi 14T Pro 512GB - Titan Siyah (Leica Lens)',
    brand: 'Xiaomi',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: 'Leica Kameralı',
    image: '/images/products/xiaomi-14t-pro.jpg',
    specs: {
      storage: '512 GB',
      ram: '12 GB',
      color: 'Titan Siyah',
      warranty: '2 Yıl Xiaomi Türkiye Garantili',
      features: ['Leica Summilux Optik Lens', 'Dimensity 9300+ Çip', '120W HyperCharge', '144Hz AMOLED']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Leica profesyonel optik kameraları ve 120W ultra şarj hızı ile amiral gemisi performansı.'
  },
  {
    id: 'prod-redmi-note13-pro-plus',
    title: 'Redmi Note 13 Pro+ 5G 512GB - Gece Yarısı Siyahı',
    brand: 'Xiaomi',
    category: 'sifir-telefon',
    condition: 'sifir',
    conditionBadge: 'Sıfır Kapalı Kutu',
    badge: '200MP Kamera',
    image: '/images/products/redmi-note13-pro.jpg',
    specs: {
      storage: '512 GB',
      ram: '12 GB',
      color: 'Gece Yarısı Siyahı',
      warranty: '2 Yıl Xiaomi Türkiye Garantili',
      features: ['200MP OIS Kamera', '120W Hızlı Şarj', 'Kavisli 1.5K Ekran', 'IP68 Su Geçirmezlik']
    },
    inStock: true,
    featured: false,
    bestSeller: true,
    description: '200 megapiksel kamera ve 19 dakikada %100 dolan 120W şarj gücü.'
  },

  // =========================================================================
  // SPIGEN & ZIRHLI KILIF / EKRAN KORUMA
  // =========================================================================
  {
    id: 'prod-spigen-tough-armor',
    title: 'Spigen Tough Armor MagSafe Askeri Düzey Zırhlı Kılıf',
    brand: 'Spigen',
    category: 'kilif-kapak',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'Askeri Standart (MIL-STD)',
    image: '/images/products/spigen-tough-armor.jpg',
    specs: {
      color: 'Mat Siyah / Tunç Grisi',
      warranty: 'Orijinal Spigen Garantili',
      features: ['Air Cushion Hava Yastığı', 'Entegre Destek Ayağı (Kickstand)', 'MagSafe Güçlü Mıknatıs', 'Çift Katmanlı Koruma']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'En zorlu düşmelere karşı telefonunuzu maksimum seviyede koruyan orijinal Spigen zırhlı kılıf.'
  },
  {
    id: 'prod-spigen-ultra-hybrid',
    title: 'Spigen Ultra Hybrid MagSafe Sararmaz Kristal Şeffaf Kılıf',
    brand: 'Spigen',
    category: 'kilif-kapak',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'MagSafe Şeffaf',
    image: '/images/products/spigen-ultra-hybrid.jpg',
    specs: {
      color: 'Kristal Şeffaf / Beyaz Halka',
      warranty: 'Orijinal Spigen Lisanslı',
      features: ['UV Sararma Direnci', 'Kamera Çerçeve Yükseltisi', 'Darbe Emici TPU Kenarlar', 'Kablosuz Şarj Uyumlu']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Cihazınızın orijinal rengini gösteren, sararmayan ve MagSafe aksesuarlarıyla tam kenetlenen kılıf.'
  },
  {
    id: 'prod-spigen-ezfit-screen',
    title: 'Spigen Glas.tR EZ Fit Kolay Montajlı 9D Ekran Koruyucu Cam',
    brand: 'Spigen',
    category: 'ekran-koruyucu',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: '9H Sertlik & Kolay Kalıp',
    image: '/images/products/screen-protector.jpg',
    specs: {
      color: 'HD Şeffaf / 9D Gizlilik',
      warranty: 'Mağazada Ücretsiz Uygulama',
      features: ['Hizasız Montaj Aparatı Dahil', 'Oleofobik Parmak İzi Tutmaz Kaplama', 'Dokunmatik Hassasiyeti Kaybettirmez']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Sıfır baloncuk garantili montaj kalıbı ve 9H elmas dayanıklılığında temperli ekran camı.'
  },
  {
    id: 'prod-spigen-lens-protector',
    title: 'Spigen Optik Safir Kamera Lens Koruyucu (Parlama Önleyici)',
    brand: 'Spigen',
    category: 'ekran-koruyucu',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'Safir Cam',
    image: '/images/products/lens-protector.jpg',
    specs: {
      color: 'Titanyum Çerçeveli',
      warranty: 'Birebir Uyum',
      features: ['Kamera Çizilmelerine Son', 'Fotoğraf Kalitesini Etkilemez', 'Gece Çekiminde Yansıma Yapmaz']
    },
    inStock: true,
    featured: false,
    bestSeller: false,
    description: 'Telefonunuzun arka kamera lenslerini çizik ve kırılmalara karşı birebir korur.'
  },

  // =========================================================================
  // ANKER & HIZLI ŞARJ / GÜÇ ÇÖZÜMLERİ
  // =========================================================================
  {
    id: 'prod-anker-gan-65w',
    title: 'Anker 735 GaNPrime 65W Hızlı Şarj Cihazı (2x Type-C + 1x USB-A)',
    brand: 'Anker',
    category: 'sarj-kablo',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'GaNPrime Teknolojisi',
    image: '/images/products/anker-735.png',
    specs: {
      color: 'Koyu Gri / Siyah',
      warranty: '2 Yıl Anker Türkiye Garantili',
      features: ['3 Cihazı Aynı Anda Şarj Eder', 'Telefon, Tablet & Laptop Uyumlu', 'PowerIQ 4.0 Akıllı Güç Dağıtımı', 'ActiveShield Isı Kontrolü']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Küçük boyutta devasa 65W güç. iPhone, Samsung, MacBook veya tabletinizi tek adaptörle hızlı şarj edin.'
  },
  {
    id: 'prod-anker-nano-30w',
    title: 'Anker 511 Nano 3 30W Type-C Mini Hızlı Adaptör',
    brand: 'Anker',
    category: 'sarj-kablo',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'Mini Boyut',
    image: '/images/products/charger-gan.jpg',
    specs: {
      color: 'Beyaz / Buz Mavisi',
      warranty: '2 Yıl Anker Türkiye Garantili',
      features: ['Standart Adaptörlerden %70 Daha Küçük', 'iPhone ve Samsung İçin 30W Hız', 'Katlanabilir Priz Tasarımı']
    },
    inStock: true,
    featured: false,
    bestSeller: true,
    description: 'Cep boyutunda taşınabilir, ısınmayan güçlü 30W şarj adaptörü.'
  },
  {
    id: 'prod-anker-powerbank-maggo',
    title: 'Anker MagGo 10.000mAh Manyetik Kablosuz Powerbank & Stand',
    brand: 'Anker',
    category: 'sarj-kablo',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'MagSafe Uyumlu',
    image: '/images/products/powerbank.jpg',
    specs: {
      color: 'Siyah / Titanyum Beyaz',
      warranty: '2 Yıl Anker Türkiye Garantili',
      features: ['Telefonun Arkasına Manyetik Yapışır', 'Entegre Katlanır Masaüstü Stand', 'Dijital LED Kalan Pil Göstergesi', 'Type-C Kablolu Hızlı Çıkış']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'Kablo derdi olmadan telefonun arkasına yapışan ve stand olarak masaüstünde duran güçlü powerbank.'
  },
  {
    id: 'prod-anker-flow-cable',
    title: 'Anker PowerLine III Flow Kırılmaz Silikon Type-C & Lightning Kablo',
    brand: 'Anker',
    category: 'sarj-kablo',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: '25.000 Bükülme Testli',
    image: '/images/products/cable-usbc.jpg',
    specs: {
      color: 'Gece Siyahı / Pastel Mavi',
      warranty: '2 Yıl Değişim Garantili',
      features: ['Dolaşmayan Yumuşak Silikon Doku', '100W Hızlı Şarj Desteği', 'Kırılmaya Karşı Güçlendirilmiş Uçlar']
    },
    inStock: true,
    featured: false,
    bestSeller: false,
    description: 'Dolaşmayan, kırılmayan, bükülmelere karşı ömürlük dayanıklılıkta şarj kablosu.'
  },

  // =========================================================================
  // BASEUS, JBL & AKILLI ARAÇ / MASAÜSTÜ AKSESUARLARI
  // =========================================================================
  {
    id: 'prod-baseus-car-mount',
    title: 'Baseus MagSafe Manyetik Araç İçi Kablosuz Şarjlı Telefon Tutucu',
    brand: 'Baseus',
    category: 'sarj-kablo',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: '15W Hızlı Şarj',
    image: '/images/products/car-mount.jpg',
    specs: {
      color: 'Koyu Gri Metal',
      warranty: '2 Yıl Garanti',
      features: ['Havalandırma & Torpido Montajı', 'Sarsıntıda Düşmeyen N52 Mıknatıslar', '360 Derece Dönen Bilyeli Başlık']
    },
    inStock: true,
    featured: false,
    bestSeller: true,
    description: 'Aracınızda telefonunuzu tek elle sabitleyin ve seyahat boyunca kablosuz hızlı şarj edin.'
  },
  {
    id: 'prod-jbl-wave-buds',
    title: 'JBL Wave Buds Gerçek Kablosuz TWS Bluetooth Kulaklık',
    brand: 'JBL',
    category: 'ses-kulaklik',
    condition: 'sifir',
    conditionBadge: 'Orijinal Aksesuar',
    badge: 'Derin Bas',
    image: '/images/products/airpods-tws.jpg',
    specs: {
      color: 'Siyah / Beyaz',
      warranty: '2 Yıl Resmi Distribütör Garantili',
      features: ['JBL Deep Bass Ses', '32 Saat Toplam Pil Ömrü', 'IP54 Su ve Toz Dayanıklılığı', 'VoiceAware Mikrofon']
    },
    inStock: true,
    featured: true,
    bestSeller: true,
    description: 'JBL kalitesinde derin baslar ve 32 saate varan kesintisiz müzik deneyimi.'
  }
];
