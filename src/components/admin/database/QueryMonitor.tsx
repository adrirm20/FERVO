import React from 'react';
import { Activity, AlertTriangle } from 'lucide-react';
import { useDatabase } from '../../../hooks/useDatabase';

export default function QueryMonitor() {
  const { queryLogs, loading, error } = useDatabase();

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="text-primary" size={24} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Monitor de Consultas
        </h3>
      </div>

      <div className="space-y-4">
        {queryLogs?.map((query) => (
          <div
            key={query.id}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="font-mono text-sm text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-600 p-2 rounded">
                  {query.query}
                </div>
              </div>
              <div className="ml-4 flex items-center">
                {query.status === 'slow' && (
                  <AlertTriangle className="text-yellow-500 mr-2" size={20} />
                )}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  query.status === 'success'
                    ? 'bg-green-50 text-green-600 dark:bg-green-900/20'
                    : 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20'
                }`}>
                  {query.duration}
                </span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" />
              {query.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}