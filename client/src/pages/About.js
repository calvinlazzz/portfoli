import React from 'react';
import '../styles/main.css'; // Ensure this path is correct based on your project structure

const About = () => (
  <div className="about-container">
    <h1>About Me</h1>
    <p>
      Hi! I'm Calvin, a passionate web developer focused on building modern, responsive, and engaging web applications.
      I love working with JavaScript, React, and Node.js, and I'm always eager to learn new technologies and improve my craft.
    </p>
    <div className="about-details">
      <ul>
        <li><strong>Location:</strong> San Francisco, CA</li>
        <li><strong>Specialties:</strong> Frontend, UI/UX, Animations</li>
        <li><strong>Interests:</strong> Coding, Design, Music, Hiking</li>
      </ul>
    </div>
  </div>
);

export default About;