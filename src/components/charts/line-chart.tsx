'use client';

import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface LineChartProps {
  data: number[];
  labels: string[];
  title: string;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export function LineChart({ 
  data, 
  labels, 
  title, 
  className,
  borderColor = 'rgb(59, 130, 246)',
  backgroundColor = 'rgba(59, 130, 246, 0.1)'
}: LineChartProps) {
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
            <RechartsLineChart
              data={chartData}
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
                name={title}
                stroke={borderColor}
                fill={backgroundColor}
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
