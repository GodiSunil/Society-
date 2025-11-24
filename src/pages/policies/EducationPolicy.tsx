import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const EducationPolicy = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb title="Education Policy" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <Link 
            to="/policies" 
            className="inline-flex items-center text-[#4e73df] hover:text-[#2e59d9] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          
          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Education Policy</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. PURPOSE OF THE POLICY</h2>
              <p className="text-gray-700 leading-relaxed">
                The Education Policy aims to provide quality, accessible, and inclusive education for disadvantaged communities including SC, ST, BC, women, rural poor and students with disabilities, ensuring equal opportunities and national development.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. IMPORTANCE OF EDUCATION</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Education is the foundation for individual and societal development. The policy recognizes education as a:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Fundamental right and essential for personal, social, cultural, and economic development</li>
                <li>Tool for building scientific thinking, discipline, independence, and national values</li>
                <li>Key driver for research, skill development, national progress and self-reliance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. EDUCATION FOR EQUALITY</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy prioritizes addressing educational disparities through:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Eliminating inequalities in access to quality education</li>
                <li>Promoting women's empowerment through education</li>
                <li>Ensuring equal educational opportunities for SC/ST/BC groups</li>
                <li>Providing special focus on students with disabilities</li>
                <li>Addressing educational needs of backward regions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. KEY FOCUS GROUPS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Special attention is given to the following groups to ensure inclusive education:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Girls and Women</h3>
                  <p className="text-gray-700">Special programs to improve female literacy and encourage higher education participation.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Marginalized Castes</h3>
                  <p className="text-gray-700">Targeted support for SC/ST/BC students through scholarships and special coaching.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Differently-abled</h3>
                  <p className="text-gray-700">Accessible infrastructure and specialized teaching methods for inclusive education.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Rural Communities</h3>
                  <p className="text-gray-700">Bridging the urban-rural education divide through infrastructure and teacher training.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">5. EDUCATIONAL STAGES & APPROACH</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Early Childhood Education</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Focus on holistic development through child-friendly learning approaches, proper nutrition, and emotional and social development programs.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Primary & Elementary Education</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Universal enrollment and retention initiatives</li>
                    <li>Child-centered teaching methodologies</li>
                    <li>Strict prohibition of corporal punishment</li>
                    <li>Free and compulsory education up to age 14</li>
                    <li>Focus on foundational literacy and numeracy</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Secondary Education</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive education focusing on science, technology, moral values, citizenship, and career exposure to prepare students for higher education and employment.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Vocational Education</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Skills training programs aligned with industry requirements to enhance employability and support self-employment opportunities.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5.5 Higher Education</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Focus on research excellence, specialization, teacher development, and integration of modern technology in teaching-learning processes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. TEACHERS & QUALITY STANDARDS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recognizing teachers as the cornerstone of educational quality, the policy mandates:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Comprehensive pre-service and in-service teacher training programs</li>
                <li>Competitive and fair compensation packages</li>
                <li>Professional autonomy and academic freedom</li>
                <li>Robust performance evaluation systems</li>
                <li>Continuous professional development opportunities</li>
                <li>Supportive working conditions and infrastructure</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. LANGUAGE POLICY</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy adopts a multilingual approach to education:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Primary education in mother tongue/regional language (Telugu)</li>
                <li>Implementation of the three-language formula: Telugu + Hindi + English</li>
                <li>Promotion of Indian languages including Sanskrit</li>
                <li>Development of multilingual teaching-learning materials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. ADULT LITERACY & LIFELONG LEARNING</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy emphasizes the importance of continuous learning:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Mission mode approach to achieve 100% literacy</li>
                <li>Special focus on women's literacy programs</li>
                <li>Continuing education centers for lifelong learning</li>
                <li>Skill development programs for adults</li>
                <li>Digital literacy initiatives</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. VALUE-BASED EDUCATION</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Education under this policy aims to develop:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Moral Values</h4>
                  <p className="text-gray-700">Ethical conduct, honesty, and integrity</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Character Formation</h4>
                  <p className="text-gray-700">Discipline, perseverance, and responsibility</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">National Integration</h4>
                  <p className="text-gray-700">Unity in diversity and national pride</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Social Responsibility</h4>
                  <p className="text-gray-700">Service to community and environment</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. GAMES, ARTS, TECHNOLOGY & SKILL DEVELOPMENT</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The policy promotes holistic development through:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">Sports & Physical Education</h4>
                  <p className="text-sm text-gray-600 mt-1">Promoting fitness and sportsmanship</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">Digital Literacy</h4>
                  <p className="text-sm text-gray-600 mt-1">Computer education and digital access</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1h1.5a1.5 1.5 0 011.5 1.5v1.5h-9V6.5A1.5 1.5 0 0110.5 5H12V4zM5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">Arts & Culture</h4>
                  <p className="text-sm text-gray-600 mt-1">Promoting creativity and cultural heritage</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. POLICY ALIGNMENT</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This policy aligns with the National Education Policy (2020) and other relevant national and international frameworks, while addressing the specific needs of our communities. It strengthens our commitment to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Equitable access to quality education</li>
                <li>Inclusive and holistic development</li>
                <li>National integration and unity</li>
                <li>Global competitiveness with local relevance</li>
              </ul>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">CONCLUSION</h2>
              <p className="text-gray-700 leading-relaxed">
                DSP's Education Policy is a comprehensive framework that aims to transform the educational landscape by providing equal, inclusive, value-based, and skill-oriented education. It seeks to empower marginalized children and communities, preparing them not just for academic success but also for meaningful participation in the nation's development as responsible and engaged citizens.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Through this policy, we reaffirm our commitment to the fundamental right to education and our vision of creating an enlightened, equitable, and progressive society.
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

export default EducationPolicy;
