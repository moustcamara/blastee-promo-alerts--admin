import React, { Component } from "react";
import Logo from "./Logo.js";
import HeaderNav from "./HeaderNav.js";

const Header = props => {
  return (
    <div>
      <Logo />
      <HeaderNav />
    </div>
  );
};

export default Header;
