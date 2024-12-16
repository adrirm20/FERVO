import React from 'react';
import CustomerCard from './CustomerCard';

export default function CustomerList() {
  const customers = [
    {
      id: '1',
      name: 'Granja Los Olivos',
      type: 'Agricultor',
      location: 'Madrid, España',
      joinDate: '2024-01-15',
      totalOrders: 12,
      totalSpent: 1234.50,
      lastOrder: '2024-03-15',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=240'
    },
    {
      id: '2',
      name: 'Huerta Ecológica',
      type: 'Agricultor',
      location: 'Valencia, España',
      joinDate: '2024-02-01',
      totalOrders: 8,
      totalSpent: 856.75,
      lastOrder: '2024-03-10',
      status: 'new',
      image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=240'
    }
  ];

  return (
    <div className="space-y-4">
      {customers.map((customer) => (
        <CustomerCard key={customer.id} {...customer} />
      ))}
    </div>
  );
}