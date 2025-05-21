import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { cinctamore_Logo } from '../../../assets/assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../styles/swiper-custom.css';

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

  const renderSlideContent = (slide: any) => {
    const defaultMediaClass = "w-full h-full object-cover absolute inset-0";
    const defaultCaptionClass = "absolute z-10 text-white w-full h-full flex items-center justify-center";
    const defaultCaptionInnerClass = "relative p-6 md:p-8 lg:p-10 rounded-lg bg-black/40 backdrop-blur-[8px] transition-all duration-300 ease-in-out slide-caption";
    
    if (slide.type === 'image') {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={slide.isUrl ? slide.content : `/${slide.content}`}
              alt={typeof slide.caption === 'string' ? slide.caption : 'slide'} 
              className={`${defaultMediaClass}`}
              loading="eager"
            />
          </div>
          {slide.caption && (
            <div className={`${defaultCaptionClass} ${slide.captionClassName || ''}`}>
              <div className={defaultCaptionInnerClass}>
                {slide.caption}
              </div>
            </div>
          )}
        </div>
      );
    } else if (slide.type === 'video') {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`${defaultMediaClass}`}
            >
              <source src={slide.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {slide.caption && (
            <div className={`${defaultCaptionClass} ${slide.captionClassName || ''}`}>
              <div className={defaultCaptionInnerClass}>
                {slide.caption}
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <section className="relative block w-full h-[98vh] md:h-[85vh] lg:h-[98vh] overflow-hidden mb-1">
      <div className="absolute inset-0 w-full h-full">        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            verticalClass: 'swiper-pagination-vertical',
          }}
          navigation={false}
          loop={true}
          speed={1000}
          className="w-full h-full content-swiper hero-section"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="!h-[98vh]">
              {renderSlideContent(slide)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
