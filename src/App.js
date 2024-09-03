// App.js
import React from 'react';
import HomePage from './components/HomePage'; // Import HomePage component
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <div className="App">
      <HomePage />  {/* Render the HomePage component */}
    </div>
    <div className="about-section" id="about">
        <About />
    </div>
    <div className="skills-section" id="skills">
        <Skills />
    </div>
    <div className="contact-section" id="contact">
        <Contact />
    </div>
    <div className="projects-section" id="projects">
        <Projects />
      </div>
    </>
  );
}

export default App;
