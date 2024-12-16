import React from 'react';
import { Bell, MessageSquare, Mail, Tag } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function NotificationsPanel() {
  const { t } = useTranslation();

  const notifications = [
    {
      id: 'push',
      icon: Bell,
      title: t('settings.notifications.push'),
      description: t('settings.notifications.pushDesc'),
      enabled: true
    },
    {
      id: 'messages',
      icon: MessageSquare,
      title: t('settings.notifications.messages'),
      description: t('settings.notifications.messagesDesc'),
      enabled: true
    },
    {
      id: 'email',
      icon: Mail,
      title: t('settings.notifications.email'),
      description: t('settings.notifications.emailDesc'),
      enabled: false
    },
    {
      id: 'offers',
      icon: Tag,
      title: t('settings.notifications.offers'),
      description: t('settings.notifications.offersDesc'),
      enabled: true
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <notification.icon className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{notification.title}</h3>
                <p className="text-sm text-gray-500">{notification.description}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked={notification.enabled}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}