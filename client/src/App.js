import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Hero from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {/* Conditionally render the Loader using AnimatePresence */}
      <AnimatePresence>
        {isLoading && <Loader setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;