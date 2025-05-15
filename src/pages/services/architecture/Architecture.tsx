
import { motion } from 'framer-motion';
import { FaRuler, FaCalculator } from 'react-icons/fa';
import SEO from '../../../componets/shared/SEO';

const Architecture = () => {
  // const projects = [
  //   { title: 'Project Title', image: 'assets/img/Project/architecture/project_1/project-1-img1.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/architecture/project_1/project-1-img4.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/architecture/project_1/project-1-img1.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/architecture/project_4/project-4-img5.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/architecture/project_1/project-1-img3.jpg' },
  //   { title: 'Project Title', image: 'assets/img/Project/architecture/project_1/project-1-img4.jpg' },
  // ];

  return (
    <>
      <SEO 
        title="Architectural Design Services | Cinctamore"
        description="Full-service architectural design solutions specializing in commercial, residential, and institutional projects. Expert design services from concept to completion."
        keywords="architectural design, commercial architecture, residential architecture, institutional buildings, construction documentation, Ghana architecture"
        type="service"
        section="Services"
      />
      <div className="min-h-screen  text-white">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[60vh] overflow-hidden"
        >
          <div className="absolute inset-0">
            <img 
              src="assets/img/slider/architectural-slider/Bank-of-Ghana_3.jpg"
              alt="Architecture Hero"
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
              <h1 className="text-6xl font-bold text-white mb-6">Architecture</h1>
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
            className="prose prose-invert max-w-none"
          >
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-12">
              <p className="text-xl text-white/90 leading-relaxed mb-6">Our full-service Architectural Design Team specialises providing high quality design service to our diverse client group.</p>
              <p className="text-xl text-white/90 leading-relaxed mb-6">We have time for each project. From inception to occupancy, we think thoroughly through every detail of our projects in our continual quest to provide the best design solutions.</p>
              <p className="text-xl text-white/90 leading-relaxed">We pride ourselves in our ability to conceive, create and construct appropriate and comfortable spaces that reflects our client's unique taste, lifestyle, and budget.</p>
            </div>

            {/* Services Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm  rounded-xl p-8">
                <FaRuler className="text-4xl text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-6">Our Scope of Work</h2>
                <ul className="space-y-4">
                  <li>Design Conceptualisation and Constructions Documentation</li>
                  <li>Contract Management / Administration</li>
                  <li>Project Programming and Management: Purchasing, Procurement, and Installation</li>
                  <li>Interior and exterior finishes and material selections</li>
                  <li>Facility Management and Assessment</li>
                  <li>Construction Supervision and Administration</li>
                  <li>Coordination with engineering and construction teams</li>
                </ul>
              </div>
            </motion.div>

            {/* Project Cost Control Section */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaCalculator className="text-4xl text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-6">Project Cost Control / Quantity Surveying</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">We take budget seriously that is why we always keep THE BUDGET of each of our projects at the forefront of all our proposals.</p>
              <p className="text-xl text-white/90 leading-relaxed mb-6">Cinctamore desires to see the realisation all the projects that we spend our resources. To achieve this goal, we know all too well that we must keep an eye on cost at all times.</p>
              <p className="text-xl text-white/90 leading-relaxed mb-6">Some of the project cost control services that we provide include but not limited to the following:</p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Pre-Contract Services</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>Preliminary Estimates of Project Cost</li>
                    <li>Cost Advice</li>
                    <li>Cost Planning</li>
                    <li>Preparation of Bills of Quantities</li>
                    <li>Evaluation of tender documents for award</li>
                    <li>Pricing of Bills of Quantities</li>
                    <li>All aspects of Quantity Surveying work in connection with Building, Civil Engineering and Roadwork’s.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Post-Contract Services</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>Valuation for Interim Payment Certificates</li>
                    <li>Preparation of Final Accounts</li>
                    <li>Preparation of Financial Statements</li>
                    <li>Cost Studies</li>
                    <li>All aspects of Quantity Surveying work in connection with Building, Civil Engineering and Roadwork’s.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Projects Showcase */}
            
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Architecture;
