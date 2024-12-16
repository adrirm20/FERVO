import React from 'react';
import { Plus } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import RecurringOrdersList from '../../components/farmer/recurring/RecurringOrdersList';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function RecurringOrders() {
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
              {t('recurring.title')}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('recurring.subtitle')}
            </p>
          </div>
          <Button variant="primary" onClick={() => {}}>
            <Plus size={20} className="mr-2" />
            {t('recurring.addNew')}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <RecurringOrdersList />
      </div>
    </div>
  );
}