import React from 'react';
import { Clock, MapPin, Star } from 'lucide-react';

export default function DeliveryMetrics() {
  const metrics = [
    {
      title: 'Tiempo de Entrega',
      value: '25 min',
      trend: '-3 min',
      isPositive: true,
      icon: Clock
    },
    {
      title: 'Distancia Media',
      value: '8.5 km',
      trend: '-0.5 km',
      isPositive: true,
      icon: MapPin
    },
    {
      title: 'Satisfacción',
      value: '4.9',
      trend: '+0.2',
      isPositive: true,
      icon: Star
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Métricas de Entrega
      </h3>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <metric.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{metric.title}</p>
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