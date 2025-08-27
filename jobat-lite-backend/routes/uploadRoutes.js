const express = require('express');
const multer = require('multer');
const router = express.Router();
const resumeProcessor = require('../utils/resumeProcessor');
const Resume = require('../models/Resume');

const upload = multer();

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const parsed = await resumeProcessor(req.file.buffer);
    const savedResume = await Resume.create(parsed);
    res.json(savedResume);
  } catch (err) {
    console.error('Upload error:', err.message);
    res.status(500).json({ error: 'Resume parsing failed' });
  }
});

module.exports = router;
