import React, { useState } from 'react';
import { Bell, Search, User, Menu, X, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC<{ onMenuOpen: () => void }> = ({ onMenuOpen }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: 'Новая сделка', text: 'Circle открыл новый раунд инвестиций', time: '2 мин. назад' },
    { id: 2, title: 'Выплата дивидендов', text: 'Начислено $450.00 от CoreWeave', time: '1 час назад' },
    { id: 3, title: 'Верификация', text: 'Ваш аккаунт успешно подтвержден', time: 'Вчера' },
  ];

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

        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2 transition-colors rounded-xl ${showNotifications ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-500 hover:text-brand-primary hover:bg-white/5'}`}
          >
            <Bell size={20} className="lg:w-[22px] lg:h-[22px]" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-secondary rounded-full border border-shark-bg"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-72 sm:w-80 bg-shark-card border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden"
                >
                  <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Уведомления</h4>
                    <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-white">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto no-scrollbar">
                    {notifications.map(n => (
                      <div key={n.id} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="flex gap-3">
                          <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg h-fit">
                            <Info size={14} />
                          </div>
                          <div className="space-y-1">
                            <p className="text-[11px] font-black text-white uppercase tracking-tight">{n.title}</p>
                            <p className="text-[10px] text-gray-400 leading-relaxed">{n.text}</p>
                            <p className="text-[9px] font-bold text-gray-600 uppercase">{n.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full p-3 text-[10px] font-black text-brand-primary hover:bg-brand-primary/5 transition-colors uppercase tracking-widest">
                    Показать все
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        
        <div 
          onClick={() => navigate('/profile')}
          className="flex items-center gap-3 pl-2 lg:pl-6 border-l border-white/5 cursor-pointer group"
        >
          <div className="hidden xs:block text-right">
            <p className="text-[10px] lg:text-xs font-bold text-white group-hover:text-brand-primary transition-colors">Shark</p>
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20 group-hover:border-brand-primary/50 group-hover:scale-105 transition-all">
            <User size={18} className="lg:w-5 lg:h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};
