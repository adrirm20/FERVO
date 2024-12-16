import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from '../../hooks/useTranslation';

export default function ThemePanel() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: 'light',
      icon: Sun,
      title: t('settings.theme.light'),
      description: t('settings.theme.lightDesc')
    },
    {
      id: 'dark',
      icon: Moon,
      title: t('settings.theme.dark'),
      description: t('settings.theme.darkDesc')
    },
    {
      id: 'system',
      icon: Monitor,
      title: t('settings.theme.system'),
      description: t('settings.theme.systemDesc')
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {themes.map((themeOption) => (
        <button
          key={themeOption.id}
          onClick={() => setTheme(themeOption.id as 'light' | 'dark' | 'system')}
          className={`w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm transition-all ${
            theme === themeOption.id 
              ? 'ring-2 ring-primary dark:ring-primary/70' 
              : ''
          } hover:bg-gray-50 dark:hover:bg-gray-700/50`}
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg transition-colors ${
              theme === themeOption.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}>
              <themeOption.icon size={20} />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-medium text-gray-800 dark:text-white">
                {themeOption.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {themeOption.description}
              </p>
            </div>
            {theme === themeOption.id && (
              <div className="w-2 h-2 rounded-full bg-primary dark:bg-primary/70"></div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}