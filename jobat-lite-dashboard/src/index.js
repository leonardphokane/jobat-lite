import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/dashboard.css'; // Global recruiter-facing styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
