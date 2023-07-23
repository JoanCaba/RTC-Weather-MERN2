import React from 'react';
import './HighlightSmallCard.css';

const HighlightSmallCard = ({ cardType }) => {
  return (
    <div className="hl-small-card">
      <div className="hl-left">
        <h4>{cardType.title}</h4>
        <p>
          {cardType.mainValue}
          <span>{cardType.symbol}</span>
        </p>
      </div>
      <div className="hl-right">
        <img src={cardType.iconSrc}></img>
        <p>{cardType.description}</p>
      </div>
    </div>
  );
};

export default HighlightSmallCard;

/*
<div className="humidity-card">
  <div className="humidity-relative">
    <h4>Humidity</h4>
    <p>
      {humidity}
      <span>%</span>
    </p>
  </div>
  <div className="humidity-dew">
    <img src="./src/assets/water-drop.png"></img>
    <p>The dew point is {calculateDewPoint(temp, humidity).toFixed(2)}</p>
  </div>
</div>;
*/
