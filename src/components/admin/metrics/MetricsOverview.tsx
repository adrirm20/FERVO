import React from 'react';
import { TrendingUp, Users, Package, Clock } from 'lucide-react';
import Card from '../../ui/Card';

export default function MetricsOverview() {
  const stats = [
    {
      icon: TrendingUp,
      value: '234.5k€',
      label: 'Ingresos Totales',
      trend: '+12%',
      isPositive: true
    },
    {
      icon: Users,
      value: '1,234',
      label: 'Usuarios Activos',
      trend: '+45',
      isPositive: true
    },
    {
      icon: Package,
      value: '45,678',
      label: 'Pedidos Completados',
      trend: '+15%',
      isPositive: true
    },
    {
      icon: Clock,
      value: '99.9%',
      label: 'Tiempo Activo',
      trend: '+0.1%',
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