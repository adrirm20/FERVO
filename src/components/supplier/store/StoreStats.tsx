import React from 'react';
import { Package, TrendingUp, AlertTriangle, Tag } from 'lucide-react';
import Card from '../../ui/Card';

export default function StoreStats() {
  const stats = [
    {
      icon: Package,
      value: '45',
      label: 'Productos',
      trend: '+3',
      isPositive: true
    },
    {
      icon: TrendingUp,
      value: '1.234€',
      label: 'Ventas Hoy',
      trend: '+15%',
      isPositive: true
    },
    {
      icon: AlertTriangle,
      value: '5',
      label: 'Sin Stock',
      trend: '-2',
      isPositive: true
    },
    {
      icon: Tag,
      value: '12',
      label: 'En Oferta',
      trend: '+4',
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