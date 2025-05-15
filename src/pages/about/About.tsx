import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaHistory, FaTrophy, FaEye, FaHeart } from 'react-icons/fa';
import aboutData from '../../componets/util/about.json';
import SEO from '../../componets/shared/SEO';

const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [backgroundImage, setBackgroundImage] = useState(aboutData.sections[0].backgroundImage);

  const icons = {
    'about': FaInfoCircle,
    'our-history': FaHistory,
    'our-advantage': FaTrophy,
    'our-vision': FaEye,
    'our-values': FaHeart,
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
          const activeData = aboutData.sections.find(s => s.id === section.id);
          if (activeData) {
            setBackgroundImage(activeData.backgroundImage);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO 
        title="About Cinctamore | A Pattern of Good Works"
        description="Learn about Cinctamore, a global business collaborator specializing in Architecture, Urban Design, Engineering & Construction, Trading & Investment, and Multimedia."
        keywords="Cinctamore, about us, architecture, urban design, construction, global business collaborator, Ghana"
        type="article"
        section="About"
        tags={["Cinctamore", "About Us", "Global Business"]}
      />
      <div className="relative min-h-screen justify-center">
        {/* Dynamic Background */}
        <motion.div 
          className="fixed inset-0 -z-10"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 z-10" />
          <motion.img
            key={backgroundImage}
            src={backgroundImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 py-8 mt-20">
          <div className="flex gap-8">
            {/* Main Article Content */}
            <article className="flex-1 max-w-4xl">
              

              {aboutData.sections.map((section) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="mb-24 scroll-mt-24"
                >
                  <motion.div 
                    className="prose prose-lg prose-invert max-w-none"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                      <div>
                      <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                        {section.title}
                      </h2>
                      <div className="h-1 w-34 bg-green-500 mb-8"></div>
                      </div>

                    {section.content && (
                      <div className="space-y-6">
                        {Array.isArray(section.content) && section.content.map((paragraph, idx) => (
                          <motion.p 
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="text-white/90 leading-relaxed"
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                    )}

                    {section.subsections && (
                      <motion.div 
                        className="grid md:grid-cols-1 gap-8 mt-12"
                        variants={{
                          hidden: { opacity: 0 },
                          show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                          }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {section.subsections.map((subsection, idx) => (
                          <motion.div
                            key={idx}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              show: { opacity: 1, y: 0 }
                            }}
                            className=""
                          >
                            <h3 className="text-xl font-semibold text-white mb-4">
                              {subsection.title}
                            </h3>
                            {Array.isArray(subsection.content) ? (
                              subsection.content.map((text, i) => (
                                <p key={i} className="text-white/80 mb-2">{text}</p>
                              ))
                            ) : (
                              <p className="text-white/80">{subsection.content}</p>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.section>
              ))}
            </article>

            {/* Updated Quick Links Navigation */}
            <nav className="hidden lg:block sticky  top-20 h-fit my-10 min-w-[350px]">
              <div className="p-4 rounded-lg text-white">
                <ul className="space-y-3">
                  {aboutData.quickLinks.map((link) => {
                    const Icon = icons[link.id as keyof typeof icons];
                    return (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                            activeSection === link.id
                              ? 'bg-blue-500/80 text-white shadow-lg'
                              : 'text-white/90 hover:bg-white/5'
                          }`}
                        >
                          <Icon className="text-xl" />
                          <span className="font-medium tracking-wide">{link.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
