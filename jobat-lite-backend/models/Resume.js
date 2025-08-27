const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: [String],
  experience: [
    {
      role: String,
      company: String,
      years: Number
    }
  ]
});

module.exports = mongoose.model('Resume', ResumeSchema);
