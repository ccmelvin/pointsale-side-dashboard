'use client';

import { useState, useEffect } from 'react';
import { LineChart } from '@/components/charts/line-chart';
import { BarChart } from '@/components/charts/bar-chart';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { DataTable } from '@/components/tables/data-table';
import { formatCurrency } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  sales: number;
  revenue: number;
}

interface RegionData {
  region: string;
  percentage: number;
}

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [regionData, setRegionData] = useState<RegionData[]>([]);
  const [trafficSources, setTrafficSources] = useState<{ source: string; visits: number }[]>([]);

  useEffect(() => {
    // Simulate API calls to fetch analytics data
    const fetchAnalyticsData = async () => {
      setIsLoading(true);
      try {
        // In a real app, these would be actual API calls
        // For now, we'll use mock data
        
        // Fetch top products
        const productsData = [
          { id: 1, name: 'Product A', sales: 1245, revenue: 24900 },
          { id: 2, name: 'Product B', sales: 986, revenue: 19720 },
          { id: 3, name: 'Product C', sales: 864, revenue: 17280 },
          { id: 4, name: 'Product D', sales: 732, revenue: 14640 },
          { id: 5, name: 'Product E', sales: 610, revenue: 12200 },
        ];
        
        // Fetch region data
        const regionsData = [
          { region: 'North America', percentage: 35 },
          { region: 'Europe', percentage: 25 },
          { region: 'Asia', percentage: 20 },
          { region: 'South America', percentage: 12 },
          { region: 'Africa', percentage: 5 },
          { region: 'Oceania', percentage: 3 },
        ];
        
        // Fetch traffic sources
        const trafficData = [
          { source: 'Direct', visits: 5240 },
          { source: 'Organic Search', visits: 4320 },
          { source: 'Referral', visits: 2180 },
          { source: 'Social Media', visits: 1750 },
          { source: 'Email', visits: 950 },
          { source: 'Paid Search', visits: 820 },
        ];
        
        setTopProducts(productsData);
        setRegionData(regionsData);
        setTrafficSources(trafficData);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  const productColumns = [
    { key: 'name', title: 'Product' },
    { 
      key: 'sales', 
      title: 'Sales',
      render: (value: number) => value.toLocaleString()
    },
    { 
      key: 'revenue', 
      title: 'Revenue',
      render: (value: number) => formatCurrency(value)
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
      <h1 className="text-2xl font-bold">Analytics</h1>
      
      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
          <CardDescription>Best performing products by sales volume</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={topProducts}
            columns={productColumns}
            emptyMessage="No product data available"
          />
        </CardContent>
      </Card>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          title="Sales by Region"
          data={regionData.map(item => item.percentage)}
          labels={regionData.map(item => item.region)}
          barColor="rgb(99, 102, 241)"
          hoverColor="rgb(79, 70, 229)"
        />
        
        <LineChart
          title="Traffic Sources"
          data={trafficSources.map(item => item.visits)}
          labels={trafficSources.map(item => item.source)}
          borderColor="rgb(16, 185, 129)"
          backgroundColor="rgba(16, 185, 129, 0.1)"
        />
      </div>
      
      {/* User Behavior */}
      <Card>
        <CardHeader>
          <CardTitle>User Behavior</CardTitle>
          <CardDescription>Key metrics about user engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Session Duration</h3>
              <p className="text-2xl font-bold mt-2">3m 42s</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pages per Session</h3>
              <p className="text-2xl font-bold mt-2">4.3</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Bounce Rate</h3>
              <p className="text-2xl font-bold mt-2">32.8%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
