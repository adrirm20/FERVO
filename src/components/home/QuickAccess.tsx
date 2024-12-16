import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function QuickAccess() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
        {t('common.quickAccess')}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <a href="/orders" className="bg-primary/10 dark:bg-primary/5 rounded-lg p-3 text-center">
          <span className="text-primary dark:text-primary-light font-medium">
            {t('quickAccess.orders')}
          </span>
        </a>
        <a href="/marketplace" className="bg-secondary/10 dark:bg-secondary/5 rounded-lg p-3 text-center">
          <span className="text-primary dark:text-primary-light font-medium">
            {t('quickAccess.offers')}
          </span>
        </a>
      </div>
    </div>
  );
}