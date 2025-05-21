'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { salesSummary, topSellingProducts, recentOrders } from '@/lib/mock-data';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Hardcoded data for the chart
const monthlySalesData = {
  data: [12500, 15000, 18200, 17800, 19500, 22000, 24500, 23800, 26000, 27500, 29000, 31200],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  title: 'Monthly Sales',
};

const weeklySalesData = {
  data: [4200, 5100, 6300, 5800],
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  title: 'Weekly Sales',
};

const dailySalesData = {
  data: [950, 1120, 980, 1340, 1200, 890, 760],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  title: 'Daily Sales',
};

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('monthly');
  
  // Select the appropriate data based on the selected time range
  const chartData = timeRange === 'monthly' 
    ? monthlySalesData 
    : timeRange === 'weekly' 
      ? weeklySalesData 
      : dailySalesData;
  
  // Format data for recharts
  const formattedData = chartData.labels.map((label, index) => ({
    name: label,
    value: chartData.data[index]
  }));

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesSummary.totalSales}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ {salesSummary.salesGrowth}</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesSummary.averageOrderValue}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 2.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesSummary.totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 8.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesSummary.conversionRate}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 0.5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Sales Overview Chart */}
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Sales Overview</CardTitle>
          <div className="flex space-x-2">
            <Button 
              variant={timeRange === 'daily' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTimeRange('daily')}
            >
              Daily
            </Button>
            <Button 
              variant={timeRange === 'weekly' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTimeRange('weekly')}
            >
              Weekly
            </Button>
            <Button 
              variant={timeRange === 'monthly' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTimeRange('monthly')}
            >
              Monthly
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={formattedData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name={chartData.title}
                  stroke="rgb(59, 130, 246)"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Additional Charts and Tables */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Selling Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-sm">
                    <th className="pb-2 font-medium">Product</th>
                    <th className="pb-2 font-medium">Category</th>
                    <th className="pb-2 font-medium text-right">Sales</th>
                    <th className="pb-2 font-medium text-right">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topSellingProducts.map((product) => (
                    <tr key={product.id} className="border-b last:border-0">
                      <td className="py-2">{product.name}</td>
                      <td className="py-2">{product.category}</td>
                      <td className="py-2 text-right">{product.sales}</td>
                      <td className="py-2 text-right">{product.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-sm">
                    <th className="pb-2 font-medium">Order ID</th>
                    <th className="pb-2 font-medium">Customer</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b last:border-0">
                      <td className="py-2">{order.id}</td>
                      <td className="py-2">{order.customer}</td>
                      <td className="py-2">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-2 text-right">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
