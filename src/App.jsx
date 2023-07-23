import './App.css';
import WindCard from './components/HighlightCard/WindCard/WindCard';
import HumidityCard from './components/HighlightCard/HumidityCard/HumidityCard';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <>
      <WindCard />
      <WeatherCard size="small" />
      <WeatherCard />
      <HumidityCard />
    </>
  );
}

export default App;
