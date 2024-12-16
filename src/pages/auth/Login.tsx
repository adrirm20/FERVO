import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Logo from '../../components/ui/Logo';
import { useAuth } from '../../contexts/AuthContext';
import { AuthService } from '../../services/authService';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await AuthService.login(formData);
      
      if (user) {
        login(user);
        toast.success('Inicio de sesión exitoso');
        
        if (user.role === 'ADMIN') {
          navigate('/admin/dashboard');
        } else {
          navigate(`/dashboard/${user.role.toLowerCase()}`);
        }
      } else {
        toast.error('Credenciales inválidas');
      }
    } catch (error) {
      toast.error('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Logo size="lg" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Bienvenido a Fervo
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Inicia sesión para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Usuario
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
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

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={loading}
            className="mt-6"
          >
            {loading ? (
              'Iniciando sesión...'
            ) : (
              <>
                Iniciar Sesión
                <ArrowRight size={18} className="ml-2" />
              </>
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes una cuenta?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-primary hover:text-primary-dark font-medium"
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
}