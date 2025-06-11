import React from 'react';
import './Skills.css';
import { FaJava } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { SiCss3, SiPython, SiJenkins } from 'react-icons/si';

const skillsData = [
  {
    icon: <FaJava size={60} color="#007396" />,
    description: 'Built full stack applications using TDD in Java.',
  },
  {
    icon: <DiReact size={60} color="#61DAFB" />,
    description: 'Built responsive UIs with component-based architecture.',
  },
  {
    icon: <SiCss3 size={60} color="#264de4" />,
    description: 'Designed responsive layouts with Flexbox and Grid.',
  },
  {
    icon: <SiPython size={60} color="#3776AB" />,
    description: 'Created tools for test data and automation in Python.',
  },
  {
    icon: <SiJenkins size={60} color="#D24939" />,
    description: 'Set up CI/CD pipelines using Jenkins.',
  },
];

function Skills() {
  return (
    <div className="skills">
      <h2>TECH STACK</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="skill-logo-img">{skill.icon}</div>
              </div>
              <div className="flip-card-back">
                <p>{skill.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;


