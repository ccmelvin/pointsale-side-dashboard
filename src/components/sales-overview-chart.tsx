'use client';

import { useState } from 'react';
import { LineChart } from '@/components/charts/line-chart';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { monthlySalesData, weeklySalesData, dailySalesData } from '@/lib/mock-data';

type TimeRange = 'daily' | 'weekly' | 'monthly';

export function SalesOverviewChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('monthly');

  // Select the appropriate data based on the selected time range
  const chartData = {
    monthly: monthlySalesData,
    weekly: weeklySalesData,
    daily: dailySalesData,
  }[timeRange];

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
          <LineChart 
            data={chartData.data}
            labels={chartData.labels}
            title={chartData.title}
            borderColor="rgb(59, 130, 246)"
            backgroundColor="rgba(59, 130, 246, 0.1)"
          />
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
