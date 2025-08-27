module.exports = (resume) => {
  const flags = [];

  if (!resume.name) flags.push('Missing name');
  if (resume.skills.includes('Photoshop')) flags.push('Design bias');

  const score = 100 - flags.length * 10;

  return {
    score: Math.max(score, 0),
    flags
  };
};
