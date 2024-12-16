import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  supplier: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  supplier,
  rating,
  reviews,
  price,
  image
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-sm">
          <span className="font-semibold text-primary dark:text-white">{price}€</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-800 dark:text-white line-clamp-2 text-sm mb-1">
          {name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{supplier}</p>
        <div className="flex items-center mt-2">
          <Star className="text-yellow-400" size={14} />
          <span className="text-sm ml-1 text-gray-700 dark:text-gray-300">{rating}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;