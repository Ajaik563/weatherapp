import { useState, useEffect } from "react";
import weatherData from "./data/weatherData.json";

import Header from "./Component/Header";
import Search from "./Component/Search";
import CurrentWeather from "./Component/CurrentWeather";
import WeatherDetails from "./Component/Details";
import Forecast from "./Component/ForeCast";

import { getWeather } from "./Services/Weatherservices";

import "./App.css";

function App() {

  // Initial data comes from local JSON
  const [weather, setWeather] = useState(weatherData["Chennai"]);

  const [error, setError] = useState("");

  const handleSearch = async (searchCity) => {

    const trimmedCity = searchCity.trim();

    if (!trimmedCity) {
      return;
    }

    const formattedCity =
      trimmedCity.charAt(0).toUpperCase() +
      trimmedCity.slice(1).toLowerCase();

    setError("");

    try {

      // Backend ON → backend data
      // Backend OFF → local JSON
      const result = await getWeather(formattedCity);

      setWeather(result);

      console.log("Data source:", result.source);

    } catch (error) {

      // City not found UI
      setError(error.message);

    }
  };
  useEffect(()=>{
    handleSearch("Chennai");
  },[])

  return (
    <div className="app">

      <Header weather={weather} />

    <Search
  onSearch={handleSearch}
  error={error}
  onClearError={() => setError("")}
  currentCity={weather.city}
/>

      {error ? (
        <div className="city-not-found">
          <h2>City not found</h2>
          <p>Please check the city name and try again.</p>
        </div>
      ) : (
        <>
          <CurrentWeather weather={weather} />

          <WeatherDetails current={weather.current} />

          <Forecast forecast={weather.forecast} />
        </>
      )}

      <footer>
        <p>WeatherApp &copy; 2026</p>
      </footer>

    </div>
  );
}

export default App;