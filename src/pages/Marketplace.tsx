import React from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '../components/marketplace/ProductCard';
import Button from '../components/ui/Button';
import SearchBar from '../components/home/SearchBar';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: 'Pienso Premium',
      supplier: 'AgroSupplies Inc.',
      rating: 4.8,
      reviews: 128,
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1622211827434-ba7485be0c37?auto=format&fit=crop&q=80&w=240'
    },
    {
      id: 2,
      name: 'Fertilizante Orgánico',
      supplier: 'EcoFarm Solutions',
      rating: 4.6,
      reviews: 89,
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=240'
    }
  ];

  return (
    <div className="pb-16 bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-[#00A082] px-4 py-6 -mx-4">
        <SearchBar />
      </div>

      {/* Filters */}
      <div className="px-4 py-4 flex gap-2 overflow-x-auto">
        <Button variant="outline" size="sm">
          <Filter size={16} className="mr-2" />
          Filtros
        </Button>
        <Button variant="outline" size="sm">Precio</Button>
        <Button variant="outline" size="sm">Valoración</Button>
        <Button variant="outline" size="sm">Envío</Button>
      </div>

      {/* Products Grid */}
      <div className="px-4 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;