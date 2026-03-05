export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
}

export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Wireless Headphones Pro',
    price: 45000,
    originalPrice: 65000,
    image:
      'https://images.unsplash.com/photo-1612858249937-1cc0852093dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0JTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjMwMDMzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    inStock: true,
    stockCount: 15,
    rating: 4.5,
    reviewCount: 234,
  },
  {
    id: 'prod-2',
    name: 'Smartphone X12 Pro Max',
    price: 285000,
    image:
      'https://images.unsplash.com/photo-1673718424704-51d0d2ca1fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmUlMjBwcm9kdWN0fGVufDF8fHx8MTc3MjMwMDMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile',
    inStock: false,
    stockCount: 8,
    rating: 4.8,
    reviewCount: 567,
  },
  {
    id: 'prod-3',
    name: 'UltraBook Laptop 15"',
    price: 520000,
    image:
      'https://images.unsplash.com/photo-1736616967588-d81fcd6f4d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHByb2R1Y3R8ZW58MXx8fHwxNzcyMzgyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    inStock: true,
    stockCount: 5,
    rating: 5,
    reviewCount: 189,
  },
  {
    id: 'prod-4',
    name: 'Smart Watch Series 7',
    price: 95000,
    originalPrice: 120000,
    image:
      'https://images.unsplash.com/photo-1758525747606-bd5d801ca87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjM1MTM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    inStock: true,
    stockCount: 12,
    rating: 2,
    reviewCount: 423,
  },
  {
    id: 'prod-5',
    name: 'Portable Bluetooth Speaker',
    price: 28000,
    image:
      'https://images.unsplash.com/photo-1547052178-7f2c5a20c332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNwZWFrZXIlMjBibHVldG9vdGh8ZW58MXx8fHwxNzcyMzgyNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    inStock: true,
    stockCount: 24,
    rating: 0,
    reviewCount: 156,
  },
  {
    id: 'prod-6',
    name: 'Digital Camera 4K',
    price: 165000,
    image:
      'https://images.unsplash.com/photo-1632222623518-bbbd5f1f2489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMHByb2R1Y3R8ZW58MXx8fHwxNzcyMjczMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Photography',
    inStock: false,
    stockCount: 0,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 'prod-7',
    name: 'Tablet Pro 12.9"',
    price: 235000,
    image:
      'https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjBwcm9kdWN0fGVufDF8fHx8MTc3MjM2MDcyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile',
    inStock: true,
    stockCount: 7,
    rating: 4.7,
    reviewCount: 312,
  },
  {
    id: 'prod-8',
    name: 'Gaming Console Controller',
    price: 18500,
    image:
      'https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NzIyOTc3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    inStock: true,
    stockCount: 32,
    rating: 4.4,
    reviewCount: 278,
  },
  {
    id: 'prod-9',
    name: 'Wireless Earbuds Pro',
    price: 32000,
    originalPrice: 45000,
    image:
      'https://images.unsplash.com/photo-1591923271591-478bb32b57ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBwcm9kdWN0fGVufDF8fHx8MTc3MjM4MjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    inStock: true,
    stockCount: 18,
    rating: 4.6,
    reviewCount: 445,
  },
  {
    id: 'prod-10',
    name: 'Power Bank 20000mAh',
    price: 15000,
    image:
      'https://images.unsplash.com/photo-1766639214202-7eab6e6d1c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmslMjBjaGFyZ2VyfGVufDF8fHx8MTc3MjM3NDkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    inStock: true,
    stockCount: 45,
    rating: 3,
    reviewCount: 523,
  },
];

export const isProductFinishing = (val: Product) => val.stockCount < 10;
