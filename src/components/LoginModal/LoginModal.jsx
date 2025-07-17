import { useState, useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import { login } from "../../utils/auth";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose }) => {
  const { setCurrentUser, setIsLoggedIn } = useContext(CurrentUserContext);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const data = await login({
        email: formData.email,
        password: formData.password,
      });

      if (data.token) {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        setCurrentUser(data.user);
        onClose();
      }
    } catch (error) {
      const errorMessage = error.message || "Login failed. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Register"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
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
      <button type="submit" className="modal__submit">
        Log in
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
