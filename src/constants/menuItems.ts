import { 
  Sprout, Package, Truck, Wallet, Settings, Star, History,
  Store, BarChart2, Users, Box,
  Navigation, Clock, MapPin
} from 'lucide-react';
import { MenuItem } from '../types/menu';

export const farmerMenuItems: MenuItem[] = [
  {
    icon: Sprout,
    title: 'Mis Cultivos',
    description: 'Gestiona tus cultivos y ganado',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Package,
    title: 'Pedidos Recurrentes',
    description: 'Configura entregas periódicas',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  // ... rest of farmer menu items
];

export const supplierMenuItems: MenuItem[] = [
  {
    icon: Store,
    title: 'Mi Tienda',
    description: 'Gestiona tus productos',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  // ... rest of supplier menu items
];

export const driverMenuItems: MenuItem[] = [
  {
    icon: Navigation,
    title: 'Zona de Reparto',
    description: 'Configura tu área de trabajo',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  // ... rest of driver menu items
];