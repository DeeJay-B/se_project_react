import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({ handleCardClick, clothingItems, handleAddClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__add-btn" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems
          .filter((item) => {
            return item.owner === currentUser._id;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
