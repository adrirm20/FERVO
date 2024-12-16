import { UserRole } from '../types/auth';
import { MenuItem } from '../types/menu';
import {
  Shield, Users, Database, BarChart2, // Admin icons
  Sprout, Package, Truck, Wallet, History, // Farmer icons
  Store, Box, Navigation, Clock, MapPin, // Other role icons
  Settings
} from 'lucide-react';

export const getRoleMenuItems = (role: UserRole): MenuItem[] => {
  switch (role) {
    case 'ADMIN':
      return [
        {
          icon: Shield,
          title: 'Seguridad',
          description: 'Gestión de accesos y permisos',
          path: '/admin/security',
          color: 'text-red-600',
          bgColor: 'bg-red-50'
        },
        {
          icon: Users,
          title: 'Usuarios',
          description: 'Gestión de usuarios',
          path: '/admin/users',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50'
        },
        {
          icon: Database,
          title: 'Base de Datos',
          description: 'Monitorización y mantenimiento',
          path: '/admin/database',
          color: 'text-purple-600',
          bgColor: 'bg-purple-50'
        },
        {
          icon: BarChart2,
          title: 'Métricas',
          description: 'Estadísticas del sistema',
          path: '/admin/metrics',
          color: 'text-green-600',
          bgColor: 'bg-green-50'
        }
      ];
    // Add other role menus here...
    default:
      return [];
  }
};