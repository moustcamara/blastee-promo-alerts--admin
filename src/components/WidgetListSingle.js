import React from "react";
import App from "../App";
import history from "../history";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Link as PageLink
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import EditWidget from "../pages/edit-widget";

import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Switch from "@material-ui/core/Switch";

import { green } from "@material-ui/core/colors";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import Icon from "@material-ui/core/Icon";

function WidgetListSingle(props) {
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

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const deleteWidget = id => {
    alert("Are you sure you'd like to delete widget " + id + "?");
  };

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={10} sm={10} md={10}>
            <Box
              fontSize="h6.fontSize"
              fontWeight={500}
              style={{
                marginBottom: "10px"
              }}
            >
              {props.title}
            </Box>
            <Box>
              <Breadcrumbs aria-label="Breadcrumb" separator="|">
                <Typography variant="body2">{props.widgetType}</Typography>
                <Typography variant="body2" color="textPrimary">
                  {props.creationDate}
                </Typography>
              </Breadcrumbs>
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            style={{
              textAlign: "center"
            }}
          >
            <Box>
              <Switch
                checked={props.status === "active" && state.checkedA}
                onChange={handleChange("checkedA")}
                value={props.status === "active" && state.checkedA}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Box>
            <Box>
              <Icon
                fontSize="medium"
                component={PageLink}
                to={"/edit-widget?id=" + props.id}
                onClick={() => props.actions.editWidget(props.id)}
                className="btn btn-edit btn-no-style"
                style={{
                  marginTop: "10px"
                }}
              >
                edit
              </Icon>
            </Box>
            <Box>
              <button
                onClick={() => deleteWidget(props.id)}
                className="btn btn-delete btn-no-style"
                style={{
                  marginTop: "10px"
                }}
              >
                <Icon fontSize="medium">delete</Icon>
              </button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default WidgetListSingle;
