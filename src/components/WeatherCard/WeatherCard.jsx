import React, { useContext } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants/";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const currentTemperature = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionUrl = filteredOptions[0]?.url;
  const weatherOptionCondition = filteredOptions[0]?.condition;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperature.currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}{" "}
        &deg;{currentTemperature.currentTemperatureUnit === "F" ? "F" : "C"}
      </p>
      <img
        src={weatherOptionUrl}
        alt={`Card Showing${weatherOptionCondition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
