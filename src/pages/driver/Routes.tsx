import React from 'react';
import { Filter } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import RoutesList from '../../components/driver/routes/RoutesList';
import RoutesStats from '../../components/driver/routes/RoutesStats';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function DriverRoutes() {
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
            Rutas
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Historial y análisis de rutas
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <RoutesStats />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            Todas las Rutas
          </Button>
          <Button variant="outline" size="sm">
            Última Semana
          </Button>
          <Button variant="outline" size="sm">
            Último Mes
          </Button>
        </div>
      </div>

      {/* Routes List */}
      <div className="px-4 pb-20">
        <RoutesList />
      </div>
    </div>
  );
}