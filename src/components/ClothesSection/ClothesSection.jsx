import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  onLikeClick,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) {
    return <p>Loading your items...</p>;
  }

  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__title">Your Items</p>

        {currentUser && (
          <button className="clothes-section__add-btn" onClick={handleAddClick}>
            + Add new
          </button>
        )}
      </div>

      <ul className="clothes-section__items">
        {clothingItems
          .filter((item) => {
            if (item.owner && typeof item.owner === "object") {
              return item.owner._id === currentUser._id;
            }
            return item.owner === currentUser._id;
          })
          .map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              onLikeClick={onLikeClick}
              currentUser={currentUser}
            />
          ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
