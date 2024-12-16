import React from 'react';
import { Database, HardDrive, Activity, Clock } from 'lucide-react';
import Card from '../../ui/Card';

export default function DatabaseStats() {
  const stats = [
    {
      icon: Database,
      value: '45.6 GB',
      label: 'Tamaño Total',
      trend: '+2.3 GB',
      isPositive: false
    },
    {
      icon: HardDrive,
      value: '78%',
      label: 'Espacio Disponible',
      trend: '-5%',
      isPositive: false
    },
    {
      icon: Activity,
      value: '1,234',
      label: 'Conexiones Activas',
      trend: '+12',
      isPositive: true
    },
    {
      icon: Clock,
      value: '45ms',
      label: 'Tiempo de Respuesta',
      trend: '-3ms',
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
              <div className={`flex items-center mt-2 ${
                stat.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                <span className="text-sm font-medium">{stat.trend}</span>
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="text-primary" size={20} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}