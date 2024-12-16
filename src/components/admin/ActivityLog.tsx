import React from 'react';
import { Activity, User, Package, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ActivityLog() {
  const activities = [
    {
      id: '1',
      type: 'user',
      action: 'Nuevo usuario registrado',
      details: 'Agricultor: Juan García',
      timestamp: '2024-03-20 14:30',
      icon: User,
      status: 'success'
    },
    {
      id: '2',
      type: 'order',
      action: 'Pedido completado',
      details: 'Pedido #ORD123 - Valor: 234.50€',
      timestamp: '2024-03-20 14:15',
      icon: Package,
      status: 'success'
    },
    {
      id: '3',
      type: 'system',
      action: 'Alerta de sistema',
      details: 'Latencia elevada en el servicio de notificaciones',
      timestamp: '2024-03-20 14:00',
      icon: AlertTriangle,
      status: 'warning'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'error':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="text-primary" size={24} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Registro de Actividad
        </h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}>
                <activity.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">{activity.details}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(activity.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}