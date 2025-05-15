import { NextResponse } from 'next/server';

// Mock data for sales analytics
const MOCK_SALES_DATA = {
  monthlySales: [
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
  ],
  
  topProducts: [
    { id: 1, name: 'Product A', sales: 1245, revenue: 24900 },
    { id: 2, name: 'Product B', sales: 986, revenue: 19720 },
    { id: 3, name: 'Product C', sales: 864, revenue: 17280 },
    { id: 4, name: 'Product D', sales: 732, revenue: 14640 },
    { id: 5, name: 'Product E', sales: 610, revenue: 12200 },
  ],
  
  salesByRegion: [
    { region: 'North America', percentage: 35 },
    { region: 'Europe', percentage: 25 },
    { region: 'Asia', percentage: 20 },
    { region: 'South America', percentage: 12 },
    { region: 'Africa', percentage: 5 },
    { region: 'Oceania', percentage: 3 },
  ],
  
  recentTransactions: [
    { id: 'T-1001', customer: 'John Doe', date: '2023-05-10', amount: 125.99, status: 'completed' },
    { id: 'T-1002', customer: 'Jane Smith', date: '2023-05-09', amount: 89.95, status: 'completed' },
    { id: 'T-1003', customer: 'Robert Johnson', date: '2023-05-09', amount: 254.50, status: 'pending' },
    { id: 'T-1004', customer: 'Emily Davis', date: '2023-05-08', amount: 345.00, status: 'completed' },
    { id: 'T-1005', customer: 'Michael Brown', date: '2023-05-08', amount: 175.25, status: 'failed' },
    { id: 'T-1006', customer: 'Sarah Wilson', date: '2023-05-07', amount: 97.50, status: 'completed' },
    { id: 'T-1007', customer: 'David Taylor', date: '2023-05-07', amount: 220.00, status: 'completed' },
    { id: 'T-1008', customer: 'Lisa Anderson', date: '2023-05-06', amount: 149.99, status: 'pending' },
  ],
  
  summary: {
    totalRevenue: 253000,
    totalSales: 4520,
    averageOrderValue: 55.97,
    conversionRate: 3.2,
  },
};

export async function GET(request: Request) {
  // Get the URL to parse query parameters
  const { searchParams } = new URL(request.url);
  const dataType = searchParams.get('type');
  
  try {
    // Return specific data based on the type parameter
    switch (dataType) {
      case 'monthly':
        return NextResponse.json({
          success: true,
          data: MOCK_SALES_DATA.monthlySales,
        });
        
      case 'products':
        return NextResponse.json({
          success: true,
          data: MOCK_SALES_DATA.topProducts,
        });
        
      case 'regions':
        return NextResponse.json({
          success: true,
          data: MOCK_SALES_DATA.salesByRegion,
        });
        
      case 'transactions':
        return NextResponse.json({
          success: true,
          data: MOCK_SALES_DATA.recentTransactions,
        });
        
      case 'summary':
        return NextResponse.json({
          success: true,
          data: MOCK_SALES_DATA.summary,
        });
        
      default:
        // Return all data if no specific type is requested
        return NextResponse.json({
          success: true,
          data: MOCK_SALES_DATA,
        });
    }
  } catch (error) {
    console.error('Error fetching sales data:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch sales data' },
      { status: 500 }
    );
  }
}
