import React from 'react';
import ContentSwiper from '../../../componets/shared/ContentSwiper';
import { cinctamore_Logo } from '../../../assets/assets';

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
      content: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747829389/Home_owjxfo.mp4',
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

  return (
    <section className="relative block w-full h-[98vh] md:h-[85vh] lg:h-[98vh] overflow-hidden mb-1">
      <div className="absolute inset-0 w-full h-full">
        <ContentSwiper
          slides={heroSlides}
          autoplay={true}
          showDots={true}
          showArrows={true}
          className="w-full h-full overflow-hidden object-contain"
          delay={5500}
        />
      </div>
    </section>
  );
};

export default HeroSection;
