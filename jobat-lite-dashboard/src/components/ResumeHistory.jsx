import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResumeHistory = () => {
  const [resumes, setResumes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/resumes');
        setResumes(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error('Error fetching resume history:', err);
        setError('Failed to load resume history.');
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  useEffect(() => {
    if (statusFilter === 'All') {
      setFiltered(resumes);
    } else {
      setFiltered(resumes.filter((r) => r.status === statusFilter));
    }
  }, [statusFilter, resumes]);

  return (
    <div className="resume-history">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Resume History</h2>

      <label className="block mb-4 text-gray-700">
        Filter by Status:{' '}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Contacted">Contacted</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>

      {loading ? (
        <p className="text-gray-500">Loading resumes...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-600">No resumes match this filter.</p>
      ) : (
        <ul className="space-y-6">
          {filtered.map((resume) => (
            <li key={resume._id} className="p-4 border rounded bg-gray-50">
              <div className="mb-2">
                <strong className="text-gray-800">{resume.name}</strong> — {resume.experience}  
                <span className="ml-2 text-sm text-gray-600">Status: {resume.status}</span>
              </div>

              <div className="text-gray-700 mb-2">
                Skills: {resume.skills.join(', ')}
              </div>

              <div className="text-sm text-gray-500 mb-2">
                Last Updated: {new Date(resume.updatedAt).toLocaleString()}
              </div>

              {resume.filePath && (
                <div className="flex flex-col gap-2">
                  {/* PDF Preview */}
                  <iframe
                    src={`http://localhost:5000${resume.filePath}`}
                    width="100%"
                    height="300px"
                    title={`Preview of ${resume.name}`}
                    className="border rounded"
                  />

                  {/* Download Link */}
                  <a
                    href={`http://localhost:5000${resume.filePath}`}
                    download
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Download Resume
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeHistory;