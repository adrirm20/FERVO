import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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

export default function EarningsChart() {
  const data = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Ganancias',
        data: [65, 78, 82, 75, 85, 92, 88],
        borderColor: '#00A082',
        backgroundColor: 'rgba(0, 160, 130, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
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
          label: (context: any) => `${context.parsed.y}€`
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
          callback: (value: number) => `${value}€`
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
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Evolución de Ganancias
      </h3>
      <div className="h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}