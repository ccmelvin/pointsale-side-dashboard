'use client';

import { useState, useEffect } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  dailyVisitorData, 
  weeklyVisitorData, 
  monthlyVisitorData 
} from '@/lib/mock/visitor-data';

export function AnalyticsContent() {
  // Sample data for analytics
  const [analyticsData] = useState({
    totalVisitors: 24689,
    uniqueVisitors: 18452,
    pageViews: 87321,
    bounceRate: 32.5,
    avgSessionDuration: '3m 42s',
    conversionRate: 4.8
  });

  // Visitor chart state
  const [visitorTimeRange, setVisitorTimeRange] = useState('daily');
  const [visitorChartData, setVisitorChartData] = useState(dailyVisitorData);

  // Update chart data when time range changes
  useEffect(() => {
    if (visitorTimeRange === 'daily') {
      setVisitorChartData(dailyVisitorData);
    } else if (visitorTimeRange === 'weekly') {
      setVisitorChartData(weeklyVisitorData);
    } else {
      setVisitorChartData(monthlyVisitorData);
    }
  }, [visitorTimeRange]);

  const [trafficSources] = useState([
    { source: 'Direct', visitors: 8642, percentage: 35 },
    { source: 'Organic Search', visitors: 6172, percentage: 25 },
    { source: 'Social Media', visitors: 4938, percentage: 20 },
    { source: 'Referral', visitors: 2469, percentage: 10 },
    { source: 'Email', visitors: 1481, percentage: 6 },
    { source: 'Paid Search', visitors: 987, percentage: 4 },
  ]);

  const [deviceData] = useState([
    { device: 'Mobile', users: 14813, percentage: 60 },
    { device: 'Desktop', users: 7407, percentage: 30 },
    { device: 'Tablet', users: 2469, percentage: 10 },
  ]);

  const [topPages] = useState([
    { page: '/products/wireless-headphones', views: 12453, avgTime: '2m 37s' },
    { page: '/products/smart-watch', views: 8976, avgTime: '3m 14s' },
    { page: '/checkout', views: 7654, avgTime: '4m 22s' },
    { page: '/products/bluetooth-speaker', views: 6543, avgTime: '1m 58s' },
    { page: '/blog/top-tech-trends-2025', views: 5432, avgTime: '5m 47s' },
  ]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Analytics</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Visitors</h2>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{analyticsData.totalVisitors.toLocaleString()}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{analyticsData.uniqueVisitors.toLocaleString()} unique visitors</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Page Views</h2>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{analyticsData.pageViews.toLocaleString()}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Avg. {(analyticsData.pageViews / analyticsData.uniqueVisitors).toFixed(1)} pages per session</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Bounce Rate</h2>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{analyticsData.bounceRate}%</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Avg. session: {analyticsData.avgSessionDuration}</div>
        </div>
      </div>

      {/* Visitors Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Visitor Trends</h2>
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 text-xs rounded-md ${visitorTimeRange === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setVisitorTimeRange('daily')}
            >
              Daily
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded-md ${visitorTimeRange === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setVisitorTimeRange('weekly')}
            >
              Weekly
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded-md ${visitorTimeRange === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setVisitorTimeRange('monthly')}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={visitorChartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={visitorTimeRange === 'daily' ? 'date' : visitorTimeRange === 'weekly' ? 'week' : 'month'} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="visitors" 
                name="Total Visitors" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.2} 
              />
              <Area 
                type="monotone" 
                dataKey="newUsers" 
                name="New Users" 
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.2} 
              />
              <Area 
                type="monotone" 
                dataKey="returningUsers" 
                name="Returning Users" 
                stroke="#f59e0b" 
                fill="#f59e0b" 
                fillOpacity={0.2} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Traffic Sources</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {trafficSources.map((source, index) => (
                <li key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{source.source}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Device Breakdown</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {deviceData.map((device, index) => (
                <li key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{device.device}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Top Pages</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Page</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Views</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Avg. Time on Page</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {topPages.map((page, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">{page.page}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{page.views.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{page.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all pages</button>
        </div>
      </div>
    </div>
  );
}
