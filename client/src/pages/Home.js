import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I'm Calvin.
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          I'm a QA Engineer specializing in DeviceOS/platform with a passion for software quality and development.
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
  );
};

export default Home;