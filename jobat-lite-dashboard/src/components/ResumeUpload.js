import React, { useState } from 'react';

function ResumeUpload() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileInput = e.target.elements.resume;

    if (!fileInput.files.length) {
      setError('Please select a file to upload.');
      return;
    }

    formData.append('resume', fileInput.files[0]);
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
      setError('❌ Upload failed. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📄 Upload Your Resume</h1>
      <p style={styles.subtitle}>Showcase your talent. Submit your resume and let your skills shine.</p>

      <form onSubmit={handleUpload} style={styles.form}>
        <input type="file" name="resume" style={styles.input} />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Resume'}
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}
      {response && (
        <div style={styles.success}>
          <p>🎉 Resume uploaded successfully!</p>
          <pre style={styles.responseBox}>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '3rem auto',
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#0078D4',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  error: {
    color: '#d8000c',
    marginTop: '1rem',
  },
  success: {
    marginTop: '2rem',
    backgroundColor: '#e6ffed',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #b2f5ea',
  },
  responseBox: {
    marginTop: '1rem',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    whiteSpace: 'pre-wrap',
  },
};

export default ResumeUpload;
