import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Emails from './pages/Emails';

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected */}
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/emails"
        element={token ? <Emails /> : <Navigate to="/login" />}
      />

      {/*  ALWAYS start from login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
