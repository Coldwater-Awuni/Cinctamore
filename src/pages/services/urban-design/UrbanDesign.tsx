
import { motion } from 'framer-motion';
import { FaCity, FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa';
import SEO from '../../../componets/shared/SEO';

const UrbanDesign = () => {
  const clients = [
    'Multinational Economic and Development Agencies',
    'Regional Planning Authorities',
    'Metropolitan and Municipal Authorities',
    'Educational Institutions',
    'Corporations',
    'Healthcare Providers',
    'Private Developers'
  ];

  const services = [
    'Land Planning, Design and Development Services',
    'Mixed-use Development',
    'Urban Revitalization Strategy',
    'Community Infrastructure Planning and Development',
    'Infill Redevelopment',
    'Transit-oriented Planning and Development'
  ];

  return (
    <>
      <SEO 
        title="Community Planning & Urban Design | Cinctamore"
        description="Expert urban design and community planning services for sustainable, equitable development. Specializing in mixed-use development, urban revitalization, and transit-oriented planning."
        keywords="urban design, community planning, mixed-use development, urban revitalization, transit-oriented development, Ghana urban planning"
        type="service"
        section="Services"
      />
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[60vh] overflow-hidden"
        >
          <div className="absolute inset-0">
            <img 
              src="assets/img/slider/Urban Design-slider/Urban_4.jpg"
              alt="Urban Design Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl font-bold text-white mb-6">Community Planning & Urban Design</h1>
              <div className="w-24 h-1 bg-green-500 mb-8"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <FaCity className="text-4xl text-green-500 mb-6" />
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                The formation of 'The Community' is one of our greatest assets. The Community provides the platform to investigate and navigate common grounds to promote equity and opportunity. It thus, reflects the best of what is attainable within our commonwealth.
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                At Cinctamore, we work constantly to improve communities to sustain them for better futures.
              </p>
            </div>

            {/* Services */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <FaBuilding className="text-4xl text-green-500 mb-6" />
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-green-500">•</span>
                    <p className="text-lg text-white/90">{service}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Clients */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaUsers className="text-4xl text-green-500 mb-6" />
              <h2 className="text-2xl font-bold mb-6">Our Clients</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <FaHandshake className="text-green-500" />
                    <span className="text-lg text-white/90">{client}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default UrbanDesign;
