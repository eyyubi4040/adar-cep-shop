export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    category: 'Sıfır & 2. El Telefon',
    question: '2. el cep telefonlarınızda garanti veriyor musunuz?',
    answer: 'Evet! Adar Cep Shop olarak mağazamızdaki tüm 2. el telefonlar 40 farklı teknik testten geçirilir (ekran, dokunmatik, şebeke, Face ID / Parmak İzi, batarya sağlığı, kamera ve mikrofon). Tüm 2. el cihazlarımıza 6 ay yazılı mağaza garantisi veriyoruz.'
  },
  {
    category: 'Sıfır & 2. El Telefon',
    question: 'Eski telefonumu getirip yenisiyle takas edebilir miyim veya nakit satabilir miyim?',
    answer: 'Kesinlikle! Kırşehir merkez mağazamıza eski cihazınızı getirebilir ya da web sitemizdeki Cihaz Değerleme formundan veya WhatsApp hattımızdan fotoğraf ve bilgilerini ileterek 5 dakika içinde net nakit alım/takas fiyat teklifi alabilirsiniz.'
  },
  {
    category: 'Alışveriş & Tanıtım',
    question: 'Web siteniz üzerinden doğrudan kredi kartıyla online sipariş veriliyor mu?',
    answer: 'Web sitemiz Kırşehir içi ve çevre illerdeki müşterilerimize güncel vitrinimizi, sıfır ve 2. el stoklarımızı ve aksesuarlarımızı tanıtmak amacıyla hazırlanmıştır. İnternet üzerinden online ödeme/sepet sistemi bulunmamaktadır; beğendiğiniz ürün için WhatsApp veya telefonla anında rezervasyon yapabilir ve mağazamızda deneyerek elden teslim alabilirsiniz.'
  },
  {
    category: 'Aksesuarlar',
    question: 'Kılıf ve aksesuarlar orijinal mi? Hangi markaları satıyorsunuz?',
    answer: 'Telefon Aksesuarları yetkili satış noktasıyız. Adar, Wiwu, Baseus, Benks, Spigen gibi sektörün en kaliteli markalarının orijinal ve lisanslı kılıf, kırılmaz cam, Magsafe ve hızlı şarj adaptörlerini sunuyoruz.'
  },
  {
    category: 'Teknik Servis',
    question: 'Kırşehir içinde ekran ve batarya değişimi ne kadar sürüyor?',
    answer: 'Kırşehir merkez mağazamızda uzman teknisyenlerimiz tarafından iPhone, Samsung ve Xiaomi cihazların ekran ve batarya değişimleri ortalama 30-45 dakika içerisinde gözünüzün önünde yapılır ve 6 ay garantili olarak teslim edilir.'
  },
  {
    category: 'İletişim & Konum',
    question: 'Mağazanız Kırşehir’de nerede bulunuyor?',
    answer: 'Mağazamız Kırşehir merkez çarşı bölgesinde, ulaşımı çok kolay merkezi bir konumdadır. Haftanın her günü açığız (Pzt-Cmt: 09:00 - 20:30, Pazar: 11:00 - 19:00).'
  }
];
