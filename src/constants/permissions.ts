import { UserRole } from '../types/auth';

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  'ADMIN': 3,
  'SUPPLIER': 2,
  'FARMER': 1,
  'DRIVER': 1
};

export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  ADMIN: ['ADMIN', 'SUPPLIER', 'FARMER', 'DRIVER'],
  SUPPLIER: ['SUPPLIER'],
  FARMER: ['FARMER'],
  DRIVER: ['DRIVER']
};

export const ROLE_ROUTES: Record<UserRole, string[]> = {
  ADMIN: [
    '/admin/*',
    '/marketplace',
    '/orders',
    '/profile',
    '/settings'
  ],
  SUPPLIER: [
    '/supplier/*',
    '/marketplace',
    '/orders',
    '/profile',
    '/settings'
  ],
  FARMER: [
    '/farmer/*',
    '/marketplace',
    '/orders',
    '/profile',
    '/settings'
  ],
  DRIVER: [
    '/driver/*',
    '/marketplace',
    '/orders',
    '/profile',
    '/settings'
  ]
};

export const PROTECTED_ROUTES = [
  '/admin/*',
  '/supplier/*',
  '/farmer/*',
  '/driver/*',
  '/marketplace',
  '/orders',
  '/profile',
  '/settings'
];