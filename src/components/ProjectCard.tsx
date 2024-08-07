import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
