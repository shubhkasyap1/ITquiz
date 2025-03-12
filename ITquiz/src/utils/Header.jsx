import React from "react";
import "./utils.css";
import images from "../assets/images.jsx";

function Header() {
  return (
    <header>
      <img src={images.Logo} alt="" />
    </header>
  );
}

export default Header;