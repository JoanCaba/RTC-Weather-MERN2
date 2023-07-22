import './App.css';
import WindCard from './components/HighlightCard/WindCard/WindCard';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <>
      <WindCard />
      <WeatherCard />
      <WeatherCard size="small" />
    </>
  );
}

export default App;
