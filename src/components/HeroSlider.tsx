import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  ArrowRight,
  Camera,
  Cpu,
  Palette,
  Layers,
  PenTool,
  ZoomIn,
  ShieldCheck,
  RotateCcw,
  Store
} from 'lucide-react';
import { AppleLogo, WhatsAppIcon } from './BrandLogos';
import { storeInfo } from '../data/storeInfo';

interface HeroSliderProps {
  onSelectCategory: (categoryId: string) => void;
}

interface SlideScene {
  label: string;
  src: string;
  icon: React.ReactNode;
}

interface SlideItem {
  id: number;
  badge: string;
  badgeIcon: React.ReactNode;
  videoBadge?: string;
  videoBrandIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  fullFilm?: string;
  scenes?: SlideScene[];
  ctaText: string;
  categoryId: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onSelectCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFilmModalOpen, setIsFilmModalOpen] = useState(false);

  const [activeScenes, setActiveScenes] = useState<Record<number, string>>({
    1: '/videos/iphone-18-showcase.mp4',
    2: '/videos/samsung-galaxy-s25-ultra.mp4'
  });

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides: SlideItem[] = [
    {
      id: 0,
      badge: 'ADAR CEP SHOP KIRŞEHİR',
      badgeIcon: <Store className="w-3.5 h-3.5 text-sky-300" />,
      title: 'Sıfır & 2. El Cep Telefonu ve Aksesuar Merkezi',
      subtitle: 'Apple, Samsung, Xiaomi sıfır ve garantili 2. el modeller, kaliteli kılıf ve koruyucu camlar Kırşehir mağazamızda.',
      image: '/images/banners/ad.jpeg',
      ctaText: 'Modelleri İncele',
      categoryId: 'all'
    },
    {
      id: 1,
      badge: 'EN YENİ 2026 AMİRAL GEMİSİ',
      badgeIcon: <AppleLogo className="w-3.5 h-3.5 text-white" monochrome />,
      videoBadge: 'Apple Resmi Tanıtım Videosu',
      videoBrandIcon: <AppleLogo className="w-3.5 h-3.5 text-white" monochrome />,
      title: 'Apple iPhone 18 Pro Max Serisi',
      subtitle: 'Apple A20 Pro çipli iPhone 18 Pro Max ve 18 Pro, 48MP mekanik diyafram periskop kamera, kapalı kutu 2 Yıl Türkiye Garantisiyle Kırşehir mağazamızda.',
      image: '/images/products/iphone18promax.jpg',
      video: '/videos/iphone-18-showcase.mp4',
      fullFilm: '/videos/iphone-18-intro-film.mp4',
      scenes: [
        { label: 'Genel Tanıtım', src: '/videos/iphone-18-showcase.mp4', icon: <Layers className="w-3 h-3" /> },
        { label: 'Titanyum Renkler', src: '/videos/iphone-18-colors.mp4', icon: <Palette className="w-3 h-3" /> },
        { label: 'Kamera Diyaframı', src: '/videos/iphone-18-camera.mp4', icon: <Camera className="w-3 h-3" /> },
        { label: 'A20 Pro Çip', src: '/videos/iphone-18-chip.mp4', icon: <Cpu className="w-3 h-3" /> }
      ],
      ctaText: 'iPhone Modellerini İncele',
      categoryId: 'sifir-telefon'
    },
    {
      id: 2,
      badge: 'GALAXY AI & 200MP AMİRAL GEMİSİ',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-sky-400" />,
      videoBadge: 'Samsung Resmi Tanıtım Videosu',
      videoBrandIcon: <Sparkles className="w-3.5 h-3.5 text-sky-400" />,
      title: 'Samsung Galaxy S25 Ultra 5G & Galaxy AI',
      subtitle: 'Snapdragon 8 Elite işlemci, entegre S-Pen, titanyum zırh gövde ve 200MP yapay zekalı ProVisual kamera Kırşehir Adar Cep Shop güvencesiyle.',
      image: '/images/products/samsung-s25ultra.jpg',
      video: '/videos/samsung-galaxy-s25-ultra.mp4',
      scenes: [
        { label: 'Titanyum & S-Pen', src: '/videos/samsung-galaxy-s25-ultra.mp4', icon: <PenTool className="w-3 h-3" /> },
        { label: '5x Gece Zoomu', src: '/videos/samsung-zoom.mp4', icon: <ZoomIn className="w-3 h-3" /> },
        { label: 'Galaxy AI Asistanı', src: '/videos/samsung-photo-assist.mp4', icon: <Sparkles className="w-3 h-3 text-sky-400" /> }
      ],
      ctaText: 'Galaxy Modellerini İncele',
      categoryId: 'sifir-telefon'
    },
    {
      id: 3,
      badge: 'PREMİUM TELEFON AKSESUARLARI',
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
      title: 'MagSafe Kılıflar & 9D Hayalet Gizlilik Camları',
      subtitle: 'Telefonunuz için tam koruma: Darbe emici kılıflar, GaN hızlı şarj ve parmak izi tutmayan ekran koruyucular.',
      image: '/images/banners/banner-accessories.jpg',
      ctaText: 'Aksesuarları Keşfet',
      categoryId: 'kilif-kapak'
    },
    {
      id: 4,
      badge: '6 & 12 AY GARANTİ & TAKAS',
      badgeIcon: <RotateCcw className="w-3.5 h-3.5 text-amber-400" />,
      title: '2. El Cep Telefonu Alım-Satımı & Nakit Takas',
      subtitle: '40 nokta testinden geçmiş temiz 2. el telefonlar ve eski cihazınıza anında nakit alım fırsatı.',
      image: '/images/banners/banner-tradein.jpg',
      ctaText: '2. El Modelleri Gör',
      categoryId: 'ikinci-el-telefon'
    }
  ];

  // Auto advance slides every 7 seconds (pauses on hover or when modal is open)
  useEffect(() => {
    if (isPaused || isFilmModalOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, isFilmModalOpen, slides.length]);

  // Handle video playback when switching slides or scenes
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([idxStr, vidEl]) => {
      const idx = Number(idxStr);
      if (vidEl) {
        if (idx === currentSlide) {
          vidEl.currentTime = 0;
          vidEl.play().catch(() => { });
        } else {
          vidEl.pause();
        }
      }
    });
  }, [currentSlide, activeScenes]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFilmModalOpen(false);
    };
    if (isFilmModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isFilmModalOpen]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleCtaClick = (catId: string) => {
    onSelectCategory(catId);
    const vitrinEl = document.getElementById('vitrin');
    if (vitrinEl) vitrinEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="relation-644" className="w-full flex flex-wrap folder-slider">
      <div className="w-full bg-form px-2 sm:px-4 pt-3 sm:pt-4" data-toggle="slider">
        <div className="w-full relative text-white max-w-[1448px] mx-auto">

          {/* Main Slider Track Container with Vibrant Blue Glowing Border */}
          <div
            id="hero-slider-644"
            className="w-full rounded-custom overflow-hidden relative group select-none bg-[#0a0f1d] border-2 border-[#0084d6] ring-2 ring-[#0084d6]/30 shadow-[0_0_25px_rgba(0,132,214,0.25)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track: All slides side by side with smooth transition */}
            <div
              className="flex w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => {
                const currentVideoSrc = activeScenes[idx] || slide.video;

                return (
                  <div
                    key={slide.id}
                    className="w-full shrink-0 relative flex flex-wrap"
                  >
                    {/* Slide Frame (Fill container completely edge to edge) */}
                    <div className="adar-hero-frame w-full flex flex-wrap relative overflow-hidden rounded-custom bg-[#0a0f1d] aspect-[4/3] sm:aspect-[2.6/1] min-h-[360px] sm:min-h-[440px] border border-white/10">

                      {/* Background Banner Image or Video - Full Edge-to-Edge Cover */}
                      {slide.video ? (
                        <div className="hero-video absolute inset-0 w-full h-full block overflow-hidden bg-[#0a0f1d]">
                          <video
                            ref={(el) => {
                              videoRefs.current[idx] = el;
                            }}
                            key={currentVideoSrc}
                            src={currentVideoSrc}
                            poster={slide.image}
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            className="adar-hero-video w-full h-full block transition-transform duration-1000"
                            style={{
                              width: '100%',
                              height: '100%'
                            }}
                          />
                        </div>
                      ) : (
                        <picture className="absolute inset-0 w-full h-full block overflow-hidden bg-[#0a0f1d]">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full block object-cover transition-transform duration-1000 ${currentSlide === idx ? 'scale-100' : 'scale-105'
                              }`}
                            style={{
                              objectFit: 'cover',
                              objectPosition: slide.id === 0 ? 'center 38%' : 'center right',
                              width: '100%',
                              height: '100%'
                            }}
                            loading="eager"
                          />
                        </picture>
                      )}

                      {/* Explicit Linear Gradient Overlay:
                          Desktop: Left-to-right fade for text column.
                          Mobile: Soft bottom-up fade only, keeping top 70% completely clear for the photo/video! */}
                      <div
                        className="absolute inset-0 z-[1] pointer-events-none hidden sm:block"
                        style={{
                          background: slide.id === 0
                            ? 'linear-gradient(90deg, rgba(8,12,24,0.94) 0%, rgba(8,12,24,0.78) 36%, rgba(8,12,24,0.2) 60%, transparent 82%)'
                            : 'linear-gradient(90deg, rgba(8,12,24,0.96) 0%, rgba(8,12,24,0.86) 42%, rgba(8,12,24,0.45) 70%, transparent 100%)'
                        }}
                      />
                      <div
                        className="absolute inset-0 z-[1] pointer-events-none block sm:hidden"
                        style={{
                          background: 'linear-gradient(to top, rgba(8,12,24,0.95) 0%, rgba(8,12,24,0.75) 40%, rgba(8,12,24,0.2) 65%, transparent 85%)'
                        }}
                      />

                      {/* Mute/Sound Toggle for Slides with Video */}
                      {slide.video && (
                        <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsMuted(!isMuted);
                            }}
                            aria-label={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                            className="p-1.5 sm:px-3 sm:py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs flex items-center gap-1.5 sm:gap-2 transition-all shadow-md cursor-pointer hover:border-[#0084d6]"
                            title={isMuted ? 'Videoyu Sesli Oynat' : 'Sesi Kapat'}
                          >
                            {isMuted ? (
                              <>
                                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" />
                                <span className="hidden sm:inline text-[11px] font-medium">Sesi Aç</span>
                              </>
                            ) : (
                              <>
                                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
                                <span className="hidden sm:inline text-[11px] font-medium text-emerald-400">Ses Açık</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {/* Slide Content Layer:
                          On Mobile: Bottom-anchored with concise essentials so visual is unobstructed.
                          On Desktop: Vertically centered full-feature presentation. */}
                      <div className="absolute inset-0 z-[2] flex flex-col justify-end sm:justify-center px-4 sm:px-12 md:px-16 pb-10 sm:pb-0 max-w-2xl">

                        {/* Badges Row with Brand Vector Icons */}
                        <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-3 flex-wrap">
                          <span className="inline-flex items-center gap-1.5 bg-[#0084d6] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded shadow-xs">
                            {slide.badgeIcon}
                            <span>{slide.badge}</span>
                          </span>

                          {slide.video && (
                            <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                              {slide.videoBrandIcon}
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                              </span>
                              <span>{slide.videoBadge || 'Resmi Tanıtım Videosu'}</span>
                            </span>
                          )}

                          <span className="text-[11px] text-gray-300 font-medium hidden sm:inline-block">
                            Adar Cep Shop Kırşehir
                          </span>
                        </div>

                        {/* Title */}
                        <h1
                          className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-1 sm:mb-3 drop-shadow-lg"
                          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)' }}
                        >
                          {slide.title}
                        </h1>

                        {/* Subtitle - Desktop only to keep mobile visual clean and visible */}
                        <p
                          className="hidden sm:block text-xs sm:text-base text-gray-200 font-normal leading-relaxed mb-3 sm:mb-4 max-w-xl drop-shadow-md line-clamp-2 sm:line-clamp-3"
                          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.85)' }}
                        >
                          {slide.subtitle}
                        </p>

                        {/* Interactive Scene Switcher with Tailored Icons - Desktop only to avoid clutter on mobile */}
                        {slide.scenes && (
                          <div className="hidden sm:flex flex-wrap items-center gap-1.5 mb-3 sm:mb-5">
                            <span className="text-[11px] text-gray-300 font-medium mr-1 hidden sm:inline-block">
                              Sahne:
                            </span>
                            {slide.scenes.map((sc) => (
                              <button
                                key={sc.src}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveScenes((prev) => ({ ...prev, [idx]: sc.src }));
                                }}
                                className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${currentVideoSrc === sc.src
                                  ? 'bg-white text-black font-bold border-white shadow-xs scale-105'
                                  : 'bg-black/60 text-gray-300 hover:text-white border-white/20 hover:border-white/40'
                                  }`}
                              >
                                {sc.icon}
                                <span>{sc.label}</span>
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Action Buttons Row with Professional Icons */}
                        <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-0">
                          <button
                            onClick={() => handleCtaClick(slide.categoryId)}
                            className="bg-primary hover:bg-[#006cb3] text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-custom transition-all shadow-md flex items-center gap-1.5 sm:gap-2 cursor-pointer group/btn"
                          >
                            <span>{slide.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>

                          {slide.fullFilm && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsFilmModalOpen(true);
                              }}
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 text-xs sm:text-sm font-bold px-3 py-2 sm:px-4 sm:py-2.5 rounded-custom transition-all flex items-center gap-1.5 sm:gap-2 shadow-sm cursor-pointer group/film"
                              title="Apple Resmi Lansman Tanıtım Filmini İzle"
                            >
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover/film:scale-110">
                                <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-white translate-x-0.5" />
                              </div>
                              <span className="hidden xs:inline sm:inline">Tanıtım Filmi</span>
                              <span className="inline xs:hidden sm:hidden">Film</span>
                            </button>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Navigation Arrows (Always visible, Glassmorphic & Elevated) */}
            <button
              onClick={prevSlide}
              aria-label="Önceki Slayt"
              className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 size-8 sm:size-11 rounded-full bg-black/50 hover:bg-[#0084d6] text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-lg cursor-pointer border border-white/20 hover:scale-105 active:scale-95 group/arrow"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover/arrow:-translate-x-0.5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Sonraki Slayt"
              className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 size-8 sm:size-11 rounded-full bg-black/50 hover:bg-[#0084d6] text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-lg cursor-pointer border border-white/20 hover:scale-105 active:scale-95 group/arrow"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover/arrow:translate-x-0.5" />
            </button>

            {/* Slide Pagination Dots */}
            <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/15">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'w-8 bg-[#0084d6]' : 'w-2.5 bg-white/60 hover:bg-white'
                    }`}
                  aria-label={`Slayt ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Apple Full Launch Film Lightbox Modal */}
      {isFilmModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsFilmModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#111827] border border-white/15 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Authentic Apple Logo */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/50 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white p-1.5 border border-white/10 shadow-xs">
                  <AppleLogo className="w-5 h-5 text-white" monochrome />
                </div>
                <div>
                  <h3 className="text-white text-sm sm:text-base font-bold flex items-center gap-2">
                    Apple iPhone 18 Pro & Pro Max — Resmi Lansman Tanıtım Filmi
                  </h3>
                  <p className="text-gray-400 text-[11px]">
                    Apple Resmi Tanıtım Videosu • 02:52 • Orijinal Ses ve Görüntü
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFilmModalOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src="/videos/iphone-18-intro-film.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#0d131f] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-gray-300 max-w-xl">
                <span className="text-white font-semibold">Cihaz Özellikleri:</span> A20 Pro Çip • Titanyum Kasa • 48MP Pro Periskop Kamera • 2 Yıl Türkiye Garantili • Kırşehir Adar Cep Shop Mağazamızda Hemen Teslim
              </div>
              <a
                href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
                  'Merhaba Adar Cep Shop, web sitenizdeki Apple iPhone 18 Pro tanıtım videosunu izledim. Bu cihazın fiyatı ve stok durumu hakkında bilgi alabilir miyim?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-2 shadow-md cursor-pointer ml-auto"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp ile Fiyat & Bilgi Al</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
