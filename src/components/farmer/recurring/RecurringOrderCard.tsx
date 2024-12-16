import React from 'react';
import { Calendar, MoreVertical } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../ui/Button';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface RecurringOrderCardProps {
  id: string;
  name: string;
  items: OrderItem[];
  frequency: string;
  nextDelivery: string;
  status: string;
  total: number;
  supplier: string;
  image: string;
}

export default function RecurringOrderCard({
  id,
  name,
  items,
  frequency,
  nextDelivery,
  status,
  total,
  supplier,
  image
}: RecurringOrderCardProps) {
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'paused':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="flex">
        <div className="w-24 h-24 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {supplier}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
                {t(`recurring.status.${status}`)}
              </span>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <MoreVertical size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-1" />
              <span>{t('recurring.nextDelivery')}: {nextDelivery}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500 dark:text-gray-400">{t('recurring.total')}:</span>
              <span className="ml-1 font-medium text-primary">{total}€</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-700 p-3 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          {t('recurring.actions.edit')}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1"
          onClick={() => {}}
        >
          {status === 'active' ? t('recurring.actions.pause') : t('recurring.actions.resume')}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mx-1 text-red-600 border-red-600 hover:bg-red-50"
          onClick={() => {}}
        >
          {t('recurring.actions.cancel')}
        </Button>
      </div>
    </div>
  );
}