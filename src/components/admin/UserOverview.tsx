import React from 'react';
import { Users, ArrowUpRight } from 'lucide-react';
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

export default function UserOverview() {
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Agricultores',
        data: [650, 720, 780, 840, 900, 950],
        borderColor: '#00A082',
        backgroundColor: 'rgba(0, 160, 130, 0.1)',
        tension: 0.4
      },
      {
        label: 'Proveedores',
        data: [180, 210, 240, 260, 280, 290],
        borderColor: '#FFB547',
        backgroundColor: 'rgba(255, 181, 71, 0.1)',
        tension: 0.4
      },
      {
        label: 'Repartidores',
        data: [45, 55, 65, 75, 82, 89],
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Users className="text-primary" size={24} />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Evolución de Usuarios
          </h3>
        </div>
        <button className="text-primary hover:text-primary-dark">
          <ArrowUpRight size={20} />
        </button>
      </div>
      <div className="h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}