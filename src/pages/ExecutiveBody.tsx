import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { User, User2, Mail } from 'lucide-react';

const ExecutiveBody = () => {
  const executiveMembers = [
    {
      id: 1,
      name: "Ms. S. Thomasamma",
      position: "President",
      image: "/images/ms.thomasamma.jpg",
      bio: "Nurse by profession, Ms. S. Thomasamma leads the organization with compassion and dedication to serving the poor and needy.",
      email: "dsociety2005@gmail.com"
    },
    {
      id: 2,
      name: "Mr. A. Sesha Giri Rao",
      position: "Vice-President",
      image: "/images/a.prabhudasu.jpg",
      bio: "Advocate by profession, Mr. A. Sesha Giri Rao brings legal expertise to guide the organization's initiatives and ensure compliance.",
      email: "dsociety2005@gmail.com"
    },
    {
      id: 3,
      name: "Mr. S. Nageswara Rao",
      position: "Financial Secretary",
      image: "/images/default.jpg",
      bio: "Accountant by profession, Mr. S. Nageswara Rao oversees the financial operations and ensures transparency in all financial matters.",
      email: "dsociety2005@gmail.com"
    },
    {
      id: 4,
      name: "Ms. D. Anitha Kumari",
      position: "Secretary",
      image: "/images/default.jpg",
      bio: "Coordinator by role, Ms. D. Anitha Kumari manages the day-to-day operations and coordinates various development programs.",
      email: "dsociety2005@gmail.com"
    },
    {
      id: 5,
      name: "Ms. K. Sravanthi",
      position: "Executive Member",
      image: "/images/default.jpg",
      bio: "Housewife dedicated to social service, Ms. K. Sravanthi contributes to the organization's mission through active participation in community programs.",
      email: "dsociety2005@gmail.com"
    },
    {
      id: 6,
      name: "Fr. K. Rayapu Reddy",
      position: "Executive Member",
      image: "/images/default.jpg",
      bio: "Priest and Advocate, Fr. K. Rayapu Reddy combines spiritual guidance with legal expertise to support the organization's initiatives.",
      email: "dsociety2005@gmail.com"
    },
    {
      id: 7,
      name: "Ms. P. Jescintha",
      position: "Executive Member",
      image: "/images/default.jpg",
      bio: "Housewife committed to social work, Ms. P. Jescintha actively participates in programs aimed at empowering women and children.",
      email: "dsociety2005@gmail.com"
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Executive Body Members" />
      
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Executive Body Members</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Meet the dedicated individuals leading our organization towards positive change and community development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executiveMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-orange-100 mb-6 bg-orange-50 flex items-center justify-center">
                      {member.image && member.image !== '/images/default.jpg' ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-4 text-orange-400">
                          {member.name.startsWith('Ms.') || member.name.includes('Kumari') ? (
                            <User2 className="w-24 h-24" />
                          ) : (
                            <User className="w-24 h-24" />
                          )}
                          <span className="mt-2 text-sm font-medium text-gray-500">No photo available</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">{member.name}</h3>
                    <p className="text-orange-500 font-medium">{member.position}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-orange-500 hover:underline"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExecutiveBody;