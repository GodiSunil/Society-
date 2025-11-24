import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const HousingPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb title="Housing Policy" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <Link 
            to="/policies" 
            className="inline-flex items-center text-[#e74a3b] hover:text-[#c23a2e] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Housing Policy</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Development Society for Poor (DSP) is a social service organization committed to improving the living conditions of marginalized communities, including Scheduled Castes (SC), Scheduled Tribes (ST), Backward Classes (BC), slum dwellers, single mothers, and persons with disabilities. Since its formation in 2005, DSP has prioritized affordable and sustainable housing solutions as part of its mission to support socio-economic development.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Organizational Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                DSP aims to empower rural and underprivileged communities irrespective of caste, religion, or background by strengthening awareness, encouraging collective participation, and ensuring equality, dignity, and sustainable human development.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Housing as a Development Priority</h2>
              <p className="text-gray-700 leading-relaxed">
                Housing is recognized as a fundamental human need and a central component of economic and social development. Inadequate housing poses risks to safety, health, and dignity, especially in vulnerable rural and semi-urban communities. The policy responds to increasing housing shortages worsened by natural disasters, urbanization, lack of land access, and financial barriers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Habitat-Based Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy adopts an integrated habitat development model, ensuring that housing projects include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Safe sanitation</li>
                <li>Water supply</li>
                <li>Waste management</li>
                <li>Disaster-resilient architecture</li>
                <li>Climate-responsive land planning</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This approach supports sustainable ecological, social, and infrastructural growth.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Housing Challenges Identified</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Key challenges faced by vulnerable communities include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Lack of affordable and durable construction</li>
                <li>Insecure land tenure and unclear ownership titles</li>
                <li>Limited financing opportunities</li>
                <li>Substandard living conditions and overcrowding</li>
                <li>Dependence on fragile materials prone to floods, cyclones, fires, and drought</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These issues contribute to rapid slum formation and urban migration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Policy Direction and Government Collaboration</h2>
              <p className="text-gray-700 leading-relaxed">
                DSP will act as a facilitator enabling construction through community participation, financial partnerships, and government support. Special emphasis will be placed on vulnerable groups through subsidized housing programs, public-private partnerships, and community self-help involvement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Policy Aims</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Housing Policy focuses on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Accelerating housing delivery for the poorest segments</li>
                <li>Enhancing infrastructure such as roads, sanitation, and drainage</li>
                <li>Promoting cost-effective and sustainable construction technologies</li>
                <li>Strengthening access to land, finance, and construction resources</li>
                <li>Encouraging employment generation and gender-inclusive development</li>
                <li>Ensuring disaster-resilient and climate-adapted housing standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Slum Redevelopment Strategy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy prioritizes in-situ redevelopment wherever possible and proposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Feasibility-based planning</li>
                <li>Cross-subsidized housing models</li>
                <li>Community-driven design</li>
                <li>Integration with national housing schemes (IAY, JNNURM, Bharat Nirman)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This approach aims to transform slums into sustainable and formal living areas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Inclusion of Vulnerable Groups</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Special provisions are made for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Single and widowed women</li>
                <li>Persons with disabilities</li>
                <li>Elderly citizens</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                Actions include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Issuing property titles in women's names</li>
                <li>Designing accessible housing with disability-friendly features</li>
                <li>Creating safe housing and support homes for senior citizens</li>
                <li>Strengthening women's participation in planning and execution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Implementation Process</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Government Procedures</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Eligible beneficiaries apply with verified documents. Sanctions are issued based on screening.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">DSP Execution Model</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Community animation and awareness</li>
                <li>Formation of housing committees (equal gender representation)</li>
                <li>Procurement of construction materials</li>
                <li>Active labor participation by beneficiaries</li>
                <li>Engineering supervision and quality control</li>
                <li>Strong beneficiary ownership model</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Monitoring and Accountability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DSP ensures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Regular inspections by engineering and field teams</li>
                <li>Monthly review meetings with communities and officials</li>
                <li>Quality control oversight throughout construction</li>
                <li>Maintenance of financial records, audits, and transparent reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Financial Management</h2>
              <p className="text-gray-700 leading-relaxed">
                DSP follows strict financial administration with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                <li>Separate project accounting</li>
                <li>Tally-based digital reports</li>
                <li>Periodic audits</li>
                <li>Compliance with government and donor regulations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Quarterly and final reports include narrative updates, financial statements, and photographic evidence of progress.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                The Housing Policy of DSP provides a structured, community-centered framework that ensures affordable, sustainable, disaster-resilient, and inclusive housing for vulnerable communities. By integrating government collaboration, community participation, gender inclusion, financial accountability, and technical quality standards, DSP strengthens long-term development and improves living conditions for marginalized populations.
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

export default HousingPolicy;
