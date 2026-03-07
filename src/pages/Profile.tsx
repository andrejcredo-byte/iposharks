import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Calendar, 
  Mail, 
  Phone, 
  ShieldCheck, 
  History, 
  Briefcase, 
  TrendingUp,
  Settings,
  ArrowRight
} from 'lucide-react';

export const Profile: React.FC = () => {
  const user = {
    firstName: 'Shark',
    lastName: 'Investor',
    email: 'user@iposharks.com',
    phone: '+7 (999) 000-SHARK',
    regDate: '12.05.2023',
    dealsCount: 32,
    totalInvested: 124500,
    status: 'Premium VIP',
    history: [
      { id: 1, company: 'Circle', amount: 25000, date: '15.05.2023', status: 'Completed' },
      { id: 2, company: 'CoreWeave', amount: 50000, date: '10.11.2023', status: 'Completed' },
      { id: 3, company: 'Cerebras', amount: 15000, date: '05.01.2024', status: 'Completed' },
      { id: 4, company: 'Ripple', amount: 10000, date: '20.08.2022', status: 'Completed' },
    ]
  };

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 bg-shark-bg min-h-full max-w-full overflow-x-hidden pb-20">
      {/* Profile Header */}
      <div className="bg-shark-card rounded-[32px] border border-white/5 shadow-2xl overflow-hidden relative">
        <div className="h-32 lg:h-48 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20 relative">
          <div className="absolute inset-0 backdrop-blur-3xl opacity-50"></div>
        </div>
        
        <div className="px-6 lg:px-10 pb-8 -mt-12 lg:-mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-[32px] bg-shark-bg border-4 border-shark-card shadow-2xl flex items-center justify-center text-brand-primary overflow-hidden relative group">
                <User size={48} className="lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="text-center lg:text-left space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tight italic uppercase">
                    {user.firstName} {user.lastName}
                  </h2>
                  <ShieldCheck size={20} className="text-brand-primary" />
                </div>
                <p className="text-xs lg:text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">
                  {user.status} • ID: 884920
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[10px] lg:text-xs font-bold uppercase tracking-widest border border-white/5 transition-all">
                Редактировать
              </button>
              <button className="p-3 bg-brand-primary text-white rounded-2xl shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-shark-card p-6 lg:p-8 rounded-[32px] border border-white/5 shadow-xl space-y-6">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">Контактные данные</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-bold text-white">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="p-2.5 bg-green-500/10 text-green-400 rounded-xl">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Телефон</p>
                  <p className="text-sm font-bold text-white">{user.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="p-2.5 bg-brand-secondary/10 text-brand-secondary rounded-xl">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Дата регистрации</p>
                  <p className="text-sm font-bold text-white">{user.regDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-shark-card p-6 lg:p-8 rounded-[32px] border border-white/5 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">Статистика</h3>
              <TrendingUp size={16} className="text-brand-primary" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[24px] font-black text-white">{user.dealsCount}</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Сделок</p>
              </div>
              <div className="space-y-1">
                <p className="text-[24px] font-black text-brand-primary">100%</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Успех</p>
              </div>
            </div>
          </div>
        </div>

        {/* History & Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-shark-card rounded-[32px] border border-white/5 shadow-xl overflow-hidden">
            <div className="p-6 lg:p-8 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <History size={20} className="text-brand-primary" />
                <h3 className="text-xs lg:text-sm font-black text-white uppercase tracking-[0.3em]">История сделок</h3>
              </div>
              <button className="text-[10px] font-bold text-brand-primary hover:underline uppercase tracking-widest">Все операции</button>
            </div>
            
            <div className="divide-y divide-white/5">
              {user.history.map((item) => (
                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:border-brand-primary/30 transition-all">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white uppercase italic">{item.company}</p>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.date}</p>
                    </div>
                  </div>
                  
                  <div className="text-right flex items-center gap-6">
                    <div className="hidden sm:block">
                      <p className="text-sm font-black text-white">${item.amount.toLocaleString()}</p>
                      <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{item.status}</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-700 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-primary/5 border border-brand-primary/10 p-6 lg:p-8 rounded-[32px] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-lg font-black text-white uppercase italic tracking-tighter">Повысьте свой статус</h4>
              <p className="text-xs text-gray-400 max-w-xs">Откройте доступ к эксклюзивным pre-IPO раундам и персональному менеджеру.</p>
            </div>
            <button className="px-8 py-4 bg-brand-primary text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/30 hover:scale-105 transition-all whitespace-nowrap">
              Апгрейд аккаунта
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
