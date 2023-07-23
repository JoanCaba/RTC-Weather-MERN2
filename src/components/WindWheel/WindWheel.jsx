import React from 'react';
import './WindWheel.css';

const WindWheel = ({ rotationDegrees }) => {
  return (
    <div className="wind-radial-border">
      <div className="wind-radial-inside-border">
        <div className="wind-pointer-container" style={{ rotate: `${rotationDegrees}deg` }}>
          <div className="wind-pointer" />
        </div>
      </div>
    </div>
  );
};
export default WindWheel;
