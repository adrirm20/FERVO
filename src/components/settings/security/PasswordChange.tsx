import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import Button from '../../ui/Button';

export default function PasswordChange() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement password change logic here
    if (newPassword === confirmPassword) {
      // Update password
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Lock className="text-primary" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800">Contraseña</h3>
            <p className="text-sm text-gray-500 mb-3">Cambia tu contraseña de acceso</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-primary font-medium"
            >
              Cambiar
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md m-4 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Cambiar Contraseña</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña actual
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar nueva contraseña
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                  Guardar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}