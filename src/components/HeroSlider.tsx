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
import { AppleLogo } from './BrandLogos';

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
  const [progress, setProgress] = useState(0);
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

  // Auto advance slides with smooth 7-second progress bar
  useEffect(() => {
    if (isPaused || isFilmModalOpen) return;

    const intervalMs = 50;
    const durationMs = 7000;
    const step = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPaused, isFilmModalOpen, slides.length]);

  // Handle video playback
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
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

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
    <section
      id="hero-slider"
      className="w-full relative bg-[#060a16] overflow-hidden select-none group border-b border-slate-900/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Track - Full Bleed 100vw */}
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => {
          const currentVideoSrc = activeScenes[idx] || slide.video;
          const isActive = currentSlide === idx;

          return (
            <div
              key={slide.id}
              className="w-full shrink-0 relative flex flex-wrap"
            >
              {/* Grand Cinematic Frame - 640px+ on desktop, 480px on mobile */}
              <div className="w-full relative overflow-hidden bg-[#060a16] h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px] xl:h-[680px]">

                {/* Video or Image Background with Ken-Burns Drift */}
                {slide.video ? (
                  <div className="absolute inset-0 w-full h-full block overflow-hidden bg-[#060a16]">
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
                      className={`w-full h-full block object-cover transition-transform duration-[7000ms] ease-out ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ) : (
                  <picture className="absolute inset-0 w-full h-full block overflow-hidden bg-[#060a16]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full block object-cover transition-transform duration-[7000ms] ease-out ${
                        isActive ? 'scale-105' : 'scale-100'
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

                {/* Cinematic Directional Vignette Mask (Desktop: Left dark, Right open for device) */}
                <div
                  className="absolute inset-0 z-[1] pointer-events-none hidden sm:block"
                  style={{
                    background:
                      slide.id === 0
                        ? 'linear-gradient(90deg, rgba(6,10,22,0.95) 0%, rgba(6,10,22,0.82) 42%, rgba(6,10,22,0.2) 68%, transparent 90%)'
                        : 'linear-gradient(90deg, rgba(6,10,22,0.96) 0%, rgba(6,10,22,0.85) 45%, rgba(6,10,22,0.25) 72%, transparent 95%)'
                  }}
                />

                {/* Mobile Vignette Mask (Bottom dark for text, Top open for phone visual) */}
                <div
                  className="absolute inset-0 z-[1] pointer-events-none block sm:hidden"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(6,10,22,0.98) 0%, rgba(6,10,22,0.82) 48%, rgba(6,10,22,0.2) 75%, transparent 100%)'
                  }}
                />

                {/* Mute/Sound Toggle for Slides with Video */}
                {slide.video && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-20 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      aria-label={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                      className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-950/70 hover:bg-slate-900/95 backdrop-blur-md border border-white/20 text-white text-xs flex items-center gap-2 transition-all shadow-xl cursor-pointer hover:border-[#0084d6] active:scale-95"
                      title={isMuted ? 'Videoyu Sesli Oynat' : 'Sesi Kapat'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300" />
                          <span className="hidden sm:inline text-xs font-semibold">Sesi Aç</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
                          <span className="hidden sm:inline text-xs font-semibold text-emerald-400">Ses Açık</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Slide Content Layer (Grid aligned with 1448px site container) */}
                <div className="absolute inset-0 z-[2] flex flex-col justify-end sm:justify-center">
                  <div className="w-full max-w-[1448px] mx-auto px-4 sm:px-8 lg:px-12 pb-20 sm:pb-0">
                    <div className="max-w-2xl">

                      {/* Badges Row */}
                      <div className="inline-flex items-center gap-2 mb-2 sm:mb-4 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 bg-[#0084d6] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                          {slide.badgeIcon}
                          <span>{slide.badge}</span>
                        </span>

                        {slide.video && (
                          <span className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 shadow-sm">
                            {slide.videoBrandIcon}
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span>{slide.videoBadge || 'Resmi Tanıtım Videosu'}</span>
                          </span>
                        )}

                        <span className="text-xs text-slate-300 font-medium hidden sm:inline-block">
                          Kırşehir Mağaza Güvencesiyle
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white leading-[1.08] tracking-tight mb-2 sm:mb-3.5 drop-shadow-md">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed mb-4 sm:mb-6 max-w-xl line-clamp-2 sm:line-clamp-3 drop-shadow-sm">
                        {slide.subtitle}
                      </p>

                      {/* Interactive Scene Switcher (Frosted Pills) */}
                      {slide.scenes && (
                        <div className="hidden sm:flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                          <span className="text-xs text-slate-400 font-semibold mr-1">
                            Lansman Sahnesi:
                          </span>
                          {slide.scenes.map((sc) => (
                            <button
                              key={sc.src}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveScenes((prev) => ({ ...prev, [idx]: sc.src }));
                                setProgress(0);
                              }}
                              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                                currentVideoSrc === sc.src
                                  ? 'bg-white text-slate-950 font-bold border-white shadow-lg scale-105'
                                  : 'bg-slate-950/65 text-slate-300 hover:text-white border-white/20 hover:border-white/50 backdrop-blur-md'
                              }`}
                            >
                              {sc.icon}
                              <span>{sc.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons Row */}
                      <div className="flex items-center gap-3 sm:gap-3.5 mt-1 sm:mt-0">
                        <button
                          onClick={() => handleCtaClick(slide.categoryId)}
                          style={{
                            background: 'linear-gradient(135deg, #0084d6 0%, #006cb3 100%)',
                            color: '#ffffff'
                          }}
                          className="hover:brightness-110 text-white text-xs sm:text-sm font-bold px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2 cursor-pointer active:scale-95 group/btn"
                        >
                          <span>{slide.ctaText}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>

                        {slide.fullFilm && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsFilmModalOpen(true);
                            }}
                            className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/25 text-xs sm:text-sm font-bold px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-sm cursor-pointer active:scale-95 group/film"
                            title="Apple Resmi Lansman Tanıtım Filmini İzle"
                          >
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover/film:scale-110">
                              <Play className="w-3 h-3 fill-white text-white translate-x-0.5" />
                            </div>
                            <span className="hidden xs:inline sm:inline">Tanıtım Filmi</span>
                            <span className="inline xs:hidden sm:hidden">Film</span>
                          </button>
                        )}
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Bottom Ambient Gradient into next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-10 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(6,10,22,0.85) 100%)'
        }}
      />

      {/* Desktop Floating Chevrons (Hidden on mobile so they never overlap text) */}
      <button
        onClick={prevSlide}
        aria-label="Önceki Slayt"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        className="hidden sm:flex absolute left-4 lg:left-6 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-[#0084d6] text-white items-center justify-center backdrop-blur-md transition-all duration-300 shadow-2xl cursor-pointer border border-white/15 hover:scale-110 active:scale-95 group/arrow opacity-75 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover/arrow:-translate-x-0.5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Sonraki Slayt"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        className="hidden sm:flex absolute right-4 lg:right-6 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-[#0084d6] text-white items-center justify-center backdrop-blur-md transition-all duration-300 shadow-2xl cursor-pointer border border-white/15 hover:scale-110 active:scale-95 group/arrow opacity-75 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover/arrow:translate-x-0.5" />
      </button>

      {/* Apple / Story Style Segmented Progress & Ergonomic Mobile Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-20 pointer-events-auto">
        <div className="max-w-[1448px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Segmented Timeline */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-1 max-w-[200px] xs:max-w-xs sm:max-w-md md:max-w-lg">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              const isPassed = currentSlide > idx;

              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setProgress(0);
                  }}
                  className="group/bar flex-1 py-2 cursor-pointer focus:outline-none"
                  aria-label={`Slayt ${idx + 1}`}
                >
                  <div className="h-1 sm:h-1.5 w-full bg-white/25 rounded-full overflow-hidden transition-colors group-hover/bar:bg-white/40">
                    <div
                      className="h-full bg-[#0084d6] rounded-full"
                      style={{
                        width: isActive ? `${progress}%` : isPassed ? '100%' : '0%',
                        transition: isActive ? 'width 50ms linear' : 'none'
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Controls & Counter Strip */}
          <div className="flex items-center gap-2">
            {/* Mobile Thumb-Zone Arrow Buttons (Docked safely at the bottom, zero text overlap!) */}
            <div className="flex sm:hidden items-center gap-1 bg-black/45 backdrop-blur-md p-0.5 rounded-full border border-white/10 shadow-md">
              <button
                onClick={prevSlide}
                aria-label="Önceki Slayt"
                className="w-7 h-7 rounded-full bg-white/10 active:bg-[#0084d6] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Sonraki Slayt"
                className="w-7 h-7 rounded-full bg-white/10 active:bg-[#0084d6] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Counter (e.g. 02 / 05) */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold bg-black/45 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1 rounded-full border border-white/10 shadow-md">
              <span className="text-white">0{currentSlide + 1}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">0{slides.length}</span>
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
            className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/50 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white p-1.5 border border-white/10 shadow-xs">
                  <AppleLogo className="w-5 h-5 text-white" monochrome />
                </div>
                <div>
                  <h3 className="text-white text-sm sm:text-base font-bold flex items-center gap-2">
                    Apple iPhone 18 Pro & Pro Max — Resmi Lansman Tanıtım Filmi
                  </h3>
                  <p className="text-slate-400 text-[11px]">
                    Apple Resmi Tanıtım Videosu • 02:52 • Orijinal Ses ve Görüntü
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFilmModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-all cursor-pointer"
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
          </div>
        </div>
      )}
    </section>
  );
};
