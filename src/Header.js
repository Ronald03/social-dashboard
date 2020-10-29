import React from "react";
import "./Header.css";

import Switch from "./ToggleSwitch";

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
      </div>
      <div className="header__toggleButton">
        <Switch />
      </div>
      <div className="header__totalFollow">
        <span>Total Followers: 23,549</span>
      </div>
    </div>
  );
}

export default Header;
