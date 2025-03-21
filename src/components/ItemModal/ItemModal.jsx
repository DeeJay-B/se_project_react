import "./ItemModal.css";
import closebtn from "../../assets/close-btn.png";
import { useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onOpenDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image ">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closebtn} alt="close" className="modal__close-btn" />
        </button>

        <img
          src={card.imageUrl}
          alt={`Image of ${card.name}`}
          className="modal__image"
        />
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          {currentUser?._id === card.owner && (
            <button
              onClick={() => onOpenDelete(card._id)}
              type="text"
              className="modal__delete-btn"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
