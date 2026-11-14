import type { Category, MegaMenuColumn } from '../types';

export const categories: Category[] = [
  {
    id: 'sifir-telefon',
    name: 'Sıfır Cep Telefonları',
    slug: 'sifir-cep-telefonlari',
    iconName: 'Smartphone',
    itemCount: 3,
    description: 'Kapalı kutu, 2 yıl resmi Türkiye garantili Apple, Samsung, Xiaomi ve Oppo modelleri',
    subcategories: ['iPhone 16 Serisi', 'iPhone 15 Serisi', 'Samsung Galaxy S24 Serisi', 'Samsung Galaxy A Serisi', 'Xiaomi & Redmi Serisi', 'Oppo Reno & A Serisi']
  },
  {
    id: 'ikinci-el-telefon',
    name: 'Garantili 2. El Telefon',
    slug: 'ikinci-el-telefonlar',
    iconName: 'Shield',
    itemCount: 3,
    description: '40 nokta kontrolünden geçmiş, 6-12 ay yazılı mağaza garantili ikinci el telefonlar',
    subcategories: ['2. El iPhone Modelleri', '2. El Samsung Modelleri', '2. El Xiaomi Modelleri', 'Cihazını Sat & Nakit Alım']
  },
  {
    id: 'kilif-kapak',
    name: 'Telefon Kılıfları & Kapaklar',
    slug: 'telefon-kiliflari',
    iconName: 'Zap',
    itemCount: 1,
    description: 'MagSafe manyetik kılıflar, silikon kapaklar ve darbeye dayanıklı zırhlı kılıflar',
    subcategories: ['MagSafe Kılıflar', 'Darbeye Dayanıklı Zırhlı Kılıflar', 'Ultra İnce Şeffaf Silikon', 'Deri Cüzdanlı Kapaklar']
  },
  {
    id: 'ekran-koruyucu',
    name: 'Ekran & Lens Koruyucular',
    slug: 'ekran-koruyucular',
    iconName: 'Sparkles',
    itemCount: 1,
    description: '9D hayalet gizlilik camları, temperli kırılmaz camlar ve safir kamera lens koruyucuları',
    subcategories: ['9D Hayalet Gizlilik Camı', 'Kırılmaz Temperli Cam', 'Safir Kamera Lens Koruyucu', 'Mat Çizilmez Koruyucu']
  },
  {
    id: 'sarj-kablo',
    name: 'Hızlı Şarj & Kablolar',
    slug: 'sarj-aletleri-kablolar',
    iconName: 'Headphones',
    itemCount: 1,
    description: 'GaN yeni nesil hızlı şarj adaptörleri, örgülü Type-C ve Lightning kablolar',
    subcategories: ['GaN 65W/35W Hızlı Şarj', '20W/30W Hızlı Adaptör', 'Örgülü Type-C Kablo', 'Lightning Kablo', 'MagSafe Kablosuz Şarj']
  },
  {
    id: 'ses-kulaklik',
    name: 'Kulaklık & Ses Sistemleri',
    slug: 'kulaklik-ve-ses',
    iconName: 'Headphones',
    itemCount: 0,
    description: 'TWS kablosuz bluetooth kulaklıklar ve taşınabilir hoparlörler',
    subcategories: ['TWS Bluetooth Kulaklık', 'Gürültü Engelleyici (ANC) Kulaklık', 'Bluetooth Hoparlör', 'Kulak İçi Kablolu']
  }
];

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'Sıfır Cep Telefonları',
    icon: 'Smartphone',
    links: [
      { name: 'Apple iPhone 18 & 18 Pro Max', categoryId: 'sifir-telefon', badge: 'Yeni 2026' },
      { name: 'Apple iPhone 17 & 17 Pro', categoryId: 'sifir-telefon' },
      { name: 'Samsung Galaxy S25 Ultra & S24', categoryId: 'sifir-telefon', badge: 'Galaxy AI' },
      { name: 'Samsung Galaxy A Serisi', categoryId: 'sifir-telefon' },
      { name: 'Xiaomi 14T Pro & Redmi Serisi', categoryId: 'sifir-telefon' },
      { name: 'Oppo Reno & A Serisi', categoryId: 'sifir-telefon' },
    ]
  },
  {
    title: '2. El Garantili Telefonlar',
    icon: 'Shield',
    links: [
      { name: 'Garantili iPhone 14 & 14 Pro', categoryId: 'ikinci-el-telefon', badge: '6 Ay Garanti' },
      { name: 'Garantili iPhone 13 & 13 Pro', categoryId: 'ikinci-el-telefon', badge: 'Fırsat' },
      { name: 'Garantili iPhone 12 & 11', categoryId: 'ikinci-el-telefon' },
      { name: 'Garantili Samsung Galaxy Modelleri', categoryId: 'ikinci-el-telefon' },
      { name: 'Eski Telefonunu Nakit Sat & Takas', categoryId: 'ikinci-el-telefon', badge: 'Nakit' },
    ]
  },
  {
    title: 'Telefon Aksesuarları',
    icon: 'Zap',
    links: [
      { name: 'MagSafe Manyetik Kılıflar', categoryId: 'kilif-kapak', badge: 'Popüler' },
      { name: 'Darbeye Dayanıklı Zırhlı Kılıflar', categoryId: 'kilif-kapak' },
      { name: '9D Hayalet Gizlilik Ekran Camı', categoryId: 'ekran-koruyucu' },
      { name: 'Safir Kamera Lens Koruyucu', categoryId: 'ekran-koruyucu' },
      { name: 'GaN Yeni Nesil Hızlı Şarj Cihazları', categoryId: 'sarj-kablo' },
    ]
  },
  {
    title: 'Şarj & Güç Çözümleri',
    icon: 'Headphones',
    links: [
      { name: '65W / 45W Type-C Hızlı Şarj', categoryId: 'sarj-kablo' },
      { name: 'Kırılmaz Örgülü Type-C & Lightning Kablo', categoryId: 'sarj-kablo' },
      { name: 'TWS Bluetooth Kulaklıklar', categoryId: 'ses-kulaklik' },
      { name: 'Manyetik Araç İçi Telefon Tutucu', categoryId: 'sarj-kablo' },
    ]
  }
];
