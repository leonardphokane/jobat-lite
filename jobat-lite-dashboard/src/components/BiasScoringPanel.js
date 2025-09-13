import React, { useState } from 'react';
import axios from 'axios';

const BiasScoringPanel = () => {
  const [text, setText] = useState('');
  const [score, setScore] = useState(null);

  const handleScore = async () => {
    try {
      const res = await axios.post('/api/fairness', { text });
      setScore(res.data.score);
    } catch {
      setScore('Error scoring resume');
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">Bias Scoring Panel</h2>
      <textarea
        className="w-full border p-2 mb-4"
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste resume text here..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2"
        onClick={handleScore}
      >
        Score Resume
      </button>
      {score !== null && (
        <p className="mt-4 text-lg font-bold">Bias Score: {score}</p>
      )}
    </div>
  );
};

export default BiasScoringPanel;
