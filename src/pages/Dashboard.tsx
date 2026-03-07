import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  Briefcase, 
  Zap, 
  ChevronRight,
  PieChart as PieChartIcon,
  Activity
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { MOCK_COMPANIES } from '../mockData';
import { CompanyLogo } from '../components/CompanyLogo';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Янв', value: 100000 },
  { name: 'Фев', value: 105000 },
  { name: 'Мар', value: 102000 },
  { name: 'Апр', value: 115000 },
  { name: 'Май', value: 112000 },
  { name: 'Июн', value: 124500 },
];

const StatCard = ({ title, value, change, isPositive, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-shark-card border border-white/5 p-6 rounded-[2rem] relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-primary/10 transition-colors" />
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-white/5 rounded-2xl text-brand-primary">
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-xs font-black ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{title}</p>
      <h3 className="text-2xl font-black text-white">{value}</h3>
    </div>
  </motion.div>
);

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const featuredDeals = MOCK_COMPANIES.slice(0, 3);

  return (
    <div className="p-4 lg:p-8 space-y-8 max-w-full overflow-x-hidden">
      {/* Welcome Section */}
      <section className="relative py-8 lg:py-12 px-6 lg:px-10 rounded-[2.5rem] bg-gradient-to-br from-brand-primary/20 via-shark-card to-shark-bg border border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-brand-primary/20">
              Личный кабинет инвестора
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-black italic tracking-tighter text-white"
          >
            Добро пожаловать, <span className="text-brand-primary">Shark</span>!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl text-sm lg:text-base leading-relaxed"
          >
            Ваш портфель вырос на <span className="text-emerald-500 font-bold">+24.5%</span> за последние 6 месяцев. 
            Сегодня доступно <span className="text-white font-bold">12 новых сделок</span> в секторе AI и FinTech.
          </motion.p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => navigate('/marketplace')}
              className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary/80 transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2"
            >
              Смотреть сделки <Zap size={16} />
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Мой портфель
            </button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Общий баланс" 
          value="$124,500.00" 
          change="+12.5%" 
          isPositive={true} 
          icon={Wallet} 
        />
        <StatCard 
          title="Активные сделки" 
          value="8" 
          change="+2" 
          isPositive={true} 
          icon={Briefcase} 
        />
        <StatCard 
          title="Прирост за месяц" 
          value="+$14,230" 
          change="+5.4%" 
          isPositive={true} 
          icon={TrendingUp} 
        />
        <StatCard 
          title="Доступно новых" 
          value="22" 
          change="New" 
          isPositive={true} 
          icon={Activity} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-shark-card border border-white/5 rounded-[2.5rem] p-8 space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-lg font-black text-white uppercase tracking-tight">Динамика портфеля</h3>
              <p className="text-xs text-gray-500">Общая стоимость активов в реальном времени</p>
            </div>
            <div className="flex gap-2">
              {['1Н', '1М', '3М', '1Г'].map((t) => (
                <button key={t} className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${t === '1М' ? 'bg-brand-primary text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111111', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    fontSize: '12px',
                    fontWeight: '900'
                  }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Featured Deals */}
        <div className="bg-shark-card border border-white/5 rounded-[2.5rem] p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-black text-white uppercase tracking-tight">Новые сделки</h3>
            <button 
              onClick={() => navigate('/marketplace')}
              className="text-brand-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="space-y-4">
            {featuredDeals.map((company) => (
              <motion.div 
                key={company.id}
                whileHover={{ x: 5 }}
                onClick={() => navigate('/marketplace')}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 cursor-pointer hover:border-brand-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 p-1 border border-white/10 group-hover:border-brand-primary/50 transition-all">
                  <CompanyLogo name={company.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-black text-white truncate">{company.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{company.sector}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-brand-primary">{company.valuation}</p>
                  <p className="text-[9px] text-emerald-500 font-bold">Hot Deal</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4">
            <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-4 flex items-center gap-4">
              <div className="p-2 bg-brand-primary text-white rounded-lg">
                <PieChartIcon size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-white uppercase tracking-wider">Ваш лимит</p>
                <div className="h-1.5 w-full bg-white/10 rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-brand-primary w-[65%]" />
                </div>
              </div>
              <p className="text-xs font-black text-white">65%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
