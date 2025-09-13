import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';       // ✅ Top branding
import Navbar from './components/Navbar';              // ✅ Navigation
import Dashboard from './pages/Dashboard';             // ✅ Main dashboard
import BiasScoringPanel from './components/BiasScoringPanel';
import RecruiterUpdates from './components/RecruiterUpdates';
import ResumeUpload from './components/ResumeUpload';
import ResumeDashboard from './components/ResumeDashboard';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bias" element={<BiasScoringPanel />} />
          <Route path="/updates" element={<RecruiterUpdates />} />
          <Route path="/upload" element={<ResumeUpload />} />
          <Route path="/dashboard/resumes" element={<ResumeDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
