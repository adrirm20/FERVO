import React from 'react';
import { Package, Sprout, CheckCircle } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import Card from '../ui/Card';

export default function FarmerStats() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Package,
      value: '3',
      label: t('stats.farmer.orders.active')
    },
    {
      icon: Sprout,
      value: '45',
      label: t('stats.farmer.orders.inProgress')
    },
    {
      icon: CheckCircle,
      value: '12',
      label: t('stats.farmer.orders.completed')
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-primary/10 rounded-lg mb-2">
              <stat.icon className="text-primary" size={20} />
            </div>
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {stat.label}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}