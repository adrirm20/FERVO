import React from 'react';
import { Leaf, Tractor, Wrench, Package, Droplet, Sun } from 'lucide-react';
import IconBadge from '../ui/IconBadge';
import { useTranslation } from '../../hooks/useTranslation';

export default function CategoryGrid() {
  const { t } = useTranslation();

  const categories = [
    {
      name: t('categories.seeds'),
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      href: '/marketplace/seeds'
    },
    {
      name: t('categories.machinery'),
      icon: Tractor,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      href: '/marketplace/machinery'
    },
    {
      name: t('categories.tools'),
      icon: Wrench,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      href: '/marketplace/tools'
    },
    {
      name: t('categories.feed'),
      icon: Package,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      href: '/marketplace/feed'
    },
    {
      name: t('categories.irrigation'),
      icon: Droplet,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      href: '/marketplace/irrigation'
    },
    {
      name: t('categories.fertilizers'),
      icon: Sun,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      href: '/marketplace/fertilizers'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.href}
          className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
        >
          <IconBadge
            icon={category.icon}
            color={category.color}
            bgColor={category.bgColor}
          />
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            {category.name}
          </span>
        </a>
      ))}
    </div>
  );
}