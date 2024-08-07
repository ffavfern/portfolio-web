import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <ProjectGallery />
    </div>
  );
}

export default Projects;
