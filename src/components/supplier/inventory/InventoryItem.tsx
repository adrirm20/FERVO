import React from 'react';
import { Package, AlertTriangle, Calendar, MoreVertical } from 'lucide-react';
import Button from '../../ui/Button';

interface InventoryItemProps {
  id: string;
  name: string;
  category: string;
  sku: string;
  stock: number;
  minStock: number;
  price: number;
  lastUpdated: string;
  status: string;
  image: string;
}

export default function InventoryItem({
  name,
  category,
  sku,
  stock,
  minStock,
  price,
  lastUpdated,
  status,
  image
}: InventoryItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_stock':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'low_stock':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'out_of_stock':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getStockStatus = (stock: number, minStock: number) => {
    if (stock === 0) return 'Sin Stock';
    if (stock < minStock) return 'Stock Bajo';
    return 'En Stock';
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
                {category} • SKU: {sku}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
                {getStockStatus(stock, minStock)}
              </span>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <MoreVertical size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Package size={16} className="mr-2" />
              Stock: {stock} unidades
              {stock < minStock && (
                <AlertTriangle size={16} className="ml-2 text-yellow-500" />
              )}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-2" />
              Actualizado: {new Date(lastUpdated).toLocaleDateString()}
            </div>
          </div>

          <div className="mt-2">
            <p className="text-lg font-semibold text-primary">
              {price.toFixed(2)}€
            </p>
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
          Ajustar Stock
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          Editar Producto
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          Historial
        </Button>
      </div>
    </div>
  );
}