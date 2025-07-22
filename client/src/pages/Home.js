// portfoli/client/src/pages/Home.js
import React from 'react';
import './Home.css'; // Import component-specific CSS if needed
// import an image if used in this section
// import headshot from '../assets/images/headshot.jpg';

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Calvin.</h1>
        <p>I'm a QA Engineer specializing in DeviceOS/platform with a passion for software quality and development.</p>
        {/* Add your animated elements here using framer-motion */}
        <button className="cta-button">View My Work</button>
      </div>
      {/* <img src={headshot} alt="Calvin's Headshot" className="hero-image" /> */}
    </section>
  );
};

export default Home;