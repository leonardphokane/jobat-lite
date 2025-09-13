import React from 'react';
import './ResumeStatus.css';

const ResumeStatus = ({ status }) => {
  return (
    <div className="resume-status">
      <h3>Resume Status</h3>
      <p>Status: <strong>{status}</strong></p>
    </div>
  );
};

export default ResumeStatus;
