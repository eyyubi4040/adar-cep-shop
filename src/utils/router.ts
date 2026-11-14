export type RouteInfo =
  | { type: 'home' }
  | { type: 'brand'; brandId: string }
  | { type: 'category'; categoryId: string }
  | { type: 'product'; productId: string }
  | { type: 'section'; sectionId: 'takas' | 'magaza' | 'vitrin' | 'sss' };

/**
 * Parses the current browser pathname and hash into a structured RouteInfo.
 * Supports legacy hash URLs (e.g. #marka/apple, #degerleme) and automatically cleans them.
 */
export function parseRoute(pathname = '', hash = ''): RouteInfo {
  // 1. Backward compatibility: if URL has legacy hash
  if (hash.startsWith('#marka/')) {
    const brandId = hash.replace('#marka/', '').trim().toLowerCase();
    if (brandId) return { type: 'brand', brandId };
  }
  if (hash === '#degerleme' || hash === '#takas') {
    return { type: 'section', sectionId: 'takas' };
  }
  if (hash === '#magaza' || hash === '#iletisim') {
    return { type: 'section', sectionId: 'magaza' };
  }
  if (hash === '#vitrin') {
    return { type: 'section', sectionId: 'vitrin' };
  }
  if (hash === '#sss' || hash === '#faq') {
    return { type: 'section', sectionId: 'sss' };
  }

  // 2. Clean pathname parsing
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';

  // Brand route: /marka/:brandId
  const brandMatch = clean.match(/^\/marka\/([a-zA-Z0-9-_]+)$/i);
  if (brandMatch) {
    return { type: 'brand', brandId: brandMatch[1].toLowerCase() };
  }

  // Category route: /kategori/:catId
  const catMatch = clean.match(/^\/kategori\/([a-zA-Z0-9-_]+)$/i);
  if (catMatch) {
    return { type: 'category', categoryId: catMatch[1] };
  }

  // Product route: /urun/:productId
  const prodMatch = clean.match(/^\/urun\/([a-zA-Z0-9-_]+)$/i);
  if (prodMatch) {
    return { type: 'product', productId: prodMatch[1] };
  }

  // Named sections
  if (clean === '/takas' || clean === '/cihazini-sat' || clean === '/degerleme') {
    return { type: 'section', sectionId: 'takas' };
  }
  if (clean === '/magaza' || clean === '/iletisim' || clean === '/konum') {
    return { type: 'section', sectionId: 'magaza' };
  }
  if (clean === '/vitrin' || clean === '/modeller' || clean === '/urunler') {
    return { type: 'section', sectionId: 'vitrin' };
  }
  if (clean === '/sss' || clean === '/sikca-sorulan-sorular') {
    return { type: 'section', sectionId: 'sss' };
  }

  return { type: 'home' };
}

/**
 * Navigates to a clean URL using the HTML5 History API without page reload.
 */
export function navigateTo(path: string, options: { replace?: boolean; scroll?: boolean } = {}) {
  if (typeof window === 'undefined') return;

  const targetPath = path.startsWith('/') ? path : `/${path}`;
  const currentPath = window.location.pathname + window.location.search;

  if (currentPath !== targetPath || window.location.hash) {
    if (options.replace) {
      window.history.replaceState(null, '', targetPath);
    } else {
      window.history.pushState(null, '', targetPath);
    }
  }

  // Trigger popstate so all listeners update immediately
  window.dispatchEvent(new PopStateEvent('popstate'));

  if (options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
