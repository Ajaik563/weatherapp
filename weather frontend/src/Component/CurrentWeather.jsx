import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon, getWeatherColor } from "../assets/Icon/icons";

function CurrentWeather({ weather }) {

  const current = weather.current;

  return (
    <section className="current-weather">

      <div className="weather-main">

        <div className="weather-icon">
          <FontAwesomeIcon
            icon={getWeatherIcon(current.condition)}
            color={getWeatherColor(current.condition)}
          />
        </div>

        <div>

          <h2>{weather.city}</h2>

          <p className="condition">
            {current.description}
          </p>

          <p className="date">
            {weather.forecast[0].day},{" "}
            {weather.forecast[0].date}
          </p>

        </div>

      </div>

      <div className="temperature">
        <span>{current.temperature}</span>°C
      </div>

    </section>
  );
}

export default CurrentWeather;