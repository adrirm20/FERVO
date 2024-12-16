import React from 'react';
import { Filter } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import HistoryList from '../../components/farmer/history/HistoryList';
import HistoryStats from '../../components/farmer/history/HistoryStats';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function History() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {t('history.title')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('history.subtitle')}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <HistoryStats />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            {t('common.filters')}
          </Button>
          <Button variant="outline" size="sm">
            {t('history.filters.all')}
          </Button>
          <Button variant="outline" size="sm">
            {t('history.filters.orders')}
          </Button>
          <Button variant="outline" size="sm">
            {t('history.filters.activities')}
          </Button>
        </div>
      </div>

      {/* History List */}
      <div className="px-4 pb-20">
        <HistoryList />
      </div>
    </div>
  );
}