import clientsData from '../../../componets/util/clients.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const Clients = () => {
  return (
    <section className="clients-section py-16 bg-[#1f1f1f]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center ">Our Trusted Partners</h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
        >
          {clientsData.clients.map(client => (
            <SwiperSlide key={client.id}>
              <div className="client-logo-wrapper p-4">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="mx-auto h-60 object-contain hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;