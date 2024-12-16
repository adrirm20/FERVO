import React from 'react';
import { Filter, Plus } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import DeliveryList from '../../components/farmer/deliveries/DeliveryList';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function Deliveries() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {t('deliveries.title')}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('deliveries.subtitle')}
            </p>
          </div>
          <Button variant="primary" onClick={() => {}}>
            <Plus size={20} className="mr-2" />
            {t('deliveries.schedule')}
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            {t('common.filters')}
          </Button>
          <Button variant="outline" size="sm">
            {t('deliveries.filters.status')}
          </Button>
          <Button variant="outline" size="sm">
            {t('deliveries.filters.date')}
          </Button>
          <Button variant="outline" size="sm">
            {t('deliveries.filters.type')}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20">
        <DeliveryList />
      </div>
    </div>
  );
}