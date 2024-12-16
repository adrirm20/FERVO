import React from 'react';
import { Users, TrendingUp, Star, ShoppingBag } from 'lucide-react';
import Card from '../../ui/Card';

export default function CustomerStats() {
  const stats = [
    {
      icon: Users,
      value: '156',
      label: 'Total Clientes',
      trend: '+15',
      isPositive: true
    },
    {
      icon: TrendingUp,
      value: '78%',
      label: 'Retención',
      trend: '+5%',
      isPositive: true
    },
    {
      icon: Star,
      value: '4.8',
      label: 'Satisfacción',
      trend: '+0.2',
      isPositive: true
    },
    {
      icon: ShoppingBag,
      value: '45%',
      label: 'Recurrentes',
      trend: '+8%',
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