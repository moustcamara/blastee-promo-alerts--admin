import React, { Component } from "react";
import Link from "@material-ui/core/Link";

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
      <Link href="/">
        <img src={logo} alt="Blastee Commerce" />
      </Link>
    </div>
  );
};

export default Logo;
