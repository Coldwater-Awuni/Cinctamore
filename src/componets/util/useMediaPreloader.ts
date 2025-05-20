import { useEffect } from 'react';
import { preloadMediaArray } from './preloadMedia';
import services from './services.json';

export const useMediaPreloader = () => {
  useEffect(() => {
    // Collect all media URLs from services
    const serviceMedia = services.services.flatMap(service => [
      ...(service.videos || []),
      ...(service.images || [])
    ]);

    // Hero section media
    const heroMedia = [
      'assets/img/slider/architectural-slider/UGBS.webp',
      'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617538/home_ulvatu.mp4',
      'swippers/Dedesua_8.webp',
      'assets/img/slider/homeslider/home4.webp'
    ];

    // Partners media
    const partnersMedia = [
      'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617530/NEW__Schluter__KERDI_SHOWER_Trays_ghzhjc.mp4',
      'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617531/cottodeste_Advantage_Skin_zy1ioz.mp4',
      'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617533/Showroom_aziendale_Di.Bi._Porte_Blindate_srl_lwme0l.mp4',
      'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617546/The_Penetron_System_trmmkw.mp4',
      'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617539/Sika_Latex_Power_waterproofing_application_qgxgcs.mp4',
      'https://res.cloudinary.com/dbsx1wxuc/video/upload/v1747617551/Sepalumic_Nouvelle_offre_couleurs_2024_zf4gdv.mp4',
      // Partner logos
      'assets/img/clients/logo_schlueter.webp',
      'assets/img/clients/cottodeste.webp',
      'assets/img/clients/DIBI.webp',
      'assets/img/clients/penetron.webp',
      'assets/img/clients/sika-logo2.webp',
      'assets/img/clients/sepalumic-grand-public-2024.webp'
    ];

    // Combine all media URLs
    const allMedia = [...serviceMedia, ...heroMedia, ...partnersMedia];

    // Start preloading all media
    preloadMediaArray(allMedia)
      .then(() => {
        console.log('All website media preloaded successfully');
      })
      .catch((error) => {
        console.warn('Some media failed to preload:', error);
      });
  }, []); // Empty dependency array means this runs once when component mounts
};
