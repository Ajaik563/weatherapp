const weatherService = require('../services/weatherService');

const getCurrentWeather = async (req, res) => {
  const city = req.query.city ? req.query.city.trim() : '';

  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }

  try {
    const data = await weatherService.fetchCurrentWeather(city);
    return res.status(200).json(data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: 'City not found' });
    }

    return res.status(500).json({ message: 'Unable to fetch weather data' });
  }
};

const getForecast = async (req, res) => {
  const city = req.query.city ? req.query.city.trim() : '';

  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }

  try {
    const data = await weatherService.fetchForecast(city);
    return res.status(200).json(data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: 'City not found' });
    }

    return res.status(500).json({ message: 'Unable to fetch weather data' });
  }
};

module.exports = {
  getCurrentWeather,
  getForecast
};
