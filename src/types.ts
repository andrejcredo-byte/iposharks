export interface Company {
  id: string;
  name: string;
  logo_url: string;
  website_url?: string;
  description: string;
  stage: 'Pre-IPO' | 'IPO' | 'Series C' | 'Series D';
  status: 'Available' | 'Sold Out' | 'Coming Soon';
  min_investment: number;
  target_roi: string;
  sector: string;
  valuation: string;
}

export interface Investment {
  id: string;
  user_id: string;
  company_id: string;
  amount: number;
  shares: number;
  status: 'Pending' | 'Active' | 'Exited';
  purchase_date: string;
  company?: Company;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  kyc_status: 'Not Started' | 'Pending' | 'Verified' | 'Rejected';
  balance: number;
  avatar_url?: string;
}
