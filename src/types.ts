export type MenuCategoryId = 'thali' | 'bhaji' | 'bhakri' | 'thecha' | 'bhat' | 'drinks';

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategoryId;
  pricePlaceholder: string; // "₹ —" strictly per guidelines
  tag?: string;
  image: string;
  isPopular?: boolean;
}

export interface SpecialDish {
  id: string;
  name: string;
  marathiSubname?: string;
  description: string;
  pricePlaceholder: string; // "₹ —"
  image: string;
  tag: string;
}

export interface MealStep {
  stepNumber: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  dateTag: string;
}
