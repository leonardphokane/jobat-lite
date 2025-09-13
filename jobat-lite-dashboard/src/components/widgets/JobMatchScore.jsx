import React from 'react';
import './JobMatchScore.css';

const JobMatchScore = ({ score }) => {
  return (
    <div className="job-match-score">
      <h3>Job Match Score</h3>
      <div className="score-bar">
        <div className="score-fill" style={{ width: `${score}%` }} />
      </div>
      <p>{score}% match</p>
    </div>
  );
};

export default JobMatchScore;
