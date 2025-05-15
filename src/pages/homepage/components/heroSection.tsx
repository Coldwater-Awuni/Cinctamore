import React from 'react';
import ContentSwiper from '../../../componets/shared/ContentSwiper';
import { cinctamore_Logo } from '../../../assets/assets';

const HeroSection: React.FC = () => {
  const heroSlides = [
    {
      id: 1,
      type: 'video' as const,
      content: 'assets/video/homeslider/Cinctamore_Cnc_Cutting_Machine.mp4',
      isUrl: false,
      captionClassName: 'absolute bottom-[25%] left-1/2 transform -translate-x-1/2  backdrop-blur-[8px]mb-4 animate-fadeIn',
      caption: (
        <div className="max-w-[90%] md:max-w-[80%]  lg:max-w-[80%]">
          <img 
            src={cinctamore_Logo} 
            alt="Cinctamore Logo" 
            className="w-auto h-auto max-w-[200px] md:max-w-[300px] lg:max-w-[600px] mx-auto"
          />
        </div>
      )
    },
    {
      id: 2,
      type: 'image' as const,
      content: '/swippers/Dedesua_8.webp',
      isUrl: false,
      captionClassName: 'absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 animate-slideInLeft',
      caption: (
        <h2 className="text-3xl md:text-5xl font-bold">
          ...there is always a better way...
        </h2>
      )
    },
    {
      id: 3,
      type: 'image' as const,
      content: 'https://3d.nice-cdn.com/upload/image/product/large/default/twotrees-ttc450-pro-cnc-milling-machine-1-pc-674710-en.jpg',
      isUrl: true,
      captionClassName: 'absolute bottom-10 right-10 animate-slideInRight',
      caption: (
        <h2 className="text-2xl md:text-5xl font-bold">
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
          autoplay={false}
          speed={1000}
          showDots={true}
          showArrows={true}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
