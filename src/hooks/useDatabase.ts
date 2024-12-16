import { useState, useEffect } from 'react';
import { DatabaseMetrics, DatabaseStatus } from '../types/database';
import { databaseService } from '../services/databaseService';

export const useDatabase = () => {
  const [metrics, setMetrics] = useState<DatabaseMetrics | null>(null);
  const [status, setStatus] = useState<DatabaseStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDatabaseStatus = async () => {
      try {
        const [metricsData, statusData] = await Promise.all([
          databaseService.getMetrics(),
          databaseService.getStatus()
        ]);
        
        setMetrics(metricsData);
        setStatus(statusData);
      } catch (err) {
        setError('Error al obtener el estado de la base de datos');
      } finally {
        setLoading(false);
      }
    };

    fetchDatabaseStatus();
    const interval = setInterval(fetchDatabaseStatus, 30000); // Update every 30s

    return () => clearInterval(interval);
  }, []);

  return { metrics, status, loading, error };
};