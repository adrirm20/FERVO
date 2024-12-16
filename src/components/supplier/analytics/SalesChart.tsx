import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartProps {
  timeRange: string;
}

export default function SalesChart({ timeRange }: SalesChartProps) {
  const getChartData = () => {
    switch (timeRange) {
      case 'week':
        return {
          labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
          values: [1200, 1900, 1500, 2100, 1800, 2300, 2100]
        };
      case 'month':
        return {
          labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
          values: [8500, 9200, 8900, 9800]
        };
      case 'year':
        return {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          values: [25000, 28000, 32000, 30000, 35000, 38000, 36000, 40000, 42000, 45000, 48000, 50000]
        };
      default:
        return { labels: [], values: [] };
    }
  };

  const { labels, values } = getChartData();

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Ventas',
        data: values,
        borderColor: '#00A082',
        backgroundColor: 'rgba(0, 160, 130, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y}€`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          padding: 8,
          color: '#666',
          callback: (value) => `${value}€`
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          padding: 8,
          color: '#666'
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: '#00A082'
      },
      line: {
        borderWidth: 2
      }
    }
  };

  return (
    <div className="w-full h-[300px]">
      <Line data={data} options={options} />
    </div>
  );
}