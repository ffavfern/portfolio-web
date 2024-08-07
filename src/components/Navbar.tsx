import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const heroSectionHeight = heroSection ? heroSection.offsetHeight : 0;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroSectionHeight) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 20 },
  };

  return (
    <motion.nav
      className={`bg-primary p-4 w-20 min-h-screen z-20 fixed flex flex-col items-center justify-center transition-transform duration-300 ${
        showNavBar ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <ul className="flex flex-col space-y-8">
        <li className="relative">
          <Link
            to="/"
            className="text-secondary text-xl hover:text-specials flex items-center justify-center"
            onMouseEnter={() => setHoveredItem('Home')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <FaHome className="mr-1" />
            {hoveredItem === 'Home' && (
              <motion.div
                className="absolute left-full ml-2 px-2 py-1 bg-specials text-secondary rounded"
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                Home
              </motion.div>
            )}
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/about"
            className="text-secondary text-xl hover:text-specials flex items-center justify-center"
            onMouseEnter={() => setHoveredItem('About')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <FaUser className="mr-1" />
            {hoveredItem === 'About' && (
              <motion.div
                className="absolute left-full text-xl ml-2 px-2 py-1 bg-specials text-secondary rounded"
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                About
              </motion.div>
            )}
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/projects"
            className="text-secondary text-xl hover:text-specials flex items-center justify-center"
            onMouseEnter={() => setHoveredItem('Projects')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <FaProjectDiagram className="mr-1" />
            {hoveredItem === 'Projects' && (
              <motion.div
                className="absolute left-full ml-2 px-2 py-1 text-xl bg-specials text-secondary rounded"
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                Projects
              </motion.div>
            )}
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/contact"
            className="text-secondary text-xl hover:text-specials flex items-center justify-center"
            onMouseEnter={() => setHoveredItem('Contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <FaEnvelope className="mr-1" />
            {hoveredItem === 'Contact' && (
              <motion.div
                className="absolute left-full text-xl ml-2 px-2 py-1 bg-specials text-secondary rounded"
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                Contact
              </motion.div>
            )}
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
