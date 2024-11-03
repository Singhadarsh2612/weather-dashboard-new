import React, { useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Favorites from "./Favorites";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const fetchData = async (cityName) => {
    if (!cityName) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8f43f2274a0a67f8fa6c2713d444dccf&units=metric`
      );
      setWeatherData(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setError("Invalid name. Please enter a valid location.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city);
  };

  const getDailyForecasts = (list) => {
    const dailyForecasts = [];
    const dates = new Set();

    list.forEach((item) => {
      const [date, time] = item.dt_txt.split(" ");
      if (time === "09:00:00" && !dates.has(date)) {
        dailyForecasts.push(item);
        dates.add(date);
      }
    });

    return dailyForecasts.slice(0, 5);
  };

  const addToFavorites = () => {
    if (city) {
      const formattedCity =
        city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
      if (!favorites.includes(formattedCity)) {
        setFavorites([...favorites, formattedCity]);
      }
    }
  };

  const handleFavoriteSelect = (selectedCity) => {
    setCity(selectedCity);
    fetchData(selectedCity);
  };

  return (
    <div className="weather">
      <form onSubmit={handleSubmit} className="weather-form">
        <input
          type="text"
          placeholder="Enter the location"
          value={city}
          onChange={handleInputChange}
        />
        <button className="get-weather-button" type="submit">
          Get Weather
        </button>

        <button className="fav-button" type="button" onClick={addToFavorites}>
          🤍
        </button>

        <Favorites
          favorites={favorites}
          onSelectFavorite={handleFavoriteSelect}
        />
      </form>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p style={{ color: "white" }}>Loading weather data...</p>
      ) : (
        weatherData && (
          <div className="weather-div">
            {getDailyForecasts(weatherData.list).map((day, index) => {
              const pop = Math.floor(day.pop * 100) || 0;
              const visibility = day.visibility;
              const date = day.dt_txt.split(" ")[0];

              return (
                <Card
                  key={index}
                  cityName={weatherData.city.name}
                  Temperature={day.main.temp}
                  Description={day.weather[0].description}
                  Feels_like={day.main.feels_like}
                  Humidity={day.main.humidity}
                  Pressure={day.main.pressure}
                  WindSpeed={day.wind.speed}
                  Time={date}
                  IconUrl={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} // Add icon URL here
                  Visibility={visibility}
                  Pop={pop}
                />
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
