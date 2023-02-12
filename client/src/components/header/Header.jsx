import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div style={props.style} className="header-container">
      {props.children}
    </div>
  );
};

export default Header;
