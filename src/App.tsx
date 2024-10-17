import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SpecialistList from './components/SpecialistList';
import Calendar from './components/Calendar';
import BookingForm from './components/BookingForm';
import SpecialistLogin from './components/SpecialistLogin';
import SpecialistDashboard from './components/SpecialistDashboard';
import SpecialistProfile from './components/SpecialistProfile';
import PublicProfile from './components/PublicProfile';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// ... (pozostała część kodu pozostaje bez zmian)

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              {/* ... (pozostałe ścieżki pozostają bez zmian) */}
              <Route path="/specialist-profile" element={
                <ProtectedRoute allowedRoles={['specialist']}>
                  <SpecialistProfile />
                </ProtectedRoute>
              } />
              <Route path="/public-profile" element={
                <ProtectedRoute allowedRoles={['specialist']}>
                  <PublicProfile />
                </ProtectedRoute>
              } />
              {/* ... (pozostałe ścieżki pozostają bez zmian) */}
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;