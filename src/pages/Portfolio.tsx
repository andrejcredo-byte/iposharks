import React from 'react';
import { MOCK_COMPANIES } from '../mockData';
import { Investment } from '../types';
import { TrendingUp, ArrowUpRight, PieChart, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { CompanyLogo } from '../components/CompanyLogo';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const MOCK_INVESTMENTS: Investment[] = [
  {
    id: 'inv1',
    user_id: 'user1',
    company_id: '1',
    amount: 25000,
    shares: 1200,
    status: 'Active',
    purchase_date: '2023-05-15',
    company: MOCK_COMPANIES[0] // Circle
  },
  {
    id: 'inv2',
    user_id: 'user1',
    company_id: '2',
    amount: 50000,
    shares: 2500,
    status: 'Active',
    purchase_date: '2023-11-10',
    company: MOCK_COMPANIES[1] // CoreWeave
  },
  {
    id: 'inv3',
    user_id: 'user1',
    company_id: '3',
    amount: 15000,
    shares: 800,
    status: 'Active',
    purchase_date: '2024-01-05',
    company: MOCK_COMPANIES[2] // Cerebras
  },
  {
    id: 'inv4',
    user_id: 'user1',
    company_id: '4',
    amount: 10000,
    shares: 5000,
    status: 'Active',
    purchase_date: '2022-08-20',
    company: MOCK_COMPANIES[3] // Ripple
  },
  {
    id: 'inv5',
    user_id: 'user1',
    company_id: '5',
    amount: 20000,
    shares: 1500,
    status: 'Active',
    purchase_date: '2023-03-12',
    company: MOCK_COMPANIES[4] // Discord
  },
  {
    id: 'inv6',
    user_id: 'user1',
    company_id: '6',
    amount: 10000,
    shares: 300,
    status: 'Active',
    purchase_date: '2024-02-15',
    company: MOCK_COMPANIES[5] // Paradromics
  }
];

const chartData = [
  { name: 'Jan', value: 85000 },
  { name: 'Feb', value: 92000 },
  { name: 'Mar', value: 108000 },
  { name: 'Apr', value: 115000 },
  { name: 'May', value: 124500 },
  { name: 'Jun', value: 142000 },
];

export const Portfolio: React.FC = () => {
  const totalInvested = MOCK_INVESTMENTS.reduce((acc, inv) => acc + inv.amount, 0);
  const currentValue = 142000; // Match chart last value
  const growthPercent = ((currentValue - totalInvested) / totalInvested * 100).toFixed(1);

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 bg-shark-bg min-h-full max-w-full overflow-x-hidden">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-shark-card p-5 lg:p-6 rounded-[24px] lg:rounded-[32px] border border-white/5 shadow-lg space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Общий баланс</p>
            <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-xl">
              <TrendingUp size={16} />
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-white">${currentValue.toLocaleString()}</h2>
          <p className="text-[10px] lg:text-xs font-bold text-brand-primary flex items-center gap-1">
            <ArrowUpRight size={14} />
            +{growthPercent}% за всё время
          </p>
        </div>

        <div className="bg-shark-card p-5 lg:p-6 rounded-[24px] lg:rounded-[32px] border border-white/5 shadow-lg space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Инвестировано</p>
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
              <PieChart size={16} />
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-white">${totalInvested.toLocaleString()}</h2>
          <p className="text-[10px] lg:text-xs font-bold text-gray-500">{MOCK_INVESTMENTS.length} активных сделок</p>
        </div>

        <div className="bg-shark-card p-5 lg:p-6 rounded-[24px] lg:rounded-[32px] border border-white/5 shadow-lg space-y-2 sm:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Активность</p>
            <div className="p-2 bg-brand-secondary/10 text-brand-secondary rounded-xl">
              <Activity size={16} />
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-white">Высокая</h2>
          <p className="text-[10px] lg:text-xs font-bold text-gray-500">Прямой акционер 30+ единорогов</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-shark-card p-5 lg:p-8 rounded-[24px] lg:rounded-[32px] border border-white/5 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
          <h3 className="text-base lg:text-lg font-bold text-white uppercase tracking-wider">Динамика портфеля</h3>
          <div className="flex gap-1.5 lg:gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {['1D', '1W', '1M', '1Y', 'ALL'].map(p => (
              <button key={p} className={p === '1M' ? "px-3 py-1 bg-brand-primary text-white rounded-lg text-[9px] lg:text-[10px] font-bold shrink-0" : "px-3 py-1 bg-white/5 text-gray-500 rounded-lg text-[9px] lg:text-[10px] font-bold border border-white/5 shrink-0"}>
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="h-48 lg:h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" strokeOpacity={0.5} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 10, fill: '#64748b', fontWeight: 600}} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5 5' }}
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(59,130,246,0.2)', 
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)',
                    padding: '12px'
                  }}
                  itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                  labelStyle={{ fontWeight: 'black', color: '#3b82f6', marginBottom: '4px', textTransform: 'uppercase', fontSize: '10px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorValue)"
                  animationDuration={2000}
                />
              </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Assets */}
      <div className="bg-shark-card rounded-[24px] lg:rounded-[32px] border border-white/5 shadow-lg overflow-hidden">
        <div className="p-5 lg:p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-base lg:text-lg font-bold text-white uppercase tracking-wider">Мои активы</h3>
          <button className="text-[10px] lg:text-xs font-bold text-brand-primary hover:underline">Скачать отчет</button>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5">
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-500 uppercase tracking-widest">Компания</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-500 uppercase tracking-widest">Сумма</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-500 uppercase tracking-widest">Доля</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-500 uppercase tracking-widest">Статус</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-500 uppercase tracking-widest">Дата</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_INVESTMENTS.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <CompanyLogo 
                        src={inv.company?.logo_url} 
                        name={inv.company?.name || ''} 
                        className="w-8 h-8 rounded-lg border border-white/10" 
                      />
                      <span className="text-sm font-bold text-white">{inv.company?.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-300">${inv.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500">{inv.shares} акций</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-bold border border-brand-primary/20">Активен</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{inv.purchase_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-white/5">
          {MOCK_INVESTMENTS.map((inv) => (
            <div key={inv.id} className="p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <CompanyLogo 
                    src={inv.company?.logo_url} 
                    name={inv.company?.name || ''} 
                    className="w-10 h-10 rounded-xl border border-white/10" 
                  />
                  <div>
                    <p className="text-sm font-bold text-white">{inv.company?.name}</p>
                    <p className="text-[10px] text-gray-500">{inv.purchase_date}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[9px] font-bold border border-brand-primary/20 uppercase">Активен</span>
              </div>
              <div className="grid grid-cols-2 gap-4 bg-white/5 p-3 rounded-2xl border border-white/5">
                <div>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Сумма</p>
                  <p className="text-sm font-black text-white">${inv.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Доля</p>
                  <p className="text-sm font-bold text-gray-400">{inv.shares} акций</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
