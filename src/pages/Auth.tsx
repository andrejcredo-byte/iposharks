import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Marketplace } from './pages/Marketplace';
import { Portfolio } from './pages/Portfolio';
import { Profile } from './pages/Profile';
import { Dashboard } from './pages/Dashboard';
import { Auth } from './pages/Auth';
import { motion, AnimatePresence } from 'motion/react';


const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full w-full overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
};


const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8 flex items-center justify-center h-[calc(100vh-80px)] w-full">
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-700 uppercase tracking-widest italic">
        {title}
      </h2>
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
      <AppContent
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
}


function AppContent({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsAuthenticated
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
  setIsAuthenticated: (v: boolean) => void;
}) {

  const location = useLocation();

  return (
    <div className="fixed inset-0 flex h-[100dvh] w-screen max-w-[100vw] bg-shark-bg font-sans text-white overflow-hidden overscroll-none">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onLogout={() => setIsAuthenticated(false)}
      />

      <main className="flex flex-1 flex-col h-full relative overflow-hidden">

        <Header onMenuOpen={() => setIsSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain">

          <AnimatePresence mode="wait">

            <PageTransition key={location.pathname}>

              <Routes location={location}>

                <Route path="/" element={<Dashboard />} />

                <Route path="/marketplace" element={<Marketplace />} />

                <Route path="/portfolio" element={<Portfolio />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/news" element={<Placeholder title="Новости" />} />

                <Route path="/wallet" element={<Placeholder title="Инвест Счёт" />} />

                <Route path="/partners" element={<Placeholder title="Партнеры" />} />

                <Route path="*" element={<Navigate to="/" replace />} />

              </Routes>

            </PageTransition>

          </AnimatePresence>

        </div>

      </main>

    </div>
  );
}
