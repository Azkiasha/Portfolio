import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./sidebar.css";
import Logo from "../../assets/Logobaru.svg";
import { show } from "./sidebar";

const sidebarItems = [
  { id: "home", icon: "icon-home", title: "Home" },
  { id: "about", icon: "icon-user-following", title: "About" },
  { id: "services", icon: "icon-briefcase", title: "Services" },
  { id: "resume", icon: "icon-graduation", title: "Resume" },
  { id: "work", icon: "icon-layers", title: "Work" },
  { id: "blog", icon: "icon-note", title: "Blog" },
  { id: "contact", icon: "icon-bubble", title: "Contact" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <aside className="aside">
      <button className="burger-icon" onClick={show}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </button>

      <nav className="nav">
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="" className="logo_icon" />
          <img src="" alt="" className="text" />
        </a>
        <div className="nav_menu">
          <ul className="nav_list">
            {sidebarItems.map((item) => (
              <li
                key={item.id}
                className={`nav_item ${activeItem === item.id ? "active" : ""}`}
              >
                <Link
                  to={item.id}
                  className="nav_link"
                  onClick={() => handleItemClick(item.id)}
                  smooth={true}
                  duration={0.5}
                >
                  <span className={item.icon}></span>
                  <span className="title">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyright">&copy; 2022 - 2023</span>
      </div>
    </aside>
  );
};

export default Sidebar;
