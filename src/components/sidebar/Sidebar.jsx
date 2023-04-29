import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
import React, { useContext } from "react";

import { UserContext } from "../../context/createcontext";
const sidebarNavItems = [
  {
    display: "Home",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Ask to Bot",
    icon: <i className="bx bx-user"></i>,
    to: "/askquery",
    section: "askquery",
  },
  {
    display: "Answer to Bot",
    icon: <i className="bx bx-user"></i>,
    to: "/answertamil",
    section: "answertamil",
  },
];

const sidebarNavItemsTamil = [
  {
    display: "முகப்பு பக்கம்",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Bot ஐக் கேளுங்கள்",
    icon: <i className="bx bx-user"></i>,
    to: "/askquery",
    section: "askquery",
  },
  {
    display: "Botக்கான பதில்",
    icon: <i className="bx bx-user"></i>,
    to: "/answertamil",
    section: "answertamil",
  },
];
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();
  const user = useContext(UserContext);
  console.log("INSIDEBAR" + user);
  console.log(user.lang == "Tamil");
  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    if (curPath != "answerenglish") {
      const activeItem = sidebarNavItems.findIndex(
        (item) => item.section === curPath
      );
      setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }
    if (curPath == "answerform") {
      setActiveIndex(2);
    }
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Chat Bot</div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {user.lang == "English" &&
          sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div
                className={`sidebar__menu__item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="sidebar__menu__item__icon">{item.icon}</div>
                <div className="sidebar__menu__item__text">{item.display}</div>
              </div>
            </Link>
          ))}
        {user.lang == "Tamil" &&
          sidebarNavItemsTamil.map((item, index) => (
            <Link to={item.to} key={index}>
              <div
                className={`sidebar__menu__item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="sidebar__menu__item__icon">{item.icon}</div>
                <div className="sidebar__menu__item__text">{item.display}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
