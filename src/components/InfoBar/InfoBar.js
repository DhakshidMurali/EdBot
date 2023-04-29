import React from "react";
import boticon from "../../icons/boticon.png";
import "./InfoBar.css";

const InfoBar = (props) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="image" src={boticon} alt="online icon" />
      <h3 className="header">{props.title}</h3>
    </div>
  </div>
);

export default InfoBar;
