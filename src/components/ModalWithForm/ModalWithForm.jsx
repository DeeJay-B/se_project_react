import "./ModalWithForm.css";
import closebtn from "../../assets/close-btn.png";
function ModalWithForm({
  children,
  // buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closebtn} alt="close" className="modal__close-btn" />
        </button>
        <form onSubmit={handleSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
