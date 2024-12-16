import React from 'react';
import { MapPin, Package, Phone, Star, ExternalLink, MoreVertical } from 'lucide-react';
import Button from '../../ui/Button';

interface ShipmentItem {
  name: string;
  quantity: number;
}

interface Driver {
  name: string;
  phone: string;
  rating: number;
}

interface ShippingCardProps {
  id: string;
  orderNumber: string;
  customer: string;
  status: string;
  estimatedDelivery: string;
  items: ShipmentItem[];
  origin: string;
  destination: string;
  driver?: Driver;
  trackingNumber: string;
}

export default function ShippingCard({
  orderNumber,
  customer,
  status,
  estimatedDelivery,
  items,
  origin,
  destination,
  driver,
  trackingNumber
}: ShippingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_transit':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      case 'delivered':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      case 'issue':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in_transit':
        return 'En Tránsito';
      case 'delivered':
        return 'Entregado';
      case 'pending':
        return 'Pendiente';
      case 'issue':
        return 'Incidencia';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center space-x-3">
              <h3 className="font-medium text-gray-800 dark:text-white">
                {orderNumber}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
                {getStatusText(status)}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Cliente: {customer}
            </p>
          </div>
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <MoreVertical size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin size={18} className="text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Origen: {origin}</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                Destino: {destination}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Package size={18} className="text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Productos:</p>
              <ul className="text-sm">
                {items.map((item, index) => (
                  <li key={index} className="text-gray-800 dark:text-white">
                    {item.name} x{item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {driver && (
            <div className="flex items-start space-x-3">
              <Phone size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Repartidor:</p>
                <p className="text-sm text-gray-800 dark:text-white">{driver.name}</p>
                <div className="flex items-center mt-1">
                  <Star size={14} className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{driver.rating}</span>
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Entrega estimada:</span>{' '}
            {new Date(estimatedDelivery).toLocaleDateString()}
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
          Ver Detalles
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => window.open('#', '_blank')}
        >
          <ExternalLink size={16} className="mr-2" />
          Seguimiento
        </Button>

        {status === 'pending' && (
          <Button
            variant="primary"
            size="sm"
            className="flex-1 mx-1"
            onClick={() => {}}
          >
            Asignar Repartidor
          </Button>
        )}
      </div>
    </div>
  );
}