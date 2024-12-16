import React from 'react';
import { Users, ShoppingBag, Star } from 'lucide-react';

export default function CustomerMetrics() {
  const metrics = [
    {
      icon: Users,
      label: 'Nuevos Clientes',
      value: '12',
      trend: '+15%',
      isPositive: true
    },
    {
      icon: ShoppingBag,
      label: 'Pedidos Recurrentes',
      value: '45%',
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
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Métricas de Clientes
      </h2>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <metric.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">{metric.value}</p>
                </div>
              </div>
              <span className={`text-sm font-medium ${
                metric.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}