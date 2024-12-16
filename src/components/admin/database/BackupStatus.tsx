```tsx
import React from 'react';
import { HardDrive, CheckCircle, Clock, Download } from 'lucide-react';
import Button from '../../ui/Button';

export default function BackupStatus() {
  const backups = [
    {
      id: '1',
      type: 'Completo',
      date: '2024-03-20 02:00',
      size: '42.3 GB',
      status: 'completed'
    },
    {
      id: '2',
      type: 'Incremental',
      date: '2024-03-19 02:00',
      size: '2.1 GB',
      status: 'completed'
    },
    {
      id: '3',
      type: 'Incremental',
      date: '2024-03-18 02:00',
      size: '1.8 GB',
      status: 'completed'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <HardDrive className="text-primary" size={24} />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Copias de Seguridad
          </h3>
        </div>
        <Button variant="outline" size="sm">
          Programar Backup
        </Button>
      </div>

      <div className="space-y-4">
        {backups.map((backup) => (
          <div
            key={backup.id}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {backup.type}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{backup.date}</span>
                    <span>•</span>
                    <span>{backup.size}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download size={16} className="mr-2" />
                Descargar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```