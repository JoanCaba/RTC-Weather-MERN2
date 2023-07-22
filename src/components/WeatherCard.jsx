import './WeatherCard.css';

/*
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}

*/

const WeatherCard = ({ size = 'large' }) => {
  const data = {
    coord: {
      lon: 10.99,
      lat: 44.34
    },
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10d'
      }
    ],
    base: 'stations',
    main: {
      temp: 298.48,
      feels_like: 298.74,
      temp_min: 297.56,
      temp_max: 300.05,
      pressure: 1015,
      humidity: 64,
      sea_level: 1015,
      grnd_level: 933
    },
    visibility: 10000,
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18
    },
    rain: {
      '1h': 3.16
    },
    clouds: {
      all: 100
    },
    dt: 1661870592,
    sys: {
      type: 2,
      id: 2075663,
      country: 'IT',
      sunrise: 1661834187,
      sunset: 1661882248
    },
    timezone: 7200,
    id: 3163858,
    name: 'Zocca',
    cod: 200,
    time: '11:42 PM'
  };

  /*

time.


*/

  return (
    <div className={`weather-card-container ${size}`}>
      <div className="weather-time">
        <p>Monday</p>
        {size === 'large' && <time dateTime="Thh:mm:ss">{data.time}</time>}
      </div>
      <div className="weather-info">
        <p>{data.main.temp} F</p>
        <img src="./src/assets/partly_cloudy.png"></img>
      </div>
      {size === 'large' && (
        <div className="weather-details">
          <ul>
            <li>
              <p>Feels like: {data.main.feels_like}</p>
            </li>
            <li>
              <p>Wind: {data.wind.speed}</p>
            </li>
            <li>
              <p>Pressure {data.main.pressure}</p>
            </li>
            <li>
              <p>Humidity {data.main.humidity}</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Sunrise: {data.sys.sunrise}</p>
            </li>
            <li>
              <p>Sunset: {data.sys.sunset}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
