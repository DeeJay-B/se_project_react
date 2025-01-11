import React from "react";

export const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "Celsius",
  handleToggleSwitchChange: () => {},
});
