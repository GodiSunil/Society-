import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const ChildProtectionPolicy = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb title="Child Protection Policy" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <Link 
            to="/policies" 
            className="inline-flex items-center text-[#4e73df] hover:text-[#2e59d9] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Child Protection Policy</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. INTRODUCTION</h2>
              <p className="text-gray-700 leading-relaxed">
                Children represent the largest demographic group in India and are recognized as the nation's most valuable resource. 
                The Constitution guarantees their rights and mandates protection from exploitation, abuse, neglect, and deprivation. 
                DSP adopts a rights-based approach aligned with national and international frameworks ensuring every child grows in dignity and safety.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. OUR COMMITMENT</h2>
              <p className="text-gray-700 leading-relaxed">
                DSP recognizes every individual below 18 years as a child and acknowledges that childhood is critical for physical, 
                emotional, psychological, and social development. The organization commits to safeguarding, supporting, and empowering 
                children, especially those who are marginalized, vulnerable, or living in difficult circumstances.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. CORE PRINCIPLES</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Child Protection Policy is built upon the following principles:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li>Every child has universal and inalienable rights</li>
                <li>Non-discrimination and equal opportunities for all children</li>
                <li>Best interest of the child as primary consideration</li>
                <li>Right to participation and expression of views</li>
                <li>Protection from all forms of violence, abuse, and exploitation</li>
                <li>Safe family environment as the optimal setting for child development</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. IMPLEMENTATION & MONITORING</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DSP ensures coordinated implementation of this policy through:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Active cooperation with government departments, especially the Ministry of Women & Child Development</li>
                <li>Continuous monitoring through structured systems</li>
                <li>Enforcement of rights in all programs, services, and outreach activities</li>
                <li>Regular evaluations of child protection initiatives</li>
                <li>Capacity building and mandatory sensitization of all personnel</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. REPORTING CONCERNS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any concerns about child safety or wish to report an incident, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <p className="font-medium text-gray-800">Child Protection Officer</p>
                <p className="text-gray-700">Email: childprotection@dsp.org</p>
                <p className="text-gray-700">Helpline: 1800-XXX-XXXX (Toll-free)</p>
                <p className="text-sm text-gray-500 mt-2">All reports will be treated with strict confidentiality.</p>
              </div>
            </section>

            <section className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Note:</strong> This policy is reviewed every five years. Last reviewed: November 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChildProtectionPolicy;
