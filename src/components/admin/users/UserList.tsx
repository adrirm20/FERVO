import React from 'react';
import UserCard from './UserCard';

export default function UserList() {
  const users = [
    {
      id: '1',
      name: 'Juan García',
      email: 'juan@example.com',
      role: 'FARMER',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2024-03-20',
      location: 'Madrid, España',
      stats: {
        orders: 45,
        rating: 4.8
      },
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=240'
    },
    {
      id: '2',
      name: 'María López',
      email: 'maria@example.com',
      role: 'SUPPLIER',
      status: 'active',
      joinDate: '2024-02-01',
      lastActive: '2024-03-19',
      location: 'Valencia, España',
      stats: {
        products: 23,
        sales: '12.5k€'
      },
      image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=240'
    }
  ];

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}