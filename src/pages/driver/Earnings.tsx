import React from 'react';
import { Filter } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import EarningsOverview from '../../components/driver/earnings/EarningsOverview';
import EarningsChart from '../../components/driver/earnings/EarningsChart';
import DeliveryHistory from '../../components/driver/earnings/DeliveryHistory';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function Earnings() {
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
            Ganancias
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gestiona tus ingresos y pagos
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="px-4 py-6">
        <EarningsOverview />
      </div>

      {/* Chart */}
      <div className="px-4 mb-6">
        <EarningsChart />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            Última Semana
          </Button>
          <Button variant="outline" size="sm">
            Último Mes
          </Button>
          <Button variant="outline" size="sm">
            Último Año
          </Button>
        </div>
      </div>

      {/* Delivery History */}
      <div className="px-4 pb-20">
        <DeliveryHistory />
      </div>
    </div>
  );
}