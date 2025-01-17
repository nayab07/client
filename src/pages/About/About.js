import React from 'react';
import './About.css'; // Import the external CSS file

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi, I'm [Your Name], a passionate web developer with expertise in creating interactive and dynamic web applications. 
            I specialize in front-end technologies like React, HTML, CSS, and JavaScript, and I'm always eager to learn new skills and tools.
          </p>
          <p className="about-description">
            I thrive in collaborative environments and enjoy tackling complex problems with creative solutions. When I'm not coding, 
            you can find me experimenting with new web design trends, reading tech blogs, or exploring nature.
          </p>
        </div>
        <div className="about-image">
          <img src="./IMG-20250116-WA0012[1].jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
