import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCloudSun,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

function Header({ weather }) {
  return (
    <header className="header">

      <div className="logo">
        <FontAwesomeIcon icon={faCloudSun} />{" "}
        WeatherApp
      </div>

      <div className="location">
        <span className="location-icon"> <FontAwesomeIcon icon={faLocationDot} /></span>
        {weather.city}, India
      </div>

    </header>
  );
}

export default Header;