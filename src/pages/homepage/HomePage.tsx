// import HeroPage from './components/heropage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CeoSection from './components/ceosection';
import ServiceSections from './components/GridSwipper';
import HeroSection from './components/heroSection';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import BuildingSystemsSolutions from './components/BuildingSystemsSolutions';
import SEO from '../../componets/shared/SEO';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a section to scroll to from navigation
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500); // Increased delay to ensure content is loaded
    }
  }, [location.state]);

  return (
    <>
      <SEO 
        title="Cinctamore - A Pattern of Good Works & Solutions Finder"
        description="Cinctamore specializes in Architecture, Urban Design, Engineering & Construction, delivering innovative solutions across Africa. Discover our comprehensive range of services."
        keywords="architecture, urban design, construction, digital fabrication, Ghana, Africa, design solutions, engineering services, business collaboration"
      />
      <HeroSection />
      <CeoSection />
      <ServiceSections/>
      <BuildingSystemsSolutions />
      <Clients/>
      <ContactForm/>
    </>
  );
};

export default HomePage;
