import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDroplet,
  faWind,
  faTemperatureHalf,
  faGaugeHigh
} from "@fortawesome/free-solid-svg-icons";


function Details({ current }) {

  return (
    <section className="details">

      <div className="detail-card">

        <div className="detail-icon humidity">
          <FontAwesomeIcon icon={faDroplet} />
        </div>

        <div>
          <p>Humidity</p>
          <h3>{current.humidity}%</h3>
        </div>

      </div>


      <div className="detail-card">

        <div className="detail-icon wind">
          <FontAwesomeIcon icon={faWind} />
        </div>

        <div>
          <p>Wind Speed</p>
          <h3>{current.windSpeed} m/s</h3>
        </div>

      </div>


      <div className="detail-card">

        <div className="detail-icon feels-like">
          <FontAwesomeIcon icon={faTemperatureHalf} />
        </div>

        <div>
          <p>Feels Like</p>
          <h3>{current.feelsLike}°C</h3>
        </div>

      </div>


      <div className="detail-card">

        <div className="detail-icon pressure">
          <FontAwesomeIcon icon={faGaugeHigh} />
        </div>

        <div>
          <p>Pressure</p>
          <h3>{current.pressure} hPa</h3>
        </div>

      </div>

    </section>
  );
}

export default Details;