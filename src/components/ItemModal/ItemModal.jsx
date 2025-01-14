import "./ItemModal.css";
import closebtn from "../../assets/close-btn.png";
function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image modal__content">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closebtn} alt="close" className="modal__close-btn" />
        </button>

        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
