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

// ============================================
// TYPE DEFINITIONS
// ============================================

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  verified: boolean;
  createdAt: string;
};
export type Account = {
  id: string;
  userId: string;
  accountNumber: string;
  accountName: string;
  balance: number;
  currency: string;
  type: 'savings' | 'current' | 'wallet';
  isDefault: boolean;
};
export type Transaction = {
  id: string;
  accountId: string;
  type: 'credit' | 'debit';
  category:
    | 'transfer'
    | 'airtime'
    | 'data'
    | 'bills'
    | 'shopping'
    | 'salary'
    | 'refund';
  amount: number;
  currency: string;
  description: string;
  recipient?: string;
  sender?: string;
  reference: string;
  status: 'success' | 'pending' | 'failed';
  date: string;
};
// ============================================
// MOCK USER
// ============================================
export const mockUser: User = {
  id: 'usr_001',
  firstName: 'Kanma',
  lastName: 'Chizea',
  email: 'kanmachizeaa@email.com',
  phone: '+234 812 345 6789',
  avatar: 'https://i.pravatar.cc/150?img=47',
  verified: true,
  createdAt: '2024-01-15T10:30:00Z',
};
// ============================================
// MOCK ACCOUNT
// ============================================
export const mockAccount: Account = {
  id: 'acc_001',
  userId: 'usr_001',
  accountNumber: '0123456789',
  accountName: 'Kanma Chizea',
  balance: 458750.5,
  currency: 'NGN',
  type: 'savings',
  isDefault: true,
};
// Additional accounts for multi-account layouts
export const mockAccounts: Account[] = [
  mockAccount,
  {
    id: 'acc_002',
    userId: 'usr_001',
    accountNumber: '9876543210',
    accountName: 'Kanma Chizea',
    balance: 125000.0,
    currency: 'NGN',
    type: 'current',
    isDefault: true,
  },
  {
    id: 'acc_003',
    userId: 'usr_001',
    accountNumber: 'WALLET-001',
    accountName: 'Adaeze Wallet',
    balance: 15420.75,
    currency: 'NGN',
    type: 'wallet',
    isDefault: false,
  },
];
// ============================================
// MOCK TRANSACTIONS
// ============================================
export const mockTransactions: Transaction[] = [
  {
    id: 'txn_001',
    accountId: 'acc_001',
    type: 'debit',
    category: 'airtime',
    amount: 2000,
    currency: 'NGN',
    description: 'MTN Airtime Purchase',
    recipient: '08123456789',
    reference: 'TXN20240228001',
    status: 'success',
    date: '2024-02-28T14:30:00Z',
  },
  {
    id: 'txn_002',
    accountId: 'acc_001',
    type: 'credit',
    category: 'transfer',
    amount: 150000,
    currency: 'NGN',
    description: 'Transfer from Chinedu Eze',
    sender: 'Chinedu Eze',
    reference: 'TXN20240228002',
    status: 'success',
    date: '2024-02-28T11:15:00Z',
  },
  {
    id: 'txn_003',
    accountId: 'acc_001',
    type: 'debit',
    category: 'bills',
    amount: 25000,
    currency: 'NGN',
    description: 'IKEDC Electricity Bill',
    recipient: 'IKEDC',
    reference: 'TXN20240227003',
    status: 'success',
    date: '2024-02-27T09:45:00Z',
  },
  {
    id: 'txn_004',
    accountId: 'acc_001',
    type: 'debit',
    category: 'data',
    amount: 5000,
    currency: 'NGN',
    description: 'Airtel 10GB Data Bundle',
    recipient: '08098765432',
    reference: 'TXN20240227004',
    status: 'success',
    date: '2024-02-27T08:20:00Z',
  },
  {
    id: 'txn_005',
    accountId: 'acc_001',
    type: 'debit',
    category: 'transfer',
    amount: 75000,
    currency: 'NGN',
    description: 'Transfer to Amaka Johnson',
    recipient: 'Amaka Johnson',
    reference: 'TXN20240226005',
    status: 'success',
    date: '2024-02-26T16:30:00Z',
  },
  {
    id: 'txn_006',
    accountId: 'acc_001',
    type: 'credit',
    category: 'salary',
    amount: 450000,
    currency: 'NGN',
    description: 'February Salary - TechCorp Ltd',
    sender: 'TechCorp Ltd',
    reference: 'TXN20240225006',
    status: 'success',
    date: '2024-02-25T10:00:00Z',
  },
  {
    id: 'txn_007',
    accountId: 'acc_001',
    type: 'debit',
    category: 'shopping',
    amount: 32500,
    currency: 'NGN',
    description: 'Jumia - Electronics Purchase',
    recipient: 'Jumia Nigeria',
    reference: 'TXN20240224007',
    status: 'success',
    date: '2024-02-24T13:45:00Z',
  },
  {
    id: 'txn_008',
    accountId: 'acc_001',
    type: 'debit',
    category: 'bills',
    amount: 15000,
    currency: 'NGN',
    description: 'DSTV Subscription Renewal',
    recipient: 'MultiChoice',
    reference: 'TXN20240223008',
    status: 'success',
    date: '2024-02-23T11:30:00Z',
  },
  {
    id: 'txn_009',
    accountId: 'acc_001',
    type: 'credit',
    category: 'refund',
    amount: 8500,
    currency: 'NGN',
    description: 'Refund - Cancelled Order',
    sender: 'Konga',
    reference: 'TXN20240222009',
    status: 'success',
    date: '2024-02-22T15:20:00Z',
  },
  {
    id: 'txn_010',
    accountId: 'acc_001',
    type: 'debit',
    category: 'transfer',
    amount: 50000,
    currency: 'NGN',
    description: 'Transfer to Emeka Nwosu',
    recipient: 'Emeka Nwosu',
    reference: 'TXN20240221010',
    status: 'pending',
    date: '2024-02-21T17:00:00Z',
  },
  {
    id: 'txn_011',
    accountId: 'acc_001',
    type: 'debit',
    category: 'airtime',
    amount: 1000,
    currency: 'NGN',
    description: 'Glo Airtime Purchase',
    recipient: '08055555555',
    reference: 'TXN20240220011',
    status: 'failed',
    date: '2024-02-20T09:10:00Z',
  },
  {
    id: 'txn_012',
    accountId: 'acc_001',
    type: 'debit',
    category: 'bills',
    amount: 45000,
    currency: 'NGN',
    description: 'Lagos Water Corporation',
    recipient: 'LWC',
    reference: 'TXN20240219012',
    status: 'success',
    date: '2024-02-19T14:25:00Z',
  },
];
export const mockSpendingByCategory = [
  {
    id: 'shopping',
    label: 'Shopping',
    amount: 10000,
  },
  {
    id: 'transfer',
    label: 'Transfer',
    amount: 45000,
  },
  {
    id: 'bills',
    label: 'Bills',
    amount: 5000,
  },
];
