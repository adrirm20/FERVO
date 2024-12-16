import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import DeliveryCard from './DeliveryCard';
import EmptyState from '../../ui/EmptyState';
import { Truck } from 'lucide-react';

export default function DeliveryList() {
  const { t } = useTranslation();

  const deliveries = [
    {
      id: 'DEL001',
      orderNumber: '#ORD123',
      status: 'in_transit',
      estimatedDelivery: '2024-03-20 14:30',
      items: [
        { name: 'Pienso Premium', quantity: 2 },
        { name: 'Fertilizante Orgánico', quantity: 1 }
      ],
      driver: {
        name: 'Carlos García',
        phone: '+34 612 345 678',
        rating: 4.8
      },
      origin: 'Almacén Central',
      destination: 'Granja Los Olivos',
      currentLocation: 'En ruta - 5km',
      trackingUrl: '#'
    },
    {
      id: 'DEL002',
      orderNumber: '#ORD124',
      status: 'scheduled',
      estimatedDelivery: '2024-03-21 10:00',
      items: [
        { name: 'Semillas de Tomate', quantity: 3 }
      ],
      origin: 'Centro de Distribución Sur',
      destination: 'Granja Los Olivos',
      currentLocation: 'Pendiente de recogida'
    }
  ];

  if (deliveries.length === 0) {
    return (
      <EmptyState
        icon={Truck}
        title={t('deliveries.empty.title')}
        description={t('deliveries.empty.description')}
        action={{
          label: t('deliveries.schedule'),
          onClick: () => {}
        }}
      />
    );
  }

  return (
    <div className="space-y-4">
      {deliveries.map((delivery) => (
        <DeliveryCard key={delivery.id} {...delivery} />
      ))}
    </div>
  );
}