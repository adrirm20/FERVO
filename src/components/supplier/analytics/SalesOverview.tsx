import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useAnalytics } from '../../../hooks/useAnalytics';
import SalesChart from './SalesChart';

export default function SalesOverview() {
  const { t } = useTranslation();
  const { timeRange } = useAnalytics();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Evolución de Ventas
      </h3>
      <SalesChart timeRange={timeRange} />
    </div>
  );
}