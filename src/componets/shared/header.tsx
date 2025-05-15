import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { cinctamore_Logo } from "../../assets/assets";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaPlus, FaMinus } from "react-icons/fa6";
// import { primaryColor } from "../util/constants";

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: Array<{ label: string; href: string; }>;
}

const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: 'About-us',
  },
  {
    label: 'Services',
    href: '#architecture',
    dropdownItems: [
      { label: 'Architecture', href: '#architecture' },
      { label: 'Community Planing / Urban Design', href: '#urban-design' },
      { label: 'Engineering and Construction', href: '#construct' },
      { label: 'Robotics and Digital Fabrication', href: '#digital-fabrication' },
      { label: 'Branding and HIPS', href: '#print-brand' },
      { label: 'Architectural Tours', href: '#architectural-tours' },
    ]
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact Us', href: '#contact-us' },
];

const socialIcons = [
  { Icon: FaFacebook, title: 'Facebook', href: '#' },
  { Icon: FaInstagram, title: 'Instagram', href: '#' },
  { Icon: FaTiktok, title: 'TikTok', href: '#' },
  { Icon: FaXTwitter, title: 'X Twitter', href: '#' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();

    if (path.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          setActiveDropdown(null); // Close dropdown after navigation
        }
      } else {
        // Navigate to home with scroll state
        navigate('/', { 
          state: { scrollTo: path }
        });
      }
    } else {
      navigate(path);
    }
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={cinctamore_Logo}
              alt="Cinctamore Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`py-2 transition-all duration-200 flex items-center group-hover:text-[#8cc63f]
                    ${location.pathname === item.href ? 'text-[#8cc63f]' : 'text-white'}`}
                  onClick={(e) => handleNavigation(e, item.href)}
                >
                  <span className="relative inline-flex items-center">
                    {item.label}
                    {item.dropdownItems && (
                      <span className={`ml-2 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`}>
                        {activeDropdown === index ? 
                          <FaMinus size="0.75em" /> : 
                          <FaPlus size="0.75em" />
                        }
                      </span>
                    )}
                  </span>
                </Link>

                {item.dropdownItems && (
                  <div 
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`absolute top-full left-0 w-64 bg-black shadow-lg rounded-md py-2 mt-2
                      transition-all duration-300 transform origin-top
                      ${activeDropdown === index 
                        ? 'opacity-100 scale-y-100 visible' 
                        : 'opacity-0 scale-y-95 invisible'}`}
                  >
                    {item.dropdownItems.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        to={dropItem.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-200
                          ${location.pathname === dropItem.href 
                            ? 'text-[#8cc63f]' 
                            : 'text-white hover:text-[#8cc63f] hover:bg-gray-900'}`}
                        onClick={(e) => handleNavigation(e, dropItem.href)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialIcons.map(({ Icon, title, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-white hover:text-[#8cc63f] transition-colors duration-200"
                title={title}
              >
                <Icon size="1.25em" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#8cc63f]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <FaMinus size={24} /> : 
              <FaPlus size={24} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-black shadow-lg">
            <div className="px-4 py-2">
              {navigationItems.map((item, index) => (
                <div key={index} className="py-2">
                  <Link
                    to={item.href}
                    className={`block py-2 flex items-center justify-between
                    ${location.pathname === item.href
                        ? 'text-[#8cc63f]' // Active page color
                        : 'text-white hover:text-[#70ad35]' // Hover color
                      }`}
                    onClick={(e) => handleNavigation(e, item.href)}
                  >
                    {item.label}
                    {item.dropdownItems && (
                      <span className="ml-2">
                        {activeDropdown === index ? 
                          <FaMinus size="0.75em" /> : 
                          <FaPlus size="0.75em" />
                        }
                      </span>
                    )}
                  </Link>

                  {item.dropdownItems && activeDropdown === index && (
                    <div className="pl-4 space-y-2">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.href}
                          className={`block text-sm py-2
                          ${location.pathname === dropItem.href
                              ? 'text-[#8cc63f]' // Active page color
                              : 'text-gray-300 hover:text-[#70ad35]' // Hover color
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex space-x-4 py-4 border-t border-gray-700 px-4">
                {socialIcons.map(({ Icon, title, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="text-white hover:text-[#8cc63f] transition-colors duration-200"
                    title={title}
                  >
                    <Icon size="1.25em" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

