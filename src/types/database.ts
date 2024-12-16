export interface DatabaseMetrics {
  totalSize: string;
  connections: number;
  uptime: string;
  responseTime: string;
  availableSpace?: string;
}

export interface DatabaseStatus {
  isHealthy: boolean;
  lastCheck: string;
  activeConnections: number;
  memoryUsage: string;
  cpuUsage: string;
}

export interface ServerStatus {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  metrics: {
    cpu: string;
    memory: string;
    disk: string;
  };
}

export interface QueryLog {
  id: string;
  query: string;
  duration: string;
  timestamp: string;
  status: 'success' | 'error' | 'slow';
}

export interface BackupInfo {
  id: string;
  type: 'full' | 'incremental';
  size: string;
  date: string;
  status: 'completed' | 'in_progress' | 'failed';
}