// components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact</h2>
      <p>If you'd like to get in touch, please reach out to me through the following channels:</p>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/lungile-sifumba" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/Lunginno" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
      </ul>
    </div>
  );
};

export default Contact;
