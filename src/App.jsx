import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <>
      <div className="test">
        <WeatherCard></WeatherCard>
        <WeatherCard size="small"></WeatherCard>
        <WeatherCard size="small"></WeatherCard>
        <WeatherCard size="small"></WeatherCard>
        <WeatherCard size="small"></WeatherCard>
        <WeatherCard size="small"></WeatherCard>
      </div>
    </>
  );
}

export default App;
