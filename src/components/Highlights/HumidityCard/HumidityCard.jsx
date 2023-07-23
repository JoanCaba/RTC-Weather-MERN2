import React from 'react';
import './HumidityCard.css';

const HumidityCard = () => {
  const temp = 25.33;
  const humidity = 65;

  const calculateDewPoint = (temperatureCelsius, relativeHumidity) => {
    const magnusA = 17.27;
    const magnusB = 237.7;
    const alpha =
      (magnusA * temperatureCelsius) / (magnusB + temperatureCelsius) +
      Math.log(relativeHumidity / 100.0);
    const dewPoint = (magnusB * alpha) / (magnusA - alpha);
    return dewPoint;
  };

  return (
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
    </div>
  );
};

export default HumidityCard;
