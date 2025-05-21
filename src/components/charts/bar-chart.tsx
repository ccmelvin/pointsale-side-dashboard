'use client';

import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface BarChartProps {
  data: number[];
  labels: string[];
  title: string;
  className?: string;
  barColor?: string;
  hoverColor?: string;
}

export function BarChart({ 
  data, 
  labels, 
  title, 
  className,
  barColor = 'rgb(59, 130, 246)',
  hoverColor = 'rgb(37, 99, 235)'
}: BarChartProps) {
  // Format data for recharts
  const chartData = labels.map((label, index) => ({
    name: label,
    value: data[index]
  }));

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="value" 
                name={title} 
                fill={barColor} 
                activeBar={{ fill: hoverColor }}
              />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
