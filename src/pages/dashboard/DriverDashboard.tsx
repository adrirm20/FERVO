import React from 'react';
import { Package, TrendingUp, MapPin, Navigation } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import DriverStats from '../../components/driver/DriverStats';

export default function DriverDashboard() {
  const deliveries = [
    {
      id: 'DEL123',
      pickup: 'Almacén Central',
      destination: 'Granja Los Olivos',
      status: 'En espera',
      distance: '12km',
      payment: '15€'
    }
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Panel de Repartidor</h1>
        <Button variant="primary" size="sm">
          Iniciar Turno
        </Button>
      </div>

      <DriverStats />

      <section className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Entregas Pendientes</h2>
        <div className="space-y-4">
          {deliveries.map((delivery) => (
            <Card key={delivery.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-medium">{delivery.id}</p>
                  <p className="text-sm text-gray-600">{delivery.distance}</p>
                </div>
                <span className="text-primary font-medium">{delivery.payment}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-gray-400" />
                  <p className="text-sm">{delivery.pickup}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-primary" />
                  <p className="text-sm">{delivery.destination}</p>
                </div>
              </div>
              <Button variant="primary" fullWidth className="mt-4">
                Aceptar Entrega
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}