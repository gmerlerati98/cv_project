import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
  { 
    name: 'JavaScript', 
    logo: '/public/JavaScript-logo.png', 
    description: 'Proficient in dynamic and responsive web development. With the utilisation of React, Node.js, and Express.js.' 
  },
  { 
    name: 'Java', 
    logo: '/logos/react.png', 
    description: 'Well versed in REST APIs, Spring, Object-Oriented Programming.' 
  },
  { 
    name: 'CSS', 
    logo: '/logos/css.png', 
    description: 'Experience with styling HTML elements and front-end design.' 
  },
  { 
    name: 'Python', 
    logo: '/logos/python.png', 
    description: 'Experience with Flask Web App development and Data Analysis/Machine Learning libraries.' 
  },
];

function Skills() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-card ${flippedIndex === index ? 'flipped' : ''}`} 
            onClick={() => handleCardClick(index)}
          >
            <div className="card-front">
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="skill-logo"
              />
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="card-back">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
