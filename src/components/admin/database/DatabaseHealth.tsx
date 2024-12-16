import React from 'react';
import { Server, CheckCircle, AlertTriangle } from 'lucide-react';

export default function DatabaseHealth() {
  const servers = [
    {
      name: 'Servidor Principal',
      status: 'operational',
      metrics: {
        cpu: '45%',
        memory: '67%',
        disk: '78%'
      }
    },
    {
      name: 'Réplica 1',
      status: 'operational',
      metrics: {
        cpu: '38%',
        memory: '52%',
        disk: '65%'
      }
    },
    {
      name: 'Réplica 2',
      status: 'degraded',
      metrics: {
        cpu: '82%',
        memory: '89%',
        disk: '72%'
      }
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Server className="text-primary" size={24} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Estado de Servidores
        </h3>
      </div>

      <div className="space-y-4">
        {servers.map((server) => (
          <div
            key={server.name}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {server.status === 'operational' ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <AlertTriangle className="text-yellow-500" size={20} />
                )}
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {server.name}
                  </h4>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                server.status === 'operational'
                  ? 'bg-green-50 text-green-600 dark:bg-green-900/20'
                  : 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20'
              }`}>
                {server.status === 'operational' ? 'Operativo' : 'Degradado'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">CPU</p>
                <div className="mt-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: server.metrics.cpu }}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  {server.metrics.cpu}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Memoria</p>
                <div className="mt-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: server.metrics.memory }}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  {server.metrics.memory}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Disco</p>
                <div className="mt-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: server.metrics.disk }}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  {server.metrics.disk}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}