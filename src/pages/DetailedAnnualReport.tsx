import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { Printer } from 'lucide-react';

const DetailedAnnualReport = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <Breadcrumb title="Annual Report 2022-2023" />
      
      <section className="py-8 bg-gray-50 print:py-0 print:bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto shadow-sm print:shadow-none print:rounded-none print:p-4">
            <div className="flex justify-between items-center mb-8 print:hidden">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Annual Report 2022-2023</h1>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#f15a24] hover:bg-[#d14619] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15a24]"
              >
                <Printer className="w-4 h-4" />
                Print/Save as PDF
              </button>
            </div>
            
            <div className="print:text-black">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center print:text-2xl">Program Highlights</h2>
              
              {/* Educational, Vocational Skill Training and Other Projects */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#f15a24] pl-4 print:text-xl">I. Educational, Vocational Skill Training and Other Projects</h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">a. Educational Programs</h4>
                  <p className="text-gray-700 mb-4">
                    A total number of 1920 children benefit from our educational scholarship support. The children who are orphans, semi-orphan and poorest of the poor. Some have guardians, who are agricultural coolies on daily wages and other care takers are ailing and unable to do any physical labour. The children are selected on the basis of being orphans, semi orphans, from socially marginalised communities and the poorest.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Under this children's program there are two categories of support, they are:
                  </p>
                  
                  <div className="ml-6 mb-4">
                    <p className="text-gray-700 mb-2">
                      i. <strong>Educational Assistance Program:</strong> Under the Educational Assistance Programme 885 children were supplied with note books, two pairs of school uniforms, school bag and shoes.
                    </p>
                    <p className="text-gray-700">
                      ii. <strong>Educational Sponsorship Program:</strong> To open up educational opportunities for these unfortunate children, educational sponsorship program, to impart quality education to children, from these vulnerable group, have been planned. Under this sponsorship program, 1,035 children are assisted through school tuition fees, note books, two pairs of school uniforms, school bags and shoes.
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    All these children are from the socially backward communities, whose parents are farm coolies economically marginalized and unable to educate their children. The children are taken to child labor losing their chances of education and the joys of childhood. Our educational support is a boon for these children as they get an opportunity to join school and better their lives. The children are regular to their classes, show great enthusiasm to study and excel. We are encouraged as our efforts are bearing ample fruit.
                  </p>
                  <p className="text-gray-700">
                    Our coordinators regularly monitor these programs by visiting the school, checking up the progress reports interacting with the head masters and teachers to know the progress made by the children. They also take time to meet the parents of the children advising them to encourage their children in their studies.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">b. Mineral Water Plants for the School children and for the Public</h4>
                  <p className="text-gray-700 mb-4">
                    Clean drinking water is elixir of life and crucial indicator towards achieving the sustainable development goals (SDF). It is essential for the sustenance of human, animal and vegetative life on earth. Guntur district is reeling under severe gap of water demand and supply. The drinking water in the district is hit by fluorosis.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The Mineral Water plant with "Reverse Osmosis" technology has been set up for the school students located in Macherla region to address the drinking water problem of the School.
                  </p>
                  <p className="text-gray-700">
                    Another Mineral Water Plant with Reverse Osmosis Technology is established in the Rentachintala village, Guntur, India which is benefiting 1000 families in the village. With the implementation of the project the village people are provided with clean drinking water that promotes good health and hygiene among the lower sections of the community.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">c. Computer Training Center in the Schools at Macherla</h4>
                  <p className="text-gray-700 mb-4">
                    Computers have invaded all spheres of life, right from our homes, offices, corporate houses, educational and research institutions, hospitals, air, road and rail transport, industrial units, space technology, etc. Computers have become very relevant in the present day society. There is a great demand for trained and skilled personnel in computer operation due to the ever-growing usage and wider applications of computers in all fields of activity. In these circumstances, computer training centre installed in the target school is helping 900 students from socially and economically marginalized communities to get trained in computer applications that would assure them a good and bright future.
                  </p>
                  <p className="text-gray-700">
                    900 pupils from the school have access to computer learning and being trained in computer operations. The students are efficiently operating the computer and acquainted themselves with its various applications and become computer savvy. Students overall academic performance improved and teaching competence of the teachers gained proficiency. The students gain abundant knowledge on computers for career growth.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">d. Digital Class Rooms</h4>
                  <p className="text-gray-700 mb-4">
                    The Digital classroom is a "Technology-enabled" learning environment where Student learning and Interaction with the Teacher. Digital education enhances the learning experience of students by better engaging their attention and enabling them to grasp concepts more readily. It has changed the way education is imparted – a single query or doubt can be clarified in seconds online, there are innumerable resources available for a child online that add on to the classroom teachings. But it's a different story altogether in the rural interior. Dismal condition of the schools, skewed teacher-student ratio, lack of proper study materials; digital education in such a condition seems a far-off dream. To make the dream of the rural students a reality, "Digital Class Rooms" were established in 2 Schools of Palandau Region. These smart class rooms improved academic performance of the students and the teaching effectiveness of the teachers alike. This has brought about complete transformation in the classrooms.
                  </p>
                  
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white border border-gray-200 print:text-sm">
                      <thead>
                        <tr className="bg-gray-100 print:bg-gray-200">
                          <th className="py-2 px-4 border-b text-left">S.No</th>
                          <th className="py-2 px-4 border-b text-left">Name of the School</th>
                          <th className="py-2 px-4 border-b text-left">Place</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b">1</td>
                          <td className="py-2 px-4 border-b">Little Angels School</td>
                          <td className="py-2 px-4 border-b">Rentachintala</td>
                        </tr>
                        <tr className="bg-gray-50 print:bg-gray-100">
                          <td className="py-2 px-4 border-b">2</td>
                          <td className="py-2 px-4 border-b">Alphores School</td>
                          <td className="py-2 px-4 border-b">Rentachintala</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">3</td>
                          <td className="py-2 px-4 border-b">Fathima Vidhya Nikethan School</td>
                          <td className="py-2 px-4 border-b">Rentachintala</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">e. Livelihood Skill Training Projects</h4>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">Vocational Training for Youth - Computers</h5>
                    <p className="text-gray-700">
                      Many of our poor rural youth from our rural villages lack livelihood skills and consequently deprived of employment opportunities. They have become a great concern and financial burden to their parents. Vocational training will equip the youth with a skill for gainful employment. Hence, vocational skill training course were started for youth in Computers with 50 in computer education were trained.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">Sewing Machines for the Poor rural women</h5>
                    <p className="text-gray-700">
                      During this year DSP has trained 100 rural women in tailoring technology. During last year we have trained 5 batches of women in tailoring technology in different villages. These 100 women are provided with a tailoring machine. Through this project 100 most deserving poor rural women who will depend on tailoring and will be able to earn money for themselves and to educate their children.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">Fishing Nets and Putty Boats</h5>
                    <p className="text-gray-700">
                      The 20 needy people in the slums of Macherla, who were in need of livelihood support for their economic development, were given fishing nets and putty boats to take care of themselves and their families. Through this project, 10 men were given fishing nets and 10 men were given putty boats.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Health and Projects for the Differently Abled */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#f15a24] pl-4 print:text-xl">II. Health and Projects for the Differently Abled</h3>
                
                <p className="text-gray-700 mb-6">
                  The projects under this category support the people for a healthy and happy living, Construction of Health centers and Income Generation activities for the disabled for self-support.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">A. Health Projects</h4>
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">a. Early Diagnosis and Prevention of Leprosy in 148 villages of 12 Mandals in Palanadu Region</h5>
                    <p className="text-gray-700 mb-4">
                      This project duration is 2 years starting from January 2019- January 2021.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The programme effectively educated the people that Leprosy is completely curable if treated in time. Counseling of the affected persons, family members and the community around will help remove social stigma and discrimination. The affected person himself will take the necessary steps to come forward and get himself treated and overcome the disease and lead a happy and healthy life in the village community.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The salient features of the programme were survey in the villages to identify leprosy cases, meeting of the women groups, medical camps and awareness generation on Leprosy and Buruli ulcer among the children in the primary schools, street plays and campaigns in the villages on Leprosy and Buruli ulcer. Leprosy cases identified and referred to Government Leprosy Department for treatment.
                    </p>
                    
                    <div className="overflow-x-auto mt-4">
                      <table className="min-w-full bg-white border border-gray-200 print:text-sm">
                        <thead>
                          <tr className="bg-gray-100 print:bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">SN</th>
                            <th className="py-2 px-4 border-b text-left">MANDALS</th>
                            <th className="py-2 px-4 border-b text-left">VILLAGES</th>
                            <th className="py-2 px-4 border-b text-left">Total Population</th>
                            <th className="py-2 px-4 border-b text-left">Male Population</th>
                            <th className="py-2 px-4 border-b text-left">Female Population</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">1.</td>
                            <td className="py-2 px-4 border-b">Veldurthi</td>
                            <td className="py-2 px-4 border-b">9</td>
                            <td className="py-2 px-4 border-b">49054</td>
                            <td className="py-2 px-4 border-b">24608</td>
                            <td className="py-2 px-4 border-b">24446</td>
                          </tr>
                          <tr className="bg-gray-50 print:bg-gray-100">
                            <td className="py-2 px-4 border-b">2.</td>
                            <td className="py-2 px-4 border-b">MACHERLA</td>
                            <td className="py-2 px-4 border-b">11</td>
                            <td className="py-2 px-4 border-b">113048</td>
                            <td className="py-2 px-4 border-b">57140</td>
                            <td className="py-2 px-4 border-b">55908</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">3.</td>
                            <td className="py-2 px-4 border-b">DURGI</td>
                            <td className="py-2 px-4 border-b">10</td>
                            <td className="py-2 px-4 border-b">49059</td>
                            <td className="py-2 px-4 border-b">24571</td>
                            <td className="py-2 px-4 border-b">24488</td>
                          </tr>
                          <tr className="bg-gray-50 print:bg-gray-100">
                            <td className="py-2 px-4 border-b">4.</td>
                            <td className="py-2 px-4 border-b">RENTACHINTALA</td>
                            <td className="py-2 px-4 border-b">9</td>
                            <td className="py-2 px-4 border-b">49827</td>
                            <td className="py-2 px-4 border-b">25058</td>
                            <td className="py-2 px-4 border-b">24769</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">5.</td>
                            <td className="py-2 px-4 border-b">GURAZALA</td>
                            <td className="py-2 px-4 border-b">10</td>
                            <td className="py-2 px-4 border-b">66070</td>
                            <td className="py-2 px-4 border-b">32945</td>
                            <td className="py-2 px-4 border-b">33125</td>
                          </tr>
                          <tr className="bg-gray-50 print:bg-gray-100">
                            <td className="py-2 px-4 border-b">6.</td>
                            <td className="py-2 px-4 border-b">DACHEPALLE</td>
                            <td className="py-2 px-4 border-b">12</td>
                            <td className="py-2 px-4 border-b">75233</td>
                            <td className="py-2 px-4 border-b">37623</td>
                            <td className="py-2 px-4 border-b">37610</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">7.</td>
                            <td className="py-2 px-4 border-b">KAREMPUDI</td>
                            <td className="py-2 px-4 border-b">10</td>
                            <td className="py-2 px-4 border-b">52367</td>
                            <td className="py-2 px-4 border-b">26525</td>
                            <td className="py-2 px-4 border-b">25842</td>
                          </tr>
                          <tr className="bg-gray-50 print:bg-gray-100">
                            <td className="py-2 px-4 border-b">8</td>
                            <td className="py-2 px-4 border-b">PIDUGURALLA</td>
                            <td className="py-2 px-4 border-b">10</td>
                            <td className="py-2 px-4 border-b">122319</td>
                            <td className="py-2 px-4 border-b">61332</td>
                            <td className="py-2 px-4 border-b">60987</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">9</td>
                            <td className="py-2 px-4 border-b">BOLLAPALLE</td>
                            <td className="py-2 px-4 border-b">14</td>
                            <td className="py-2 px-4 border-b">58086</td>
                            <td className="py-2 px-4 border-b">29245</td>
                            <td className="py-2 px-4 border-b">28841</td>
                          </tr>
                          <tr className="bg-gray-50 print:bg-gray-100">
                            <td className="py-2 px-4 border-b">10</td>
                            <td className="py-2 px-4 border-b">IPUR</td>
                            <td className="py-2 px-4 border-b">13</td>
                            <td className="py-2 px-4 border-b">46714</td>
                            <td className="py-2 px-4 border-b">23472</td>
                            <td className="py-2 px-4 border-b">23242</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">11</td>
                            <td className="py-2 px-4 border-b">VINUKONDA</td>
                            <td className="py-2 px-4 border-b">20</td>
                            <td className="py-2 px-4 border-b">112498</td>
                            <td className="py-2 px-4 border-b">56578</td>
                            <td className="py-2 px-4 border-b">55920</td>
                          </tr>
                          <tr className="bg-gray-50 print:bg-gray-100">
                            <td className="py-2 px-4 border-b">12</td>
                            <td className="py-2 px-4 border-b">NUZENDLA</td>
                            <td className="py-2 px-4 border-b">20</td>
                            <td className="py-2 px-4 border-b">52853</td>
                            <td className="py-2 px-4 border-b">26201</td>
                            <td className="py-2 px-4 border-b">26652</td>
                          </tr>
                          <tr className="font-bold">
                            <td className="py-2 px-4 border-b"></td>
                            <td className="py-2 px-4 border-b">Total</td>
                            <td className="py-2 px-4 border-b">148</td>
                            <td className="py-2 px-4 border-b">847,128</td>
                            <td className="py-2 px-4 border-b">425,298</td>
                            <td className="py-2 px-4 border-b">421,830</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-gray-700 mt-4">
                      The project beneficiaries belong to all community people like Scheduled caste, Scheduled tribe, Backward Class and forward class communities. They are socially, economically and educationally backward.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">b. Health Awareness Programme on Leprosy for School Children in 150 Schools 35000 children from the 150 schools in Palandu Region</h5>
                    <p className="text-gray-700 mb-4">
                      The project implemented in the 150 schools in the district of Guntur spread out in the 150 villages in the district. These schools are at a distance of 80 - 120 kilometers away from Guntur Municipal Corporation. They are situated in the remote villages of the district, which are socio-economically backward, deprived of basic amenities and health care. The children are being educated on various child-related diseases such as severe acute malnutrition, coughs, colds, skin diseases, diseases of eyes, nose, throat (ENT) respiration, malaria, anemia, hookworm infection, Vitamin A & Vitamin D deficiencies, pneumonia, breathing, skin diseases, communicable diseases, scabies, fungal infections, eczema, otitis media (infection in middle ear) dental caries, convulsive disorders etc., The principals, teachers, parents highly appreciated the efforts of the DSP in generating health awareness among the school children.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">B. EMPOWERMENT OF CHALLENGED AND VULNERABLE PERSONS</h4>
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">Micro Enterprises for the Physically Challenged and vulnerable people - 58 People</h5>
                    <p className="text-gray-700 mb-4">
                      Micro enterprises help in poverty alleviation and help poor people to improve their lives through starting small business enterprises. Development Society for Poor has assisted in setting up of Micro enterprises for 58 vulnerable people living a miserable state of life without any means of livelihood. These people were extended support through micro schemes to generate income through the setting of petty shops to become financially independent and work towards self-reliance. They also contributed towards the development of their families.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">Mobility Services - Motor bikes for physically challenged</h5>
                    <p className="text-gray-700">
                      The physically challenged young women are very much depressed due to insufficiency in mobility and there are many young women who are in need of mobility services. At present through this project 15 selected physically challenged women are helped with a motor bike.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Women Development and Elderly Care Projects */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#f15a24] pl-4 print:text-xl">III. Women Development and Elderly Care Projects</h3>
                
                <p className="text-gray-700 mb-6">
                  The projects under this category support Income Generation Programmes, Widows and support the poor elderly through sponsorship, starting of Aged Homes and related activities.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 print:text-lg">A. Women Development</h4>
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">a. Sewing Machines for the Poor women</h5>
                    <p className="text-gray-700 mb-4">
                      We have trained more than 200 women in tailoring technology. And 100 women were given training in tailoring technology.
                    </p>
                    <p className="text-gray-700">
                      100 poorest of poor women are provided with a tailoring machine with all the accessories.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">b. Milch Animals for widows</h5>
                    <p className="text-gray-700">
                      DSP provided milch animal breeding for the 50 widows from the villages of Rentachintala and Macherla Mandal. They are socially and economically backward. These women depend solely on agricultural labor and other odd jobs to earn their livelihood. This scheme of milch animal breeding greatly benefits these widows and their children economically and will be a part of their empowerment, improvement of social status and self-employment.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-2 print:text-base">c. Housing for widows</h5>
                    <p className="text-gray-700">
                      Development Society for Poor has constructed 24 houses for the widows. The houses are constructed with a strong and raised foundation with Asbestos sheets as the roof/cement Concrete. It will protect the members of the family from natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Print styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:text-black {
            color: black !important;
          }
          .print\\:bg-white {
            background-color: white !important;
          }
          .print\\:p-4 {
            padding: 1rem !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:text-2xl {
            font-size: 1.5rem !important;
          }
          .print\\:text-xl {
            font-size: 1.25rem !important;
          }
          .print\\:text-lg {
            font-size: 1.125rem !important;
          }
          .print\\:text-base {
            font-size: 1rem !important;
          }
          .print\\:text-sm {
            font-size: 0.875rem !important;
          }
          .print\\:bg-gray-200 {
            background-color: #e5e7eb !important;
          }
          .print\\:bg-gray-100 {
            background-color: #f3f4f6 !important;
          }
          a[href]:after {
            content: none !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default DetailedAnnualReport;