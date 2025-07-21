import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/header_logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  onRegisterClick,
  onLoginClick,
  onSignoutClick,
}) {
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-container">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <ToggleSwitch />

      {currentUser ? (
        <div className="header__auth">
          <Link to="/profile" className="header__user">
            <p className="header__username">{currentUser.name}</p>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="header__avatar"
            />
          </Link>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
            title="Add new clothing item"
          >
            + Add Clothes
          </button>
          <button onClick={onSignoutClick} className="header__button">
            Log out
          </button>
        </div>
      ) : (
        <div className="header__auth">
          <button onClick={onLoginClick} className="header__button">
            Log in
          </button>
          <button onClick={onRegisterClick} className="header__button">
            Sign up
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
