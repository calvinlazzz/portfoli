const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://www.calvinla.com',
  'https://calvinla.com',
  'https://portfolio-app-bglv.onrender.com',
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (curl, Postman) and listed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API');
});

app.get('/api/projects', async (req, res) => {
  const projectsData = [
    {
        id: 1,
        name: "OP-ADB",
        description: "Full-stack internal web app using JavaScript, React, and Python to execute ADB functions, automated scripts, and API calls.",
        imageUrl: "/images/p1.jpeg",
        liveUrl: "#",
        githubUrl: "https://github.com/calvinlazzz",
        technologiesUsed: ["JavaScript", "React", "Python"]
    },
    {
        id: 2,
        name: "Freelance Web Development",
        description: "Designed, developed, and deployed four client websites — two custom WordPress sites and two full-stack web applications.",
        imageUrl: "/images/p2.png",
        liveUrl: "#",
        githubUrl: "https://github.com/calvinlazzz",
        technologiesUsed: ["Python", "HTML", "CSS", "WordPress"]
    },
    {
        id: 3,
        name: "Homelab Infrastructure",
        description: "Personal Linux home server to self-host client websites and applications, managing domain routing, security protocols, and system uptime.",
        imageUrl: "/images/p3.png",
        liveUrl: "#",
        githubUrl: "https://github.com/calvinlazzz",
        technologiesUsed: ["Linux", "Docker", "Networking"]
    },
    {
        id: 4,
        name: "Portfolio Website",
        description: "This portfolio site — built with React, Framer Motion, and Tailwind CSS with animated parallax project displays.",
        imageUrl: "/images/p4.png",
        liveUrl: "#",
        githubUrl: "https://github.com/calvinlazzz/portfoli",
        technologiesUsed: ["React", "Framer Motion", "Tailwind CSS"]
    }
    // Add all your project data here
];
res.json(projectsData);
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});