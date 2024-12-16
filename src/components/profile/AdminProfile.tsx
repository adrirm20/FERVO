import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Settings, Activity } from 'lucide-react';
import IconBadge from '../ui/IconBadge';
import LogoutButton from './LogoutButton';

export default function AdminProfile() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Usuarios Activos', value: '1,234' },
    { label: 'Servicios', value: '8/8' },
    { label: 'Uptime', value: '99.9%' }
  ];

  const menuItems = [
    {
      icon: Users,
      title: 'Gestión de Usuarios',
      description: 'Administrar usuarios y permisos',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      onClick: () => navigate('/admin/users')
    },
    {
      icon: Activity,
      title: 'Métricas',
      description: 'Estadísticas y rendimiento',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      onClick: () => navigate('/admin/metrics')
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Configuración y auditoría',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      onClick: () => navigate('/admin/security')
    },
    {
      icon: Settings,
      title: 'Configuración',
      description: 'Ajustes del sistema',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-800',
      onClick: () => navigate('/settings')
    }
  ];

  return (
    <div className="pb-20">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm text-center">
            <div className="text-lg font-semibold text-gray-800 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={item.onClick}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
          >
            <IconBadge icon={item.icon} color={item.color} bgColor={item.bgColor} />
            <div className="flex-1 text-left">
              <h3 className="font-medium text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          </button>
        ))}

        <LogoutButton />
      </div>
    </div>
  );
}