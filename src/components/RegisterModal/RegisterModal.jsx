import { useState, useContext } from "react";
import "./RegisterModal.css";
import { register } from "../../utils/auth";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const RegisterModal = ({ isOpen, onClose }) => {
  const { setCurrentUser, setIsLoggedIn } = useContext(CurrentUserContext);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      const data = await register({
        username: formData.username,
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
      const errorMessage =
        error.message || "Registration failed. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">Register</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="modal__form">
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
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
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="modal__submit">
            Register
          </button>
        </form>
        <button type="button" onClick={onClose} className="modal__close">
          ×
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
