import React from 'react';
import { Package, Navigation, Star } from 'lucide-react';
import Card from '../ui/Card';

export default function DriverStats() {
  const stats = [
    {
      icon: Package,
      value: '156',
      label: 'Entregas'
    },
    {
      icon: Navigation,
      value: '45km',
      label: 'Distancia'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Valoración'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-primary/10 rounded-lg mb-2">
              <stat.icon className="text-primary" size={20} />
            </div>
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {stat.label}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}