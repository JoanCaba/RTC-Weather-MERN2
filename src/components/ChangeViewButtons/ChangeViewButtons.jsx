import React from 'react';
import './ChangeViewButtons.css';
import { NavLink } from 'react-router-dom';

const ChangeViewButtons = () => {
  return (
    <div className="view-buttons-container">
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/details">Details</NavLink>
    </div>
  );
};

export default ChangeViewButtons;
