import React, { useState } from 'react';
import './Skills.css';
import jsLogo from '/Users/giuseppemerlerati/cv_project/src/images/JavaScript-logo.png';
import jaLogo from '/Users/giuseppemerlerati/cv_project/src/images/java_logo.png';
import cssLogo from '/Users/giuseppemerlerati/cv_project/src/images/css-logo.png';
import pyLogo from '/Users/giuseppemerlerati/cv_project/src/images/python_logo.png';

const skillsData = [
  { 
    name: 'JavaScript', 
    logo: jsLogo, 
    description: 'Proficient in dynamic and responsive web development. With the utilisation of React, Node.js, and Express.js.' 
  },
  { 
    name: 'Java', 
    logo: jaLogo, 
    description: 'Well versed in REST APIs, Spring, Object-Oriented Programming.' 
  },
  { 
    name: 'CSS', 
    logo: cssLogo, 
    description: 'Experience with styling HTML elements and front-end design.' 
  },
  { 
    name: 'Python', 
    logo: pyLogo, 
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
      <h2>Skill Badges</h2>
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
