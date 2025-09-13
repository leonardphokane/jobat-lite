import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ResumeDashboard.css'; // Make sure this path is correct

function ResumeDashboard() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const itemsPerPage = 5;

  const API_URL = process.env.REACT_APP_API_URL;
  const RESUMES_ENDPOINT = process.env.REACT_APP_RESUMES_ENDPOINT;

  useEffect(() => {
    fetch(`${API_URL}${RESUMES_ENDPOINT}`)
      .then((res) => res.json())
      .then((data) => {
        setResumes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch resumes:', err);
        toast.error('Failed to load resumes.');
        setLoading(false);
      });
  }, [API_URL, RESUMES_ENDPOINT]);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.warn('Please select a file before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', selectedFile);

    fetch(`${API_URL}${RESUMES_ENDPOINT}`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((newResume) => {
        setResumes((prev) => [newResume, ...prev]);
        setSelectedFile(null);
        toast.success('Resume uploaded successfully!');
      })
      .catch((err) => {
        console.error('Upload failed:', err);
        toast.error('Failed to upload resume.');
      });
  };

  const filteredResumes = statusFilter
    ? resumes.filter((r) => r.status === statusFilter)
    : resumes;

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredResumes.slice(offset, offset + itemsPerPage);

  return (
    <div className="container">
      <h1 className="title">📁 Uploaded Resumes</h1>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="upload-form">
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button type="submit" className="upload-button">Upload Resume</button>
      </form>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(0);
          }}
          className="select"
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
        </select>
      </div>

      {/* Resume Table */}
      {loading ? (
        <p>Loading resumes...</p>
      ) : filteredResumes.length === 0 ? (
        <p>No resumes match the selected filter.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Experience</th>
                <th>Skills</th>
                <th>Status</th>
                <th>Uploaded</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((resume) => (
                <tr key={resume._id}>
                  <td>{resume.name}</td>
                  <td>{resume.experience}</td>
                  <td>{resume.skills.join(', ')}</td>
                  <td>
                    <span className="status">{resume.status}</span>
                  </td>
                  <td>{formatDate(resume.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ReactPaginate
            previousLabel={'← Previous'}
            nextLabel={'Next →'}
            pageCount={Math.ceil(filteredResumes.length / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
          />
        </>
      )}

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default ResumeDashboard;
