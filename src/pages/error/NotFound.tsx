import React from 'react';
import { Link } from 'react-router-dom';
import { primaryColor } from '../../componets/util/constants';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import Container from '../../componets/shared/container';

const NotFound: React.FC = () => {
  return (
    <Container>
        
        <div className="min-w-[100%] mx-auto text-center py-16">
          {/* Error Icon */}
          <div className="mb-12">
            <div className="mx-auto w-fit">
              <FaExclamationTriangle size="4em" color="#EAB308" />
            </div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We can't seem to find the page you're looking for. 
            It might have been removed, renamed, or doesn't exist.
          </p>

          {/* Action Button */}
          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-6 py-3 text-white bg-[#8cc63f] rounded-lg 
              hover:bg-[#70ad35] transition-all duration-300 text-lg font-medium 
              shadow-lg hover:shadow-xl`}
          >
            <FaHome size="1.25em" />
            <span>Return Home</span>
          </Link>

          {/* Additional Help */}
          <p className="mt-8 text-gray-500">
            If you think this is a mistake, please{' '}
            <Link 
              to="/#contact-us" 
              className="text-[#8cc63f] hover:text-[#70ad35] underline"
            >
              contact us
            </Link>
          </p>
        </div>
     
    </Container>
  );
};

export default NotFound;
