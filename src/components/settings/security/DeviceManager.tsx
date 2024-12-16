import React, { useState } from 'react';
import { Shield, Smartphone, Laptop, Globe } from 'lucide-react';
import Button from '../../ui/Button';

interface Device {
  id: string;
  name: string;
  type: 'mobile' | 'desktop' | 'tablet';
  lastActive: string;
  location: string;
}

const mockDevices: Device[] = [
  {
    id: '1',
    name: 'iPhone 12',
    type: 'mobile',
    lastActive: 'Ahora',
    location: 'Madrid, España'
  },
  {
    id: '2',
    name: 'MacBook Pro',
    type: 'desktop',
    lastActive: 'Hace 2 horas',
    location: 'Barcelona, España'
  }
];

export default function DeviceManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [devices, setDevices] = useState(mockDevices);

  const handleRemoveDevice = (deviceId: string) => {
    setDevices(devices.filter(device => device.id !== deviceId));
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile':
        return Smartphone;
      case 'desktop':
        return Laptop;
      default:
        return Globe;
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800">Dispositivos conectados</h3>
            <p className="text-sm text-gray-500 mb-3">Gestiona tus sesiones activas</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-primary font-medium"
            >
              Gestionar
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md m-4 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Dispositivos conectados</h3>
            <div className="space-y-4">
              {devices.map((device) => {
                const DeviceIcon = getDeviceIcon(device.type);
                return (
                  <div key={device.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <DeviceIcon className="text-gray-600" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-800">{device.name}</h4>
                        <p className="text-xs text-gray-500">
                          {device.location} • {device.lastActive}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveDevice(device.id)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                );
              })}
            </div>
            <Button
              variant="outline"
              fullWidth
              className="mt-6"
              onClick={() => setIsModalOpen(false)}
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}