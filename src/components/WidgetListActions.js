import React from "react";

import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";

import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Link as PageLink
} from "react-router-dom";

import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    textDecoration: "none"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function WidgetListActions(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      <Fab
        component={PageLink}
        to="/add-widget"
        onClick={() => props.actions.addWidget()}
        size="medium"
        color="secondary"
        aria-label="Add"
        className={classes.fab}
      >
        <Icon>add</Icon>
      </Fab>
    </div>
  );
}

export default WidgetListActions;
