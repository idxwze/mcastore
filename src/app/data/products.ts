export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: 'NEW' | 'SALE';
  season?: string;
  description?: string;
  sizes: string[];
  rating?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'MCA Home Jersey 24/25',
    price: 6500,
    image: 'algeria football jersey red green',
    category: 'Jersey',
    badge: 'NEW',
    season: '24/25',
    description: 'Official MCA home jersey for the 2024/25 season. Made with premium breathable fabric for maximum comfort and performance.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.8,
  },
  {
    id: '2',
    name: 'MCA Away Jersey 24/25',
    price: 6500,
    image: 'football white jersey sport',
    category: 'Jersey',
    badge: 'NEW',
    season: '24/25',
    description: 'Official MCA away jersey for the 2024/25 season. Features the iconic club colors in a modern design.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.7,
  },
  {
    id: '3',
    name: 'MCA Training Jersey',
    price: 4800,
    image: 'red sport training shirt',
    category: 'Training',
    season: '24/25',
    description: 'Lightweight training jersey perfect for practice sessions. Moisture-wicking technology keeps you dry.',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.5,
  },
  {
    id: '4',
    name: 'MCA Scarf',
    price: 1500,
    image: 'red green football scarf',
    category: 'Accessories',
    description: 'Show your support with this premium knitted scarf featuring the club colors.',
    sizes: ['One Size'],
    rating: 4.9,
  },
  {
    id: '5',
    name: 'MCA Cap',
    price: 2200,
    image: 'red sports cap hat',
    category: 'Accessories',
    description: 'Adjustable cap with embroidered club logo. Perfect for sunny matchdays.',
    sizes: ['One Size'],
    rating: 4.6,
  },
  {
    id: '6',
    name: 'MCA Hoodie',
    price: 7200,
    image: 'red sports hoodie',
    category: 'Apparel',
    season: '24/25',
    description: 'Comfortable cotton blend hoodie with club branding. Ideal for casual wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.7,
  },
  {
    id: '7',
    name: 'MCA Training Pants',
    price: 4200,
    image: 'black sport pants',
    category: 'Training',
    description: 'Tapered training pants with zippered pockets. Breathable and durable.',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.5,
  },
  {
    id: '8',
    name: 'MCA Track Jacket',
    price: 6800,
    image: 'red sport jacket',
    category: 'Apparel',
    description: 'Classic track jacket with club colors and logo. Perfect for layering.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
  },
];
