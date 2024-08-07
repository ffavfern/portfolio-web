import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ScrollStory: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [300, 600], [100, 0]);

  return (
    <div className="flex flex-col space-y-10 py-20">
      <motion.div style={{ y: y1 }} className="text-center">
        <h2 className="text-4xl font-bold">My Journey Begins</h2>
        <p className="mt-4 text-lg">I started my career as a web developer in 2018...</p>
      </motion.div>
      <motion.div style={{ y: y2 }} className="text-center">
        <h2 className="text-4xl font-bold">Expanding My Skills</h2>
        <p className="mt-4 text-lg">Over the years, I mastered various technologies...</p>
      </motion.div>
      {/* Continue with more sections */}
    </div>
  );
};

export default ScrollStory;
