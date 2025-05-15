'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
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
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Create new chart
    const ctx = chartRef.current.getContext('2d');
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: title,
              data,
              borderColor,
              backgroundColor,
              tension: 0.3,
              fill: true,
              pointBackgroundColor: borderColor,
              pointBorderColor: '#fff',
              pointBorderWidth: 1,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderWidth: 1,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
            },
          },
        },
      });
    }
    
    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels, title, borderColor, backgroundColor]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <canvas ref={chartRef}></canvas>
        </div>
      </CardContent>
    </Card>
  );
}
