import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tractor, Building2, Truck, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';
import { UserRole } from '../../types/auth';
import { useTranslation } from '../../hooks/useTranslation';

type Step = 1 | 2;

export default function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [step, setStep] = useState<Step>(1);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    {
      id: 'FARMER',
      icon: Tractor,
      title: 'Agricultor/Ganadero',
      description: 'Gestiona tus cultivos y compra suministros'
    },
    {
      id: 'SUPPLIER',
      icon: Building2,
      title: 'Proveedor',
      description: 'Vende tus productos a agricultores'
    },
    {
      id: 'DRIVER',
      icon: Truck,
      title: 'Repartidor',
      description: 'Realiza entregas a agricultores'
    }
  ];

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    localStorage.setItem('userRole', role);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;

    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/login');
    } catch (error) {
      setError('Error al registrar usuario');
    } finally {
      setLoading(false);
    }
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Logo size="lg" className="mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              ¿Cómo quieres usar Fervo?
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Selecciona tu rol en la plataforma
            </p>
          </div>

          <div className="space-y-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id as UserRole)}
                className="w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <role.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {role.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            ¿Ya tienes una cuenta?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-primary hover:text-primary-dark font-medium"
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Logo size="lg" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Completa tu registro
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Introduce tus datos para crear tu cuenta
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Correo electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Confirmar contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={loading}
            className="mt-6"
          >
            {loading ? (
              'Creando cuenta...'
            ) : (
              <>
                Crear cuenta
                <ArrowRight size={18} className="ml-2" />
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            fullWidth
            onClick={() => setStep(1)}
          >
            Volver
          </Button>
        </form>
      </div>
    </div>
  );
}