import React from 'react';
import { Package, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';
import Button from '../../ui/Button';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  image: string;
  sales: {
    value: number;
    trend: string;
  };
}

export default function ProductCard({
  name,
  category,
  price,
  stock,
  status,
  image,
  sales
}: ProductCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'low_stock':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'out_of_stock':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const isTrendPositive = sales.trend.startsWith('+');

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
                {category}
              </p>
            </div>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <MoreVertical size={20} className="text-gray-500" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Precio</p>
                <p className="font-medium text-gray-800 dark:text-white">{price}€</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Stock</p>
                <p className="font-medium text-gray-800 dark:text-white">{stock}</p>
              </div>
            </div>
            <div className={`flex items-center ${
              isTrendPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {isTrendPositive ? (
                <TrendingUp size={16} className="mr-1" />
              ) : (
                <TrendingDown size={16} className="mr-1" />
              )}
              <span className="text-sm font-medium">{sales.trend}</span>
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
          Editar
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          Gestionar Stock
        </Button>
      </div>
    </div>
  );
}