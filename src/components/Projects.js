import React from 'react';
import './Projects.css';
import Tastelux from '../assets/Tastelux.png';
import MovieBuster from '../assets/MovieBuster.png';
import Quiz from '../assets/Quiz.png';

const Projects = () => {
  const projects = [
    {
      title: 'Tastelux',
      image: Tastelux,
      description: 'A recipe app where you can savour every moment one recipe at a time.',
      link: 'https://github.com/Lunginno/RecipeApp',
    },
    {
      title: 'MovieBuster',
      image: MovieBuster,
      description: 'Find latest or trending movies with this app!',
      link: 'https://github.com/Lunginno/MovieBuster',
    },
    {
      title: 'Quiz App',
      image: Quiz,
      description: 'Test your general knowledge :)',
      link: 'https://github.com/Lunginno/quiz-app',
    },
    
  ];

  return (
    <div className="projects-section" id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-inner">
              <div className="project-front">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
            <h3><a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title">
                    {project.title}
                  </a></h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

