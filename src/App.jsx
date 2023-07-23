import './App.css';
import WindCard from './components/Highlights/WindCard/WindCard';
import HumidityCard from './components/Highlights/HumidityCard/HumidityCard';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Highlights from './components/Highlights/Highlights';

function App() {
  return (
    <>
      <WindCard></WindCard>
      <Highlights></Highlights>
    </>
  );
}

export default App;
