// portfoli/client/src/App.js (simplified example)
import React, {useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar'; 
import Loader from './components/Loader'; 
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact'; 
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // State to control the loader


  return (
    <div>
    {/* Conditionally render the Loader using AnimatePresence */}
    <AnimatePresence>
      {isLoading && <Loader setIsLoading={setIsLoading} />}
    </AnimatePresence>

      <Navbar /> {/* Your main navigation bar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
        <Routes location= {location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element= {<Contact/>}/>
          {/* Add more routes as needed */}
        </Routes>
        {/* Add a Footer component here if you have one */}
      </motion.div>

      </AnimatePresence>

    </div>
  );
};

export default App;