import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useAnalytics } from '../../../hooks/useAnalytics';

export default function TimeRangeSelector() {
  const { t } = useTranslation();
  const { timeRange, setTimeRange } = useAnalytics();

  return (
    <select
      value={timeRange}
      onChange={(e) => setTimeRange(e.target.value)}
      className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
    >
      <option value="week">{t('supplier.dashboard.timeRanges.week')}</option>
      <option value="month">{t('supplier.dashboard.timeRanges.month')}</option>
      <option value="year">{t('supplier.dashboard.timeRanges.year')}</option>
    </select>
  );
}