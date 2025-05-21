// Generate dates for the past n days
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

// Generate random sales data
const generateSalesData = (days: number) => {
  return Array.from({ length: days + 1 }, () => Math.floor(Math.random() * 10000) + 5000);
};

// Generate random orders data (smaller numbers than sales)
const generateOrdersData = (days: number) => {
  return Array.from({ length: days + 1 }, () => Math.floor(Math.random() * 100) + 50);
};

// Sales data for the past 30 days
export const dailySalesData = {
  labels: generateDates(30),
  sales: generateSalesData(30),
  orders: generateOrdersData(30)
};

export default dailySalesData;
