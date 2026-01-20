import { HashRouter as BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
import { Login } from './pages/Login';
import { AuthGuard } from './components/AuthGuard';
import { Dashboard } from './pages/Dashboard';
import { Onboarding } from './pages/Onboarding';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          } />
          <Route path="/onboarding" element={
            <AuthGuard>
              <Onboarding />
            </AuthGuard>
          } />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
