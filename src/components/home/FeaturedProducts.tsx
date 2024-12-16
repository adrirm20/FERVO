import React from 'react';
import ProductCard from '../marketplace/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Semillas de Tomate Ecológico',
    supplier: 'EcoSeeds',
    rating: 4.8,
    reviews: 156,
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=240'
  },
  {
    id: 2,
    name: 'Fertilizante Natural',
    supplier: 'BioGrow',
    rating: 4.6,
    reviews: 89,
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=240'
  }
];

const FeaturedProducts = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Productos Destacados</h2>
        <a href="/marketplace" className="text-primary text-sm font-medium">
          Ver todos
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;