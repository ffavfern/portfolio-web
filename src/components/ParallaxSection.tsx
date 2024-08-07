import React from 'react';

interface ParallaxSectionProps {
  image: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ image, children }) => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed' }}
      />
      <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-lg text-white">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
