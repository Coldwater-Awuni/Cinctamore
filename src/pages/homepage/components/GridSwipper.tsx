import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import services from '../../../componets/util/services.json'
import { Link } from 'react-router-dom'
import { preloadMediaArray } from '../../../componets/util/preloadMedia'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface Service {
  id: string;
  title: string;
  description: string;
  link: string;
  videos?: string[];
  images?: string[];
}

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const ServiceSections = () => {
  return (
    <div className="w-full">
      {services.services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </div>
  )
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });   

  useEffect(() => {
    // Preload all media for this service section
    const mediaUrls = [
      ...(service.videos || []),
      ...(service.images || [])
    ];
    
    preloadMediaArray(mediaUrls)
      .then(() => {
        console.log(`All media for service ${service.title} preloaded successfully`);
      })
      .catch((error) => {
        console.warn(`Some media for service ${service.title} failed to preload:`, error);
      });
  }, [service]); // Dependency on service to ensure preloading happens when service changes

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const allMedia = [
    ...(service.videos || []),
    ...(service.images || [])
  ];

  // Define positions based on index
  const getPositionClasses = (index: number): string => {
    const positions = [
      'top-[15%] left-[5%] sm:left-[10%] lg:left-[15%]',
      'top-[20%] right-[5%] sm:right-[10%] lg:right-[15%]',
      'bottom-[15%] left-[5%] sm:left-[10%] lg:left-[15%]',
      'bottom-[20%] right-[5%] sm:right-[10%] lg:right-[15%]'
    ];
    return positions[index % positions.length];
  };

  return (
    <motion.section
      ref={sectionRef}
      id={service.id}
      className="relative h-screen w-full overflow-hidden bg-black scroll-mt-20"
    >
      {/* Ensure parent container has relative positioning */}
      <div className="relative w-full h-full">
        {/* Background Media Swiper */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[EffectFade, Autoplay, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5000 }}
            loop
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {allMedia.map((media, idx) => (
              <SwiperSlide key={idx} className="relative h-full w-full">
                {media.endsWith('.mp4') ? (
                  <video
                    src={media}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={media}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content Overlay */}
        <motion.div
          style={{ y, opacity, scale }}
          className={`absolute z-10 ${getPositionClasses(index)} w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[800px] px-4 sm:px-6`}
        >
          <div className="relative backdrop-blur-sm bg-black/40 rounded-lg p-6 md:p-8 lg:p-10">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-left"
            >
              {service.title}
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 text-justify"
            >
              {service.description}
            </motion.p>
            {service.link.startsWith('#') ? (
              <motion.a
                href={service.link}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block rounded-full bg-white px-6 sm:px-8 py-3 text-sm sm:text-base text-black transition-colors hover:bg-gray-200 cursor-pointer"
              >
                Learn More
              </motion.a>
            ) : (
              <Link to={service.link}>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block rounded-full bg-white px-6 sm:px-8 py-3 text-sm sm:text-base text-black transition-colors hover:bg-gray-200 cursor-pointer"
                >
                  Learn More
                </motion.span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/60">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-16 w-px bg-white/60"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ServiceSections