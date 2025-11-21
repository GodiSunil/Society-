import { useState } from 'react';
import { Phone, Mail, Facebook, Youtube, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // State to manage mobile menu open/close
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile, shown on md and above */}
      <div className="hidden md:block bg-orange-600 text-white py-2">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            {/* Phone Numbers */}
            <div className="flex items-center gap-2">
              <a href="tel:+919985512014" className="hover:underline flex items-center gap-1">
                <Phone size={14} className="flex-shrink-0" />
                <span>+91 99855 12014</span>
              </a>
              <span>|</span>
              <a href="tel:+918632265652" className="hover:underline">+91 863 - 2265652</a>
            </div>
            
            {/* Email and Social */}
            <div className="flex items-center gap-4">
              <a href="mailto:dsociety2005@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail size={14} className="flex-shrink-0" />
                <span>dsociety2005@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 border-l border-white/20 pl-4">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-white/80 transition-colors flex items-center gap-1" 
                   aria-label="Facebook">
                  <Facebook size={16} className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-white/80 transition-colors flex items-center gap-1" 
                   aria-label="YouTube">
                  <Youtube size={16} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/poorlogo.png" 
                alt="Development Society For Poor Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium">
              <Link to="/" className={`text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium ${location.pathname === '/' ? 'text-[#f15a24] border-b-2 border-[#f15a24]' : ''}`}>
                HOME
              </Link>
              
              <div className="relative group">
                <button className={`flex items-center text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium ${['/about', '/about/vision-mission', '/executive-body', '/president-message', '/policies', '/annual-reports', '/audit-reports'].includes(location.pathname) ? 'text-[#f15a24] border-b-2 border-[#f15a24]' : ''}`}>
                  ABOUT US <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <Link to="/about" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/about' ? 'text-[#f15a24] font-bold' : ''}`}>About the Organization</Link>
                  <Link to="/about/vision-mission" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/about/vision-mission' ? 'text-[#f15a24] font-bold' : ''}`}>Vision & Mission</Link>
                  <Link to="/executive-body" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/executive-body' ? 'text-[#f15a24] font-bold' : ''}`}>Executive Body</Link>
                  <Link to="/president-message" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/president-message' ? 'text-[#f15a24] font-bold' : ''}`}>President's Message</Link>
                  <Link to="/policies" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/policies' ? 'text-[#f15a24] font-bold' : ''}`}>Our Policies</Link>
                  <Link to="/annual-reports" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/annual-reports' ? 'text-[#f15a24] font-bold' : ''}`}>Annual Reports</Link>
                  <Link to="/audit-reports" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/audit-reports' ? 'text-[#f15a24] font-bold' : ''}`}>Audit Reports</Link>
                </div>
              </div>

              <Link to="/services" className={`text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium ${location.pathname === '/services' || location.pathname.startsWith('/service/') ? 'text-[#f15a24] border-b-2 border-[#f15a24]' : ''}`}>
                OUR SERVICES
              </Link>

              <div className="relative group">
                <button className={`flex items-center text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium ${['/current-projects', '/upcoming-projects', '/completed-projects'].includes(location.pathname) ? 'text-[#f15a24] border-b-2 border-[#f15a24]' : ''}`}>
                  PROGRAMMES <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <Link to="/current-projects" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/current-projects' ? 'text-[#f15a24] font-bold' : ''}`}>Current Projects</Link>
                  <Link to="/upcoming-projects" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/upcoming-projects' ? 'text-[#f15a24] font-bold' : ''}`}>Upcoming Projects</Link>
                  <Link to="/completed-projects" className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${location.pathname === '/completed-projects' ? 'text-[#f15a24] font-bold' : ''}`}>Completed Projects</Link>
                </div>
              </div>

              <Link to="/gallery" className={`text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium ${location.pathname === '/gallery' ? 'text-[#f15a24] border-b-2 border-[#f15a24]' : ''}`}>
                GALLERY
              </Link>
              
              <Link to="/contact" className={`text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium ${location.pathname === '/contact' ? 'text-[#f15a24] border-b-2 border-[#f15a24]' : ''}`}>
                CONTACT
              </Link>
              
              <Button asChild className="bg-[#f15a24] hover:bg-[#d14619] text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium ml-2">
                <Link to="/donate">DONATE NOW</Link>
              </Button>
              
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#f15a24] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
            {/* Mobile Contact Info - Only shown in mobile menu */}
            <div className="bg-orange-600 text-white p-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <a href="tel:+919985512014" className="hover:underline flex items-center gap-1">
                    <Phone size={16} />
                    <span>+91 99855 12014</span>
                  </a>
                  <span>|</span>
                  <a href="tel:+918632265652" className="hover:underline">+91 863 - 2265652</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:dsociety2005@gmail.com" className="hover:underline">dsociety2005@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-white/80 transition-colors" 
                     aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-white/80 transition-colors" 
                     aria-label="YouTube">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="py-4 space-y-1">
              <Link 
                to="/" 
                className={`block px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-[#f15a24] font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              
              <div className="border-t border-gray-100">
                <button
                  onClick={() => toggleDropdown('about')}
                  className={`flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 text-left ${['/about', '/about/vision-mission', '/executive-body', '/president-message', '/policies', '/annual-reports', '/audit-reports'].includes(location.pathname) ? 'text-[#f15a24] font-bold' : ''}`}
                >
                  ABOUT US <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'about' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-8 space-y-1 bg-gray-50">
                    <Link to="/about" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/about' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About the Organization</Link>
                    <Link to="/about/vision-mission" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/about/vision-mission' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Vision & Mission</Link>
                    <Link to="/executive-body" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/executive-body' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Executive Body</Link>
                    <Link to="/president-message" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/president-message' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>President's Message</Link>
                    <Link to="/policies" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/policies' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Our Policies</Link>
                    <Link to="/annual-reports" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/annual-reports' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Annual Reports</Link>
                    <Link to="/audit-reports" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/audit-reports' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Audit Reports</Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/services" 
                className={`block px-6 py-3 hover:bg-gray-50 font-medium transition-colors duration-200 border-t border-gray-100 ${location.pathname === '/services' || location.pathname.startsWith('/service/') ? 'text-[#f15a24] font-bold' : 'text-gray-800'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                OUR SERVICES
              </Link>
              
              <div className="border-t border-gray-100">
                <button
                  onClick={() => toggleDropdown('programmes')}
                  className={`flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 text-left ${['/current-projects', '/upcoming-projects', '/completed-projects'].includes(location.pathname) ? 'text-[#f15a24] font-bold' : ''}`}
                >
                  PROGRAMMES <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'programmes' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'programmes' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-8 space-y-1 bg-gray-50">
                    <Link to="/current-projects" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/current-projects' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Current Projects</Link>
                    <Link to="/upcoming-projects" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/upcoming-projects' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Upcoming Projects</Link>
                    <Link to="/completed-projects" className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${location.pathname === '/completed-projects' ? 'text-[#f15a24] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Completed Projects</Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/gallery" 
                className={`block px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 border-t border-gray-100 ${location.pathname === '/gallery' ? 'text-[#f15a24] font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GALLERY
              </Link>
              
              <Link 
                to="/contact" 
                className={`block px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 border-t border-gray-100 ${location.pathname === '/contact' ? 'text-[#f15a24] font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              
              <div className="px-6 py-4 border-t border-gray-100">
                <Button 
                  asChild 
                  className="w-full bg-[#f15a24] hover:bg-[#d14619] text-white font-medium py-3 text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/donate">DONATE NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;