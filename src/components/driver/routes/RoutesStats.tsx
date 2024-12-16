import React from 'react';
import { Navigation, Clock, MapPin, TrendingUp } from 'lucide-react';
import Card from '../../ui/Card';

export default function RoutesStats() {
  const stats = [
    {
      icon: Navigation,
      value: '1,234 km',
      label: 'Distancia Total',
      trend: '+156 km',
      isPositive: true
    },
    {
      icon: Clock,
      value: '25 min',
      label: 'Tiempo Medio',
      trend: '-3 min',
      isPositive: true
    },
    {
      icon: MapPin,
      value: '156',
      label: 'Entregas',
      trend: '+12',
      isPositive: true
    },
    {
      icon: TrendingUp,
      value: '92%',
      label: 'Eficiencia',
      trend: '+5%',
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