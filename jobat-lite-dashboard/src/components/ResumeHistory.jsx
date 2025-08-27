import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResumeHistory = () => {
  const [resumes, setResumes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/resumes');
        setResumes(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error('Error fetching resume history:', err.message);
      }
    };

    fetchResumes();
  }, []);

  useEffect(() => {
    if (statusFilter === 'All') {
      setFiltered(resumes);
    } else {
      setFiltered(resumes.filter(r => r.status === statusFilter));
    }
  }, [statusFilter, resumes]);

  return (
    <div className="resume-history">
      <h2>Resume History</h2>
      <label>
        Filter by Status:{' '}
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Contacted">Contacted</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>

      {filtered.length === 0 ? (
        <p>No resumes match this filter.</p>
      ) : (
        <ul>
          {filtered.map((resume) => (
            <li key={resume._id}>
              <strong>{resume.name}</strong> — {resume.experience} — Status: {resume.status}
              <br />
              Skills: {resume.skills.join(', ')}
              <br />
              Last Updated: {new Date(resume.updatedAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeHistory;
