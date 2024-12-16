import React from 'react';
import { Clock, Navigation, MapPin, TrendingUp } from 'lucide-react';
import Button from '../../ui/Button';

interface Delivery {
  id: string;
  customer: string;
  address: string;
  time: string;
}

interface RouteCardProps {
  id: string;
  date: string;
  timeSlot: string;
  deliveries: Delivery[];
  distance: string;
  duration: string;
  efficiency: number;
  earnings: string;
}

export default function RouteCard({
  date,
  timeSlot,
  deliveries,
  distance,
  duration,
  efficiency,
  earnings
}: RouteCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-white">
              {new Date(date).toLocaleDateString()}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {timeSlot}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">{earnings}</p>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp size={16} className="mr-1" />
              {efficiency}% eficiencia
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Navigation size={16} className="mr-2" />
              {distance}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {duration}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Entregas ({deliveries.length})
            </p>
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="flex items-start space-x-3 text-sm"
              >
                <MapPin size={16} className="text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {delivery.customer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {delivery.address} • {delivery.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-700 p-3 flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => {}}
        >
          Ver Detalles
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => {}}
        >
          Ver en Mapa
        </Button>
      </div>
    </div>
  );
}