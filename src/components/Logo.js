import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Link as PageLink
} from "react-router-dom";

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
      <PageLink to="/">
        <img src={logo} alt="Blastee Commerce" />
      </PageLink>
    </div>
  );
};

export default Logo;
