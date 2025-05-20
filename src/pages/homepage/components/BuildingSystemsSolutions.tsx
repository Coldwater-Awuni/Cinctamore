import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { preloadMediaArray } from '../../../componets/util/preloadMedia';

const partners = [
  {
    logo: 'assets/img/clients/logo_schlueter.webp',
    video: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617530/NEW__Schluter__KERDI_SHOWER_Trays_ghzhjc.mp4'
  },
  {
    logo: 'assets/img/clients/cottodeste.webp',
    video: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617531/cottodeste_Advantage_Skin_zy1ioz.mp4'
  },
  {
    logo: 'assets/img/clients/DIBI.webp',
    video: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617533/Showroom_aziendale_Di.Bi._Porte_Blindate_srl_lwme0l.mp4'
  },
  {
    logo: 'assets/img/clients/penetron.webp',
    video: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617546/The_Penetron_System_trmmkw.mp4'
  },
  {
    logo: 'assets/img/clients/sika-logo2.webp',
    video: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617539/Sika_Latex_Power_waterproofing_application_qgxgcs.mp4'
  },
  {
    logo: 'assets/img/clients/sepalumic-grand-public-2024.webp',
    video: 'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617551/Sepalumic_Nouvelle_offre_couleurs_2024_zf4gdv.mp4'
  }
];

const BuildingSystemsSolutions = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    // Preload all partner videos and logos
    const mediaUrls = partners.flatMap(partner => [partner.video, partner.logo]);
    
    preloadMediaArray(mediaUrls)
      .then(() => {
        console.log('All partner media preloaded successfully');
      })
      .catch((error) => {
        console.warn('Some partner media failed to preload:', error);
      });
  }, []); // Empty dependency array means this runs once when component mounts

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full w-full"
        >
          {partners.map((partner, idx) => (
            <SwiperSlide key={idx} className="relative h-full w-full">
              <video
                src={partner.video}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
              {/* Logo positioned at bottom left */}
              <div className="absolute bottom-8 left-8 z-20">
                <img
                  src={partner.logo}
                  alt="Partner Logo"
                  className="max-w-[180px] max-h-[80px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Overlay - Moved to right side */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-black/90 to-transparent"
      >
        <div className="flex h-full items-center justify-center px-12">
          <div className="text-white">
            <motion.h2
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-4xl font-bold tracking-tight"
            >
              Building Systems and Solutions
            </motion.h2>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-lg leading-relaxed text-gray-200"
            >
              We collaborate with global partners to provide the best solutions for you. 
              Our network is expansive and covers all areas in design and construction.
            </motion.p>

            {/* Partners grid - Now in vertical layout */}
            <motion.div 
              className="flex  gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 hover:scale-105 transition-all"
                >
                  <img
                    src={partner.logo}
                    alt="Partner Logo"
                    className="h-16 w-full object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

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
};

export default BuildingSystemsSolutions;
