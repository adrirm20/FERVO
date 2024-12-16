import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-4 text-red-600"
    >
      <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20">
        <LogOut size={20} />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium">Cerrar Sesión</h3>
        <p className="text-sm text-red-500">Salir de la aplicación</p>
      </div>
    </button>
  );
}