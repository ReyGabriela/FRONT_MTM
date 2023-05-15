import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Dashboard from '../admin/components/Dashboard';
import Login from '../admin/components/Login';

const AdminRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default AdminRoutes;