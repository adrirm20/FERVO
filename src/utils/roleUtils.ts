import { UserRole } from '../types/auth';

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  'ADMIN': 3,
  'SUPPLIER': 2,
  'FARMER': 1,
  'DRIVER': 1
};

export const hasPermission = (userRole: UserRole, requiredRole: UserRole): boolean => {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
};

export const getRoleRoutes = (role: UserRole): string[] => {
  const baseRoutes = ['/marketplace', '/orders', '/profile', '/settings'];
  
  switch (role) {
    case 'ADMIN':
      return [
        ...baseRoutes,
        '/admin/dashboard',
        '/admin/users',
        '/admin/security',
        '/admin/metrics',
        '/admin/database'
      ];
    case 'FARMER':
      return [
        ...baseRoutes,
        '/dashboard/farmer',
        '/crops',
        '/recurring-orders',
        '/deliveries',
        '/payments',
        '/history'
      ];
    case 'SUPPLIER':
      return [
        ...baseRoutes,
        '/dashboard/supplier',
        '/store',
        '/inventory',
        '/customers',
        '/analytics',
        '/shipping'
      ];
    case 'DRIVER':
      return [
        ...baseRoutes,
        '/dashboard/driver',
        '/delivery-zone',
        '/schedule',
        '/earnings',
        '/routes',
        '/driver-stats'
      ];
    default:
      return baseRoutes;
  }
};