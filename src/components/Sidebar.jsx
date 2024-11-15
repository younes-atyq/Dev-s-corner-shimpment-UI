import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

export default function Sidebar() {
  const handleClick = () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar.classList.remove("active");
  };
  useEffect(() => {
    const unsubscribe = () => {
      const sideBar = document.querySelector(".sidebar");
      document.addEventListener("click", (e) => {
        if (
          e.target.className === "sidebar" ||
          e.target.classList.contains("menu-icon")
        )
          return;
        sideBar.classList.remove("active");
      });
    };
    return unsubscribe();
  }, []);
  return (
    <nav className="sidebar">
      <ul>
        <button onClick={handleClick} className="close-icon">
          <CloseIcon />
        </button>
        <li className="icon" title="Home" id="home">
          <HouseSidingIcon />
        </li>
        <li className="icon" title="Shipments" id="shipments">
          <LocalShippingIcon />
        </li>
        <li className="icon" title="Reports" id="reports">
          <SummarizeIcon />
        </li>
        <li className="icon" title="Settings" id="settings">
          <SettingsIcon />
        </li>
      </ul>
      <span className="icon" title="Logout" id="logout">
        <LogoutSharpIcon />
      </span>
    </nav>
  );
}
