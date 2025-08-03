import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({ handleCardClick, clothingItems, handleAddClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__title">Your Items</p>

        {/* ✅ Show Add button only if user is logged in */}
        {currentUser && (
          <button className="clothes-section__add-btn" onClick={handleAddClick}>
            + Add new
          </button>
        )}
      </div>

      <ul className="clothes-section__items">
        {/* ✅ Filter items by current user (for Profile page) */}
        {clothingItems
          .filter((item) => item.owner === currentUser?._id)
          .map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              // ✅ Pass currentUser to ItemCard to handle like display
              currentUser={currentUser}
            />
          ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
