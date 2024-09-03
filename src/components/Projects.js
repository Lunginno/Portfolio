// components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project One</h3>
        <p>Description of Project One.</p>
      </div>
      <div className="project">
        <h3>Project Two</h3>
        <p>Description of Project Two.</p>
      </div>
      {/* Add more projects as needed */}
    </div>
  );
};

export default Projects;
