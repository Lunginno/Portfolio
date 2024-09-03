// components/HomePage.js
import React from 'react';
import './HomePage.css';
import Navbar from "./Navbar";
import Banner from '../assets/Banner.png';

const HomePage = () => {
  return (
    <div className="home-page-container" id="home">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
      <img src={Banner} alt="Banner" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="home-page-footer">
      </div>
    </div>
  );
};

export default HomePage;
