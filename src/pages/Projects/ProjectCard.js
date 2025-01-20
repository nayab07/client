import React from 'react';
import "./ProjectCard.css"

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="project-card" id='projects'>
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
