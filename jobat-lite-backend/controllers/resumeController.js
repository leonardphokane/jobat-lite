const Resume = require('../models/Resume');

exports.createResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
