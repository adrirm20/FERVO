import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import Logo from '../../ui/Logo';
import TimeRangeSelector from './TimeRangeSelector';

export default function AnalyticsHeader() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <Logo size="sm" className="w-24" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {t('supplier.dashboard.salesAnalytics')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Análisis detallado de ventas y rendimiento
          </p>
        </div>
        <TimeRangeSelector />
      </div>
    </div>
  );
}