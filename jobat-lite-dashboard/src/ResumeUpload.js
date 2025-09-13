import React, { useState } from 'react';

function ResumeUpload() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileInput = e.target.elements.resume;

    if (!fileInput.files.length) {
      setError('Please select a file.');
      return;
    }

    formData.append('resume', fileInput.files[0]);

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('❌ Upload failed. Check the server and try again.');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Upload Resume</h2>
      <form onSubmit={handleUpload}>
        <input type="file" name="resume" required />
        <button type="submit">Upload</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <pre style={{ background: '#f4f4f4', padding: '1rem', marginTop: '1rem' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default ResumeUpload;
