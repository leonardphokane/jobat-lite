import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const OutreachStatusBar = () => {
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    socket.on('outreachUpdate', (data) => {
      setStatus(data.status);
    });

    return () => {
      socket.off('outreachUpdate');
    };
  }, []);

  const handleStatusChange = (newStatus) => {
    socket.emit('updateStatus', { status: newStatus });
  };

  return (
    <div className="outreach-status">
      <h4>Recruiter Status: {status}</h4>
      <div>
        <button onClick={() => handleStatusChange('Contacted')}>Contacted</button>
        <button onClick={() => handleStatusChange('Pending')}>Pending</button>
        <button onClick={() => handleStatusChange('Rejected')}>Rejected</button>
      </div>
    </div>
  );
};

export default OutreachStatusBar;
