import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';
import NotFound from './components/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/" element={<ClientRoutes />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin"
            element={<Navigate to="/admin/login" replace />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
