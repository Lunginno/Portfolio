// components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        {/* Add more skills as needed */}
      </ul>
    </div>
  );
};

export default Skills;
