import React from 'react';
import { MapPin, Calendar, Star, Package, MoreVertical, Shield } from 'lucide-react';
import Button from '../../ui/Button';

interface UserStats {
  orders?: number;
  rating?: number;
  products?: number;
  sales?: string;
}

interface UserCardProps {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  lastActive: string;
  location: string;
  stats: UserStats;
  image: string;
}

export default function UserCard({
  name,
  email,
  role,
  status,
  joinDate,
  lastActive,
  location,
  stats,
  image
}: UserCardProps) {
  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'FARMER':
        return 'Agricultor';
      case 'SUPPLIER':
        return 'Proveedor';
      case 'DRIVER':
        return 'Repartidor';
      default:
        return role;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'inactive':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'suspended':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="flex">
        <div className="w-24 h-24 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-800 dark:text-white">
                  {name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
                  {status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
            </div>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <MoreVertical size={20} className="text-gray-500" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Shield size={16} className="mr-2" />
              {getRoleLabel(role)}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2" />
              {location}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-2" />
              Registro: {new Date(joinDate).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-2" />
              Último acceso: {new Date(lastActive).toLocaleDateString()}
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            {'orders' in stats && (
              <div className="flex items-center text-sm">
                <Package size={16} className="mr-1 text-gray-400" />
                <span>{stats.orders} pedidos</span>
              </div>
            )}
            {'rating' in stats && (
              <div className="flex items-center text-sm">
                <Star size={16} className="mr-1 text-yellow-400" />
                <span>{stats.rating}</span>
              </div>
            )}
            {'products' in stats && (
              <div className="flex items-center text-sm">
                <Package size={16} className="mr-1 text-gray-400" />
                <span>{stats.products} productos</span>
              </div>
            )}
            {'sales' in stats && (
              <div className="flex items-center text-sm text-primary font-medium">
                {stats.sales}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-700 p-3 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          Ver Perfil
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          Editar
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1 text-red-600 border-red-600 hover:bg-red-50"
          onClick={() => {}}
        >
          Suspender
        </Button>
      </div>
    </div>
  );
}