import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Marketplace } from './pages/Marketplace';
import { Portfolio } from './pages/Portfolio';
import { Auth } from './pages/Auth';
import { motion, AnimatePresence } from 'motion/react';

// Animated Page Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

// Placeholder for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8 flex items-center justify-center h-[calc(100vh-80px)]">
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-700 uppercase tracking-widest italic">{title}</h2>
      <p className="text-gray-500">Этот раздел находится в разработке</p>
    </div>
  </div>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-shark-bg font-sans text-white overflow-x-hidden">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          onLogout={() => setIsAuthenticated(false)}
        />
        
        <main className="flex-1 lg:ml-64 min-h-screen flex flex-col w-full">
          <Header onMenuOpen={() => setIsSidebarOpen(true)} />
          
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Navigate to="/marketplace" />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/news" element={<Placeholder title="Новости" />} />
                <Route path="/wallet" element={<Placeholder title="Инвест Счёт" />} />
                <Route path="/partners" element={<Placeholder title="Партнеры" />} />
              </Routes>
            </PageTransition>
          </div>
        </main>
      </div>
    </Router>
  );
}
