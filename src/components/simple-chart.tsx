'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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

// Simple hardcoded data for testing
const data = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 2000 },
  { name: 'Mar', value: 1500 },
  { name: 'Apr', value: 3000 },
  { name: 'May', value: 2500 },
  { name: 'Jun', value: 4000 }
];

export function SimpleChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Simple Test Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
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
                name="Sales"
                stroke="rgb(59, 130, 246)"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
