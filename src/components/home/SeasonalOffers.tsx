import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function SeasonalOffers() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-4 text-white">
      <h3 className="font-semibold mb-1">{t('featured.seasonal.title')}</h3>
      <p className="text-sm opacity-90">{t('featured.seasonal.subtitle')}</p>
    </div>
  );
}