import { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import defaultAvatar from "../../assets/header_avatar.png";

function SideBar({ onEditProfile }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={currentUser?.avatar || defaultAvatar}
        alt={currentUser ? currentUser.name : "Default avatar"}
      />
      <p className="sidebar__username">{currentUser?.name || "UserName"}</p>

      {/* Edit Profile button */}
      <button
        type="button"
        className="sidebar__edit-button"
        onClick={onEditProfile}
      >
        Edit Profile
      </button>
    </div>
  );
}

export default SideBar;
