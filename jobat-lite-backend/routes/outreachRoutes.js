const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

router.post('/update', async (req, res) => {
  const { id, status } = req.body;

  try {
    const updated = await Resume.findByIdAndUpdate(
      id,
      { status, updatedAt: Date.now() },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error('Status update error:', err.message);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

module.exports = router;
