import React from 'react';
import { TrendingUp, Users, ShoppingBag, Star } from 'lucide-react';
import Card from '../../ui/Card';

export default function MetricsGrid() {
  const metrics = [
    {
      icon: TrendingUp,
      label: 'Ventas Totales',
      value: '12.345€',
      trend: '+15%',
      isPositive: true
    },
    {
      icon: Users,
      label: 'Nuevos Clientes',
      value: '45',
      trend: '+12%',
      isPositive: true
    },
    {
      icon: ShoppingBag,
      label: 'Pedidos Recurrentes',
      value: '78%',
      trend: '+5%',
      isPositive: true
    },
    {
      icon: Star,
      label: 'Satisfacción',
      value: '4.8',
      trend: '-0.2',
      isPositive: false
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                {metric.value}
              </p>
              <div className={`flex items-center mt-2 ${
                metric.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                <span className="text-sm font-medium">{metric.trend}</span>
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg">
              <metric.icon className="text-primary" size={20} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}