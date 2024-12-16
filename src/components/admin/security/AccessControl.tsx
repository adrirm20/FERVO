import React from 'react';
import { Users, Shield, Lock } from 'lucide-react';
import Button from '../../ui/Button';

export default function AccessControl() {
  const roles = [
    {
      name: 'Administrador',
      users: 5,
      permissions: [
        'Gestión completa del sistema',
        'Configuración de seguridad',
        'Gestión de usuarios'
      ]
    },
    {
      name: 'Moderador',
      users: 12,
      permissions: [
        'Gestión de contenido',
        'Reportes básicos',
        'Soporte al cliente'
      ]
    },
    {
      name: 'Usuario',
      users: 1234,
      permissions: [
        'Acceso básico',
        'Perfil personal',
        'Interacción con la plataforma'
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="text-primary" size={24} />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Control de Acceso
          </h3>
        </div>
        <Button variant="outline" size="sm">
          <Lock size={16} className="mr-2" />
          Gestionar Roles
        </Button>
      </div>

      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.name}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Users className="text-primary" size={20} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {role.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {role.users} usuarios
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Editar
              </Button>
            </div>
            <div className="space-y-1">
              {role.permissions.map((permission, index) => (
                <p key={index} className="text-sm text-gray-600 dark:text-gray-400">
                  • {permission}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}