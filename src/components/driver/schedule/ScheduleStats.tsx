import React from 'react';
import { Clock, TrendingUp, Calendar, Wallet } from 'lucide-react';
import Card from '../../ui/Card';

export default function ScheduleStats() {
  const stats = [
    {
      icon: Clock,
      value: '38h',
      label: 'Horas esta Semana',
      trend: '+2h',
      isPositive: true
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Ocupación',
      trend: '+5%',
      isPositive: true
    },
    {
      icon: Calendar,
      value: '12',
      label: 'Turnos Disponibles',
      trend: '+3',
      isPositive: true
    },
    {
      icon: Wallet,
      value: '450€',
      label: 'Ingresos Estimados',
      trend: '+45€',
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
              <div className={`flex items-center mt-2 ${
                stat.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                <span className="text-sm font-medium">{stat.trend}</span>
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="text-primary" size={20} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}