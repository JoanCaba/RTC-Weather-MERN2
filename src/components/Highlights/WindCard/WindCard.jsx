import React from 'react';
import './WindCard.css';

const WindCard = () => {
  const windDeg = 330;

  const windDirectionMap = {
    0: 'N',
    11.25: 'NNE',
    22.5: 'NE',
    33.75: 'ENE',
    45: 'E',
    56.25: 'ESE',
    67.5: 'SE',
    78.75: 'SSE',
    90: 'S',
    101.25: 'SSW',
    112.5: 'SW',
    123.75: 'WSW',
    135: 'W',
    146.25: 'WNW',
    157.5: 'NW',
    168.75: 'NNW',
    180: 'N',
    191.25: 'NNE',
    202.5: 'NE',
    213.75: 'ENE',
    225: 'E',
    236.25: 'ESE',
    247.5: 'SE',
    258.75: 'SSE',
    270: 'S',
    281.25: 'SSW',
    292.5: 'SW',
    303.75: 'WSW',
    315: 'W',
    326.25: 'WNW',
    337.5: 'NW',
    348.75: 'NNW',
    360: 'N'
  };

  const getWindDirectionString = (degrees) => {
    const normalizedDegrees = (degrees + 360) % 360;
    const directions = Object.keys(windDirectionMap).map(Number);
    directions.sort((a, b) => a - b);

    if (normalizedDegrees === 0 || normalizedDegrees === 360) {
      return windDirectionMap[360];
    }

    let nearestDirection = directions[0];
    let minDifference = Math.abs(normalizedDegrees - nearestDirection);

    for (let i = 1; i < directions.length; i++) {
      const direction = directions[i];
      const difference = Math.abs(normalizedDegrees - direction);

      if (difference < minDifference) {
        nearestDirection = direction;
        minDifference = difference;
      }
    }

    return windDirectionMap[nearestDirection];
  };

  const windDirectionString = getWindDirectionString(windDeg);

  return (
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
  );
};

export default WindCard;
