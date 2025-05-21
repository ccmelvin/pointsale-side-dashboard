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
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { monthlySalesData, weeklySalesData, dailySalesData } from '@/lib/mock/sales-overview-data';

type TimeRange = 'daily' | 'weekly' | 'monthly';

export function SalesOverviewChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('monthly');
  
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
                stroke={chartData.color || "rgb(59, 130, 246)"}
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {timeRange === 'monthly' && 'Showing sales data for the current year'}
        {timeRange === 'weekly' && 'Showing sales data for the current month'}
        {timeRange === 'daily' && 'Showing sales data for the current week'}
      </CardFooter>
    </Card>
  );
}
