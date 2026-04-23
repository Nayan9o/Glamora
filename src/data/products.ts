import lipstick from "@/assets/cat-lipstick.jpg";
import foundation from "@/assets/cat-foundation.jpg";
import skincare from "@/assets/cat-skincare.jpg";
import eyeshadow from "@/assets/cat-eyeshadow.jpg";
import blush from "@/assets/cat-blush.jpg";
import brushes from "@/assets/cat-mascara.jpg";
import fragrance from "@/assets/cat-fragrance.jpg";

export type Category =
  | "Lipstick"
  | "Foundation"
  | "Skincare"
  | "Eyeshadow"
  | "Blush"
  | "Brushes"
  | "Fragrance";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  featured?: boolean;
}

export const categories: { name: Category; image: string }[] = [
  { name: "Lipstick", image: lipstick },
  { name: "Foundation", image: foundation },
  { name: "Skincare", image: skincare },
  { name: "Eyeshadow", image: eyeshadow },
  { name: "Blush", image: blush },
  { name: "Brushes", image: brushes },
  { name: "Fragrance", image: fragrance },
];

export const products: Product[] = [
  { id: "p1", name: "Velvet Matte Lipstick — Rose Petal", brand: "Glamora", category: "Lipstick", price: 240, rating: 4.8, reviews: 312, image: lipstick, description: "A creamy matte lipstick with 12-hour wear and a soft rose petal hue.", featured: true },
  { id: "p2", name: "Silk Glow Liquid Foundation", brand: "Glamora", category: "Foundation", price: 420, rating: 4.7, reviews: 521, image: foundation, description: "Lightweight buildable coverage with a luminous, second-skin finish.", featured: true },
  { id: "p3", name: "Radiance Vitamin C Serum", brand: "Glamora", category: "Skincare", price: 580, rating: 4.9, reviews: 894, image: skincare, description: "Brightening serum with 15% Vitamin C and hyaluronic acid.", featured: true },
  { id: "p4", name: "Sunset Nude Eyeshadow Palette", brand: "Glamora", category: "Eyeshadow", price: 480, rating: 4.6, reviews: 234, image: eyeshadow, description: "12 buttery-smooth shades from soft champagne to warm terracotta.", featured: true },
  { id: "p5", name: "Petal Soft Powder Blush", brand: "Glamora", category: "Blush", price: 280, rating: 4.7, reviews: 189, image: blush, description: "Silky pressed blush that melts into skin for a natural flush.", featured: true },
  { id: "p6", name: "Pro Artistry Brush Set", brand: "Glamora", category: "Brushes", price: 890, rating: 4.9, reviews: 412, image: brushes, description: "10-piece rose gold brush set crafted from ultra-soft synthetic fibres.", featured: true },
  { id: "p7", name: "Bloom Eau de Parfum", brand: "Glamora", category: "Fragrance", price: 1100, rating: 4.8, reviews: 256, image: fragrance, description: "A floral musk fragrance with notes of peony, jasmine and amber." },
  { id: "p8", name: "Hydra Dream Night Cream", brand: "Glamora", category: "Skincare", price: 640, rating: 4.6, reviews: 178, image: skincare, description: "Rich overnight moisturizer with peptides and squalane." },
  { id: "p9", name: "Plush Lip Tint — Berry Kiss", brand: "Glamora", category: "Lipstick", price: 190, rating: 4.5, reviews: 142, image: lipstick, description: "Sheer hydrating tint with juicy berry color." },
  { id: "p10", name: "Soft Focus Pressed Powder", brand: "Glamora", category: "Foundation", price: 360, rating: 4.6, reviews: 98, image: foundation, description: "Finely milled setting powder for a soft-focus finish." },
  { id: "p11", name: "Smoky Rose Eyeshadow Quad", brand: "Glamora", category: "Eyeshadow", price: 320, rating: 4.5, reviews: 87, image: eyeshadow, description: "Four wearable shades for a romantic smoky eye." },
  { id: "p12", name: "Coral Sunlit Cream Blush", brand: "Glamora", category: "Blush", price: 260, rating: 4.7, reviews: 121, image: blush, description: "Dewy cream blush in a fresh coral shade." },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
