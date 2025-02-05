import React from 'react';
import ProjectCard from './ProjectCard';
import "./Project.css" // Import the CSS for styling the entire Projects section

const Projects = () => {
  const projectData = [
    {
      title: 'About country ',
      description: 'The World Project is a dynamic and interactive web application that allows users to explore global data like  population, region, capital',
      image: 'https://web-static.wrike.com/blog/content/uploads/2020/03/Global-Project-Management.jpg?av=15ec480845adf18b79dea8f75a80bd72', // Change to actual project image paths
      githubLink: 'https://github.com/nayab07/world-project',
    },
    {
      title: 'Swiggy-Clone',
      description: 'A React-based food ordering site with dynamic product catalog.',
      image: 'https://i.ytimg.com/vi/dIesVJM1LN4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYACqAWKAgwIABABGEsgYShlMA8=&rs=AOn4CLDRNf0lHHJWlPXp_GXnrWQC10Ft2g', // Change to actual project image paths
      githubLink: 'https://github.com/nayab07/swiggy',
      
    },
    {
      title: 'Tinder-Clone',
      description: 'A Node.js backend with RESTful API and MongoDB database integration.',
      image: 'https://thesynergyworks.com/wp-content/uploads/2023/05/Build-tinder-clone.png', // Change to actual project image paths
      githubLink: "https://github.com/nayab07/MyTinder-web",
    },
    {
      title: 'My-Portfolio',
      description: 'Mern stack used project ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFCMKGl0RwXfnEYJn-x_hAerMAHSrtyjBxg&s', // Change to actual project image paths
      githubLink: 'https://github.com/nayab07/client',
      
    },
  ];

  return (
    <section className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
