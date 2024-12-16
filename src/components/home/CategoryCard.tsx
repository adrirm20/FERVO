import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
}

export default function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link to={href} className="group relative rounded-lg overflow-hidden h-32">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
        <span className="text-white font-medium">{name}</span>
      </div>
    </Link>
  );
}