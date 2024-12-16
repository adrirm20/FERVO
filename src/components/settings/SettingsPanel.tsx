import React, { useState } from 'react';
import { Bell, Shield, Globe, Moon, ChevronLeft } from 'lucide-react';
import IconBadge from '../ui/IconBadge';
import { useTranslation } from '../../hooks/useTranslation';
import NotificationsPanel from './NotificationsPanel';
import SecurityPanel from './SecurityPanel';
import ThemePanel from './ThemePanel';
import LanguageSelector from './LanguageSelector';
import Logo from '../ui/Logo';

type Panel = 'main' | 'notifications' | 'security' | 'language' | 'theme';

export default function SettingsPanel() {
  const { t } = useTranslation();
  const [currentPanel, setCurrentPanel] = useState<Panel>('main');

  const renderPanel = () => {
    switch (currentPanel) {
      case 'notifications':
        return <NotificationsPanel />;
      case 'security':
        return <SecurityPanel />;
      case 'theme':
        return <ThemePanel />;
      case 'language':
        return <LanguageSelector onClose={() => setCurrentPanel('main')} />;
      default:
        return null;
    }
  };

  const settingsList = [
    {
      id: 'notifications',
      icon: Bell,
      title: t('settings.notifications.title'),
      description: t('settings.notifications.desc'),
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'security',
      icon: Shield,
      title: t('settings.security.title'),
      description: t('settings.security.desc'),
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'language',
      icon: Globe,
      title: t('settings.language.title'),
      description: t('settings.language.desc'),
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 'theme',
      icon: Moon,
      title: t('settings.theme.title'),
      description: t('settings.theme.desc'),
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-4 flex items-center space-x-4 border-b border-gray-100 dark:border-gray-700">
        {currentPanel !== 'main' ? (
          <button
            onClick={() => setCurrentPanel('main')}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <ChevronLeft size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
        ) : (
          <Logo size="sm" />
        )}
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {currentPanel === 'main'
            ? t('settings.title')
            : settingsList.find(s => s.id === currentPanel)?.title}
        </h1>
      </div>

      {currentPanel === 'main' ? (
        <div className="p-4 space-y-3">
          {settingsList.map((setting) => (
            <button
              key={setting.id}
              onClick={() => setCurrentPanel(setting.id as Panel)}
              className="w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <IconBadge
                icon={setting.icon}
                color={setting.color}
                bgColor={setting.bgColor}
              />
              <div className="flex-1 text-left mt-3">
                <h3 className="font-medium text-gray-800 dark:text-white">
                  {setting.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {setting.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        renderPanel()
      )}
    </div>
  );
}