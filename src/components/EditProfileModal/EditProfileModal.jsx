import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (currentUser && isOpen) {
      setFormData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [currentUser, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Edit Profile"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save"
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          id="name"
          name="name"
          className="modal__input"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={1}
          maxLength={40}
        />
      </label>

      <label htmlFor="avatar" className="modal__label">
        Avatar URL
        <input
          type="url"
          id="avatar"
          name="avatar"
          className="modal__input"
          value={formData.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
