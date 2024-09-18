// components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2>SKILLS</h2>
      <div className="skills-container">
        <div className="skill-item">
          <i className="fab fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
         <i className="fab fa-angular"></i> 
         <p>Angular</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-java"></i> 
          <p>Spring Boot</p>
          </div>
        <div className="skill-item">
          <i className="fab fa-react"></i>
          <p>React</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-node-js"></i>
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-html5"></i>
          <p>HTML & CSS</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-python"></i>
          <p>Python</p>
        </div>
        {/* Add more skill items as needed */}
      </div>
    </div>
  );
};

export default Skills;

