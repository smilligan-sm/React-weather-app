//import React, { useState } from "react";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <p><strong>Temperature:</strong> {Math.round(props.weatherData.temperature)}°C </p>
      <p><strong>Description:</strong> {props.weatherData.description} </p>
      <p><strong>Humidity:</strong> {Math.round(props.weatherData.humidity)}%</p>
      <p><strong>Wind:</strong> {Math.round(props.weatherData.windspeed)} km/h</p>
      <img src={props.weatherData.icon} className="weather-icon" alt="Current weather"/>
    </div>
  );
}
