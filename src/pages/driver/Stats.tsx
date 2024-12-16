import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import StatsOverview from '../../components/driver/stats/StatsOverview';
import PerformanceChart from '../../components/driver/stats/PerformanceChart';
import DeliveryMetrics from '../../components/driver/stats/DeliveryMetrics';
import Logo from '../../components/ui/Logo';

export default function Stats() {
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
            Estadísticas
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Análisis de rendimiento
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="px-4 py-6">
        <StatsOverview />
      </div>

      {/* Performance Chart */}
      <div className="px-4 mb-6">
        <PerformanceChart />
      </div>

      {/* Delivery Metrics */}
      <div className="px-4 pb-20">
        <DeliveryMetrics />
      </div>
    </div>
  );
}