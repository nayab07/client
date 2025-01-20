import React from 'react';
import "./Experience.css";


const Experience = () => {
  const internshipData = [
    {
      position: 'Software Engineering Intern',
      company: 'Maskan Technology.',
      year: 'Summer 2022',
      description: 'Developed new features for a web application, working with React  and JavaScript.',
    },
   
  ];

  return (
    <section className="internship-container"id='work'>
      <h2 className="internship-title">My Internship</h2>
      <div className="internship-timeline">
        {internshipData.map((internship, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3 className="position-title">{internship.position}</h3>
              <h4 className="company">{internship.company}</h4>
              <p className="year">{internship.year}</p>
              <p className="description">{internship.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
