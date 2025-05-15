'use client';

import { useState, useEffect } from 'react';
import { LineChart } from '@/components/charts/line-chart';
import { BarChart } from '@/components/charts/bar-chart';
import { DataTable } from '@/components/tables/data-table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

interface SalesSummary {
  totalRevenue: number;
  totalSales: number;
  averageOrderValue: number;
  conversionRate: number;
}

interface MonthlySales {
  month: string;
  amount: number;
}

interface Transaction {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState<SalesSummary | null>(null);
  const [monthlySales, setMonthlySales] = useState<MonthlySales[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Simulate API calls to fetch dashboard data
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        // In a real app, these would be actual API calls
        // For now, we'll use mock data
        
        // Fetch summary data
        const summaryData = {
          totalRevenue: 253000,
          totalSales: 4520,
          averageOrderValue: 55.97,
          conversionRate: 3.2,
        };
        
        // Fetch monthly sales data
        const salesData = [
          { month: 'Jan', amount: 12500 },
          { month: 'Feb', amount: 15000 },
          { month: 'Mar', amount: 18000 },
          { month: 'Apr', amount: 16500 },
          { month: 'May', amount: 21000 },
          { month: 'Jun', amount: 19500 },
          { month: 'Jul', amount: 22500 },
          { month: 'Aug', amount: 24000 },
          { month: 'Sep', amount: 21500 },
          { month: 'Oct', amount: 25000 },
          { month: 'Nov', amount: 27500 },
          { month: 'Dec', amount: 30000 },
        ];
        
        // Fetch recent transactions
        const transactionsData = [
          { id: 'T-1001', customer: 'John Doe', date: '2023-05-10', amount: 125.99, status: 'completed' as const },
          { id: 'T-1002', customer: 'Jane Smith', date: '2023-05-09', amount: 89.95, status: 'completed' as const },
          { id: 'T-1003', customer: 'Robert Johnson', date: '2023-05-09', amount: 254.50, status: 'pending' as const },
          { id: 'T-1004', customer: 'Emily Davis', date: '2023-05-08', amount: 345.00, status: 'completed' as const },
          { id: 'T-1005', customer: 'Michael Brown', date: '2023-05-08', amount: 175.25, status: 'failed' as const },
        ];
        
        setSummary(summaryData);
        setMonthlySales(salesData);
        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const transactionColumns = [
    { key: 'id', title: 'ID' },
    { key: 'customer', title: 'Customer' },
    { key: 'date', title: 'Date' },
    { 
      key: 'amount', 
      title: 'Amount',
      render: (value: number) => formatCurrency(value)
    },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: string) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'completed' ? 'bg-green-100 text-green-800' :
          value === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary?.totalRevenue || 0)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary?.totalSales.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg. Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary?.averageOrderValue || 0)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary?.conversionRate}%</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Monthly Revenue"
          data={monthlySales.map(item => item.amount)}
          labels={monthlySales.map(item => item.month)}
        />
        
        <BarChart
          title="Monthly Sales"
          data={monthlySales.map(item => item.amount / 50)} // Scaled down for visualization
          labels={monthlySales.map(item => item.month)}
        />
      </div>
      
      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            data={transactions}
            columns={transactionColumns}
            emptyMessage="No recent transactions"
          />
        </CardContent>
      </Card>
    </div>
  );
}
