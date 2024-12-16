import React, { useState } from 'react';
import { Fingerprint } from 'lucide-react';
import Button from '../../ui/Button';

export default function TwoFactorAuth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement 2FA verification logic here
    setIsEnabled(true);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Fingerprint className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800">Autenticación de dos factores</h3>
            <p className="text-sm text-gray-500 mb-3">Añade una capa extra de seguridad</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-primary font-medium"
            >
              {isEnabled ? 'Configurar' : 'Activar'}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md m-4 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">
              Autenticación de dos factores
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Ingresa el código de verificación que recibiste en tu dispositivo
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Código de verificación
                </label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  maxLength={6}
                  required
                />
              </div>
              <div className="flex space-x-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" variant="primary" fullWidth>
                  Verificar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}