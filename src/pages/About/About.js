import React from 'react';
import './About.css'; // Import the external CSS file

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi, I'm Nayab Shams, a passionate web developer with expertise in creating interactive and dynamic web applications. 
            I specialize in front-end technologies like React, HTML, CSS, and JavaScript, and I'm always eager to learn new skills and tools.
          </p>
          <p className="about-description">
            I thrive in collaborative environments and enjoy tackling complex problems with creative solutions. When I'm not coding, 
            you can find me experimenting with new web design trends, reading tech blogs, or exploring nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
