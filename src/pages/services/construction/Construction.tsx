import { motion } from 'framer-motion';
import { FaTools, FaHardHat, FaCogs } from 'react-icons/fa';
import SEO from '../../../componets/shared/SEO';

const Construction = () => {
  const services = [
    {
      icon: <FaTools />,
      title: "Construction Management",
      items: [
        "Project Planning and Scheduling",
        "Cost Control and Budget Management",
        "Quality Control and Assurance",
        "Site Safety Management",
        "Subcontractor Coordination"
      ]
    },
    {
      icon: <FaHardHat />,
      title: "Building Construction",
      items: [
        "Commercial Buildings",
        "Residential Developments",
        "Industrial Facilities",
        "Institutional Buildings",
        "Renovations and Retrofits"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Infrastructure Development",
      items: [
        "Road Construction",
        "Bridge Construction",
        "Water Supply Systems",
        "Drainage Systems",
        "Public Works Projects"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Engineering & Construction Services | Cinctamore"
        description="Professional construction management and engineering services in Ghana. Specializing in commercial, residential, and infrastructure development with quality control and safety management."
        keywords="construction management, building construction, infrastructure development, project planning, quality control, Ghana construction"
        type="service"
        section="Services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[60vh] overflow-hidden"
        >
          <div className="absolute inset-0">
            <img 
              src="assets/img/slider/construction-slide/engineering_construction_5.jpg"
              alt="Construction Hero"
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
              <h1 className="text-6xl font-bold text-white mb-6">Engineering & Construction</h1>
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
              <FaHardHat className="text-4xl text-green-500 mb-6" />
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                We do not cut corners. We are committed to helping our clients with the most appropriate construction solutions to their designs.
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                Through our holistic, honest and careful attention to detail approach to construction, we do what is right to satisfy our clients and to return best value for their investment.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
                >
                  <div className="text-4xl text-green-500 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-white/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Construction;
