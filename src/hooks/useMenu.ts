import { useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { MenuItem } from '../types/menu';
import { getRoleMenuItems } from '../utils/menuUtils';

export const useMenu = () => {
  const { user } = useAuth();

  const menuItems = useMemo(() => {
    if (!user) return [];
    return getRoleMenuItems(user.role);
  }, [user]);

  return { menuItems };
};