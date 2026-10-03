import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon, getWeatherColor } from "../assets/Icon/icons";

function Forecast({ forecast }) {
  return (
    <section className="forecast">
      <h2>5-Day Forecast</h2>

      <div className="forecast-container">
        {forecast &&
          forecast.map((item, index) => (
            <div className="forecast-card" key={index}>
              <h3>{item.day}</h3>

              <div className="forecast-icon">
                <FontAwesomeIcon
                  icon={getWeatherIcon(item.condition)}
                  color={getWeatherColor(item.condition)}
                />
              </div>

              <h4>{item.temperature}°C</h4>

              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Forecast;