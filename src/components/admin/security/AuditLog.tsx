import React from 'react';
import { Activity, Shield, User, AlertTriangle } from 'lucide-react';

export default function AuditLog() {
  const logs = [
    {
      id: '1',
      type: 'security',
      action: 'Cambio de configuración de seguridad',
      user: 'Admin',
      details: 'Actualización de política de contraseñas',
      timestamp: '2024-03-20 14:30:45',
      severity: 'high'
    },
    {
      id: '2',
      type: 'auth',
      action: 'Intento de acceso fallido',
      user: 'usuario@example.com',
      details: 'IP: 192.168.1.100',
      timestamp: '2024-03-20 14:28:12',
      severity: 'medium'
    },
    {
      id: '3',
      type: 'user',
      action: 'Modificación de permisos',
      user: 'Moderador',
      details: 'Actualización de rol: Usuario → Moderador',
      timestamp: '2024-03-20 14:25:30',
      severity: 'low'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'security':
        return Shield;
      case 'auth':
        return AlertTriangle;
      case 'user':
        return User;
      default:
        return Activity;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="text-primary" size={24} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Registro de Auditoría
        </h3>
      </div>

      <div className="space-y-4">
        {logs.map((log) => {
          const Icon = getIcon(log.type);
          return (
            <div
              key={log.id}
              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getSeverityColor(log.severity)}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {log.action}
                      </p>
                      <p className="text-sm text-gray-500">{log.details}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Usuario: {log.user}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {log.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}