import React from 'react';
import Hero from '../components/Hero';
import ParallaxSection from '../components/ParallaxSection';
import ScrollStory from '../components/ScrollStory';
import ThreeScene from '../components/ThreeScene';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ParallaxSection image="/assets/images/parallax-bg1.jpg">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4">I am a freelance web developer specializing in modern web technologies...</p>
      </ParallaxSection>
      <ScrollStory />
      <ParallaxSection image="/assets/images/parallax-bg2.jpg">
        <h2 className="text-4xl font-bold">My Work</h2>
        <p className="mt-4">Explore my projects and the impact they have made...</p>
      </ParallaxSection>
      <ThreeScene />
    </>
  );
};

export default Home;
