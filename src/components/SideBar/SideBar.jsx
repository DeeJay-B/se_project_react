import { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import defaultAvatar from "../../assets/header_avatar.png";

function SideBar({ onEditProfile, onLogout }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={currentUser?.avatar || defaultAvatar}
        alt={currentUser ? currentUser.name : "Default avatar"}
      />
      <p className="sidebar__username">{currentUser?.name || "UserName"}</p>

      <button
        type="button"
        className="sidebar__edit-button"
        onClick={onEditProfile}
      >
        Edit Profile
      </button>

      {currentUser && (
        <button
          type="button"
          className="sidebar__logout-button"
          onClick={onLogout}
        >
          Log Out
        </button>
      )}
    </div>
  );
}

export default SideBar;
