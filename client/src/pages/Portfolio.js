import React, { useState, useEffect } from 'react';
import { HeroParallax } from '../components/HeroParallax';
import { Box, CircularProgress, Typography } from '@mui/material';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NODE_ENV === 'production'
          ? 'https://portfolio-app-server.onrender.com/api/projects'
          : 'http://localhost:5000/api/projects';

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();

        // The parallax component looks best with at least 15 items.
        // We'll duplicate the data to ensure there's enough to fill the rows.
        if (data.length > 0) {
            const extendedData = [];
            while (extendedData.length < 15) {
              extendedData.push(...data);
            }
            setProjects(extendedData.slice(0, 15));
        } else {
            setProjects([]);
        }

      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Typography color="error">Failed to load projects: {error}</Typography>
      </Box>
    );
  }

  return (
    <HeroParallax products={projects} />

  );
};

export default Portfolio;