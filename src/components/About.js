// components/About.js
import React from 'react';
import './About.css';
import Me from '../assets/Me.png';
import Code from '../assets/Code.png';
const About = () => {
  return (
    <div className="about-section" id="about">
      <h2>ABOUT ME</h2>
      <div className="about-content">
        <div className="text-wrapper">
          <p>
            Hello! I'm a Full-Stack Developer with a keen interest in crafting dynamic and interactive web applications. 
            <br></br>With a solid background in both front-end and back-end technologies, I thrive on solving complex problems and building scalable solutions.
          </p>
          <p>
            My journey in tech began with a fascination for web development and has since expanded into various areas including database management, API design, and cloud services. 
            <br></br>I am passionate about learning new technologies and continuously improving my skills to stay at the forefront of the industry.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new music trends, working on my art as a musician, and also contributing to the music industry in ways I can.
          </p>
        </div>
        <div className="image-wrapper">
          <img src={Me} alt="me" className="about-image" />
        </div>
        <div className="image-wrap">
          <img src={Code} alt="me" className="code-image" />
        </div>
      </div>
    </div>
  );
};

export default About;


