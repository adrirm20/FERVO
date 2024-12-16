import React from 'react';
import RouteCard from './RouteCard';

export default function RoutesList() {
  const routes = [
    {
      id: '1',
      date: '2024-03-20',
      timeSlot: '09:00 - 17:00',
      deliveries: [
        {
          id: 'DEL001',
          customer: 'Granja Los Olivos',
          address: 'Madrid, España',
          time: '10:30'
        },
        {
          id: 'DEL002',
          customer: 'Huerta Ecológica',
          address: 'Valencia, España',
          time: '14:45'
        }
      ],
      distance: '156 km',
      duration: '6h 30min',
      efficiency: 92,
      earnings: '120€'
    },
    {
      id: '2',
      date: '2024-03-19',
      timeSlot: '10:00 - 18:00',
      deliveries: [
        {
          id: 'DEL003',
          customer: 'Finca El Pinar',
          address: 'Toledo, España',
          time: '11:15'
        }
      ],
      distance: '98 km',
      duration: '4h 15min',
      efficiency: 88,
      earnings: '85€'
    }
  ];

  return (
    <div className="space-y-4">
      {routes.map((route) => (
        <RouteCard key={route.id} {...route} />
      ))}
    </div>
  );
}