import {
  faSun,
  faCloud,
  faCloudRain,
  faSmog,
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";

function getWeatherIcon(condition) {
  if (condition === "Clear") {
    return faSun;
  }

  if (condition === "Clouds") {
    return faCloud;
  }

  if (condition === "Rain") {
    return faCloudRain;
  }

  if (condition === "Haze") {
    return faSmog;
  }

  return faCloudSun;
}

export function getWeatherColor(condition) {
  switch (condition) {
    case "Clear":
      return "#f59e0b"; // Golden sun
    case "Clouds":
      return "#64748b"; // Slate cloud
    case "Rain":
      return "#0ea5e9"; // Vibrant rain blue
    case "Haze":
    case "Smog":
      return "#94a3b8"; // Misty haze
    default:
      return "#f59e0b";
  }
}

export { getWeatherIcon };
export default getWeatherIcon;