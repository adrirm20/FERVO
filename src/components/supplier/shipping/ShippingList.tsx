import React from 'react';
import ShippingCard from './ShippingCard';

export default function ShippingList() {
  const shipments = [
    {
      id: 'SHP001',
      orderNumber: '#ORD123',
      customer: 'Granja Los Olivos',
      status: 'in_transit',
      estimatedDelivery: '2024-03-20',
      items: [
        { name: 'Pienso Premium', quantity: 2 },
        { name: 'Fertilizante Natural', quantity: 1 }
      ],
      origin: 'Almacén Central',
      destination: 'Madrid, España',
      driver: {
        name: 'Carlos García',
        phone: '+34 612 345 678',
        rating: 4.8
      },
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'SHP002',
      orderNumber: '#ORD124',
      customer: 'Huerta Ecológica',
      status: 'pending',
      estimatedDelivery: '2024-03-21',
      items: [
        { name: 'Semillas Ecológicas', quantity: 3 }
      ],
      origin: 'Almacén Sur',
      destination: 'Valencia, España',
      trackingNumber: 'TRK987654321'
    }
  ];

  return (
    <div className="space-y-4">
      {shipments.map((shipment) => (
        <ShippingCard key={shipment.id} {...shipment} />
      ))}
    </div>
  );
}