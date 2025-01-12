import React, { useState, useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  function handleChange() {
    handleToggleSwitchChange();
  }

  return (
    <div className="toggle">
      <label className="toggle__switch" htmlFor="toggle">
        <input
          className="toggle__switch-box"
          type="checkbox"
          name="toggle"
          id="toggle"
          aria-label="Toggle temperature unit"
          onChange={handleChange}
        />
        <span
          className={
            currentTemperatureUnit === "F"
              ? "toggle__switch-slider toggle__switch-slider-F"
              : "toggle__switch-slider toggle__switch-slider-C"
          }
        ></span>
        <p
          className={`toggle__temp-F ${
            currentTemperatureUnit === "F" && "toggle__switch-active-F"
          }`}
        >
          F
        </p>
        <p
          className={`toggle__temp-C ${
            currentTemperatureUnit === "C" && "toggle__switch-active-C"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
}

export default ToggleSwitch;
