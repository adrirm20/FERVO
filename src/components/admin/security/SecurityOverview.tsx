import React from 'react';
import { Shield, Users, AlertTriangle, Lock } from 'lucide-react';
import Card from '../../ui/Card';

export default function SecurityOverview() {
  const stats = [
    {
      icon: Shield,
      value: '98.5%',
      label: 'Nivel de Seguridad',
      trend: '+2.5%',
      isPositive: true
    },
    {
      icon: Users,
      value: '1,234',
      label: 'Sesiones Activas',
      trend: '+45',
      isPositive: true
    },
    {
      icon: AlertTriangle,
      value: '23',
      label: 'Alertas Pendientes',
      trend: '-5',
      isPositive: true
    },
    {
      icon: Lock,
      value: '156',
      label: 'Intentos Bloqueados',
      trend: '+12',
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