import { useAuth } from './useAuth';
import { UserRole } from '../types/auth';
import { ROLE_PERMISSIONS, ROLE_ROUTES } from '../constants/permissions';

export const usePermissions = () => {
  const { user } = useAuth();

  const canAccess = (path: string, requiredRole?: UserRole): boolean => {
    if (!user) return false;

    // Check role-based access
    if (requiredRole && !ROLE_PERMISSIONS[user.role].includes(requiredRole)) {
      return false;
    }

    // Check route access
    const allowedRoutes = ROLE_ROUTES[user.role];
    return allowedRoutes.some(route => {
      if (route.endsWith('/*')) {
        const baseRoute = route.slice(0, -2);
        return path.startsWith(baseRoute);
      }
      return route === path;
    });
  };

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    return ROLE_PERMISSIONS[user.role].includes(permission);
  };

  return { canAccess, hasPermission };
};