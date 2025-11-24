import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const NonCompliancePolicy = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb title="Non-Compliance Policy" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <Link 
            to="/policies" 
            className="inline-flex items-center text-[#1cc88a] hover:text-[#169b6b] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="flex justify-center">
            <img 
              src="/images/report.png" 
              alt="Non-Compliance Policy Report" 
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              For any questions about our Non-Compliance Policy, please contact our compliance team.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NonCompliancePolicy;
