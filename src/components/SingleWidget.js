import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Switch from "@material-ui/core/Switch";

import { green } from "@material-ui/core/colors";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import Icon from "@material-ui/core/Icon";

import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

function SingleWidget(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: "auto",
      width: "auto",
      padding: theme.spacing(3)
    },
    control: {
      padding: theme.spacing(2)
    }
  }));

  function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={12}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Appearance" />
            <Tab label="Content" />
            <Tab label="Behavior" />
            <Tab label="Targeting" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Appearance</TabContainer>}
        {value === 1 && <TabContainer>Content</TabContainer>}
        {value === 2 && <TabContainer>Behavior</TabContainer>}
        {value === 3 && <TabContainer>Targeting</TabContainer>}
      </Grid>
    </React.Fragment>
  );
}

export default SingleWidget;
