import { useState, useContext } from "react";
import "./RegisterModal.css";
import { register } from "../../utils/auth";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onSubmit }) => {
  console.log("isOpenRegiser", isOpen);
  const { setCurrentUser, setIsLoggedIn } = useContext(CurrentUserContext);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Register"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="avatar"
          name="avatar"
          placeholder="avatar"
          value={formData.avatar}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="modal__submit">
        Register
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
