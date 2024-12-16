import { create } from 'zustand';

interface AnalyticsStore {
  timeRange: string;
  setTimeRange: (range: string) => void;
}

export const useAnalytics = create<AnalyticsStore>((set) => ({
  timeRange: 'week',
  setTimeRange: (range) => set({ timeRange: range })
}));