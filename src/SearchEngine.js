import React, { useState } from "react";
import WeatherData from "./Weather";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState(null);
  const [apiResponded, setApiResponded] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleApi(response) {
    console.log(response.data);
    setApiResponded(true);
    setWeatherData({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windspeed: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      country: response.data.country,
    });
  }

  function captureUserInput(event) {
    setCity(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let apiKey = "24f16ff06b6aba2369ec3846f0t8bco2";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleApi);
  }

  let form = (
    <form className="SearchEngine" onSubmit={handleFormSubmit}>
      <input
        type="search"
        placeholder="Type a city name"
        onChange={captureUserInput}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (apiResponded) {
    return (
      <div className="SearchEngine">
        <div>{form}</div>
        <WeatherData weatherData={weatherData} />
      </div>
    );
  } else {
    return (
      <div className="SearchEngine">
        <div>{form}</div>
      </div>
    );
  }
}
