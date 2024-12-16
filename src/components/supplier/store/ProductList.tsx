import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const products = [
    {
      id: '1',
      name: 'Pienso Premium',
      category: 'Alimentación Animal',
      price: 45.99,
      stock: 124,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1622211827434-ba7485be0c37?auto=format&fit=crop&q=80&w=240',
      sales: {
        value: 234,
        trend: '+15%'
      }
    },
    {
      id: '2',
      name: 'Fertilizante Natural',
      category: 'Fertilizantes',
      price: 29.99,
      stock: 89,
      status: 'low_stock',
      image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=240',
      sales: {
        value: 156,
        trend: '-5%'
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}