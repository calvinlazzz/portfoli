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

const fastLetterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.015, duration: 0.3, ease: 'easeOut' },
  }),
};

const BubbleText = ({ text, className, fast }) => {
  const variants = fast ? fastLetterVariants : letterVariants;
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <span className={className} style={{ display: 'block', textAlign: 'center' }}>
      {words.map((word, wi) => {
        const letters = word.split('').map((char, ci) => {
          const i = charIndex++;
          return (
            <motion.span
              key={i}
              custom={i}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="bubble-letter"
              style={{ display: 'inline-block' }}
              onMouseEnter={(e) => {
                e.target.classList.add('bubble-letter--active');
                const prev = e.target.previousElementSibling;
                const next = e.target.nextElementSibling;
                if (prev) prev.classList.add('bubble-letter--neighbor');
                if (next) next.classList.add('bubble-letter--neighbor');
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove('bubble-letter--active');
                const prev = e.target.previousElementSibling;
                const next = e.target.nextElementSibling;
                if (prev) prev.classList.remove('bubble-letter--neighbor');
                if (next) next.classList.remove('bubble-letter--neighbor');
              }}
            >
              {char}
            </motion.span>
          );
        });
        charIndex++; // account for the space
        return (
          <span key={`w${wi}`} style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
            {letters}
            {wi < words.length - 1 && <span style={{ display: 'inline-block', width: '0.3em' }}>{' '}</span>}
          </span>
        );
      })}
    </span>
  );
};

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
        <motion.div
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <BubbleText text="Software Engineer — QA Automation & DevOps" fast />
        </motion.div>
        <motion.div
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <BubbleText text="Building robust test automation, CI/CD pipelines, and quality-driven software at Fiserv." fast />
        </motion.div>
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