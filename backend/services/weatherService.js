const axios = require("axios");

const OPENWEATHER_BASE_URL =
  "https://api.openweathermap.org/data/2.5";


const fetchCurrentWeather = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY_NOT_CONFIGURED");
  }

  const response = await axios.get(
    `${OPENWEATHER_BASE_URL}/weather`,
    {
      params: {
        q: city,
        units: "metric",
        appid: apiKey
      }
    }
  );

  const data = response.data;

  return {
    city: data.name,
    country: data.sys ? data.sys.country : "",

    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),

    humidity: data.main.humidity,
    pressure: data.main.pressure,

    windSpeed: data.wind ? data.wind.speed : null,

    cloudiness: data.clouds
      ? data.clouds.all
      : 0,

    condition:
      data.weather && data.weather[0]
        ? data.weather[0].main
        : "",

    description:
      data.weather && data.weather[0]
        ? data.weather[0].description
        : "",

    icon:
      data.weather && data.weather[0]
        ? data.weather[0].icon
        : "01d"
  };
};


const fetchForecast = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY_NOT_CONFIGURED");
  }

  const response = await axios.get(
    `${OPENWEATHER_BASE_URL}/forecast`,
    {
      params: {
        q: city,
        units: "metric",
        appid: apiKey
      }
    }
  );

  const data = response.data;

  const today = new Date();

  const todayDate = today.toLocaleDateString(
    "en-CA",
    {
      timeZone: "Asia/Kolkata"
    }
  );

  console.log("Today:", todayDate);

  const todayForecasts = data.list.filter((item) => {
    return item.dt_txt.startsWith(todayDate);
  });

  let todayForecast = null;

  if (todayForecasts.length > 0) {

    todayForecast = todayForecasts.reduce(
      (closest, item) => {

        if (!closest) {
          return item;
        }

        const currentTime =
          Math.abs(
            item.dt * 1000 - today.getTime()
          );

        const closestTime =
          Math.abs(
            closest.dt * 1000 - today.getTime()
          );

        return currentTime < closestTime
          ? item
          : closest;
      },
      null
    );
  }


  const futureForecasts = data.list
    .filter((item) => {

      return (
        item.dt_txt.includes("12:00:00") &&
        !item.dt_txt.startsWith(todayDate)
      );

    })
    .slice(0, 4);

  const selectedForecasts = [
    todayForecast,
    ...futureForecasts
  ].filter(Boolean);


  const forecast = selectedForecasts.map(
    (item, index) => {

      // OpenWeather date
      const date =
        item.dt_txt.split(" ")[0];


      // First record = Today
      let day;

      if (index === 0) {

        day = "Today";

      } else {

        day = new Date(
          `${date}T12:00:00`
        ).toLocaleDateString(
          "en-US",
          {
            weekday: "long",
            timeZone: "UTC"
          }
        );
      }


      return {
        date: date,

        day: day,

        temperature:
          Math.round(item.main.temp),

        condition:
          item.weather[0].main,

        description:
          item.weather[0].description,

        icon:
          item.weather[0].icon
      };
    }
  );


  return {
    city: data.city.name,
    forecast: forecast
  };
};

module.exports = {
  fetchCurrentWeather,
  fetchForecast
};