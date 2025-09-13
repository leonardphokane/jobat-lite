import React from 'react';

const RecruiterUpdates = () => {
  // Placeholder data (can be replaced with API or MongoDB later)
  const updates = [
    {
      id: 1,
      recruiter: 'Nandi Talent Group',
      message: 'Reviewed 3 resumes. Awaiting feedback.',
      timestamp: '2025-09-07T21:30:00Z',
    },
    {
      id: 2,
      recruiter: 'AfroTech Careers',
      message: 'Scheduled interview with candidate #102.',
      timestamp: '2025-09-07T20:15:00Z',
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">📬 Recruiter Updates</h2>
      {updates.length === 0 ? (
        <p className="text-gray-600">No updates yet.</p>
      ) : (
        <ul className="space-y-4">
          {updates.map((update) => (
            <li key={update.id} className="p-3 border rounded bg-gray-50">
              <div className="font-medium text-gray-700">{update.recruiter}</div>
              <div className="text-gray-600 text-sm">{update.message}</div>
              <div className="text-xs text-gray-400">
                {new Date(update.timestamp).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecruiterUpdates;