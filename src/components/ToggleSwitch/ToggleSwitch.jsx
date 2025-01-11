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
      <label className="toggle_switch" htmlFor="toggle">
        <input
          onChange={handleChange}
          id="toggle"
          name="toggle"
          type="checkbox"
          className="toggle__switch-box"
          aria-label="Toggle Switch for Temperature Unit"
        />
        <span
          className={
            currentTemperatureUnit === "F"
              ? "toggle__switch-slide toggle__switch-slide-F"
              : "toggle__switch-slide toggle__switch-slide-C"
          }
        ></span>
        <p
          className={`toggle__temp-F ${
            currentTemperatureUnit === "F" && "toggle__switch-active-F"
          }`}
        >
          {" "}
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
