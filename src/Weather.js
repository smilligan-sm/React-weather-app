//import React, { useState } from "react";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <p>Temperature: {Math.round(props.weatherData.temperature)}°C </p>
      <p>Description: {props.weatherData.description} </p>
      <p>Humidity: {Math.round(props.weatherData.humidity)}%</p>
      <p>Wind: {Math.round(props.weatherData.windspeed)} km/h</p>
      <img src={props.weatherData.icon} className="weather-icon" alt="Current weather"/>
    </div>
  );
}
