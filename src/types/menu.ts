import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface StatItem {
  label: string;
  value: string;
}