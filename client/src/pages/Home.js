import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { WavyBackground } from '../components/WavyBackground'; // Import the component

const MotionButton = motion(Button);

const Home = () => {
  return (
    <>
      <WavyBackground backgroundFill="#121212" />
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        position: 'relative', // Ensures this content stacks on top
        zIndex: 1, // Ensures this content is above the wavy background
        padding: 4,
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I'm Calvin.
        </Typography>
        <Typography variant="h5"  paragraph>
          I'm a Software Engineer specializing in DeviceOS/platform with a passion for software quality and development.
        </Typography>
        <MotionButton
          variant="contained"
          color="primary"
          size="large"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </MotionButton>
      </Container>
    </Box>
    
    </>

  );
};

export default Home;