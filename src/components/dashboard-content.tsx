'use client';

import { useState } from 'react';
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

export function DashboardContent() {
  // Sample data for the dashboard
  const [salesData] = useState({
    today: 2450,
    yesterday: 2100,
    thisWeek: 15800,
    lastWeek: 14200,
    thisMonth: 68500,
    lastMonth: 62000,
    percentChange: 10.5
  });

  const [recentOrders] = useState([
    { id: 'ORD-7291', customer: 'John Smith', date: '2025-05-15', amount: 129.99, status: 'Completed' },
    { id: 'ORD-7290', customer: 'Sarah Johnson', date: '2025-05-15', amount: 79.95, status: 'Processing' },
    { id: 'ORD-7289', customer: 'Michael Brown', date: '2025-05-14', amount: 249.50, status: 'Completed' },
    { id: 'ORD-7288', customer: 'Emily Davis', date: '2025-05-14', amount: 59.99, status: 'Shipped' },
    { id: 'ORD-7287', customer: 'Robert Wilson', date: '2025-05-13', amount: 199.00, status: 'Completed' },
  ]);

  const [topProducts] = useState([
    { name: 'Wireless Headphones', sales: 142, revenue: 14200 },
    { name: 'Smart Watch', sales: 98, revenue: 19600 },
    { name: 'Bluetooth Speaker', sales: 85, revenue: 8500 },
    { name: 'Laptop Stand', sales: 76, revenue: 3800 },
    { name: 'USB-C Hub', sales: 65, revenue: 3250 },
  ]);

  // Chart data
  const [timeRange, setTimeRange] = useState('monthly');
  
  const dailyData = [
    { name: 'Mon', value: 1200 },
    { name: 'Tue', value: 1400 },
    { name: 'Wed', value: 1100 },
    { name: 'Thu', value: 1700 },
    { name: 'Fri', value: 1600 },
    { name: 'Sat', value: 1000 },
    { name: 'Sun', value: 800 },
  ];
  
  const weeklyData = [
    { name: 'Week 1', value: 4200 },
    { name: 'Week 2', value: 5100 },
    { name: 'Week 3', value: 6300 },
    { name: 'Week 4', value: 5800 },
  ];
  
  const monthlyData = [
    { name: 'Jan', value: 12500 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 18200 },
    { name: 'Apr', value: 17800 },
    { name: 'May', value: 19500 },
    { name: 'Jun', value: 22000 },
    { name: 'Jul', value: 24500 },
    { name: 'Aug', value: 23800 },
    { name: 'Sep', value: 26000 },
    { name: 'Oct', value: 27500 },
    { name: 'Nov', value: 29000 },
    { name: 'Dec', value: 31200 },
  ];
  
  const chartData = timeRange === 'daily' 
    ? dailyData 
    : timeRange === 'weekly' 
      ? weeklyData 
      : monthlyData;

  // Status color mapping
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: May 15, 2025, 9:30 AM</span>
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Today's Sales</h2>
            <span className="text-green-500 text-xs font-medium">+{salesData.percentChange}%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">${salesData.today.toLocaleString()}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">vs ${salesData.yesterday.toLocaleString()} yesterday</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Weekly Sales</h2>
            <span className="text-green-500 text-xs font-medium">+{salesData.percentChange}%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">${salesData.thisWeek.toLocaleString()}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">vs ${salesData.lastWeek.toLocaleString()} last week</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Sales</h2>
            <span className="text-green-500 text-xs font-medium">+{salesData.percentChange}%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">${salesData.thisMonth.toLocaleString()}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">vs ${salesData.lastMonth.toLocaleString()} last month</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Users</h2>
            <span className="text-green-500 text-xs font-medium">+5.2%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">1,248</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">vs 1,186 last week</div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Sales Overview</h2>
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 text-xs rounded-md ${timeRange === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setTimeRange('daily')}
            >
              Daily
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded-md ${timeRange === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setTimeRange('weekly')}
            >
              Weekly
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded-md ${timeRange === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setTimeRange('monthly')}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="Revenue"
                stroke="#3b82f6"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">${order.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all orders</button>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Top Products</h2>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {topProducts.map((product, index) => (
                <li key={index} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{product.sales} units sold</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">${product.revenue.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all products</button>
          </div>
        </div>
      </div>
    </div>
  );
}
