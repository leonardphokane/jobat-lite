import axios from 'axios';

export const uploadResume = (file) => {
  const formData = new FormData();
  formData.append('resume', file);
  return axios.post('http://localhost:5000/api/upload', formData);
};

export const getFairnessScore = (resumeData) => {
  return axios.post('http://localhost:5000/api/fairness', resumeData);
};
