import "./SideBar.css";
import avatar from "../../assets/header_avatar.png";
function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">UserName</p>
    </div>
  );
}

export default SideBar;
