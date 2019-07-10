import React, { Component } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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

function handleChange(event, newValue) {
  setValue(newValue);
}

let HeaderNav = props => {
  const classes = useStyles();
  const [v, setValue] = React.useState(0);

  return (
    <nav className={classes.root}>
      <AppBar position="static">
        <Tabs value={v} onChange={handleChange}>
          <Tab label="My Widgets" />
          <Tab label="All Widgets" />
          <Tab label="Help" />
          <Tab label="My Account" />
        </Tabs>
      </AppBar>
      {v === 0 && <TabContainer>My Widgets</TabContainer>}
      {v === 1 && <TabContainer>All Widgets</TabContainer>}
      {v === 2 && <TabContainer>Help</TabContainer>}
      {v === 3 && <TabContainer>My Account</TabContainer>}
    </nav>
  );
};

export default HeaderNav;
