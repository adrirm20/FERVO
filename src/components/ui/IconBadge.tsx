import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  color?: string;
  bgColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4'
};

const IconBadge: React.FC<IconBadgeProps> = ({ 
  icon: Icon, 
  color = 'text-primary dark:text-white',
  bgColor = 'bg-primary/10 dark:bg-gray-700',
  size = 'md'
}) => {
  return (
    <div className={`${sizeClasses[size]} ${bgColor} rounded-xl ${color}`}>
      <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
    </div>
  );
};

export default IconBadge;