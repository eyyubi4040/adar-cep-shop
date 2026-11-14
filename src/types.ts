export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  condition: 'sifir' | 'ikinci-el' | 'aksesuar';
  conditionBadge?: string;
  badge?: string;
  image: string;
  secondaryImage?: string;
  specs: {
    storage?: string;
    ram?: string;
    color?: string;
    batteryHealth?: string;
    warranty: string;
    features: string[];
  };
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  itemCount: number;
  description: string;
  subcategories: string[];
}

export interface MegaMenuColumn {
  title: string;
  icon: string;
  links: { name: string; badge?: string; categoryId: string }[];
}

export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  bgGradient: string;
  image: string;
  ctaText: string;
  targetCategory: string;
}
