import React from 'react';
import { Activity, Server, Database, Globe } from 'lucide-react';

export default function PerformanceMetrics() {
  const metrics = [
    {
      icon: Activity,
      name: 'Tiempo de Respuesta API',
      value: '45ms',
      trend: '-3ms',
      isPositive: true,
      chart: [65, 58, 45, 42, 43, 45, 41]
    },
    {
      icon: Server,
      name: 'Uso de CPU',
      value: '45%',
      trend: '+2%',
      isPositive: false,
      chart: [35, 42, 45, 42, 38, 41, 45]
    },
    {
      icon: Database,
      name: 'Tiempo de Consulta DB',
      value: '12ms',
      trend: '-1ms',
      isPositive: true,
      chart: [15, 13, 12, 14, 11, 12, 12]
    },
    {
      icon: Globe,
      name: 'Ancho de Banda',
      value: '45 MB/s',
      trend: '+5 MB/s',
      isPositive: true,
      chart: [35, 38, 42, 45, 43, 41, 45]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Métricas de Rendimiento
      </h3>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <metric.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {metric.name}
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">
                      {metric.value}
                    </span>
                    <span className={`ml-2 text-sm ${
                      metric.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-end space-x-1 h-12">
                {metric.chart.map((value, index) => (
                  <div
                    key={index}
                    className="w-2 bg-primary rounded-t"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}