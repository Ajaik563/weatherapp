
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const POPULAR_CITIES = [
  "Chennai",
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Hyderabad"
];

function Search({ onSearch, error, onClearError, currentCity }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      return;
    }

    onSearch(search);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);

    if (error && onClearError) {
      onClearError();
    }
  };

  const handleChipClick = (city) => {
    onSearch(city);
    setSearch("");
  };

  return (
    <section className="search-section">

      <h1>Weather Forecast</h1>

      <p>
        Check the current weather and forecast for any city.
      </p>

    
      <form
        className={`search-box ${error ? "has-error" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={handleChange}
        />

        <button type="submit">
          Search
        </button>
      </form>

    
      {/* {error && (
        <div className="error-message" role="alert">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <span>{error}</span>
        </div>
      )} */}

  
      <div className="quick-chips">

        <span className="chips-label">
          Quick select:
        </span>

        <div className="chips-list">

          {POPULAR_CITIES.map((city) => {

          

            return (
              <button
                key={city}
                type="button"
                className={`city-chip`}
                onClick={() => handleChipClick(city)}
              >
                {city}
              </button>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Search;

