import React from 'react';
import './Loader.css'; // Add custom styles for the spinner

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading...</p>
      <p className="name-text">Nayab Shams Resume</p>
    </div>
  );
};

export default Loading;
