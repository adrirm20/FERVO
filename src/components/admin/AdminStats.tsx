import React from 'react';
import { Users, Package, Truck, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';

export default function AdminStats() {
  const stats = [
    {
      icon: Users,
      value: '1,234',
      label: 'Usuarios Totales',
      breakdown: {
        farmers: '856',
        suppliers: '289',
        drivers: '89'
      }
    },
    {
      icon: Package,
      value: '45,678',
      label: 'Pedidos',
      trend: '+15%',
      isPositive: true
    },
    {
      icon: Truck,
      value: '892',
      label: 'Entregas Activas',
      trend: '+8%',
      isPositive: true
    },
    {
      icon: TrendingUp,
      value: '234.5k€',
      label: 'Volumen de Negocio',
      trend: '+12%',
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                {stat.value}
              </p>
              {'breakdown' in stat ? (
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-gray-500">
                    Agricultores: {stat.breakdown.farmers}
                  </p>
                  <p className="text-xs text-gray-500">
                    Proveedores: {stat.breakdown.suppliers}
                  </p>
                  <p className="text-xs text-gray-500">
                    Repartidores: {stat.breakdown.drivers}
                  </p>
                </div>
              ) : (
                <div className={`flex items-center mt-2 ${
                  stat.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="text-sm font-medium">{stat.trend}</span>
                </div>
              )}
            </div>
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="text-primary" size={20} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}