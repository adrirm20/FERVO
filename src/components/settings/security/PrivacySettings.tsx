import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import Button from '../../ui/Button';

interface PrivacyOption {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

const privacyOptions: PrivacyOption[] = [
  {
    id: 'profile',
    title: 'Perfil público',
    description: 'Permite que otros usuarios vean tu perfil',
    enabled: true
  },
  {
    id: 'location',
    title: 'Compartir ubicación',
    description: 'Mostrar tu ubicación a otros usuarios',
    enabled: false
  },
  {
    id: 'activity',
    title: 'Estado de actividad',
    description: 'Mostrar cuando estás en línea',
    enabled: true
  }
];

export default function PrivacySettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settings, setSettings] = useState(privacyOptions);

  const handleToggle = (settingId: string) => {
    setSettings(settings.map(setting => 
      setting.id === settingId 
        ? { ...setting, enabled: !setting.enabled }
        : setting
    ));
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Eye className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800">Privacidad</h3>
            <p className="text-sm text-gray-500 mb-3">Controla quién puede ver tu información</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-primary font-medium"
            >
              Configurar
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md m-4 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Configuración de privacidad</h3>
            <div className="space-y-4">
              {settings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">{setting.title}</h4>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={setting.enabled}
                      onChange={() => handleToggle(setting.id)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              fullWidth
              className="mt-6"
              onClick={() => setIsModalOpen(false)}
            >
              Guardar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}