import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css'; 

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9b09c162be8aeb6bf59932c8146810e1`
      );
      setWeatherData(response.data);
      console.log(response.data);

      // Set the current date and time
      const now = new Date();
      setCurrentDateTime(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="weather-container">
      <form className= "searchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <div className="weather-info">
          <div>
            <h2 className="city-name">{weatherData.name}</h2>
            <p className="date-time">Date & Time: {currentDateTime}</p>
          </div>
          <div>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like: {weatherData.main.feels_like}°C</p>
          </div>
          <div>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Wind Speed: {weatherData.wind.speed}m/s</p>
          </div>
        </div>
      ) : (
        <p className="loading-message">Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;