import { ServerStatus } from '../types/database';

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'operational':
      return 'bg-green-500';
    case 'degraded':
      return 'bg-yellow-500';
    case 'down':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export const getStatusText = (status: string): string => {
  switch (status) {
    case 'operational':
      return 'Operativo';
    case 'degraded':
      return 'Degradado';
    case 'down':
      return 'Caído';
    default:
      return 'Desconocido';
  }
};

export const getMetricColor = (value: number): string => {
  if (value > 80) return 'bg-red-500';
  if (value > 60) return 'bg-yellow-500';
  return 'bg-green-500';
};