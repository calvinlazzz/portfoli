import React from 'react';
import { motion } from 'framer-motion';
import { WavyBackground } from '../components/WavyBackground';

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
};

const BubbleText = ({ text }) => (
  <span style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="bubble-letter"
        style={{ display: 'inline-block' }}
        onMouseEnter={(e) => {
          e.target.classList.add('bubble-letter--active');
          // Also animate neighbors
          const parent = e.target.parentElement;
          const siblings = parent.children;
          if (siblings[i - 1]) siblings[i - 1].classList.add('bubble-letter--neighbor');
          if (siblings[i + 1]) siblings[i + 1].classList.add('bubble-letter--neighbor');
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove('bubble-letter--active');
          const parent = e.target.parentElement;
          const siblings = parent.children;
          if (siblings[i - 1]) siblings[i - 1].classList.remove('bubble-letter--neighbor');
          if (siblings[i + 1]) siblings[i + 1].classList.remove('bubble-letter--neighbor');
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
);

const Home = () => {
  return (
    <section id="hero" className="hero-section">
      <WavyBackground backgroundFill="#121212" speed="slow" blur={12} waveOpacity={0.4} />
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>
        <h1 className="hero-name">
          <BubbleText text="Calvin La" />
        </h1>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Software Engineer &mdash; QA Automation &amp; DevOps
        </motion.p>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          Building robust test automation, CI/CD pipelines, and quality-driven software at Fiserv.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a href="#projects" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); }}>
            View My Work
          </a>
          <a href="#contact" className="btn btn--outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
        </motion.div>
      </div>
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Home;