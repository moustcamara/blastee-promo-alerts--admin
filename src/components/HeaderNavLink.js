import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Link as PageLink
} from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import Icon from "@material-ui/core/Icon";

import Link from "@material-ui/core/Link";

const HeaderNavLink = props => {
  return (
    <PageLink component={Link} to={props.link} className="header-navigation__link">
        {props.name}
        {props.icon && <Icon>{props.icon}</Icon>}
    </PageLink>
  );
};

export default HeaderNavLink;
