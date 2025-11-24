import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { Shield, HeartHandshake, Gavel, Scale, Building, Home, BookOpen, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Policies = () => {
  const policies = [
    {
      title: 'Finance Policy',
      content: 'Ensures proper planning, budgeting, accounting and reporting of all financial transactions. It aims to maintain transparency, accountability, and legal compliance across all programs. The system helps prevent misuse of funds and ensures efficient resource allocation for project activities.',
      icon: <Scale className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white',
      link: '/policies/finance'
    },
    {
      title: 'Non-Compliance Policy',
      content: 'Affirms that DSP follows all government regulations and legal guidelines. The organization does not support religious or political activities and ensures grants are used only for approved projects. DSP guarantees equal support to all individuals without discrimination.',
      icon: <Gavel className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#1cc88a]',
      textColor: 'text-white',
      link: '/policies/non-compliance'
    },
    {
      title: 'Construction / Building Policy',
      content: 'Provides guidelines for construction, renovation, and maintenance projects. It ensures safety, sustainability, cost-effectiveness, and compliance with engineering and ethical standards. DSP prioritizes durable structures with proper planning, transparency, and accountability throughout execution.',
      icon: <Building className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#f6c23e]',
      textColor: 'text-white',
      link: '/policies/construction'
    },
    {
      title: 'Housing Policy',
      content: 'Focuses on providing affordable and sustainable housing for vulnerable communities. It addresses challenges like inadequate shelter, disaster vulnerability, and lack of basic amenities. DSP works with communities and government schemes to ensure safe, dignified living conditions.',
      icon: <Home className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#e74a3b]',
      textColor: 'text-white',
      link: '/policies/housing'
    },
    {
      title: 'Child Protection Policy',
      content: 'Safeguards children\'s rights and ensures they live in safety, dignity, and care. It prevents abuse, neglect, exploitation, and discrimination while supporting their growth and development. DSP commits to protecting every child and providing equal opportunities.',
      icon: <Shield className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#36b9cc]',
      textColor: 'text-white',
      link: '/policies/child-protection'
    },
    {
      title: 'Equal Opportunity Policy',
      content: 'Promotes a workplace free from discrimination, harassment, or inequality. Every employee is treated fairly regardless of gender, caste, race, religion, disability, or background. DSP ensures inclusiveness, equal treatment, and a safe environment for all staff and partners.',
      icon: <Users className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#5a5c69]',
      textColor: 'text-white',
      link: '/policies/equal-opportunity'
    },
    {
      title: 'Education Policy',
      content: 'Ensures equal access to quality education for marginalized communities. It promotes literacy, skill development, vocational learning, women\'s education, and inclusive learning for differently-abled children. DSP aims to empower individuals through education for social and economic growth.',
      icon: <BookOpen className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#8e44ad]',
      textColor: 'text-white',
      link: '/policies/education'
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Our Policies" />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Policies</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4e73df] to-[#1cc88a] rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DSP is committed to excellence in all our operations, guided by our core principles of <span className="font-semibold text-[#4e73df]">transparency</span>, <span className="font-semibold text-[#1cc88a]">accountability</span>, and <span className="font-semibold text-[#f6c23e]">inclusive development</span>. Our policies reflect our dedication to creating sustainable impact in the communities we serve.
            </p>
          </div>
          
          {/* Policies Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy, index) => (
              <div 
                key={index}
                className={`${policy.bgColor} ${policy.textColor} rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-6 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{policy.title}</h3>
                  <p className="leading-relaxed opacity-90 mb-6 flex-grow">{policy.content}</p>
                  <Link
                    to={policy.link || '#'}
                    className={`mt-auto px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium transition-colors duration-200 border border-white/30 hover:border-white/50 inline-flex items-center justify-center`}
                  >
                    View Policy
                  </Link>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </Layout>
  );
};

export default Policies;
