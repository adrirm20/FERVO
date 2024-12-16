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

export default function BusinessMetrics() {
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ingresos',
        data: [12500, 15600, 18900, 22400, 25800, 28900],
        borderColor: '#00A082',
        backgroundColor: 'rgba(0, 160, 130, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Pedidos',
        data: [450, 520, 580, 620, 680, 720],
        borderColor: '#FFB547',
        backgroundColor: 'rgba(255, 181, 71, 0.1)',
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
        position: 'bottom' as const
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            if (context.dataset.label === 'Ingresos') {
              return `${context.parsed.y}€`;
            }
            return context.parsed.y;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => {
            return `${value}€`;
          }
        }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Métricas de Negocio
      </h3>
      <div className="h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}