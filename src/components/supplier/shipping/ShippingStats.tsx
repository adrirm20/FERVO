import React from 'react';
import { Truck, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Card from '../../ui/Card';

export default function ShippingStats() {
  const stats = [
    {
      icon: Truck,
      value: '45',
      label: 'En Tránsito',
      trend: '+8',
      isPositive: true
    },
    {
      icon: Clock,
      value: '12',
      label: 'Pendientes',
      trend: '-3',
      isPositive: true
    },
    {
      icon: CheckCircle,
      value: '156',
      label: 'Entregados',
      trend: '+24',
      isPositive: true
    },
    {
      icon: AlertTriangle,
      value: '2',
      label: 'Incidencias',
      trend: '+1',
      isPositive: false
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