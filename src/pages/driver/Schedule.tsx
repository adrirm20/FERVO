import React from 'react';
import { Plus, Filter } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import ScheduleCalendar from '../../components/driver/schedule/ScheduleCalendar';
import ScheduleStats from '../../components/driver/schedule/ScheduleStats';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';

export default function Schedule() {
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
              Horario
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gestiona tu disponibilidad
            </p>
          </div>
          <Button variant="primary" onClick={() => {}}>
            <Plus size={20} className="mr-2" />
            Añadir Turno
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <ScheduleStats />
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            Todos los Turnos
          </Button>
          <Button variant="outline" size="sm">
            Alta Demanda
          </Button>
          <Button variant="outline" size="sm">
            Disponible
          </Button>
        </div>
      </div>

      {/* Calendar */}
      <div className="px-4 pb-20">
        <ScheduleCalendar />
      </div>
    </div>
  );
}