import React from 'react';
import InventoryItem from './InventoryItem';

export default function InventoryList() {
  const inventory = [
    {
      id: '1',
      name: 'Pienso Premium',
      category: 'Alimentación Animal',
      sku: 'PP-001',
      stock: 124,
      minStock: 50,
      price: 45.99,
      lastUpdated: '2024-03-15',
      status: 'in_stock',
      image: 'https://images.unsplash.com/photo-1622211827434-ba7485be0c37?auto=format&fit=crop&q=80&w=240'
    },
    {
      id: '2',
      name: 'Fertilizante Natural',
      category: 'Fertilizantes',
      sku: 'FN-002',
      stock: 45,
      minStock: 100,
      price: 29.99,
      lastUpdated: '2024-03-14',
      status: 'low_stock',
      image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=240'
    }
  ];

  return (
    <div className="space-y-4">
      {inventory.map((item) => (
        <InventoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}