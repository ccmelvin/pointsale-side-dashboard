// Mock data for dashboard charts and tables

// Sales Overview - Monthly data for the current year
export const monthlySalesData = {
  data: [12500, 15000, 18200, 17800, 19500, 22000, 24500, 23800, 26000, 27500, 29000, 31200],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  title: 'Monthly Sales',
};

// Sales Overview - Weekly data for the current month
export const weeklySalesData = {
  data: [4200, 5100, 6300, 5800],
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  title: 'Weekly Sales',
};

// Sales Overview - Daily data for the current week
export const dailySalesData = {
  data: [950, 1120, 980, 1340, 1200, 890, 760],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  title: 'Daily Sales',
};

// Sales by Category - For bar chart
export const salesByCategory = {
  data: [18500, 12700, 9800, 14600, 7300],
  labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports', 'Books'],
  title: 'Sales by Category',
};

// Sales by Region - For bar chart
export const salesByRegion = {
  data: [32500, 28700, 21400, 19600, 15300],
  labels: ['North America', 'Europe', 'Asia', 'South America', 'Australia'],
  title: 'Sales by Region',
};

// Year-over-Year Comparison - For line chart with multiple datasets
export const yearOverYearSales = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '2024',
      data: [12500, 15000, 18200, 17800, 19500, 22000, 24500, 23800, 26000, 27500, 29000, 31200],
      borderColor: 'rgb(59, 130, 246)', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
    },
    {
      label: '2023',
      data: [10200, 12800, 15500, 14900, 17200, 19800, 21300, 20700, 22800, 24100, 25600, 27800],
      borderColor: 'rgb(16, 185, 129)', // Green
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
    }
  ],
  title: 'Year-over-Year Sales Comparison',
};

// Top Selling Products - For data tables
export const topSellingProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', sales: 1245, revenue: '$124,500' },
  { id: 2, name: 'Smart Watch', category: 'Electronics', sales: 982, revenue: '$147,300' },
  { id: 3, name: 'Running Shoes', category: 'Sports', sales: 879, revenue: '$87,900' },
  { id: 4, name: 'Coffee Maker', category: 'Home & Kitchen', sales: 734, revenue: '$73,400' },
  { id: 5, name: 'Winter Jacket', category: 'Clothing', sales: 692, revenue: '$89,960' },
];

// Recent Orders - For data tables
export const recentOrders = [
  { id: 'ORD-7291', customer: 'John Smith', date: '2025-05-16', status: 'Completed', amount: '$230.50' },
  { id: 'ORD-7290', customer: 'Sarah Johnson', date: '2025-05-16', status: 'Processing', amount: '$175.00' },
  { id: 'ORD-7289', customer: 'Michael Brown', date: '2025-05-15', status: 'Completed', amount: '$98.20' },
  { id: 'ORD-7288', customer: 'Emily Davis', date: '2025-05-15', status: 'Shipped', amount: '$320.75' },
  { id: 'ORD-7287', customer: 'Robert Wilson', date: '2025-05-14', status: 'Completed', amount: '$156.30' },
];

// Sales Summary - For dashboard cards/metrics
export const salesSummary = {
  totalSales: '$245,678',
  salesGrowth: '12.5%',
  averageOrderValue: '$125.40',
  conversionRate: '3.2%',
  totalOrders: 1958,
  returningCustomers: '42%',
};
