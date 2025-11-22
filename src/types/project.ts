export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  location: string;
  startDate: string;
  endDate?: string;
  beneficiaries: string;
  status: 'active' | 'completed';
  image: string;
  gallery?: string[];
  impact?: string[];
  budget?: string;
  partners?: Array<{ 
    name: string; 
    logo: string;
    role?: string;
  }>;
}