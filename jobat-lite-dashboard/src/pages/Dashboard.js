import React, { useState } from 'react';
import ResumeHistory from '../components/ResumeHistory';
import RecruiterUpdates from '../components/RecruiterUpdates';
import ResumeUploadPanel from '../components/ResumeUploadPanel';

const Dashboard = () => {
  const [resumeData, setResumeData] = useState(null);

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📊 Jobat Lite Dashboard</h1>
        <p className="text-gray-600">
          Track resumes, recruiter outreach, and bias scoring in real time.
        </p>
      </header>

      {/* Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Resume Upload */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <ResumeUploadPanel setResumeData={setResumeData} />
        </div>

        {/* Recruiter Updates */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <RecruiterUpdates />
        </div>
      </div>

      {/* Resume History */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <ResumeHistory resumeData={resumeData} />
      </div>
    </section>
  );
};

export default Dashboard;
