import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"; // ✅ import user context

function ItemCard({ item, onCardClick, onLikeClick }) {
  const { currentUser } = useContext(CurrentUserContext); // ✅ get current user

  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked =
    Array.isArray(item.likes) && item.likes.includes(currentUser?._id);

  const handleLikeClick = () => {
    if (onLikeClick && currentUser) {
      onLikeClick(item._id, isLiked);
    }
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>

      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />

      {currentUser && (
        <button
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
          aria-label="Like item"
          onClick={handleLikeClick}
        >
          ❤️
        </button>
      )}
    </li>
  );
}

export default ItemCard;
