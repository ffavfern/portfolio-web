import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGallery: React.FC = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the project.',
      image: '/assets/images/project1.jpg',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A brief description of the project.',
      image: '/assets/images/project2.jpg',
      link: '#',
    },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectGallery;
