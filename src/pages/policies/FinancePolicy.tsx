import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const FinancePolicy = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb title="Finance Policy" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <Link 
            to="/policies" 
            className="inline-flex items-center text-[#4e73df] hover:text-[#2e59d9] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Finance Policy</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. INTRODUCTION</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any social development sector, either DSP or NGOs, for their healthy financial administrative system, five components are important:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li>Planning and Budgeting</li>
                <li>Accounting and Record keeping</li>
                <li>Internal control systems</li>
                <li>Financial reporting</li>
                <li>Legal compliance</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-4">
                Development Society for Poor (DSP) follows the above five elements:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li>Recording systematically all financial transactions</li>
                <li>Monitoring and controlling expenditures</li>
                <li>Making sure that the programme funds are carefully controlled with no place for fraud</li>
                <li>Making sure that there is enough money for the programme activities and staff salaries</li>
                <li>Making the field staff understand the financial position</li>
                <li>Satisfying statutory reporting requirements</li>
                <li>Ensuring timely and accurate financial and management reporting to donors and grant-makers in establishing good accounting policies and procedures</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                The DSP program staff work together with the finance staff for better financial administration by understanding each other and work together for better results. DSP follows a sound financial management system which is imperative in establishing transparency and accountability as well as in attaining self-reliance. Careful planning, commitment and financial administration can be seen in all the programmes of DSP.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. ABOUT DSP</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2.1 ORIGIN</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Development Society for Poor (DSP) was registered in 2005. Prior to that period, social welfare activities were mainly relief and charitable works. After establishing Archangel's Home for the Aged at Rentachintala, a full-fledged office was set up. Later, it was shifted to the present location and equipped with the state-of-the-art infrastructure, qualified and trained programme and administration staff.
              </p>

              {/* Continue with other sections following the same pattern */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2.2 AREA OF OPERATION</h3>
              <p className="text-gray-700 leading-relaxed">
                The DSP operates all over the civic district of Guntur, extending over an area of 10,268 sq. km., covering a total of 729 villages. The District is divided into 57 Mandals. Each Mandal consists of a minimum of 7 to a maximum of 20 villages.
              </p>

              {/* Add more sections as needed */}
            </section>

            {/* Add remaining sections following the same pattern */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. OBJECTIVES OF FINANCE MANUAL</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>To satisfy statutory reporting requirements</li>
                <li>To better the operational efficiency</li>
                <li>To systematically record every financial transaction</li>
                <li>To standardize financial systems and procedures</li>
                <li>To strengthen the managerial effectiveness</li>
                <li>To ensure control of financial transactions in handling projects</li>
                <li>To establish good accounting policies</li>
                <li>To ensure timely and accurate financial and management reporting to donors</li>
                <li>To have a good control on the budgetary system</li>
                <li>To monitor and control expenditures</li>
              </ol>
            </section>

            {/* Add remaining sections following the same pattern */}
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FinancePolicy;
