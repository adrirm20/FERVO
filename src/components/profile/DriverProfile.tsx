import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Clock, Wallet, MapPin, BarChart2, Settings } from 'lucide-react';
import IconBadge from '../ui/IconBadge';
import LogoutButton from './LogoutButton';
import { useTranslation } from '../../hooks/useTranslation';

export default function DriverProfile() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const stats = [
    { label: t('stats.driver.deliveries'), value: '156' },
    { label: t('stats.driver.distance'), value: '4.9' },
    { label: t('stats.driver.rating'), value: '4.9' }
  ];

  const menuItems = [
    {
      icon: Navigation,
      title: t('menu.driver.zone.title'),
      description: t('menu.driver.zone.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      onClick: () => navigate('/delivery-zone')
    },
    {
      icon: Clock,
      title: t('menu.driver.schedule.title'),
      description: t('menu.driver.schedule.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      onClick: () => navigate('/schedule')
    },
    {
      icon: Wallet,
      title: t('menu.driver.earnings.title'),
      description: t('menu.driver.earnings.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      onClick: () => navigate('/earnings')
    },
    {
      icon: MapPin,
      title: t('menu.driver.routes.title'),
      description: t('menu.driver.routes.description'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      onClick: () => navigate('/routes')
    },
    {
      icon: BarChart2,
      title: t('menu.driver.stats.title'),
      description: t('menu.driver.stats.description'),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      onClick: () => navigate('/driver-stats')
    },
    {
      icon: Settings,
      title: t('menu.driver.settings.title'),
      description: t('menu.driver.settings.description'),
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-800',
      onClick: () => navigate('/settings')
    }
  ];

  return (
    <div className="pb-20">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm text-center">
            <div className="text-lg font-semibold text-gray-800 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={item.onClick}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
          >
            <IconBadge icon={item.icon} color={item.color} bgColor={item.bgColor} />
            <div className="flex-1 text-left">
              <h3 className="font-medium text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          </button>
        ))}

        <LogoutButton />
      </div>
    </div>
  );
}