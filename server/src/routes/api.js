const express = require('express');
const router = express.Router();

// Example route for getting portfolio items
router.get('/portfolio', (req, res) => {
    res.json([
        { id: 1, title: 'Project One', description: 'Description of Project One' },
        { id: 2, title: 'Project Two', description: 'Description of Project Two' },
        { id: 3, title: 'Project Three', description: 'Description of Project Three' }
    ]);
});

// Example route for getting a specific portfolio item
router.get('/portfolio/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, title: `Project ${id}`, description: `Description of Project ${id}` });
});

// Add more routes as needed

module.exports = router;