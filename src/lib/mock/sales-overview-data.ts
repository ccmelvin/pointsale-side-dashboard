// Monthly sales data for the current year
export const monthlySalesData = {
  data: [12500, 15000, 18200, 17800, 19500, 22000, 24500, 23800, 26000, 27500, 29000, 31200],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  title: 'Monthly Sales',
  color: '#3b82f6', // blue-500
};

// Weekly sales data for the current month
export const weeklySalesData = {
  data: [4200, 5100, 6300, 5800],
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  title: 'Weekly Sales',
  color: '#10b981', // emerald-500
};

// Daily sales data for the current week
export const dailySalesData = {
  data: [950, 1120, 980, 1340, 1200, 890, 760],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  title: 'Daily Sales',
  color: '#f59e0b', // amber-500
};

// Sales by category
export const salesByCategory = {
  data: [18500, 12700, 9800, 14600, 7300],
  labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports', 'Books'],
  title: 'Sales by Category',
  colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
};

// Sales by region
export const salesByRegion = {
  data: [32500, 28700, 21400, 19600, 15300],
  labels: ['North America', 'Europe', 'Asia', 'South America', 'Australia'],
  title: 'Sales by Region',
  colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
};

// Year-over-year comparison
export const yearOverYearSales = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      name: '2024',
      data: [12500, 15000, 18200, 17800, 19500, 22000, 24500, 23800, 26000, 27500, 29000, 31200],
      color: '#3b82f6', // blue-500
    },
    {
      name: '2023',
      data: [10200, 12800, 15500, 14900, 17200, 19800, 21300, 20700, 22800, 24100, 25600, 27800],
      color: '#94a3b8', // slate-400
    }
  ],
  title: 'Year-over-Year Sales Comparison',
};

// Complete sales overview data object
export const salesOverviewData = {
  monthlySalesData,
  weeklySalesData,
  dailySalesData,
  salesByCategory,
  salesByRegion,
  yearOverYearSales,
};

export default salesOverviewData;
