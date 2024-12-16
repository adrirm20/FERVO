export type UserRole = 'ADMIN' | 'FARMER' | 'SUPPLIER' | 'DRIVER';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AdminCredentials {
  username: string;
  password: string;
}