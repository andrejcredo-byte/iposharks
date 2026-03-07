import React, { useState } from 'react';
import { MOCK_COMPANIES } from '../mockData';
import { TrendingUp, DollarSign, ShieldCheck, CheckCircle2, ExternalLink, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from '../components/Modal';
import { CompanyLogo } from '../components/CompanyLogo';
import { Company } from '../types';

export const Marketplace: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [investAmount, setInvestAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Все', 'FinTech', 'AI Infrastructure', 'AI Hardware', 'Blockchain', 'Social Media', 'NeuroTech', 'SpaceTech'];

  const filteredCompanies = MOCK_COMPANIES.filter(c => {
    const matchesCategory = activeCategory === 'Все' || c.sector === activeCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInvest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedCompany(null);
      setInvestAmount('');
    }, 2000);
  };

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 bg-shark-bg min-h-full max-w-full overflow-x-hidden">
      {/* Search & Categories */}
      <div className="space-y-4">
        <div className="relative md:hidden">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Поиск компаний..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-brand-primary transition-all text-sm text-white"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-[10px] lg:text-[11px] font-bold transition-all border shrink-0 ${
              activeCategory === cat 
                ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20" 
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {filteredCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-shark-card rounded-[32px] overflow-hidden border border-white/5 shadow-lg hover:shadow-brand-primary/10 transition-all group"
          >
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <CompanyLogo 
                  src={company.logo_url} 
                  name={company.name} 
                  className="w-14 h-14 rounded-2xl border border-white/10"
                />
                <div className="flex flex-col items-end gap-2">
                  <span className={company.status === 'Available' ? "text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full text-[10px] font-bold border border-brand-primary/20" : "text-gray-500 bg-white/5 px-3 py-1 rounded-full text-[10px] font-bold"}>
                    {company.status === 'Available' ? 'Доступно' : 'Продано'}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-lg border border-amber-500/20 text-[9px] font-black uppercase tracking-tighter">
                    <span>🦄</span>
                    <span>Unicorn</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-white">{company.name}</h4>
                  {company.website_url && (
                    <a 
                      href={company.website_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-brand-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">{company.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Стадия</p>
                  <p className="text-xs font-bold text-gray-300">{company.stage}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Оценка</p>
                  <p className="text-xs font-bold text-gray-300">{company.valuation}</p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/5">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">ROI (ожид.)</p>
                  <p className="text-sm font-black text-brand-primary">{company.target_roi}</p>
                </div>
                <TrendingUp size={20} className="text-brand-primary opacity-50" />
              </div>

              <button 
                onClick={() => setSelectedCompany(company)}
                disabled={company.status !== 'Available'}
                className="w-full bg-white/5 group-hover:bg-brand-primary disabled:opacity-50 disabled:group-hover:bg-white/5 text-white py-3.5 lg:py-4 rounded-2xl text-[11px] lg:text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/10 group-hover:border-transparent"
              >
                <DollarSign size={14} className="lg:w-4 lg:h-4" />
                Инвестировать от ${company.min_investment.toLocaleString()}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Investment Modal */}
      <Modal 
        isOpen={!!selectedCompany} 
        onClose={() => setSelectedCompany(null)} 
        title={isSuccess ? "Успешно!" : `Инвестиция в ${selectedCompany?.name}`}
      >
        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto border border-emerald-500/20">
              <CheckCircle2 size={48} />
            </div>
            <p className="text-gray-400">Ваша заявка на инвестицию принята и находится в обработке.</p>
          </div>
        ) : (
          <form onSubmit={handleInvest} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Сумма инвестиции (USD)</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="number" 
                  required
                  min={selectedCompany?.min_investment}
                  value={investAmount}
                  onChange={(e) => setInvestAmount(e.target.value)}
                  placeholder={`Минимум ${selectedCompany?.min_investment.toLocaleString()}`}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-primary transition-all text-white font-bold"
                />
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Комиссия платформы (2%)</span>
                <span className="text-white font-bold">${(Number(investAmount) * 0.02).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-white/5">
                <span className="text-gray-400 font-bold">Итого к оплате</span>
                <span className="text-brand-primary font-black">${(Number(investAmount) * 1.02).toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-primary hover:bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-brand-primary/20"
            >
              Подтвердить инвестицию
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};
