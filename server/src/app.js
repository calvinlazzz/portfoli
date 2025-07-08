const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const knex = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API');
});

app.get('/api/projects', async (req, res) => {
    try {
      const projects = await knex('projects').select('*').orderBy('id', 'asc');
      res.json(projects);
    } catch (err) {
      console.error('Error fetching projects:', err);
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});