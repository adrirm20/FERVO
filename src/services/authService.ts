import { User, LoginFormData, AdminCredentials } from '../types/auth';

const ADMIN_CREDENTIALS: AdminCredentials = {
  username: 'fervo',
  password: 'Lamimi@4306@'
};

export class AuthService {
  static async login(credentials: LoginFormData): Promise<User | null> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if admin credentials
    if (credentials.email === ADMIN_CREDENTIALS.username && 
        credentials.password === ADMIN_CREDENTIALS.password) {
      return {
        id: 'admin-1',
        email: ADMIN_CREDENTIALS.username,
        name: 'Administrador',
        role: 'ADMIN'
      };
    }

    // For demo purposes, return mock user
    return {
      id: '1',
      email: credentials.email,
      name: 'Usuario Demo',
      role: localStorage.getItem('userRole') as 'FARMER' | 'SUPPLIER' | 'DRIVER' || 'FARMER'
    };
  }

  static async logout(): Promise<void> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
  }
}