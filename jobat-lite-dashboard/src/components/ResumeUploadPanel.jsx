import React, { useState } from 'react';
import axios from 'axios';

const ResumeUploadPanel = ({ setResumeData }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('resume', file);

    const res = await axios.post('http://localhost:5000/api/upload', formData);
    setResumeData(res.data);
  };

  return (
    <div className="upload-panel">
      <h2>Upload Resume</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ResumeUploadPanel;
