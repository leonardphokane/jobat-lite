const express = require('express');
const router = express.Router();
const fairnessScore = require('../utils/fairnessScore');

router.post('/', async (req, res) => {
  try {
    const score = fairnessScore(req.body);
    res.json(score);
  } catch (err) {
    console.error('Fairness scoring error:', err.message);
    res.status(500).json({ error: 'Fairness scoring failed' });
  }
});

module.exports = router;
