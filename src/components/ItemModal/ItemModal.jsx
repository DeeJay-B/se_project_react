import "./ItemModal.css";
import closebtn from "../../assets/close-btn.png";
function ItemModal({ activeModal, onClose, card, onOpenDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image modal__content">
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
          <button
            onClick={() => onOpenDelete(card._id)}
            type="text"
            className="modal__delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
