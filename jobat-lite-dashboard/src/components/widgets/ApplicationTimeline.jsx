import React from 'react';
import './ApplicationTimeline.css';

const ApplicationTimeline = ({ steps }) => {
  return (
    <div className="application-timeline">
      <h3>Application Timeline</h3>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <span className="step-date">{step.date}</span>
            <span className="step-label">{step.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationTimeline;
