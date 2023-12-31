import React from 'react';
import './Highlights.css';
import HighlightCard from './HighlightCard/HighlightCard';

const Highlights = () => {
  return (
    <div className="highlights-container">
      <h2>Highlights</h2>
      <div className="highlights-large-cards">
        <HighlightCard cardType="wind" size="large" />
        <HighlightCard cardType="visibility" size="large" />
        <HighlightCard cardType="humidity" size="large" />
      </div>
      <div className="highlights-small-cards">
        <HighlightCard cardType="wind" size="small" />
        <HighlightCard cardType="visibility" size="small" />
        <HighlightCard cardType="humidity" size="small" />
      </div>
    </div>
  );
};

export default Highlights;
