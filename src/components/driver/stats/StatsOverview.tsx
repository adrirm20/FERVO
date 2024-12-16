import React from 'react';
import { Package, Star, Navigation, Clock } from 'lucide-react';
import Card from '../../ui/Card';

export default function StatsOverview() {
  const stats = [
    {
      icon: Package,
      value: '156',
      label: 'Entregas',
      trend: '+12',
      isPositive: true
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Valoración',
      trend: '+0.2',
      isPositive: true
    },
    {
      icon: Navigation,
      value: '1,234km',
      label: 'Distancia',
      trend: '+156km',
      isPositive: true
    },
    {
      icon: Clock,
      value: '98%',
      label: 'Puntualidad',
      trend: '+2%',
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