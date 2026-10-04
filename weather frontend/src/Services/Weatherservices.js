import axios from "axios";
import weatherData from "../data/weatherData.json";

const API_URL = "http://localhost:5000/api/weather";

export async function getWeather(city) {
  try {

    const currentResponse = await axios.get(API_URL, {
      params: {
        city: city
      }
    });

    const current = currentResponse.data;

    console.log("Current weather:", current);

    const forecastResponse = await axios.get(
      `${API_URL}/forecast`,
      {
        params: {
          city: city
        }
      }
    );

    const forecastData = forecastResponse.data;

    console.log("Using backend data");

    return {
      city: current.city,
      country: current.country,

      current: {
        temperature: current.temperature,
        feelsLike: current.feelsLike,
        humidity: current.humidity,
        pressure: current.pressure,
        windSpeed: current.windSpeed,
        visibility: current.visibility,
        cloudiness: current.cloudiness,
        condition: current.condition,
        description: current.description,
        icon: current.icon
      },

      forecast: forecastData.forecast,

      source: "backend"
    };

  } catch (error) {

    console.log("Backend/API failed.");
    console.log("Using local JSON data.");

    const localWeather = weatherData[city];

    if (localWeather) {

      console.log("City found in local JSON.");

      return {
        ...localWeather,
        source: "local"
      };
    }
    console.log("City not found in local JSON.");

    throw new Error("City not found");
  }
}