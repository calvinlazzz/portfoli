const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API');
});

app.get('/api/projects', async (req, res) => {
  const projectsData = [
    {
        id: 1,
        name: "My Awesome Project 1",
        description: "A description of my first project.",
        imageUrl: "/images/project1.png",
        liveUrl: "https://project1.com",
        githubUrl: "https://github.com/youruser/project1",
        technologiesUsed: ["React", "Node.js"]
    },
    {
        id: 2,
        name: "Cool App Demo",
        description: "This app does cool things.",
        imageUrl: "/images/project2.png",
        liveUrl: "https://project2.com",
        githubUrl: "https://github.com/youruser/project2",
        technologiesUsed: ["React", "Express", "PostgreSQL"]
    }
    // Add all your project data here
];
res.json(projectsData);
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});