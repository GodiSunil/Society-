import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnualReports = () => {
  const reports = [
    {
      year: '2024-2025',
      title: 'Annual Report 2024-2025',
      description: 'Comprehensive overview of our educational programs, women development initiatives, and community projects for the period 2024-2025.',
      fileSize: '3.2 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2024-2025.pdf',
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />,
      hasDetailedView: true,
      viewReportLink: '/annual-report/2024-2025'
    },
    {
      year: '2018-2022',
      title: 'Annual Report 2018-2022',
      description: 'Consolidated report covering our achievements, challenges, and financial performance from 2018 to 2022.',
      fileSize: '4.5 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2018-2022.pdf',
      bgColor: 'bg-[#1cc88a]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />,
      hasDetailedView: true,
      viewReportLink: '/annual-report/2018-2022'
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Annual Reports" />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Annual Reports</h1>
            <p className="text-lg text-gray-600">
              Explore our yearly reports to learn about our financials, program impacts, and organizational achievements.
              We believe in complete transparency in all our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`${report.bgColor} ${report.textColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold">{report.year}</div>
                    <div className="p-2 bg-white/20 rounded-lg">
                      {report.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                  <p className="text-sm opacity-90">{report.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>File: {report.fileType}</span>
                    <span>{report.fileSize}</span>
                  </div>
                  
                  {report.hasDetailedView ? (
                    <Link
                      to={report.viewReportLink || "/annual-report/detail"}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#f15a24] to-[#ff7e5f] hover:from-[#e04f1a] hover:to-[#f15a24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15a24] transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                    >
                      <span className="relative">
                        <span className="absolute -inset-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative">View Report</span>
                      </span>
                      <svg 
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </Link>
                  ) : (
                    <a
                      href={report.downloadLink}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#f15a24] hover:bg-[#d14619] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15a24]"
                      download
                    >
                      <Download className="w-4 h-4" />
                      Download Report
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Transparency</h2>
            <p className="text-gray-700 mb-6">
              At Development Society for Poor, we are committed to maintaining the highest standards of financial transparency and accountability. 
              Our annual reports are independently audited and provide a comprehensive overview of our financial health, program expenditures, 
              and the impact of your generous contributions.
            </p>
            <p className="text-gray-700">
              For any additional information or specific queries about our financials, please contact us at{' '}
              <a href="mailto:accounts@developmentsociety.org" className="text-[#f15a24] hover:underline">
                accounts@developmentsociety.org
              </a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AnnualReports;