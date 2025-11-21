
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, BookOpen, Heart, Home } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const About = () => {
  const timelineEvents = [
    {
      year: "2005",
      description: "Development Society for Poor (DSP) was started by Rev. Fr. K. Rayapu Reddy & Mr. A. Prabhudasu with Registration Number: 876/2005 dated 29th December 2005. Since 2005 social work mainly relief and charitable works were undertaken by a part-time person director.",
      icon: <Award className="w-6 h-6" />,
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white'
    },
    {
      year: "2014",
      description: "On March 14, 2014 DSP started \"Archangel's Home for the Aged\" at Rentachintala with Mr. Satish Kumar Reddy in a rented building to cater the needs of the destitute elderly. It was converted into a full time responsibility.",
      icon: <Home className="w-6 h-6" />,
      bgColor: 'bg-[#1cc88a]',
      textColor: 'text-white'
    },
    {
      year: "2016",
      description: "New Home for the Aged was constructed and dedicated on March 14, 2016 with the help Of Mr. K. Marreddy as the builder.",
      icon: <Home className="w-6 h-6" />,
      bgColor: 'bg-[#f6c23e]',
      textColor: 'text-white'
    },
    {
      year: "2017",
      description: "Mrs. Thomasamma is elevated as President and DSP got 12 A, Tax Exemption Status",
      icon: <Award className="w-6 h-6" />,
      bgColor: 'bg-[#e74a3b]',
      textColor: 'text-white'
    },
    {
      year: "2018",
      description: "January 2, 2018 DSP got FCRA - Mrs. Mary Ruby started working as the Project Manager. Different Staff was recruited as different project coordinators – Mrs. Anitha Kumari, Mrs. Yeruva Maria Rani, Mrs. Allam Mary, and Mrs. Boyapati Mahitha. Started different Projects",
      icon: <Users className="w-6 h-6" />,
      bgColor: 'bg-[#36b9cc]',
      textColor: 'text-white'
    },
    {
      year: "2018",
      description: "Educating the Children – Specially Girl Children, Young Girls, Orphans, Semi-Orphans and most Needy were supported",
      icon: <BookOpen className="w-6 h-6" />,
      bgColor: 'bg-[#6f42c1]',
      textColor: 'text-white'
    },
    {
      year: "2018",
      description: "Helping the Victims: Widows, Challenged people",
      icon: <Heart className="w-6 h-6" />,
      bgColor: 'bg-[#fd7e14]',
      textColor: 'text-white'
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="About the Organisation" />

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Organization Intro */}
          <motion.section 
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Development Society for Poor (DSP)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rentachintal Post & Mandal, Guntur 522 421, Andhra Pradesh, India
            </p>
            <p className="text-gray-700 leading-relaxed">
              A social service organization working in the district of Guntur, in the State of Andhra Pradesh, South India. 
              Its main thrust is working towards the integral rural development. All its programmes are geared towards the 
              welfare and empowerment of all sections of people particularly the poor and the marginalised irrespective of 
              caste, creed and religion.
            </p>
          </motion.section>

          {/* Timeline Section */}
          <div id="journey" className="max-w-4xl mx-auto mb-20 pt-16 -mt-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12 text-gray-900 font-serif"
            >
              Our Journey So Far
            </motion.h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>
              
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
                >
                  <div className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                      <div className={`${event.bgColor} ${event.textColor} p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-white bg-opacity-20 rounded-full mr-3 backdrop-filter backdrop-blur-sm">
                            {event.icon}
                          </div>
                          <h3 className="text-xl font-bold">{event.year}</h3>
                        </div>
                        <p className="leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Organization Description */}
          <motion.section 
            id="commitment"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm mt-20"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Our Commitment</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Goaded by Divine Spirit and Social will, expressed in unmistakable terms at and with full commitment, 
                accepted the intention of the regulations of the society with regard to rendering loving service to the 
                poor and the needy to help themselves in every possible way. For this purpose Development Society for Poor 
                (DSP) came into being in 2005 with the following aims and objectives; to perform acts of charity and render 
                service to those in need, irrespective of caste, race or religion" and "to engage in social service activities 
                aimed at improving the economic, educational and social conditions of the poor including farmers, working 
                classes or persons of whatever occupation".
              </p>
              <p>
                Development Society for Poor was established based on the social teaching of India with the fundamental orientation:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To support the concept of integral development through the efforts of the people to attain their economic, 
                social as well as their cultural and spiritual aspirations.</li>
                <li>To fight together, in line with this approach, against under-development and injustice in all their forms, 
                in their causes and in their consequence.</li>
                <li>To express solidarity with the marginalized groups and peoples, without distinction of race, nationality or 
                religious conviction, landless agricultural labourers, empowerment of women and girl children, traditional 
                handloom weavers, slum dwellers, street children to work for their holistic development.</li>
              </ul>
              <p>
                Since 2005 social work mainly relief and charitable works were undertaken by a part-time person director. 
                Development Society for Poor was registered in 2005. It was converted into a full time responsibility with 
                the stating of Archangel's Home for the Aged at Rentachintala in 2014.
              </p>
            </div>
          </motion.section>
        </div>
      </section>
    </Layout>
  );
};

export default About;
