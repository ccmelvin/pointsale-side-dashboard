export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface SalesSummary {
  totalRevenue: number;
  totalSales: number;
  averageOrderValue: number;
  conversionRate: number;
}

export interface MonthlySales {
  month: string;
  amount: number;
}

export interface Product {
  id: number;
  name: string;
  sales: number;
  revenue: number;
}

export interface RegionData {
  region: string;
  percentage: number;
}

export interface TrafficSource {
  source: string;
  visits: number;
}

export interface Transaction {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  marketing: boolean;
}
