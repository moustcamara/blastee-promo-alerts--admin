import React, { Component } from "react";
import logo from "../images/blastee-commerce-logo.png";

const Logo = props => {
  return (
    <div
      className="logo"
      style={{
        width: "150px",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}
    >
      <img src={logo} alt="Blastee Commerce" />
    </div>
  );
};

export default Logo;
