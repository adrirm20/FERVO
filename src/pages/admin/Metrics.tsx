import React from 'react';
import { BarChart2 } from 'lucide-react';
import MetricsOverview from '../../components/admin/metrics/MetricsOverview';
import BusinessMetrics from '../../components/admin/metrics/BusinessMetrics';
import PerformanceMetrics from '../../components/admin/metrics/PerformanceMetrics';
import Logo from '../../components/ui/Logo';

export default function Metrics() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div className="flex items-center space-x-2">
          <BarChart2 className="text-primary" size={24} />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Métricas
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Análisis y rendimiento del sistema
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="px-4 py-6">
        <MetricsOverview />
      </div>

      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        {/* Business Metrics */}
        <BusinessMetrics />

        {/* Performance Metrics */}
        <PerformanceMetrics />
      </div>
    </div>
  );
}