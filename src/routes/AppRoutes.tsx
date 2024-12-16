import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// Admin Pages
import AdminDashboard from '../pages/admin/Dashboard';
import UserManagement from '../pages/admin/UserManagement';
import Security from '../pages/admin/Security';
import Metrics from '../pages/admin/Metrics';
import Database from '../pages/admin/Database';

// Farmer Pages
import FarmerDashboard from '../pages/dashboard/FarmerDashboard';
import Crops from '../pages/farmer/Crops';
import RecurringOrders from '../pages/farmer/RecurringOrders';
import Deliveries from '../pages/farmer/Deliveries';
import Payments from '../pages/farmer/Payments';
import History from '../pages/farmer/History';

// Supplier Pages
import SupplierDashboard from '../pages/dashboard/SupplierDashboard';
import Store from '../pages/supplier/Store';
import Inventory from '../pages/supplier/Inventory';
import Customers from '../pages/supplier/Customers';
import Analytics from '../pages/supplier/Analytics';
import Shipping from '../pages/supplier/Shipping';

// Driver Pages
import DriverDashboard from '../pages/dashboard/DriverDashboard';
import DeliveryZone from '../pages/driver/DeliveryZone';
import Schedule from '../pages/driver/Schedule';
import Earnings from '../pages/driver/Earnings';
import DriverRoutes from '../pages/driver/Routes';
import Stats from '../pages/driver/Stats';

// Common Pages
import Marketplace from '../pages/Marketplace';
import Orders from '../pages/Orders';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

export default function AppRoutes() {
  const { user } = useAuth();

  const getDefaultRoute = () => {
    if (!user) return '/login';
    
    switch (user.role) {
      case 'ADMIN':
        return '/admin/dashboard';
      case 'FARMER':
        return '/dashboard/farmer';
      case 'SUPPLIER':
        return '/dashboard/supplier';
      case 'DRIVER':
        return '/dashboard/driver';
      default:
        return '/';
    }
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected Admin Routes */}
      <Route path="/admin/*" element={
        <ProtectedRoute requiredRole="ADMIN">
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="security" element={<Security />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="database" element={<Database />} />
          </Routes>
        </ProtectedRoute>
      } />

      {/* Protected Farmer Routes */}
      <Route path="/farmer/*" element={
        <ProtectedRoute requiredRole="FARMER">
          <Routes>
            <Route path="dashboard" element={<FarmerDashboard />} />
            <Route path="crops" element={<Crops />} />
            <Route path="recurring-orders" element={<RecurringOrders />} />
            <Route path="deliveries" element={<Deliveries />} />
            <Route path="payments" element={<Payments />} />
            <Route path="history" element={<History />} />
          </Routes>
        </ProtectedRoute>
      } />
      
      {/* Protected Supplier Routes */}
      <Route path="/supplier/*" element={
        <ProtectedRoute requiredRole="SUPPLIER">
          <Routes>
            <Route path="dashboard" element={<SupplierDashboard />} />
            <Route path="store" element={<Store />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="customers" element={<Customers />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="shipping" element={<Shipping />} />
          </Routes>
        </ProtectedRoute>
      } />
      
      {/* Protected Driver Routes */}
      <Route path="/driver/*" element={
        <ProtectedRoute requiredRole="DRIVER">
          <Routes>
            <Route path="dashboard" element={<DriverDashboard />} />
            <Route path="zone" element={<DeliveryZone />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="routes" element={<DriverRoutes />} />
            <Route path="stats" element={<Stats />} />
          </Routes>
        </ProtectedRoute>
      } />

      {/* Common Protected Routes */}
      <Route path="/marketplace" element={
        <ProtectedRoute>
          <Marketplace />
        </ProtectedRoute>
      } />

      <Route path="/orders" element={
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      } />

      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />

      <Route path="/settings" element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } />

      {/* Default Route */}
      <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />
      
      {/* 404 Route */}
      <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
    </Routes>
  );
}