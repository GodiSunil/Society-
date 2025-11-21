import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, Target, Heart, CheckCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    'education': {
      title: "Educational And Vocational Skill Training Projects",
      description: "Empowering through knowledge and skills development",
      image: "/images/educational.jpg",
      overview: "Our educational initiatives focus on providing quality education and vocational training to underprivileged children and youth. We believe education is the cornerstone of development and the most effective way to break the cycle of poverty.",
      objectives: [
        "Provide formal and non-formal education opportunities",
        "Support orphan and semi-orphan children's education",
        "Develop vocational skills for employability",
        "Construct and maintain educational infrastructure",
        "Promote digital literacy and modern learning methods"
      ],
      programs: [
        {
          name: "School Support Program",
          description: "Financial assistance for tuition, books, uniforms, and transportation for underprivileged children.",
          beneficiaries: "500+ students annually"
        },
        {
          name: "Vocational Training Centers",
          description: "Skills training in computer literacy, tailoring, handicrafts, and technical courses.",
          beneficiaries: "200+ youth trained per year"
        },
        {
          name: "Digital Learning Initiative",
          description: "Computer labs and internet connectivity in rural schools to bridge the digital divide.",
          beneficiaries: "15 schools equipped"
        }
      ],
      impact: "Over 2,000 students have benefited from our educational programs, with 85% showing improved academic performance and 70% of vocational training graduates finding employment or starting their own businesses."
    },
    'health': {
      title: "Health And Projects For The Differently Abled",
      description: "Ensuring healthcare access and dignity for all",
      image: "/images/health.jpg",
      overview: "Our health initiatives aim to provide comprehensive healthcare services to underserved communities, with special focus on differently-abled individuals who often face additional barriers to accessing healthcare.",
      objectives: [
        "Provide accessible healthcare services to underserved communities",
        "Support differently-abled individuals with specialized care",
        "Construct and maintain healthcare facilities",
        "Conduct health awareness and preventive care programs",
        "Provide assistive devices and rehabilitation services"
      ],
      programs: [
        {
          name: "Mobile Health Clinics",
          description: "Bringing healthcare services directly to remote and underserved communities.",
          beneficiaries: "50+ villages served"
        },
        {
          name: "Disability Support Program",
          description: "Providing assistive devices, therapy, and support services for differently-abled individuals.",
          beneficiaries: "300+ individuals supported annually"
        },
        {
          name: "Health Awareness Campaigns",
          description: "Educating communities about preventive healthcare, hygiene, and nutrition.",
          beneficiaries: "10,000+ people reached"
        }
      ],
      impact: "Our health initiatives have provided medical care to over 5,000 individuals and supported 1,200+ differently-abled people with assistive devices and rehabilitation services, significantly improving their quality of life."
    },
    'women-development': {
      title: "Women Development and Elderly Care Projects",
      description: "Empowering women and caring for the elderly",
      image: "/images/women-development.jpg",
      overview: "Our women development and elderly care programs focus on empowering women through self-help groups, skill development, and supporting the elderly with care and dignity in their golden years.",
      objectives: [
        "Form and support women's self-help groups",
        "Provide skill development and income generation opportunities",
        "Support elderly care through sponsorship and aged homes",
        "Promote women's health and education",
        "Create sustainable livelihoods for women and elderly"
      ],
      programs: [
        {
          name: "Self-Help Group Initiative",
          description: "Formation and support of women's self-help groups for savings and micro-enterprises.",
          beneficiaries: "75+ SHGs with 1,500+ women"
        },
        {
          name: "Elderly Care Centers",
          description: "Providing shelter, care, and medical support for abandoned and needy elderly individuals.",
          beneficiaries: "100+ elderly residents"
        },
        {
          name: "Skill Development for Women",
          description: "Vocational training in tailoring, handicrafts, and other marketable skills.",
          beneficiaries: "500+ women trained annually"
        }
      ],
      impact: "Our programs have empowered over 5,000 women through self-help groups and skill development, while providing care and support to 300+ elderly individuals through our care centers and sponsorship programs."
    },
    'victims': {
      title: "Projects for the Victims",
      description: "Supporting those in desperate need",
      image: "/images/projects.jpg",
      overview: "Our victim support programs provide comprehensive assistance to the most vulnerable members of society, including orphans, widows, differently-abled individuals, elderly, and those affected by leprosy and other diseases.",
      objectives: [
        "Support orphaned and vulnerable children's education and care",
        "Provide assistance to widows and single mothers",
        "Support differently-abled individuals with rehabilitation",
        "Care for abandoned elderly individuals",
        "Provide treatment and support for leprosy and other disease patients"
      ],
      programs: [
        {
          name: "Orphan Support Program",
          description: "Comprehensive support for orphaned and vulnerable children including education, healthcare, and shelter.",
          beneficiaries: "200+ children supported"
        },
        {
          name: "Widow Rehabilitation",
          description: "Skill training and financial support for widows to become self-reliant.",
          beneficiaries: "150+ widows supported"
        },
        {
          name: "Leprosy Eradication Program",
          description: "Treatment, rehabilitation, and social integration of leprosy patients.",
          beneficiaries: "500+ patients treated"
        }
      ],
      impact: "Our victim support programs have transformed the lives of thousands, providing education to 500+ children, rehabilitation to 200+ differently-abled individuals, and medical care to 1,000+ patients, restoring hope and dignity to those in need."
    },
    'emergency': {
      title: "Emergency Relief Projects",
      description: "Rapid response to disasters and crises",
      image: "/images/emergency.jpeg",
      overview: "Our emergency relief programs provide immediate assistance to communities affected by natural and man-made disasters, helping them recover and rebuild their lives.",
      objectives: [
        "Provide immediate relief to disaster-affected communities",
        "Support rehabilitation and reconstruction efforts",
        "Provide essential supplies and medical aid",
        "Help communities build resilience to future disasters",
        "Coordinate with government and other agencies for effective response"
      ],
      programs: [
        {
          name: "Disaster Response Team",
          description: "Rapid deployment of trained personnel and resources to disaster-affected areas.",
          beneficiaries: "50+ communities served"
        },
        {
          name: "Relief Distribution",
          description: "Provision of food, water, shelter, and other essential supplies to affected families.",
          beneficiaries: "10,000+ families supported"
        },
        {
          name: "Rehabilitation Program",
          description: "Long-term support for rebuilding homes, infrastructure, and livelihoods.",
          beneficiaries: "1,000+ families rehabilitated"
        }
      ],
      impact: "Our emergency response teams have provided life-saving assistance to over 50,000 people affected by disasters, distributed 100+ tons of relief materials, and helped 1,000+ families rebuild their lives through our rehabilitation programs."
    }
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <Layout>
        <PageHeader 
          title="Service Not Found"
        />
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <p className="text-gray-600 mb-6">The requested service could not be found.</p>
          <Button 
            onClick={() => navigate('/services')} 
            className="bg-[#f15a24] hover:bg-orange-600"
          >
            Back to Services
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-white">
        <PageHeader 
          title={service.title}
          description={service.description}
        />
      </div>

      {/* Hero Image */}
      <div className="relative bg-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/placeholder.jpg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.overview}
                </p>
              </CardContent>
            </Card>

            {/* Objectives */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Target className="mr-3 text-[#f15a24]" size={28} />
                  Our Objectives
                </h2>
                <ul className="space-y-3">
                  {service.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Programs */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="mr-3 text-[#f15a24]" size={28} />
                  Our Programs
                </h2>
                <div className="space-y-6">
                  {service.programs.map((program, index) => (
                    <div key={index} className="border-l-4 border-[#f15a24] pl-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                      <p className="text-gray-600 mt-1">{program.description}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-medium">Beneficiaries:</span> {program.beneficiaries}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Heart className="mr-3 text-[#f15a24]" size={28} />
                  Our Impact
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.impact}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#overview" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Overview
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#objectives" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Our Objectives
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#programs" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Our Programs
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#impact" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Our Impact
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Have questions about this service? We'd love to hear from you.
                </p>
                <Button className="w-full bg-[#f15a24] hover:bg-orange-600">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
