const { parseResume, extractSkills, normalizeFormat } = require('../utils/resumeProcessor');

describe('Resume Processor', () => {
  const sampleResume = {
    name: 'Thabo Mokoena',
    email: 'thabo@example.com',
    experience: [
      { role: 'Frontend Developer', company: 'SpazaTech', years: 2 },
      { role: 'Intern', company: 'Code4Africa', years: 1 }
    ],
    skills: ['JavaScript', 'React', 'CSS']
  };

  test('should parse resume and return structured output', () => {
    const result = parseResume(sampleResume);
    expect(result.name).toBe('Thabo Mokoena');
    expect(result.skills).toContain('React');
  });

  test('should extract skills correctly', () => {
    const skills = extractSkills(sampleResume);
    expect(skills).toEqual(expect.arrayContaining(['JavaScript', 'CSS']));
  });

  test('should normalize resume format', () => {
    const normalized = normalizeFormat(sampleResume);
    expect(normalized).toHaveProperty('email');
    expect(normalized.experience.length).toBeGreaterThan(0);
  });
});
