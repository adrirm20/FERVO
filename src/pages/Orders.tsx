import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const Orders = () => {
  const orders = [
    {
      id: '#ORD001',
      date: '2024-03-15',
      status: 'En camino',
      items: ['Pienso Premium x2', 'Fertilizante Orgánico x1'],
      total: 121.97,
      icon: Clock
    },
    {
      id: '#ORD002',
      date: '2024-03-14',
      status: 'Entregado',
      items: ['Semillas Ecológicas x3'],
      total: 89.99,
      icon: CheckCircle
    }
  ];

  return (
    <div className="px-4 pb-16">
      <h1 className="text-xl font-semibold py-4">Mis Pedidos</h1>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">{order.id}</span>
              <span className="text-sm text-gray-500">{order.date}</span>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <order.icon size={20} className="text-green-600" />
              <span className="text-sm">{order.status}</span>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <ul className="space-y-1">
                {order.items.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">{item}</li>
                ))}
              </ul>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-500">Total:</span>
                <span className="font-semibold">{order.total}€</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;