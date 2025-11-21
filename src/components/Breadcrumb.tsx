import { Link, useLocation } from 'react-router-dom';
import { generateBreadcrumbs } from '@/utils/breadcrumbUtils';

type BreadcrumbProps = {
  title?: string;
  className?: string;
  backLink?: string;
  backText?: string;
};

const Breadcrumb = ({ 
  title, 
  className = '',
  backLink,
  backText = 'Back'
}: BreadcrumbProps) => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);
  const pageTitle = title || breadcrumbs[breadcrumbs.length - 1]?.name || '';

  return (
    <div className={`relative w-full bg-[#0A1A2F] text-white py-4 md:py-6 font-sans ${className}`}>
      <div className="absolute inset-0 bg-[#0A1A2F] w-full h-full -z-10" />
      <div className="relative container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Page Title */}
          <div className="mb-2 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold font-sans">
              {pageTitle}
            </h1>
          </div>
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center text-sm md:text-base font-medium">
            {breadcrumbs.map((item, index) => (
              <div key={item.path} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400 font-normal">›</span>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-normal"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;