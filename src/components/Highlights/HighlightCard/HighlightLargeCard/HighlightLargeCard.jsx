import React from 'react';
import './HighlightLargeCard.css';

const HighlightLargeCard = ({ cardType }) => {
  return (
    <div className="hl-large-card">
      <div className="hl-decoration">{cardType.decoration}</div>
      <div className="hl-large-title">
        <h3>{cardType.title} </h3> <img src={cardType.iconSrc} />
      </div>
      <div className="hl-center-info">
        <p>
          {cardType.mainValue}
          <span>{cardType.symbol}</span>{' '}
        </p>
        {cardType.extraValue && <p>{cardType.extraValue}</p>}
      </div>
      <footer>
        {cardType.extraInfo.map((info) => {
          return (
            <div key={info.title}>
              <h4>{info.title}</h4>
              <p>
                {info.value}
                <span>{info.symbol}</span>
              </p>
            </div>
          );
        })}{' '}
      </footer>
    </div>
  );
};

export default HighlightLargeCard;
/*
    <div className="wind-card">
      <h3>Wind Status</h3>
      <div className="wind-card-contents">
        <div className="wind-radial-border">
          <div className="wind-radial-inside-border">
            <div className="wind-pointer-container" style={{ rotate: `${windDeg}deg` }}>
              <div className="wind-pointer"></div>
            </div>
            <div className="wind-radial-text">
              <p>{windDeg} º</p>
              <p>{windDirectionString}</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="wind-side">
          <h4>Wind</h4> <p>3.8m/s</p>
        </div>
        <div className="wind-side">
          <h4>Gust</h4>
          <p>12.3m/s</p>
        </div>
      </footer>
    </div>



*/
