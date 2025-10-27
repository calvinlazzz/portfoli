import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography, Container, useTheme } from "@mui/material";

const skills = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git/GitHub",
  "CI/CD",
  "Docker",
  "Jenkins",
  "REST APIs",
  "Software Testing",
  "Agile Methodologies",
];

// The distance each skill travels vertically
const CAROUSEL_TRAVEL_DISTANCE = 200;

const Skill = ({ i, scrollYProgress }) => {
  const totalSkills = skills.length;

  // For each skill, create an input and output range for the animation
  const inputRange = [
    (i - 0.8) / totalSkills,
    i / totalSkills,
    (i + 0.8) / totalSkills,
  ];

  // Animate Y position to create the carousel effect
  const y = useTransform(scrollYProgress, inputRange, [CAROUSEL_TRAVEL_DISTANCE, 0, -CAROUSEL_TRAVEL_DISTANCE]);
  // Animate opacity to fade in and out
  const opacity = useTransform(scrollYProgress, inputRange, [0.2, 1, 0.2]);
  // Animate scale to grow and shrink
  const scale = useTransform(scrollYProgress, inputRange, [0.8, 1, 0.8]);

  return (
    <motion.div style={{ y, opacity, scale, position: 'absolute', width: '100%' }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold', color: 'white', textAlign: 'left', whiteSpace: 'nowrap', paddingLeft: '2rem'
        }}
      >
        {skills[i]}
      </Typography>
    </motion.div>
  );
};

const Experience = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <Box>
      <Box
        // This is the container that will be scrolled through, driving the animation.
        ref={containerRef}
        sx={{ height: `${skills.length * 30}vh`, position: 'relative' }}
      >
        {/* This is the sticky viewport that stays on screen */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5rem 0',
          }}
        >
          {/* Title and Description */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              My Skills & Experience
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              As I've grown as a developer, I've worked with a variety of tools and
              technologies. Here are some of the key skills I bring to the table.
            </Typography>
          </Box>

          {/* The visual bubble and the container for the animated skills */}
          <Box
            sx={{
              position: 'relative',
              height: '150px',
              width: { xs: '90%', md: '80%' },
              maxWidth: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* The iMessage bubble background */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '2rem',
                // Add the message bubble tail
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-10px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: theme.palette.primary.main,
                  // Create the curve on the opposite corner for the right side
                  borderBottomLeftRadius: '15px',
                  transform: 'rotate(-30deg)',
                },
              }}
            />
            {/* This container clips the skills as they move out of the bubble */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: '2rem', // Match the bubble's border radius
              }}
            >
              {/* This inner container centers the absolute-positioned skills */}
              <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                {skills.map((_, i) => (
                  <Skill key={i} i={i} scrollYProgress={scrollYProgress} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;