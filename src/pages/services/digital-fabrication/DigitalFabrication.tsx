
import { motion } from 'framer-motion';
import { FaRobot, FaIndustry, FaCut, FaLayerGroup } from 'react-icons/fa';
import SEO from '../../../componets/shared/SEO';

const DigitalFabrication = () => {
  const industries = [
    'Sign & Graphics',
    'Packaging',
    'Leather Goods',
    'Apparel',
    'Technical Textiles',
    'Composites'
  ];

  const materials = [
    'Paper',
    'Cardboard',
    'Corrugated cardboard',
    'Twin-wall sheets',
    'Wood',
    'Vinyl',
    'Plastics',
    'Rubber',
    'Foam',
    'Textiles',
    'Leather',
    'Aluminium',
    'Fibre-reinforced plastics'
  ];

  // const projects = [
  //   { title: 'Project Title', image: 'assets/img/Project/Digi_Fabrication/project_1/project-1-img1.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/Digi_Fabrication/project_1/project-1-img2.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/Digi_Fabrication/project_1/project-1-img3.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/Digi_Fabrication/project_1/project-1-img4.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/Digi_Fabrication/project_1/project-1-img5.jpg' }
  // ];

  return (
    <>
      <SEO 
        title="Digital Fabrication & Robotics | Cinctamore"
        description="Advanced digital fabrication and robotics solutions for complex design challenges. Expertise in CNC cutting, 3D printing, and precision manufacturing across multiple industries."
        keywords="digital fabrication, robotics, CNC cutting, 3D printing, manufacturing technology, precision fabrication, Ghana technology"
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
              src="assets/img/slider/digital-cutting/DIPLOMATIC_TECHNOLOGY_SEAL.jpg"
              alt="Digital Fabrication Hero"
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
              <h1 className="text-6xl font-bold mb-6">Digital Fabrication</h1>
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
              <FaRobot className="text-4xl text-green-500 mb-6" />
              <h2 className="text-2xl font-bold mb-6">CINCTAMORE CUT AND CRAFT</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                Some designs are simply challenging to develop with conventional fabrication techniques. 
                On the other hand, we do not want fabrication to pose undesired challenges to the design goals of clients.
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                At Cinctamore, we enjoy research through making, hence, we continually seek avenues that critically engage 
                and explore the capacity of the tools at our disposal to create high quality and consistent products.
              </p>
            </div>

            {/* Industries We Serve */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaIndustry className="text-4xl text-green-500 mb-6" />
              <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaLayerGroup className="text-green-500" />
                    <span className="text-lg text-white/90">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaCut className="text-4xl text-green-500 mb-6" />
              <h2 className="text-2xl font-bold mb-6">Materials We Work With</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {materials.map((material, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-white/90">{material}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            {/* <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DigitalFabrication;
