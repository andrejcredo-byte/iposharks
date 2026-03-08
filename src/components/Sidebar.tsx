import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  ShoppingBag, 
  Newspaper, 
  Wallet, 
  Users,
  User,
  LogOut,
  X
} from 'lucide-react';
import { SHARK_LOGO } from '../assets/logo';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: LayoutDashboard, label: 'ГЛАВНАЯ', path: '/' },
  { icon: Briefcase, label: 'ПОРТФЕЛЬ', path: '/portfolio' },
  { icon: ShoppingBag, label: 'МАРКЕТПЛЕЙС', path: '/marketplace', badge: 22 },
  { icon: Newspaper, label: 'НОВОСТИ', path: '/news' },
  { icon: Wallet, label: 'ИНВЕСТ СЧЁТ', path: '/wallet' },
  { icon: Users, label: 'ПАРТНЁРСКИЕ БОНУСЫ', path: '/partners' },
  { icon: User, label: 'ПРОФИЛЬ', path: '/profile' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onLogout }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={cn(
        "w-64 h-screen sidebar-gradient text-white flex flex-col fixed left-0 top-0 z-50 border-r border-white/5 transition-transform duration-300 lg:translate-x-0 pt-[env(safe-area-inset-top)]",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 lg:p-8 mb-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-1 shadow-xl group-hover:scale-110 group-hover:border-brand-primary/50 transition-all duration-300">
              <img 
                src={SHARK_LOGO} 
                alt="Shark Logo" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-lg lg:text-xl font-black italic tracking-tighter flex flex-col leading-none">
              <span className="text-brand-primary">IPO</span>
              <span className="text-white">SHARKS</span>
            </h1>
          </Link>
          <button onClick={onClose} className="lg:hidden p-2 text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => { if (window.innerWidth < 1024) onClose(); }}
              className={({ isActive }) => cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                isActive ? "bg-brand-primary/20 text-brand-primary shadow-[0_0_20px_rgba(59,130,246,0.2)]" : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={20} className={cn("transition-opacity", "opacity-80 group-hover:opacity-100")} />
              <span className="text-xs font-bold tracking-wider">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-brand-secondary text-[10px] px-1.5 py-0.5 rounded-full font-bold text-white">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        
        <div className="p-6 border-t border-white/5">
          <button 
            onClick={onLogout}
            className="flex items-center gap-4 px-4 py-3 w-full hover:bg-white/5 rounded-xl transition-all text-white/70 hover:text-white"
          >
            <LogOut size={20} />
            <span className="text-xs font-bold tracking-wider uppercase">Выход</span>
          </button>
        </div>
      </aside>
    </>
  );
};
