import React from 'react';

const ParsedResumeCard = ({ data }) => {
  return (
    <div className="resume-card">
      <h3>Parsed Resume</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Skills:</strong> {data.skills.join(', ')}</p>
      <p><strong>Experience:</strong> {data.experience}</p>
    </div>
  );
};

export default ParsedResumeCard;
