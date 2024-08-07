import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.div
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/6330779/6330779-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: 'grayscale(100%)' }} // Apply grayscale filter
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      {/* Text Content */}
      <motion.h1
        className="text-5xl font-bold text-white relative z-10"
        animate={{ y: [-100, 0] }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Custom CMS and Portfolio Websites
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300 relative z-10"
        animate={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Elevate your business in Bangkok’s most dynamic districts.
      </motion.p>
    </motion.div>
  );
}

export default Hero;
