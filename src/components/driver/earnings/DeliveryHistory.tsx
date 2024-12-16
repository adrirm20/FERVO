import React from 'react';
import { Package, MapPin, Clock, Wallet } from 'lucide-react';

export default function DeliveryHistory() {
  const deliveries = [
    {
      id: '1',
      orderNumber: '#ORD123',
      date: '2024-03-20',
      time: '14:30',
      customer: 'Granja Los Olivos',
      origin: 'Almacén Central',
      destination: 'Madrid, España',
      distance: '12 km',
      earnings: '15.50€',
      status: 'completed'
    },
    {
      id: '2',
      orderNumber: '#ORD124',
      date: '2024-03-20',
      time: '16:45',
      customer: 'Huerta Ecológica',
      origin: 'Centro Logístico Sur',
      destination: 'Valencia, España',
      distance: '8 km',
      earnings: '12.75€',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        Historial de Entregas
      </h3>

      <div className="space-y-4">
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {delivery.orderNumber}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(delivery.status)}`}>
                    Completado
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {delivery.customer}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-primary">{delivery.earnings}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{delivery.distance}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span className="truncate">{delivery.destination}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock size={16} className="mr-2" />
                {delivery.date} {delivery.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}