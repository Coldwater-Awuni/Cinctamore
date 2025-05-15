import React, { ReactNode, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import gsap from 'gsap';
import '../../styles/slick.css';

interface SwiperSlide {
  id: number | string;
  type: 'image' | 'video' | 'custom';
  content: string | ReactNode;
  caption?: string | ReactNode;
  isUrl?: boolean; // New property to indicate if content is a URL
  captionClassName?: string;
  mediaClassName?: string;
}

interface ContentSwiperProps {
  slides: SwiperSlide[];
  autoplay?: boolean;
  speed?: number;
  infinite?: boolean;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

const ContentSwiper: React.FC<ContentSwiperProps> = ({
  slides,
  autoplay = true,
  speed = 500,
  infinite = true,
  className = '',
  showDots = true,
  showArrows = true,
}) => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Set up GSAP timeline for animations

    // Animate initial slide caption
    animateCaption(0);

    // Handle caption animations on slide change
    if (sliderRef.current) {
      (sliderRef.current as any).slickPlay = () => {};
      const slider = sliderRef.current as any;
      slider.innerSlider.props.beforeChange = (_: any, nextSlide: number) => {
        animateCaption(nextSlide);
      };
    }
  }, []);

  const animateCaption = (slideIndex: number) => {
    // Reset all captions
    gsap.set('.slide-caption', { 
      opacity: 1,
      y: 50,
      scale: 0.9
    });

    // Animate current slide caption
    const currentCaption = document.querySelector(`.slide-${slideIndex} .slide-caption`);
    if (currentCaption) {
      gsap.to(currentCaption, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 10.8,
        ease:'elastic.inOut',
      });
    }
  };

  const settings = {
    autoplay,
    speed,
    infinite,
    dots: showDots,
    arrows: showArrows,
    adaptiveHeight: false, // Change to false for full height
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: showDots,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          arrows: false,
        }
      }
    ],
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const getMediaSource = (content: string, isUrl?: boolean) => {
    if (isUrl || isValidUrl(content)) {
      return content;
    }
    // If not a URL, assume it's a local path
    return content.startsWith('/') ? content : `/${content}`;
  };

  const renderSlideContent = (slide: SwiperSlide) => {
    const defaultMediaClass = "w-full h-full object-cover absolute inset-0";
    const defaultCaptionClass = "absolute z-10 text-white w-full h-full flex items-center justify-center";
    const defaultCaptionInnerClass = "relative p-6 md:p-8 lg:p-10 rounded-lg bg-black/40 backdrop-blur-[8px] transition-all duration-300 ease-in-out slide-caption";
    
    switch (slide.type) {
      case 'image':
        return (
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={getMediaSource(slide.content as string, slide.isUrl)} 
                alt={typeof slide.caption === 'string' ? slide.caption : 'slide'} 
                className={`${defaultMediaClass} ${slide.mediaClassName || ''}`}
                loading="lazy"
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
      
      case 'video':
        return (
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`${defaultMediaClass} ${slide.mediaClassName || ''}`}
              >
                <source src={getMediaSource(slide.content as string, slide.isUrl)} type="video/mp4" />
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
      
      case 'custom':
        return (
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0">
              {slide.content}
              {slide.caption && (
                <div className={`${defaultCaptionClass} ${slide.captionClassName || ''}`}>
                  <div className={defaultCaptionInnerClass}>
                    {slide.caption}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`content-swiper relative w-full h-full ${className}`}>
      <div className="absolute inset-0">
        <Slider ref={sliderRef} {...settings} className="h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`!h-[98vh] slide-${index}`}>
              {renderSlideContent(slide)}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ContentSwiper;
