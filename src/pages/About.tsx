import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <div className="mt-8 flex flex-col items-center">
        <div className="w-64 h-64 rounded-full bg-gray-300 mb-4">
          {/* Placeholder for profile image */}
        </div>
        <p className="text-lg text-center max-w-xl">
          I am a freelance web developer with expertise in modern web technologies including React, Vite, TailwindCSS, and more. I enjoy building visually appealing and interactive web experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
