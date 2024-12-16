import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import RecurringOrderCard from './RecurringOrderCard';
import EmptyState from '../../ui/EmptyState';
import { Package } from 'lucide-react';

export default function RecurringOrdersList() {
  const { t } = useTranslation();

  const recurringOrders = [
    {
      id: '1',
      name: 'Pienso Premium',
      items: [
        { name: 'Pienso Premium', quantity: 2, price: 45.99 },
        { name: 'Suplementos', quantity: 1, price: 29.99 }
      ],
      frequency: 'weekly',
      nextDelivery: '2024-03-25',
      status: 'active',
      total: 121.97,
      supplier: 'AgroSupplies Inc.',
      image: 'https://images.unsplash.com/photo-1622211827434-ba7485be0c37?auto=format&fit=crop&q=80&w=240'
    }
  ];

  if (recurringOrders.length === 0) {
    return (
      <EmptyState
        icon={Package}
        title={t('recurring.empty')}
        action={{
          label: t('recurring.addNew'),
          onClick: () => {}
        }}
      />
    );
  }

  return (
    <div className="space-y-4">
      {recurringOrders.map((order) => (
        <RecurringOrderCard key={order.id} {...order} />
      ))}
    </div>
  );
}