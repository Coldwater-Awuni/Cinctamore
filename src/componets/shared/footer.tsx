import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { cinctamore_Logo } from '../../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f1f1f] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img src={cinctamore_Logo} alt="Cinctamore Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400">
              We strive to be Consistent, Reliable and Relentless Global Design Business Collaborator, Solutions Finder and Developer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/About-us" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link to="/urban-design" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                  Urban Design
                </Link>
              </li>
              <li>
                <Link to="/construction" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                  Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#8cc63f]" />
                <div>
                  <p className="text-gray-400">+233 (0)50 139 8383</p>
                  <p className="text-gray-400">+233 (0)20 068 5434</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#8cc63f]" />
                <a href="mailto:adjasai@cinctamore.com" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                  adjasai@cinctamore.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#8cc63f] mt-1" />
                <p className="text-gray-400">
                  20 Kusia Street,<br />
                  Kokomlemle,<br />
                  Accra, Ghana
                </p>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#8cc63f] transition-colors">
                <FaFacebook className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#8cc63f] transition-colors">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#8cc63f] transition-colors">
                <FaTiktok className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#8cc63f] transition-colors">
                <FaXTwitter className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Cinctamore. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-[#8cc63f] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;