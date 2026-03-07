import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { SHARK_LOGO } from '../assets/logo';

export const Auth: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (normalizedEmail === 'user' && normalizedPassword === 'user') {
      onLogin();
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="min-h-[100dvh] flex items-start justify-center bg-shark-bg p-4 overflow-y-auto relative pt-12 sm:pt-24">
      {/* Decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-shark-card rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl border border-white/5 space-y-6 sm:space-y-8 relative z-10"
      >
        <div className="text-center space-y-2">
          <motion.div 
            animate={{ 
              scale: [1, 1.02, 1],
              filter: [
                "drop-shadow(0 0 10px rgba(59,130,246,0.2))",
                "drop-shadow(0 0 20px rgba(59,130,246,0.4))",
                "drop-shadow(0 0 10px rgba(59,130,246,0.2))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 relative"
          >
            <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-2xl"></div>
            <div className="relative w-full h-full bg-shark-card rounded-2xl sm:rounded-[32px] border border-white/10 p-1 overflow-hidden shadow-2xl">
              <img 
                src={SHARK_LOGO} 
                alt="IPO Sharks Logo"
                className="w-full h-full object-cover rounded-xl sm:rounded-[28px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight italic uppercase">
            IPO <span className="text-brand-primary">SHARKS</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            {isLogin ? 'Войдите в свой кабинет инвестора' : 'Начните охоту за прибылью'}
          </p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center"
          >
            <p className="text-xs font-bold text-red-500">{error}</p>
          </motion.div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Логин / Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите логин"
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-primary transition-all text-sm font-medium text-white placeholder:text-gray-700"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Пароль</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-primary transition-all text-sm font-medium text-white placeholder:text-gray-700"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-primary hover:bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20"
          >
            {isLogin ? 'Войти в систему' : 'Создать аккаунт'}
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs font-bold text-gray-500 hover:text-brand-primary transition-colors"
          >
            {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
