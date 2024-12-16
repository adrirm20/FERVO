import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Package, User } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Navigation() {
  const { t } = useTranslation();

  const navItems = [
    { icon: Home, label: t('navigation.home'), path: '/' },
    { icon: ShoppingBag, label: t('navigation.explore'), path: '/marketplace' },
    { icon: Package, label: t('navigation.orders'), path: '/orders' },
    { icon: User, label: t('navigation.profile'), path: '/profile' }
  ];

  return (
    <>
      {/* Top Navigation with Logo */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-10">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Fervo</h1>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 z-10">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center space-y-1 ${
                  isActive 
                    ? 'text-primary dark:text-white' 
                    : 'text-gray-400 dark:text-gray-500'
                }`
              }
            >
              <item.icon size={24} />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}