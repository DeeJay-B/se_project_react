import { useState } from "react"; // Removed useContext
import "./RegisterModal.css";
// Removed: import { register } from "../../utils/auth";
// Removed: import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onSubmit, switchToLogin }) => {
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
    setError("");
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
          type="text"
          name="avatar"
          placeholder="Avatar URL"
          value={formData.avatar}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="modal__submit">
        Register
      </button>

      <button
        type="button"
        className="modal__switch-button"
        onClick={switchToLogin}
      >
        or Log in
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
