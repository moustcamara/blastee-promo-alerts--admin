import React, { Component } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Link from "@material-ui/core/Link";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import HeaderNavLink from "./HeaderNavLink";

import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

/* function handleChange(event, newValue) {
  setValue(newValue);
} */

let HeaderNav = props => {
  const classes = useStyles();

  return (
    <nav
      className={classes.root}
      style={{
        paddingTop: "20px",
        paddingBottom: "15px",
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      <HeaderNavLink name="My Apps" link="/" icon="" />
      <HeaderNavLink name="All Apps" link="/" icon="" />
      <HeaderNavLink name="Help" link="/" icon="" />
      <HeaderNavLink name="My Account" link="/" icon="" />
    </nav>
  );
};

export default HeaderNav;
