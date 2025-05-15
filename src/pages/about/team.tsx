import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import teamData from '../../componets/util/team.json';
import SEO from '../../componets/shared/SEO';

type SocialPlatform = 'facebook' | 'instagram' | 'tiktok' | 'twitter';

const socialIcons: Record<SocialPlatform, IconType> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  twitter: FaXTwitter
};

const TeamPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <SEO 
        title="Meet Our Team | Leadership & Experts"
        description="Meet the talented professionals behind Cinctamore. Our diverse team of architects, engineers, designers, and industry experts who drive innovation and excellence in every project."
        keywords="Cinctamore team, leadership, architects Ghana, construction experts, urban planners, professional team, Ghana architecture team"
        type="profile"
        section="About"
      />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src="assets/img/slider/homeslider/home1 (2).webp"
            alt="Team Hero"
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
            <h1 className="text-6xl font-bold text-white mb-6">Our Team</h1>
            <div className="w-24 h-1 bg-green-500"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamData.team.map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group"
          >
            <div className="relative h-80 overflow-hidden">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Social Links */}
              <div className="absolute bottom-4 left-4 flex gap-3">
                {(Object.entries(member.social) as [SocialPlatform, string][]).map(([platform, link], idx) => {
                  const Icon = socialIcons[platform];
                  return link ? (
                    <a
                      key={idx}
                      href={link}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-green-500 hover:text-white transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={20} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-green-500 font-medium mb-4">{member.title}</p>
              <p className="text-white/80 leading-relaxed">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamPage;
