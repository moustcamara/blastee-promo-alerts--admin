import React, { Component } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Icon from "@material-ui/core/Icon";

import Link from "@material-ui/core/Link";

const HeaderNavLink = props => {
  return (
    <Link href="/" class="header-navigation__link">
      {props.name}
      {props.icon && <Icon>{props.icon}</Icon>}
    </Link>
  );
};

export default HeaderNavLink;
