import React from 'react';
import './Contact.css';
import Contacts from '../assets/Contacts.png'; // Replace with your image path
import CV from '../assets/CV.pdf';
const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-content">
        <img src={Contacts} alt="Profile" className="profile-image" />
        <div className="contact-details">
          <h2>CONTACT</h2>
          <p>If you'd like to get in touch, please reach out to me through the following channels:</p>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> Email: <a href="mailto:lungile.sifumba1@gmail.com">lungile.sifumba1@gmail.com</a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/lungile-sifumba" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </li>
            <li>
              <i className="fab fa-github"></i> GitHub: <a href="https://github.com/Lunginno" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </li>
          </ul>
          <a href={CV} download className="download-cv-button">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;


