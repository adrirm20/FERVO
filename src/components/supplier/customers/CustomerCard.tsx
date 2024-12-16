import React from 'react';
import { MapPin, Calendar, Package, Wallet, MoreVertical } from 'lucide-react';
import Button from '../../ui/Button';

interface CustomerCardProps {
  id: string;
  name: string;
  type: string;
  location: string;
  joinDate: string;
  totalOrders: number;
  totalSpent: number;
  lastOrder: string;
  status: string;
  image: string;
}

export default function CustomerCard({
  name,
  type,
  location,
  joinDate,
  totalOrders,
  totalSpent,
  lastOrder,
  status,
  image
}: CustomerCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'new':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      case 'inactive':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
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
              <h3 className="font-medium text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {type}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
                {status === 'active' ? 'Activo' : status === 'new' ? 'Nuevo' : 'Inactivo'}
              </span>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <MoreVertical size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2" />
              {location}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-2" />
              Cliente desde: {new Date(joinDate).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Package size={16} className="mr-2" />
              {totalOrders} pedidos
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Wallet size={16} className="mr-2" />
              {totalSpent.toFixed(2)}€
            </div>
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
          Pedidos
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          Contactar
        </Button>
      </div>
    </div>
  );
}