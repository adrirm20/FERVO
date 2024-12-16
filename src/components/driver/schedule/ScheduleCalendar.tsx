import React from 'react';
import { Clock, MapPin, TrendingUp } from 'lucide-react';
import Button from '../../ui/Button';

export default function ScheduleCalendar() {
  const shifts = [
    {
      id: '1',
      date: '2024-03-20',
      timeSlot: '09:00 - 17:00',
      zone: 'Zona Norte',
      status: 'available',
      demand: 'high',
      earnings: '120€'
    },
    {
      id: '2',
      date: '2024-03-20',
      timeSlot: '18:00 - 22:00',
      zone: 'Zona Centro',
      status: 'booked',
      demand: 'medium',
      earnings: '85€'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'booked':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'high':
        return (
          <div className="flex items-center text-red-600">
            <TrendingUp size={16} className="mr-1" />
            Alta Demanda
          </div>
        );
      case 'medium':
        return (
          <div className="flex items-center text-yellow-600">
            <TrendingUp size={16} className="mr-1" />
            Demanda Media
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {shifts.map((shift) => (
        <div
          key={shift.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-800 dark:text-white">
                  {new Date(shift.date).toLocaleDateString()}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(shift.status)}`}>
                  {shift.status === 'available' ? 'Disponible' : 'Reservado'}
                </span>
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={16} className="mr-2" />
                  {shift.timeSlot}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  {shift.zone}
                </div>
              </div>
            </div>
            <div className="text-right">
              {getDemandBadge(shift.demand)}
              <p className="mt-2 text-lg font-semibold text-primary">
                {shift.earnings}
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => {}}
            >
              Ver Detalles
            </Button>
            {shift.status === 'available' ? (
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => {}}
              >
                Reservar Turno
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                onClick={() => {}}
              >
                Cancelar Turno
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}