import React, { useState, useEffect } from 'react';
import ResumeUploadPanel from './ResumeUploadPanel';
import ParsedResumeCard from './ParsedResumeCard';
import FairnessScoreBadge from './FairnessScoreBadge';
import OutreachStatusBar from './OutreachStatusBar';
import axios from 'axios';

const ResumeDashboard = () => {
  const [resumeData, setResumeData] = useState(null);
  const [fairnessData, setFairnessData] = useState(null);

  useEffect(() => {
    if (resumeData) {
      axios.post('http://localhost:5000/api/fairness', resumeData)
        .then(res => setFairnessData(res.data));
    }
  }, [resumeData]);

  return (
    <div className="dashboard">
      <ResumeUploadPanel setResumeData={setResumeData} />
      {resumeData && (
        <>
          <ParsedResumeCard data={resumeData} />
          <FairnessScoreBadge score={fairnessData?.score || 0} flags={fairnessData?.flags || []} />
          <OutreachStatusBar />
        </>
      )}
    </div>
  );
};

export default ResumeDashboard;
