import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ConfirmModal.css";

const ConfirmModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <div>
      <ModalWithForm
        title="Are you sure you want to delete this item?
This action is irreversible."
        buttonText="Yes, delete item"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
      >
        <div className="modal__confirm-btns">
          <button type="submit" className="modal__submit">
            Yes, delete item
          </button>
          <button onClick={onClose} type="button" className="modal__submit">
            Cancel
          </button>
        </div>
      </ModalWithForm>
    </div>
  );
};

export default ConfirmModal;
