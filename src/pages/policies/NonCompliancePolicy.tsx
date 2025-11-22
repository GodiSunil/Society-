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
            className="inline-flex items-center text-[#4e73df] hover:text-[#2e59d9] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Non-Compliance Policy</h1>
            
            <div className="border border-gray-200 rounded-lg p-6 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">DEVELOPMENT SOCIETY FOR POOR</h2>
                <p className="text-gray-600">(Regd. No. 172/2005, Guntur, A.P.)</p>
                <p className="text-gray-600">Rentachintala, Guntur - 522421, A.P.</p>
                <p className="text-gray-600">Ph: +91 94905 39868, 95500 45400, 94905 39868</p>
                <p className="text-gray-600">Email: info@developmentsociety.org, Website: www.developmentsociety.org</p>
              </div>

              <div className="mb-8">
                <p className="text-right mb-6">Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p className="mb-6">To Whom So Ever It May Concern</p>
                
                <p className="mb-6">This is to certify that the Development Society for Poor (DSP) supports all individuals regardless of their religion, caste, creed, age, color, disability, gender, origin and race etc. in administration of our programs, activities and employment.</p>
                
                <p className="mb-6">Development Society for Poor is not a Religious Organization and the grant funds will not be used for religious activities.</p>
                
                <p className="mb-6">Development Society for Poor does not support any political parties.</p>
                
                <p className="mb-6">Development Society for Poor is in full compliance with all Central, State and Local Government laws.</p>
                
                <div className="mt-12">
                  <p className="mb-2">Thanking you,</p>
                  <p className="mb-1">Yours Faithfully,</p>
                  <p className="font-bold mb-1">For Development Society for Poor</p>
                  <div className="mt-8">
                    <p className="font-bold">Mrs. K. Thomasamma</p>
                    <p>President</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Policy Implementation</h2>
              <p className="text-gray-700 mb-4">
                This non-compliance policy is strictly enforced across all levels of our organization. Any violation of these principles may result in disciplinary action, including termination of employment or partnership.
              </p>
              <p className="text-gray-700">
                For any questions or concerns regarding this policy, please contact us at info@developmentsociety.org or call +91 94905 39868.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NonCompliancePolicy;
