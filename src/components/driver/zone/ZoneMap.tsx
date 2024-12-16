import React from 'react';
import { MapPin, Navigation, AlertTriangle } from 'lucide-react';
import Button from '../../ui/Button';

export default function ZoneMap() {
  const zones = [
    {
      id: '1',
      name: 'Zona Norte',
      status: 'active',
      deliveries: 12,
      avgTime: '20 min',
      demand: 'high'
    },
    {
      id: '2',
      name: 'Zona Centro',
      status: 'active',
      deliveries: 8,
      avgTime: '25 min',
      demand: 'medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'inactive':
        return 'text-gray-600 bg-gray-50 dark:bg-gray-700/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'high':
        return (
          <div className="flex items-center text-red-600">
            <AlertTriangle size={16} className="mr-1" />
            Alta Demanda
          </div>
        );
      case 'medium':
        return (
          <div className="flex items-center text-yellow-600">
            <Navigation size={16} className="mr-1" />
            Demanda Media
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {zones.map((zone) => (
        <div
          key={zone.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-800 dark:text-white">
                  {zone.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(zone.status)}`}>
                  {zone.status === 'active' ? 'Activa' : 'Inactiva'}
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {zone.deliveries} entregas • {zone.avgTime} tiempo medio
              </div>
            </div>
            {getDemandBadge(zone.demand)}
          </div>

          {/* Placeholder for map - In a real app, this would be an actual map component */}
          <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <MapPin className="text-gray-400" size={24} />
            <span className="ml-2 text-gray-500 dark:text-gray-400">
              Vista del Mapa
            </span>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => {}}
            >
              Ver Detalles
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => {}}
            >
              Seleccionar Zona
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}