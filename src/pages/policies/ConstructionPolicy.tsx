import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const ConstructionPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb title="Construction / Building Policy" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <Link 
            to="/policies" 
            className="inline-flex items-center text-[#f6c23e] hover:text-[#dda20a] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Construction / Building Policy</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                The Development Society for Poor (DSP) has established a comprehensive construction policy to guide the planning, execution, renovation, and maintenance of all building-related projects. The policy ensures quality construction, transparency, community participation, and responsible financial management in every project undertaken.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Policy Purpose</h2>
              <p className="text-gray-700 leading-relaxed">
                The construction policy aims to streamline the process of developing buildings and infrastructure that support DSP's mission. It ensures that construction projects uphold safety, affordability, sustainability, and accountability while meeting the needs of beneficiaries and complying with legal and donor requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Core Ethical Principles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy is grounded in important social and ethical commitments, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fair wages and labor rights</li>
                <li>Safe and just working conditions</li>
                <li>Responsible resource management</li>
                <li>Active participation from community members and beneficiaries</li>
                <li>Inclusion of minority-owned and local businesses wherever possible</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide safe, dignified, affordable, and disaster-resilient housing and infrastructure that improves the quality of life for economically vulnerable individuals and families.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Objectives</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ensure that every constructed building includes access to essential amenities such as sanitation, clean water, electricity, and ventilation.</li>
                <li>Create an inclusive and transparent construction ecosystem involving community members, technical experts, and administrative leadership.</li>
                <li>Maintain high safety standards and compliance at every stage of construction.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Approval & Decision-Making Structure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All construction projects undergo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Proposal preparation and submission</li>
                <li>Review and approval by the DSP Executive Board</li>
                <li>Appointment of a qualified engineer</li>
                <li>Formal contract signing outlining roles, financial responsibilities, timelines, and quality expectations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Roles and Responsibilities</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">A. DSP</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Oversees and monitors construction activities</li>
                <li>Ensures compliance with approved plans and donor regulations</li>
                <li>Conducts inspections and reporting</li>
                <li>Prohibits unauthorized alterations</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">B. Construction Engineer / Contractor</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Follows approved building plans and specifications</li>
                <li>Uses approved materials only</li>
                <li>Ensures workplace safety and compliance with labor laws</li>
                <li>Rectifies defective work and is responsible for damage or negligence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Procurement Guidelines</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All materials and services must follow transparent procurement procedures.</li>
                <li>A minimum of three quotations is required when sourcing goods and services.</li>
                <li>Budget revisions are permitted only through written approval from the donor or governing authority.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Monitoring, Reporting & Evaluation</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Construction progress is reviewed regularly through physical inspections and financial audits.</li>
                <li>Reports are submitted every three months to DSP leadership and funding partners.</li>
                <li>A final inspection and post-occupancy review are conducted to assess quality, safety, and user satisfaction.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Financial Management</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Funds must be used strictly for approved project purposes.</li>
                <li>All transactions must be properly documented and audited.</li>
                <li>Accounts must be maintained separately from other organizational funds.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Payment Schedule</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payments are disbursed based on verified milestones:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b text-left">Stage</th>
                      <th className="py-2 px-4 border-b text-left">Payment Trigger</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">1</td>
                      <td className="py-2 px-4 border-b">Completion up to plinth level</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">2</td>
                      <td className="py-2 px-4 border-b">Completion up to roof level</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">3</td>
                      <td className="py-2 px-4 border-b">Completion of roof casting</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">4</td>
                      <td className="py-2 px-4 border-b">Completion of plastering</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">5</td>
                      <td className="py-2 px-4 border-b">Completion of flooring, door/window installation</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4 border-b">6</td>
                      <td className="py-2 px-4 border-b">Completion of painting, electrification, plumbing & final finishing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                A percentage of payment is retained for 6–12 months to ensure structural stability, with final clearance only after satisfactory review.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Sustainability Commitment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy promotes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use of local materials and resources</li>
                <li>Disaster-resilient designs</li>
                <li>Low-cost and energy-efficient technology</li>
                <li>Environmentally responsible construction practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Community Involvement</h2>
              <p className="text-gray-700 leading-relaxed">
                Beneficiaries and community representatives participate in planning, monitoring, and decision-making processes to ensure transparency and shared responsibility.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Legal and Contractual Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The contract includes provisions for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Penalties for delays</li>
                <li>Dispute resolution through arbitration</li>
                <li>Liability for damages or injuries</li>
                <li>Termination rights for misconduct or breach of policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                This construction policy strengthens the organizational capacity of DSP by ensuring that all construction projects are ethical, transparent, sustainable, and aligned with the organization's values and mission. With a structured framework, defined roles, financial accountability, and community participation, the policy ensures that buildings constructed will remain safe, functional, and impactful for years to come.
              </p>
            </section>

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

export default ConstructionPolicy;
