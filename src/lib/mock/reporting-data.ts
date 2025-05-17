// Helper function to generate dates for the past n days
const generateDates = (days: number) => {
  const dates = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    dates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
  }
  
  return dates;
};

// Generate random number within a range
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate cumulative values with some randomness
const generateCumulativeData = (days: number, startValue: number, minIncrease: number, maxIncrease: number) => {
  const values = [startValue];
  
  for (let i = 1; i <= days; i++) {
    const increase = randomInRange(minIncrease, maxIncrease);
    values.push(values[i-1] + increase);
  }
  
  return values;
};

// Sales data for the past 30 days
export const dailySalesData = {
  labels: generateDates(30),
  datasets: [
    {
      name: 'Revenue',
      data: generateCumulativeData(30, 5000, 100, 1000).map(val => val / 100),
      color: '#3b82f6', // blue-500
    },
    {
      name: 'Orders',
      data: generateCumulativeData(30, 50, 2, 15),
      color: '#10b981', // emerald-500
    }
  ]
};

// Monthly sales data for the past 12 months
export const monthlySalesData = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  datasets: [
    {
      name: 'This Year',
      data: [42, 58, 65, 74, 83, 98, 87, 92, 97, 104, 112, 125].map(val => val * 1000),
      color: '#3b82f6', // blue-500
    },
    {
      name: 'Last Year',
      data: [38, 44, 55, 63, 77, 85, 80, 87, 92, 95, 98, 110].map(val => val * 1000),
      color: '#94a3b8', // slate-400
    }
  ]
};

// Top selling products
export const topProducts = [
  { id: 1, name: 'Premium Headphones', sales: 1245, revenue: 124500, growth: 23.5 },
  { id: 2, name: 'Wireless Keyboard', sales: 986, revenue: 78880, growth: 18.2 },
  { id: 3, name: 'Smart Watch', sales: 879, revenue: 131850, growth: 45.3 },
  { id: 4, name: 'Bluetooth Speaker', sales: 765, revenue: 53550, growth: 12.8 },
  { id: 5, name: 'USB-C Hub', sales: 683, revenue: 34150, growth: -2.4 },
  { id: 6, name: 'Laptop Stand', sales: 642, revenue: 32100, growth: 8.7 },
  { id: 7, name: 'Wireless Mouse', sales: 594, revenue: 29700, growth: 5.3 },
  { id: 8, name: 'Monitor Arm', sales: 539, revenue: 75460, growth: 16.9 },
  { id: 9, name: 'External SSD', sales: 486, revenue: 97200, growth: 22.1 },
  { id: 10, name: 'Webcam HD', sales: 432, revenue: 38880, growth: -4.2 },
];

// Regional sales distribution
export const regionalSales = [
  { region: 'North America', sales: 45680, percentage: 38.5 },
  { region: 'Europe', sales: 32470, percentage: 27.3 },
  { region: 'Asia Pacific', sales: 21560, percentage: 18.2 },
  { region: 'Latin America', sales: 12340, percentage: 10.4 },
  { region: 'Middle East & Africa', sales: 6750, percentage: 5.6 },
];

// Sales channels performance
export const channelPerformance = [
  { channel: 'Direct Website', orders: 3245, revenue: 356950, conversionRate: 3.2 },
  { channel: 'Mobile App', orders: 2876, revenue: 316360, conversionRate: 4.5 },
  { channel: 'Marketplace', orders: 1987, revenue: 218570, conversionRate: 2.8 },
  { channel: 'Social Media', orders: 1245, revenue: 136950, conversionRate: 2.1 },
  { channel: 'Referral', orders: 876, revenue: 96360, conversionRate: 5.7 },
];

// Key performance indicators
export const kpiSummary = {
  totalRevenue: 1124190,
  totalOrders: 10229,
  averageOrderValue: 109.9,
  conversionRate: 3.6,
  customerRetentionRate: 68.4,
  customerAcquisitionCost: 28.5,
  returnRate: 4.2,
};

// Customer segments
export const customerSegments = [
  { segment: 'New Customers', count: 3567, revenue: 285360, percentage: 25.4 },
  { segment: 'Returning Customers', count: 5876, revenue: 705430, percentage: 62.8 },
  { segment: 'VIP Customers', count: 786, revenue: 133400, percentage: 11.8 },
];

// Inventory status
export const inventoryStatus = [
  { status: 'In Stock', productCount: 387, percentage: 77.4 },
  { status: 'Low Stock', productCount: 86, percentage: 17.2 },
  { status: 'Out of Stock', productCount: 27, percentage: 5.4 },
];

// Complete reporting data object
export const reportingData = {
  dailySalesData,
  monthlySalesData,
  topProducts,
  regionalSales,
  channelPerformance,
  kpiSummary,
  customerSegments,
  inventoryStatus,
};

export default reportingData;
