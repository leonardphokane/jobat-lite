import React from 'react';

const FairnessScoreBadge = ({ score, flags }) => {
  const status = score > 80 ? '✅ Fair' : score > 50 ? '⚠️ Biased' : '❌ Needs Review';

  return (
    <div className="fairness-badge">
      <h3>Fairness Score: {score}</h3>
      <p>Status: {status}</p>
      {flags.length > 0 && (
        <ul>
          {flags.map((flag, idx) => <li key={idx}>{flag}</li>)}
        </ul>
      )}
    </div>
  );
};

export default FairnessScoreBadge;
