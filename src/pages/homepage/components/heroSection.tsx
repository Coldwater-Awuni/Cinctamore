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
      captionClassName: 'absolute bottom-[-25%] left-[20%] transform -translate-x-1/2  backdrop-blur-[8px]mb-4 animate-fadeIn',
      caption: (
        <div className="max-w-[70%] md:max-w-[80%]  lg:max-w-[60%]">
          <img 
            src={cinctamore_Logo} 
            alt="Cinctamore Logo" 
            className="w-auto h-auto max-w-[200px] md:max-w-[300px] lg:max-w-[400px] mx-auto"
          />
        </div>
      )
    },
    {

      id: 2,
      type: 'video' as const,
      content: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617538/home_ulvatu.mp4',
      isUrl: true,
      captionClassName: 'absolute bottom-[-25%] left-[25%] transform -translate-x-1/2  backdrop-blur-[8px]mb-4 animate-fadeIn',
      caption: (
        <h2 className="text-3xl md:text-5xl font-bold">
          ...there is always a better way...
        </h2>
      )
    },
    {
      id: 3,
      type: 'image' as const,
      content: 'swippers/Dedesua_8.webp',
      isUrl: false,
      captionClassName: 'absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 animate-slideInLeft',
      caption: (
        <h2 className="text-3xl md:text-5xl font-bold">
          ...we have time for each project...
        </h2>
      )
    },
    {
      id: 4,
      type: 'image' as const,
      content: 'assets/img/slider/homeslider/home4.webp',
      isUrl: false,
      captionClassName: 'absolute bottom-10 right-10 animate-slideInRight',
      caption: (
        <h2 className="text-2xl md:text-5xl font-bold">
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
