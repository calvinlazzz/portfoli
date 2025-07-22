// portfoli/client/src/App.js (simplified example)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Your existing Navbar
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact'; // Import the Contact component
// ... other imports

const App = () => {
  return (
    <div>
      <Navbar /> {/* Your main navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element= {<Contact/>}/>
        {/* Add more routes as needed */}
      </Routes>
      {/* Add a Footer component here if you have one */}
    </div>
  );
};

export default App;