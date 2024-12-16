import React from 'react';
import { Filter, MapPin } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import ZoneMap from '../../components/driver/zone/ZoneMap';
import ZoneStats from '../../components/driver/zone/ZoneStats';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function DeliveryZone() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <Logo size="sm" className="w-24" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Zona de Reparto
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gestiona tu área de trabajo
            </p>
          </div>
          <Button variant="primary" onClick={() => {}}>
            <MapPin size={20} className="mr-2" />
            Actualizar Zona
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <ZoneStats />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            Todas las Zonas
          </Button>
          <Button variant="outline" size="sm">
            Zonas Activas
          </Button>
          <Button variant="outline" size="sm">
            Alta Demanda
          </Button>
        </div>
      </div>

      {/* Map */}
      <div className="px-4 pb-20">
        <ZoneMap />
      </div>
    </div>
  );
}