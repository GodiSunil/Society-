import React from 'react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnualReport2018_2022 = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <Breadcrumb title="Annual Report 2018-2022" />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Annual Report 2018-2022</h1>
                <Link 
                  to="/annual-reports" 
                  className="flex items-center text-[#f15a24] hover:text-[#d14619] transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Back to Reports
                </Link>
              </div>
              
              <div className="prose max-w-none">
                <h2>I) EDUCATIONAL, VOCATIONAL SKILL TRAINING AND OTHER PROJECTS</h2>
                
                <h3>a. Educational Programs:</h3>
                <p>A total number of 1920 children benefit from our educational scholarship support. The children who are orphans, semi-orphan and poorest of the poor. Some have guardians, who are agricultural coolies on daily wages and other care takers are ailing and unable to do any physical labour. The children are selected on the basis of being orphans, semi orphans, from socially marginalised communities and the poorest.</p>
                
                <h4>Under this children's program there are two categories of support:</h4>
                <ol>
                  <li>
                    <strong>Educational Assistance Program:</strong> Under the Educational Assistance Programme 885 children were supplied with note books, two pairs of school uniforms, school bag and shoes.
                  </li>
                  <li>
                    <strong>Educational Sponsorship Program:</strong> To open up educational opportunities for these unfortunate children, educational sponsorship program, to impart quality education to children, from these vulnerable group, have been planned. Under this sponsorship program, 1,035 children are assisted through school tuition fees, note books, two pairs of school uniforms, school bags and shoes.
                  </li>
                </ol>

                <h3>b. Mineral Water Plants for the School children and for the Public</h3>
                <p>Clean drinking water is elixir of life and crucial indicator towards achieving the sustainable development goals (SDF). It is essential for the sustenance of human, animal and vegetative life on earth. Guntur district is reeling under severe gap of water demand and supply. The drinking water in the district is hit by fluorosis.</p>
                <p>The Mineral Water plant with "Reverse Osmosis" technology has been set up for the school students located in Macherla region to address the drinking water problem of the School.</p>
                <p>Another Mineral Water Plant with Reverse Osmosis Technology is established in the Rentachintala village, Guntur, India which is benefiting 1000 families in the village. With the implementation of the project the village people are provided with clean drinking water that promotes good health and hygiene among the lower sections of the community.</p>

                <h3>c. Computer Training Center in the Schools at Macherla</h3>
                <p>Computers have invaded all spheres of life, right from our homes, offices, corporate houses, educational and research institutions, hospitals, air, road and rail transport, industrial units, space technology, etc. Computers have become very relevant in the present day society. There is a great demand for trained and skilled personnel in computer operation due to the ever-growing usage and wider applications of computers in all fields of activity. In these circumstances, computer training centre installed in the target school is helping 900 students from socially and economically marginalized communities to get trained in computer applications that would assure them a good and bright future.</p>
                <p>900 pupils from the school have access to computer learning and being trained in computer operations. The students are efficiently operating the computer and acquainted themselves with its various applications and become computer savvy. Students overall academic performance improved and teaching competence of the teachers gained proficiency. The students gain abundant knowledge on computers for career growth.</p>

                <h3>d. Digital Class Rooms</h3>
                <p>The Digital classroom is a "Technology-enabled" learning environment where Student learning and Interaction with the Teacher. Digital education enhances the learning experience of students by better engaging their attention and enabling them to grasp concepts more readily. It has changed the way education is imparted – a single query or doubt can be clarified in seconds online, there are innumerable resources available for a child online that add on to the classroom teachings. But it's a different story altogether in the rural interior. Dismal condition of the schools, skewed teacher-student ratio, lack of proper study materials; digital education in such a condition seems a far-off dream. To make the dream of the rural students a reality, "Digital Class Rooms" were established in 2 Schools of Palandau Region. These smart class rooms improved academic performance of the students and the teaching effectiveness of the teachers alike. This has brought about complete transformation in the classrooms.</p>
                
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b border-gray-200 text-left">S.No</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Name of the School</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Place</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">1</td>
                        <td className="py-2 px-4 border-b border-gray-200">Little Angels School</td>
                        <td className="py-2 px-4 border-b border-gray-200">Rentachintala</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">2</td>
                        <td className="py-2 px-4 border-b border-gray-200">Alphores School</td>
                        <td className="py-2 px-4 border-b border-gray-200">Rentachintala</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-gray-200">3</td>
                        <td className="py-2 px-4 border-b border-gray-200">Fathima Vidhya Nikethan School</td>
                        <td className="py-2 px-4 border-b border-gray-200">Rentachintala</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>e. Livelihood Skill Training Projects</h3>
                <h4>Vocational Training for Youth- Computers:</h4>
                <p>Many of our poor rural youth from our rural villages lack livelihood skills and consequently deprived of employment opportunities. They have become a great concern and financial burden to their parents. Vocational training will equip the youth with a skill for gainful employment. Hence, vocational skill training course were started for youth in Computers with 50 in computer education were trained.</p>
                
                <h4>Sewing Machines for the Poor rural women:</h4>
                <p>During this year DSP has trained 100 rural women in tailoring technology. During last year we have trained 5 batches of women in tailoring technology in different villages. These 100 women are provided with a tailoring machine. Through this project 100 most deserving poor rural women who will depend on tailoring and will be able to earn money for themselves and to educate their children.</p>
                
                <h4>Fishing Nets and Putty Boats:</h4>
                <p>The 20 needy people in the slums of Macherla, who were in need of livelihood support for their economic development, were given fishing nets and putty boats to take care of themselves and their families. Through this project, 10 men were given fishing nets and 10 men were given putty boats.</p>

                <h2>II. Health and Projects for the differently Abled</h2>
                <p>The projects under this category support the people for a healthy and happy living, Construction of Health centers and Income Generation activities for the disabled for self -support.</p>
                
                <h3>A. Health Projects</h3>
                <h4>a. Early Diagnosis and Prevention of Leprosy in 148 villages of 12 Mandals in Palanadu Region</h4>
                <p>This project duration is 2 years starting from January 2019- January 2021.</p>
                <p>The programme effectively educated the people that Leprosy is completely curable if treated in time. Counseling of the affected persons, family members and the community around will help remove social stigma and discrimination. The affected person himself will take the necessary steps to come forward and get himself treated and overcome the disease and lead a happy and healthy life in the village community.</p>
                <p>The salient features of the programme were survey in the villages to identify leprosy cases, meeting of the women groups, medical camps and awareness generation on Leprosy and Buruli ulcer among the children in the primary schools, street plays and campaigns in the villages on Leprosy and Buruli ulcer. Leprosy cases identified and referred to Government Leprosy Department for treatment.</p>

                <h4>Health Awareness Programme on Leprosy for School Children in 150 Schools 35000 children from the 150 schools in Palandu Region.</h4>
                <p>The project implemented in the 150 schools in the district of Guntur spread out in the 150 villages in the district. These schools are at a distance of 80 - 120 kilometers away from Guntur Municipal Corporation. They are situated in the remote villages of the district, which are socio-economically backward, deprived of basic amenities and health care. The children are being educated on various child-related diseases such as severe acute malnutrition, coughs, colds, skin diseases, diseases of eyes, nose, throat (ENT) respiration, malaria, anemia, hookworm infection, Vitamin A & Vitamin D deficiencies, pneumonia, breathing, skin diseases, communicable diseases, scabies, fungal infections, eczema, otitis media (infection in middle ear) dental caries, convulsive disorders etc., The principals, teachers, parents highly appreciated the efforts of the DSP in generating health awareness among the school children.</p>

                <h3>B. Empowerment of Challenged and vulnerable Persons</h3>
                <h4>Micro Enterprises for the Physically Challenged and vulnerable people - 58 People</h4>
                <p>Micro enterprises help in poverty alleviation and help poor people to improve their lives through starting small business enterprises. Development Society for Poor has assisted in setting up of Micro enterprises for 58 vulnerable people living a miserable state of life without any means of livelihood. These people were extended support through micro schemes to generate income through the setting of petty shops to become financially independent and work towards self-reliance. They also contributed towards the development of their families.</p>
                
                <h4>Mobility Services - Motor bikes for physically challenged:</h4>
                <p>The physically challenged young women are very much depressed due to insufficiency in mobility and there are many young women who are in need of mobility services. At present through this project 15 selected physically challenged women are helped with a motor bike.</p>

                <h2>III. Women Development and Elderly Care Projects</h2>
                <p>The projects under this category support Income Generation Programmes, Widows and support the poor elderly through sponsorship, starting of Aged Homes and related activities.</p>
                
                <h3>A. Women Development</h3>
                <h4>a. Sewing Machines for the Poor women:</h4>
                <p>We have trained more than 200 women in tailoring technology. And 100 women were given training in tailoring technology. 100 poorest of poor women are provided with a tailoring machine with all the accessories.</p>
                
                <h4>b. Milch Animals for widows:</h4>
                <p>DSP provided milch animal breeding for the 50 widows from the villages of Rentachintala and Macherla Mandal. They are socially and economically backward. These women depend solely on agricultural labor and other odd jobs to earn their livelihood. This scheme of milch animal breeding greatly benefits these widows and their children economically and will be a part of their empowerment, improvement of social status and self-employment.</p>
                
                <h4>c. Housing for widows:</h4>
                <p>Development Society for Poor has constructed 24 houses for the widows. The houses are constructed with a strong and raised foundation with Asbestos sheets as the roof/cement Concrete. It will protect the members of the family from natural and man-made calamities like cyclone storms, floods and fire accidents. The project improved the social and economic standards of the beneficiaries.</p>
                
                <h4>d. Food and Health Support to Vulnerable Young Mothers:</h4>
                <p>All the 150 Vulnerable Young Mothers and few of them are working in different Places. The civil status of these 150 women is all of them are married. There are about 340 children for these young mothers and these women were provided every month with Medical assistance, food supplements like Rice, Daal, Cooking Oil, Soaps and other essential goods for them as well as for their children.</p>
                
                <h3>B. Elderly Care</h3>
                <h4>a. HOME FOR THE AGED, Rentachintala</h4>
                <p>The Home for the Aged was started on 23rd April, 2014, for the senior citizens at Rentachintala village. The home has strength of 13 elderly people comprising of both men and women. These elderly persons have been badly neglected by their sons and daughters. They lead miserable lives without anybody to take care of their needs. This Home for the Aged has been started specifically to provide the aged not only with accommodation but also to take care of their food needs, health care and other basic necessities free of cost.</p>
                
                <h4>b. SOUP KITCHEN FOR THE ELDERLY, MACHERLA</h4>
                <p>Main problem that we have identified with the Elderly women is the lack of care takers and proper nutrition and medical care during their advancing years.</p>
                <p>The Elderly Women, who are the beneficiaries, are selected on the following criteria:</p>
                <ol>
                  <li>The elderly are selected on the basis of their age: above 65 years.</li>
                  <li>Elderly who lost their husbands or left over</li>
                  <li>who are too weak to earn for themselves</li>
                  <li>Living on streets to fend for themselves without anyone to care for them</li>
                  <li>Elderly who do not have any income generating job</li>
                </ol>
                <p>With these guidelines 50 the most urgent Elderly were selected as the project beneficiaries.</p>

                <h2>IV. DRINKING WATER BOREWELLS PROJECTS</h2>
                <p>Through this project Development Society for Poor sunk 9 bore wells in different target villages of Guntur. With the execution of the project these communities now have adequate supply of drinking water for their needs. Health, hygiene and sanitation have considerably improved.</p>

                <h2>V. EMERGENCY RELIEF PROJECTS</h2>
                <p>The projects under this category support the emergency assistance in the face of calamities.</p>
                
                <h3>a. Food Relief Activity:</h3>
                <p>The relief distribution programme was well planned and systematically organized achieving the target objective. A population of 4132 divided into 1000 families from the Scheduled caste and Scheduled tribe communities affected by floods were distributed food relief. Community awareness on CBDP had helped the communities on disaster preparedness and response.</p>
                
                <h3>b. COVID 19 Activities:</h3>
                <p>As soon as COVID 19 (coronavirus) hit the world DSP has prepared a project draft to help the people of 'Palanadu Region' with the name - The Project COVID 19 response…., a social service project. In the 'Palanadu Region' DSP is working in 148 villages and 100 schools in 12 Mandals.</p>
                
                <h4>i. First Intervention during the Emergency Situation: Awareness Generation on COVID 19 (caronavirus)</h4>
                <p>Educational Hygiene Awareness programmes on COVID-19 Virus (Coronavirus) and other Proper "Hygiene Manners" for 847,128 people from 148 villages and for 71,944 children from 100 schools in Palanadu Region.</p>
                <p>Through the project the Doctors have conducted a training programme for the staff, Health workers and volunteers.</p>
                <p>DSP staff visited house to house and explaining the people to take the necessary precautions.</p>
                <p>10,000 hand-outs printed and distributed to the people. Ads in the Local TV (Palanadu Channel) and Divya Vani TV channel are being screened on awareness generation.</p>
                <p>Laid some public hoardings in some of the towns and villages.</p>
                
                <h4>ii. Second Intervention during the Emergency Situation: Stitching and distribution of face masks</h4>
                <p>35 women started making ample number of masks, which will be very valuable at this Emergency Situation. Overall, 1,00,000 face masks and hand sanitizers were distributed during Pandemic in the Palnadu and Guntur districts.</p>
                
                <h4>iii. Third Intervention during the Emergency Situation: Providing Food supplements to the Migrant families.</h4>
                <p>Since there is no work for the people and many migrants from different states have come to work in this place and they are held up due to lock down because of COVID 19. For those who have no food DSP is providing food grains and other necessities. 1000 people received COVID-19 medicine kits for prevention and treatment during the COVID-19 pandemic period.</p>
                
                <h4>iv. Food Distribution</h4>
                <p>1,629 families were provided with fruits, dhal, rice, eggs, vegetables, groceries and oil during the Pandemic.</p>

                <h2>VI. FOOD SUPPORT FOR THE INFANTS</h2>
                <p>Under this project, 28 infants below the ages of 4 years are provided with food and nutritional support every month in the form of rice, dhal, ghee, jagerry, ragi flour, eggs, biscuits and fruits. Through this project, the health and overall development of the infants and the toddlers are improved greatly and they are getting the much needed nutrition and energy for their growth.</p>

                <h2>VII. Installation of Renewable Energy Source – Biogas Plant</h2>
                <p>Alternative Source of Renewable Energy" in the form of a Biogas plant was implemented at Archangel's Home for the Aged located in the Rentachintala village. The increasing substitution of fossil fuels, such as natural gas, by biogas, would dramatically improve the climate balance. In principle, there would be no shortage of climate-neutral bio methane. Biomass is probably the most underestimated natural and never-ending resource in the world. In addition, biogas is permanently available, transportable, and storable regardless of weather or season, and can, therefore, be used flexibly.</p>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <Link 
                  to="/annual-reports" 
                  className="inline-flex items-center text-[#f15a24] hover:text-[#d14619] transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Back to Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnnualReport2018_2022;
