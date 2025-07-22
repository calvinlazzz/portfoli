import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

// --- Text animation variants ---
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Loader = ({ setIsLoading }) => {
  useEffect(() => {
    // Timer to start the curtain exit animation
    const exitTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(exitTimer);
  }, [setIsLoading]);

  const firstName = "Calvin";
  const lastName = "La";

  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999,
      display: 'flex',
    }}>
      {/* Left Curtain with Text and Left Bar */}
      <motion.div
        style={{
          height: '100%',
          width: '50%',
          backgroundColor: '#121212',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '1rem',
          overflow: 'hidden',
          position: 'relative', // Needed for absolute positioning of the bar
        }}
        initial={{ x: 0 }}
        exit={{ x: '-100%', transition: { duration: 1, ease: 'easeInOut' } }}
      >
        <Typography
          component={motion.h1}
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          variant="h3"
          sx={{ color: 'white', display: 'flex' }}
        >
          {firstName.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </Typography>
        {/* Left half of the loading bar */}
        <motion.div
            style={{
                position: 'absolute',
                right: 0, // Stick to the inner edge
                top: 0,
                width: '4px', // Made thicker
                height: '100%',
                backgroundColor: 'white',
                transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
        />
      </motion.div>

      {/* Right Curtain with Text and Right Bar */}
      <motion.div
        style={{
          height: '100%',
          width: '50%',
          backgroundColor: '#90caf9',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '1rem',
          overflow: 'hidden',
          position: 'relative', // Needed for absolute positioning of the bar
        }}
        initial={{ x: 0 }}
        exit={{ x: '100%', transition: { duration: 1, ease: 'easeInOut' } }}
      >
        <Typography
          component={motion.h1}
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          variant="h3"
          sx={{ color: 'white', display: 'flex' }}
        >
          {lastName.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </Typography>
        {/* Right half of the loading bar */}
        <motion.div
            style={{
                position: 'absolute',
                left: 0, // Stick to the inner edge
                top: 0,
                width: '4px', // Made thicker
                height: '100%',
                backgroundColor: 'white',
                transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
        />
      </motion.div>
    </Box>
  );
};

export default Loader;