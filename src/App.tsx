import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <Navigation />
              <main className="pt-16 pb-20">
                <AppRoutes />
              </main>
              <Toaster 
                position="top-center"
                toastOptions={{
                  className: 'dark:bg-gray-800 dark:text-white',
                  duration: 3000,
                  style: {
                    background: '#fff',
                    color: '#363636',
                  },
                }}
              />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;