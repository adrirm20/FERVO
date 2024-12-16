import React from 'react';
import { Server, CheckCircle, AlertTriangle } from 'lucide-react';

export default function SystemStatus() {
  const services = [
    {
      name: 'API Principal',
      status: 'operational',
      uptime: '99.99%',
      latency: '45ms'
    },
    {
      name: 'Base de Datos',
      status: 'operational',
      uptime: '99.95%',
      latency: '12ms'
    },
    {
      name: 'Servicio de Pagos',
      status: 'operational',
      uptime: '99.98%',
      latency: '89ms'
    },
    {
      name: 'Sistema de Notificaciones',
      status: 'degraded',
      uptime: '98.45%',
      latency: '156ms'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Server className="text-primary" size={24} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Estado del Sistema
        </h3>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {service.status === 'operational' ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <AlertTriangle className="text-yellow-500" size={20} />
                )}
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {service.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Uptime: {service.uptime} • Latencia: {service.latency}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                service.status === 'operational'
                  ? 'bg-green-50 text-green-600 dark:bg-green-900/20'
                  : 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20'
              }`}>
                {service.status === 'operational' ? 'Operativo' : 'Degradado'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}