// components/Projects.js
import React from 'react';
import './Projects.css';
import Tastelux from '../assets/Tastelux.png';
import MovieBuster from '../assets/MovieBuster.png';
import Quiz from '../assets/Quiz.png';
const Projects = () => {
  return (
    <div className="projects-section" id="projects">
  <h2>PROJECTS</h2>
  <div className="projects-container">
    <div className="project">
      <img src={Tastelux} alt="Project One" className="project-image" />
      <h3>Tastelux</h3>
      <p>Description of Project One.</p>
    </div>
    <div className="project">
      <img src={MovieBuster} alt="Project Two" className="project-image" />
      <h3>MovieBuster</h3>
      <p>Description of Project Two.</p>
    </div>
    <div className="project">
      <img src={Quiz} alt="Project Two" className="project-image" />
      <h3>Quiz App</h3>
      <p>Description of Project Two.</p>
    </div>
  </div>
</div>

  );
};

export default Projects;
