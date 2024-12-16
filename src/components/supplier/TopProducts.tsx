import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function TopProducts() {
  const products = [
    {
      name: 'Pienso Premium',
      sales: '2.345€',
      growth: '+15%',
      isPositive: true,
      stock: 124,
      stockPercentage: 65
    },
    {
      name: 'Fertilizante Natural',
      sales: '1.890€',
      growth: '-5%',
      isPositive: false,
      stock: 89,
      stockPercentage: 45
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Productos Destacados</h2>
        <button className="text-primary text-sm font-medium">Ver Todos</button>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.name} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-800 dark:text-white">{product.name}</h3>
              <div className={`flex items-center ${
                product.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {product.isPositive ? (
                  <TrendingUp size={16} className="mr-1" />
                ) : (
                  <TrendingDown size={16} className="mr-1" />
                )}
                <span className="text-sm font-medium">{product.growth}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Ventas: {product.sales}</span>
              <span>Stock: {product.stock}</span>
            </div>
            <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${product.stockPercentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}