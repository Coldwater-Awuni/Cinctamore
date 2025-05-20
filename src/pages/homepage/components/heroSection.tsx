import React, { useEffect } from 'react';
import ContentSwiper from '../../../componets/shared/ContentSwiper';
import { cinctamore_Logo } from '../../../assets/assets';
import { preloadMediaArray } from '../../../componets/util/preloadMedia';

const HeroSection: React.FC = () => {
  const heroSlides = [
    {
      id: 1,
      type: 'image' as const,
      content: 'assets/img/slider/architectural-slider/UGBS.webp',
      isUrl: false,
      captionClassName: 'absolute bottom-4 left-1/2 md:bottom-[-25%] md:left-[20%] transform -translate-x-1/2 mb-4 animate-fadeIn z-20',
      caption: (
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[80%] lg:max-w-[60%]">
          <img 
            src={cinctamore_Logo} 
            alt="Cinctamore Logo" 
            className="w-auto h-auto max-w-[150px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] mx-auto"
          />
        </div>
      )
    },
    {
      id: 2,
      type: 'video' as const,
      content: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617538/home_ulvatu.mp4',
      isUrl: true,
      captionClassName: 'absolute bottom-4 left-1/2 md:bottom-[-25%] md:left-[25%] transform -translate-x-1/2 mb-4 animate-fadeIn z-20',
      caption: (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-white">
          ...there is always a better way...
        </h2>
      )
    },
    {
      id: 3,
      type: 'image' as const,
      content: 'swippers/Dedesua_8.webp',
      isUrl: false,
      captionClassName: 'absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-4 animate-slideInLeft z-20',
      caption: (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
          ...we have time for each project...
        </h2>
      )
    },
    {
      id: 4,
      type: 'image' as const,
      content: 'assets/img/slider/homeslider/home4.webp',
      isUrl: false,
      captionClassName: 'absolute bottom-4 right-4 md:bottom-10 md:right-10 animate-slideInRight z-20',
      caption: (
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-right text-white">
          ...pure diligence...
        </h2>
      )
    }
  ];

  useEffect(() => {
    const mediaUrls = heroSlides.map(slide => {
      // For both URLs and local paths
      return typeof slide.content === 'string' ? slide.content : '';
    }).filter(Boolean);

    // Add logo to preload list
    mediaUrls.push(cinctamore_Logo);

    // Start preloading
    preloadMediaArray(mediaUrls)
      .then(() => {
        console.log('All hero section media preloaded successfully');
      })
      .catch((error) => {
        console.warn('Some hero section media failed to preload:', error);
      });
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <section className="relative block w-full h-[98vh] md:h-[85vh] lg:h-[98vh] overflow-hidden mb-1">
      <div className="absolute inset-0 w-full h-full">
        <ContentSwiper
          slides={heroSlides}
          autoplay={true}
          
          showDots={true}
          showArrows={true}
          className="w-full h-full overflow-hidden object-contain"
          delay={6000}
        />
      </div>
    </section>
  );
};

export default HeroSection;
