import React from "react";
import "./footer.css";

import { FaRegClock, FaRegKeyboard, FaRegStar } from "react-icons/fa";
import { MdOutlineDialpad } from "react-icons/md";
import { RiRecordMailLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footerContainer">
      <FaRegStar color="white" className="icons" />
      <FaRegClock color="white" className="icons selected-footer-icon" />
      <FaRegKeyboard color="white" className="icons" />
      <MdOutlineDialpad color="white" className="icons" />
      <RiRecordMailLine color="white" className="icons" />
    </div>
  );
};

export default Footer;
