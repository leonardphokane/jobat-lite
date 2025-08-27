const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ updatedAt: -1 });
    res.json(resumes);
  } catch (err) {
    console.error('Error fetching resumes:', err.message);
    res.status(500).json({ error: 'Failed to fetch resume history' });
  }
});

module.exports = router;
