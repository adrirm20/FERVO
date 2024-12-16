import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Package, Truck, Wallet, History, Settings } from 'lucide-react';
import IconBadge from '../ui/IconBadge';
import LogoutButton from './LogoutButton';
import { useTranslation } from '../../hooks/useTranslation';

const FarmerProfile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const stats = [
    { label: t('stats.farmer.orders'), value: '12' },
    { label: t('stats.farmer.inProgress'), value: '3' },
    { label: t('stats.farmer.completed'), value: '45' }
  ];

  const menuItems = [
    {
      icon: Sprout,
      title: t('menu.farmer.crops.title'),
      description: t('menu.farmer.crops.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      onClick: () => navigate('/crops')
    },
    {
      icon: Package,
      title: t('menu.farmer.recurring.title'),
      description: t('menu.farmer.recurring.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      onClick: () => navigate('/recurring-orders')
    },
    {
      icon: Truck,
      title: t('menu.farmer.deliveries.title'),
      description: t('menu.farmer.deliveries.description'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      onClick: () => navigate('/deliveries')
    },
    {
      icon: Wallet,
      title: t('menu.farmer.payments.title'),
      description: t('menu.farmer.payments.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      onClick: () => navigate('/payments')
    },
    {
      icon: History,
      title: t('menu.farmer.history.title'),
      description: t('menu.farmer.history.description'),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      onClick: () => navigate('/history')
    },
    {
      icon: Settings,
      title: t('menu.farmer.settings.title'),
      description: t('menu.farmer.settings.description'),
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
};

export default FarmerProfile;