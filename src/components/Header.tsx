import React from 'react';
import { Bell, Search, User, CheckCircle, Menu } from 'lucide-react';

export const Header: React.FC<{ onMenuOpen: () => void }> = ({ onMenuOpen }) => {
  return (
    <header className="h-16 lg:h-20 bg-shark-bg/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-2 lg:gap-4">
        <button 
          onClick={onMenuOpen}
          className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
        >
          <Menu size={20} className="lg:w-6 lg:h-6" />
        </button>
        
        <div className="hidden md:flex items-center gap-4 bg-white/5 px-4 py-2 rounded-2xl w-64 lg:w-96 border border-white/5">
          <Search size={18} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Поиск компаний..." 
            className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-gray-600"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="hidden sm:flex flex-col items-end px-4 border-r border-white/5">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Ваш баланс</p>
          <p className="text-sm font-black text-brand-primary">$124,500.00</p>
        </div>

        <div className="flex items-center gap-2 lg:gap-3 bg-brand-primary/10 text-brand-primary px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-brand-primary/20">
          <CheckCircle size={14} className="lg:w-4 lg:h-4" />
          <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">OK</span>
        </div>
        
        <button className="relative p-2 text-gray-500 hover:text-brand-primary transition-colors">
          <Bell size={20} className="lg:w-[22px] lg:h-[22px]" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-secondary rounded-full border border-shark-bg"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-2 lg:pl-6 border-l border-white/5">
          <div className="hidden xs:block text-right">
            <p className="text-[10px] lg:text-xs font-bold text-white">Shark</p>
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20">
            <User size={18} className="lg:w-5 lg:h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};
