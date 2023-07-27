import './App.css';
import { Route, Routes } from 'react-router-dom';
import WindCard from './components/Highlights/WindCard/WindCard';
import HumidityCard from './components/Highlights/HumidityCard/HumidityCard';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Highlights from './components/Highlights/Highlights';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home';
import DetailsViewPage from './pages/DetailsView';
import MainViewPage from './pages/MainView';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainViewPage />} />
        <Route path="/details" element={<DetailsViewPage />} />
      </Routes>
      {/* <WeatherCard></WeatherCard>
      <Highlights></Highlights> */}
      <Footer />
    </>
  );
}

export default App;
