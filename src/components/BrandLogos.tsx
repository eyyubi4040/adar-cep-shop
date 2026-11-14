import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  monochrome?: boolean;
}

// 1. Apple Logo (Crisp Monochrome Vector)
export const AppleLogo: React.FC<LogoProps> = ({ className = 'h-6 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 170 170"
    className={className}
    fill="currentColor"
    aria-label="Apple"
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.07-7.7-7.93-12-14.59-6.08-9.4-10.85-20.15-14.3-32.26-3.46-12.1-5.19-23.36-5.19-33.78 0-14.97 3.8-27.42 11.41-37.35 7.6-9.93 17.06-15.01 28.37-15.24 4.8 0 10.15 1.25 16.06 3.75 5.91 2.5 9.77 3.8 11.58 3.92 1.57-.12 5.54-1.46 11.91-4.03 6.37-2.58 11.83-3.72 16.39-3.43 12.35.65 22.42 5.48 30.22 14.51-10.74 6.51-16.01 15.62-15.81 27.34.2 9.68 3.97 17.84 11.3 24.49 7.33 6.64 16.02 10.42 26.07 11.34-2.16 6.32-4.63 12.43-7.42 18.34zM119.22 33.51c0-7.39 2.68-14.44 8.04-21.14 5.36-6.7 12-11.13 19.92-13.27.7 2.9.88 5.75.54 8.55-.7 5.73-3.19 11.59-7.46 17.58-4.27 5.99-9.52 9.79-15.75 11.4-1.28-.97-2.71-1.63-4.29-1.98-.67-.38-.99-.76-1-1.14z" />
  </svg>
);

// 2. Samsung Logo (Authentic Wordmark & Oval Accent)
export const SamsungLogo: React.FC<LogoProps> = ({ className = 'h-5 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 200 48"
    className={className}
    fill="currentColor"
    aria-label="Samsung"
  >
    {/* Iconic Tilted Samsung Oval Background if not monochrome */}
    {!monochrome && (
      <ellipse
        cx="100"
        cy="24"
        rx="96"
        ry="22"
        fill="#1428A0"
        transform="rotate(-5 100 24)"
      />
    )}
    <text
      x="100"
      y="30"
      textAnchor="middle"
      fill={monochrome ? 'currentColor' : '#FFFFFF'}
      fontFamily="'Arial Black', 'Trebuchet MS', -apple-system, sans-serif"
      fontWeight="900"
      fontSize="20"
      letterSpacing="3"
    >
      SAMSUNG
    </text>
  </svg>
);

// 3. Xiaomi Logo (Famous Orange Squircle with 'mi')
export const XiaomiLogo: React.FC<LogoProps> = ({ className = 'h-6 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    aria-label="Xiaomi"
  >
    <rect
      width="100"
      height="100"
      rx="28"
      fill={monochrome ? 'currentColor' : '#FF6900'}
    />
    {/* Inner 'mi' mark */}
    <g fill={monochrome ? '#000000' : '#FFFFFF'}>
      {/* M outer arch */}
      <path d="M26 31h12c1.1 0 2 .9 2 2v34c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V45h-2v22c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V33c0-1.1.9-2 2-2h8z" opacity="0" />
      {/* Geometric Mi icon */}
      <rect x="22" y="28" width="11" height="44" rx="4" />
      <path d="M33 28h26c4.4 0 8 3.6 8 8v36h-11V42c0-1.7-1.3-3-3-3H44v33H33V28z" />
      <rect x="44" y="47" width="11" height="25" rx="3" />
      <rect x="67" y="28" width="11" height="44" rx="4" />
    </g>
  </svg>
);

// 4. Spigen Logo (Iconic Orange Geometric Slash + Typography)
export const SpigenLogo: React.FC<LogoProps> = ({ className = 'h-5 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 160 40"
    className={className}
    aria-label="Spigen"
  >
    {/* Spigen Orange Chevron Slash */}
    <path
      d="M10 8 L22 20 L10 32 L4 26 L12 20 L4 14 Z"
      fill={monochrome ? 'currentColor' : '#F37021'}
    />
    <path
      d="M20 8 L32 20 L20 32 L14 26 L22 20 L14 14 Z"
      fill={monochrome ? 'currentColor' : '#F37021'}
      opacity="0.8"
    />
    {/* Wordmark */}
    <text
      x="38"
      y="26"
      fill="currentColor"
      fontFamily="'Futura', 'Montserrat', 'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="20"
      letterSpacing="1.5"
    >
      spigen
    </text>
  </svg>
);

// 5. Anker Logo (Energy Cyan / Electric Blue Stylized 'A' + Wordmark)
export const AnkerLogo: React.FC<LogoProps> = ({ className = 'h-5 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 150 40"
    className={className}
    aria-label="Anker"
  >
    {/* Stylized Cyan Bolt A */}
    <path
      d="M14 6 L26 34 L18 34 L15 27 L9 27 L7 34 L0 34 L10 6 Z M12 14 L10 22 L14 22 Z"
      fill={monochrome ? 'currentColor' : '#00A3E0'}
    />
    {/* Blue accent flash */}
    <polygon points="17,10 24,18 20,20 27,27 21,28 17,21 21,19" fill={monochrome ? 'currentColor' : '#00A3E0'} />
    <text
      x="36"
      y="28"
      fill="currentColor"
      fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
      fontWeight="900"
      fontSize="22"
      letterSpacing="2"
    >
      ANKER
    </text>
  </svg>
);

// 6. Baseus Logo (Bold Yellow Accent Tech Wordmark)
export const BaseusLogo: React.FC<LogoProps> = ({ className = 'h-5 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 140 38"
    className={className}
    aria-label="Baseus"
  >
    {!monochrome && (
      <rect x="0" y="2" width="30" height="34" rx="7" fill="#FFD100" />
    )}
    <text
      x={monochrome ? '0' : '8'}
      y="26"
      fill={monochrome ? 'currentColor' : '#111111'}
      fontFamily="'Trebuchet MS', 'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="20"
    >
      B
    </text>
    <text
      x={monochrome ? '22' : '36'}
      y="26"
      fill="currentColor"
      fontFamily="'Trebuchet MS', 'Arial Black', sans-serif"
      fontWeight="800"
      fontSize="20"
      letterSpacing="0.5"
    >
      aseus
    </text>
  </svg>
);

// 7. JBL Logo (Vibrant Red Rounded Block with Bold White JBL)
export const JblLogo: React.FC<LogoProps> = ({ className = 'h-6 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 90 44"
    className={className}
    aria-label="JBL"
  >
    <rect
      x="0"
      y="0"
      width="90"
      height="44"
      rx="8"
      fill={monochrome ? 'currentColor' : '#E31837'}
    />
    {/* White JBL Typography + Exclamation mark icon */}
    <text
      x="36"
      y="30"
      textAnchor="middle"
      fill={monochrome ? '#000000' : '#FFFFFF'}
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="23"
      letterSpacing="-0.5"
    >
      JBL
    </text>
    {/* Exclamation point symbol */}
    <circle cx="74" cy="18" r="4.5" fill={monochrome ? '#000000' : '#FFFFFF'} />
    <polygon points="70,25 78,25 76,33 72,33" fill={monochrome ? '#000000' : '#FFFFFF'} />
  </svg>
);

// 8. Sony Logo (Timeless Serif Wordmark)
export const SonyLogo: React.FC<LogoProps> = ({ className = 'h-4 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 140 32"
    className={className}
    fill="currentColor"
    aria-label="Sony"
  >
    <text
      x="70"
      y="24"
      textAnchor="middle"
      fontFamily="'Times New Roman', 'Georgia', serif"
      fontWeight="bold"
      fontSize="26"
      letterSpacing="4"
    >
      SONY
    </text>
  </svg>
);

// 9. Wiwu Logo (Creative Modern Wordmark)
export const WiwuLogo: React.FC<LogoProps> = ({ className = 'h-5 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 130 36"
    className={className}
    aria-label="WiWU"
  >
    <rect x="0" y="2" width="28" height="32" rx="6" fill={monochrome ? 'currentColor' : '#7C3AED'} />
    <text
      x="14"
      y="24"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="16"
    >
      W
    </text>
    <text
      x="34"
      y="26"
      fill="currentColor"
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="20"
      letterSpacing="1"
    >
      WiWU
    </text>
  </svg>
);

// 10. Benks Logo (Minimalist Tech Wordmark)
export const BenksLogo: React.FC<LogoProps> = ({ className = 'h-4 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 130 32"
    className={className}
    fill="currentColor"
    aria-label="Benks"
  >
    <text
      x="65"
      y="23"
      textAnchor="middle"
      fontFamily="'Helvetica Neue', 'Arial Black', sans-serif"
      fontWeight="800"
      fontSize="20"
      letterSpacing="2.5"
    >
      BENKS
    </text>
  </svg>
);

// 11. Huawei Logo (Classic Petal Flower + Typography)
export const HuaweiLogo: React.FC<LogoProps> = ({ className = 'h-6 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 150 44"
    className={className}
    aria-label="Huawei"
  >
    {/* 8 Red Petals */}
    <g fill={monochrome ? 'currentColor' : '#ED1C24'}>
      <path d="M18 18 C18 10 24 4 24 4 C24 4 30 10 30 18 C30 22 27 24 24 24 C21 24 18 22 18 18 Z" />
      <path d="M14 20 C10 13 13 6 13 6 C13 6 20 9 21 17 C21 21 19 23 16 23 C14 23 14 21 14 20 Z" opacity="0.85" />
      <path d="M34 20 C38 13 35 6 35 6 C35 6 28 9 27 17 C27 21 29 23 32 23 C34 23 34 21 34 20 Z" opacity="0.85" />
      <path d="M10 25 C5 21 5 14 5 14 C5 14 12 14 16 21 C18 24 16 27 13 27 C11 27 10 26 10 25 Z" opacity="0.7" />
      <path d="M38 25 C43 21 43 14 43 14 C43 14 36 14 32 21 C30 24 32 27 35 27 C37 27 38 26 38 25 Z" opacity="0.7" />
    </g>
    <text
      x="52"
      y="26"
      fill="currentColor"
      fontFamily="'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="17"
      letterSpacing="1"
    >
      HUAWEI
    </text>
  </svg>
);

// 12. Google Pixel Logo (Authentic 4-color 'G' mark)
export const GoogleLogo: React.FC<LogoProps> = ({ className = 'h-6 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-label="Google Pixel"
  >
    {monochrome ? (
      <path
        fill="currentColor"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
    ) : (
      <>
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
      </>
    )}
  </svg>
);

// 13. Oppo Logo (Iconic Emerald Green OPPO Wordmark)
export const OppoLogo: React.FC<LogoProps> = ({ className = 'h-5 w-auto', monochrome = false }) => (
  <svg
    viewBox="0 0 130 36"
    className={className}
    aria-label="OPPO"
  >
    <g fill={monochrome ? 'currentColor' : '#05B054'}>
      {/* O 1 */}
      <path d="M19 6 C26.2 6 32 11.4 32 18 C32 24.6 26.2 30 19 30 C11.8 30 6 24.6 6 18 C6 11.4 11.8 6 19 6 Z M19 11.5 C15.1 11.5 12 14.4 12 18 C12 21.6 15.1 24.5 19 24.5 C22.9 24.5 26 21.6 26 18 C26 14.4 22.9 11.5 19 11.5 Z" />
      {/* P 1 */}
      <path d="M38 6 L49 6 C56.2 6 62 11.4 62 18 C62 24.6 56.2 30 49 30 L44 30 L44 36 L38 36 Z M44 24.5 L49 24.5 C52.9 24.5 56 21.6 56 18 C56 14.4 52.9 11.5 49 11.5 L44 11.5 Z" />
      {/* P 2 */}
      <path d="M68 6 L79 6 C86.2 6 92 11.4 92 18 C92 24.6 86.2 30 79 30 L74 30 L74 36 L68 36 Z M74 24.5 L79 24.5 C82.9 24.5 86 21.6 86 18 C86 14.4 82.9 11.5 79 11.5 L74 11.5 Z" />
      {/* O 2 */}
      <path d="M109 6 C116.2 6 122 11.4 122 18 C122 24.6 116.2 30 109 30 C101.8 30 96 24.6 96 18 C96 11.4 101.8 6 109 6 Z M109 11.5 C105.1 11.5 102 14.4 102 18 C102 21.6 105.1 24.5 109 24.5 C112.9 24.5 116 21.6 116 18 C116 14.4 112.9 11.5 109 11.5 Z" />
    </g>
  </svg>
);

// Dynamic Brand Logo Resolver Component
export const BrandLogo: React.FC<{
  brand: string;
  className?: string;
  monochrome?: boolean;
}> = ({ brand, className = 'h-6 w-auto', monochrome = false }) => {
  const norm = (brand || '').toLowerCase().trim();

  if (norm.includes('apple') || norm.includes('iphone')) {
    return <AppleLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('samsung') || norm.includes('galaxy')) {
    return <SamsungLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('xiaomi') || norm.includes('redmi') || norm.includes('mi')) {
    return <XiaomiLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('spigen')) {
    return <SpigenLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('anker')) {
    return <AnkerLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('baseus')) {
    return <BaseusLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('jbl')) {
    return <JblLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('sony')) {
    return <SonyLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('wiwu')) {
    return <WiwuLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('benks')) {
    return <BenksLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('huawei')) {
    return <HuaweiLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('google') || norm.includes('pixel')) {
    return <GoogleLogo className={className} monochrome={monochrome} />;
  }
  if (norm.includes('oppo')) {
    return <OppoLogo className={className} monochrome={monochrome} />;
  }

  // Fallback text badge if unrecognized
  return (
    <span className={`font-black tracking-wider uppercase text-xs ${className}`}>
      {brand}
    </span>
  );
};

// Mini Logo Icon for Product Cards & Headers (compact square/circle)
export const BrandMiniIcon: React.FC<{ brand: string; className?: string }> = ({
  brand,
  className = 'w-4 h-4'
}) => {
  const norm = (brand || '').toLowerCase().trim();

  if (norm.includes('apple') || norm.includes('iphone')) {
    return <AppleLogo className={className} />;
  }
  if (norm.includes('samsung')) {
    return (
      <span className="font-black text-[9px] px-1 py-0.5 rounded bg-blue-700 text-white leading-none">
        SAM
      </span>
    );
  }
  if (norm.includes('xiaomi') || norm.includes('redmi')) {
    return <XiaomiLogo className={className} />;
  }
  if (norm.includes('spigen')) {
    return (
      <span className="font-black text-[9px] px-1 py-0.5 rounded bg-orange-600 text-white leading-none">
        SPG
      </span>
    );
  }
  if (norm.includes('anker')) {
    return (
      <span className="font-black text-[9px] px-1 py-0.5 rounded bg-sky-600 text-white leading-none">
        ANK
      </span>
    );
  }
  if (norm.includes('baseus')) {
    return (
      <span className="font-black text-[9px] px-1 py-0.5 rounded bg-amber-400 text-black leading-none">
        BAS
      </span>
    );
  }
  if (norm.includes('jbl')) {
    return <JblLogo className={className} />;
  }
  if (norm.includes('oppo')) {
    return (
      <span className="font-black text-[9px] px-1 py-0.5 rounded bg-emerald-600 text-white leading-none">
        OPPO
      </span>
    );
  }

  return null;
};

// 14. Official Global WhatsApp Vector Icon (FontAwesome 6 - Flawless & High-Definition)
export const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5'
}) => (
  <svg
    viewBox="0 0 448 512"
    className={className}
    fill="currentColor"
    aria-label="WhatsApp"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

// Backward-compatible aliases
export const WhatsAppLogo = WhatsAppIcon;
export const WhatsAppWhiteIcon = WhatsAppIcon;

// 15. Official Global Instagram Vector Icon (FontAwesome 6 - Flawless & High-Definition)
export const InstagramIcon: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5'
}) => (
  <svg
    viewBox="0 0 448 512"
    className={className}
    fill="currentColor"
    aria-label="Instagram"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);
