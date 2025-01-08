import React from 'react';
import './Skills.css'; // Optional: Add styles for the skill levels

const skillsData = [
  { name: 'JavaScript', level: 'Expert' },
  { name: 'React', level: 'Proficient' },
  { name: 'Node.js', level: 'Proficient' },
  { name: 'CSS', level: 'Expert' },
  { name: 'Python', level: 'Proficient' },
  { name: 'Kubernetes', level: 'Beginner' },
];

const levelColors = {
  Beginner: 'bg-beginner',
  Proficient: 'bg-proficient',
  Expert: 'bg-expert',
};

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className={`skill-level ${levelColors[skill.level]}`}>
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

