import { useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
function Main({ weatherData, handleCardClick, clothingItems }) {
  console.log("clothingItems", clothingItems);
  const currentTemperature = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is{" "}
          {currentTemperature.currentTemperatureUnit === "F"
            ? weatherData.temp.F
            : weatherData.temp.C}{" "}
          &deg; {currentTemperature.currentTemperatureUnit} / You may want to
          wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onLikeClick={onLikeClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
