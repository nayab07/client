import React from 'react';
import "./Education.css";

const Education = () => {
  const educationData = [
    {
        degree: 'Matric',
        institution: 'BSEB',
        year: '2015 - 2017',
        description: 'Study About Math,Biology,Physics,Chemistry,and English',
      },
      {
        degree: 'Intermediate',
        institution: 'K.S college Darbhanga',
        year: '2017 - 2019',
        description: 'Study About Physics,Chemisry and Maths',
      },
      {
        degree: 'Preparation For Jee(main/Advance)',
        institution: 'Alice',
        year: '2019 - 2020',
        description: 'Problem solving',
      },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'VTU',
      year: '2020- 2024',
      description: 'Focused on software engineering, algorithms, and Web Development.',
    },
    
   
   
  ];

  return (
    <section className="education-container"id='education'>
      <h2 className="education-title">My Education</h2>
      <div className="education-timeline">
        {educationData.map((education, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3 className="degree-title">{education.degree}</h3>
              <h4 className="institution">{education.institution}</h4>
              <p className="year">{education.year}</p>
              <p className="description">{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
