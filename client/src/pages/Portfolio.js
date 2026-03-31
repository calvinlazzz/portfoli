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

        if (data.length > 0) {
          const extendedData = [];
          while (extendedData.length < 15) {
            extendedData.push(...data);
          }
          setProjects(extendedData.slice(0, 15).map((p, i) => ({ ...p, id: `${p.id}-${i}` })));
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
      <section id="projects">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress sx={{ color: '#90caf9' }} />
        </Box>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <Typography color="error">Failed to load projects: {error}</Typography>
        </Box>
      </section>
    );
  }

  return (
    <section id="projects">
      <HeroParallax
        products={projects}
        header={
          <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <h1 className="text-2xl md:text-7xl font-bold text-white">
              Projects & Work
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-300">
              A collection of projects showcasing test automation frameworks, DevOps pipelines,
              and full-stack applications I've built and contributed to.
            </p>
          </div>
        }
      />
    </section>
  );
};

export default Portfolio;