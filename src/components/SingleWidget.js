import React from "react";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Link as PageLink
} from "react-router-dom";
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
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

import { ThemeProvider } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";


import Button from "@material-ui/core/Button";

function SingleWidget(props) {
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const inputStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  }));

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

  const BootstrapInput = withStyles(theme => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 0,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 16,
      lineHeight: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main
      }
    }
  }))(InputBase);

  function TabContainer(props) {
    return (
      <Typography component="div" className="tab-container">
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
          <Tabs className="tab-bar" value={value} onChange={handleChange}>
            {Object.entries(props.data)
              .filter(x => typeof x[1] == "object")
              .map((x, i) => (
                <Tab key={"_" + x[0]} className="tab-bar__link" label={x[0]} />
              ))}
          </Tabs>
        </AppBar>

        {Object.entries(props.data)
          .filter(x => typeof x[1] == "object")
          .map(
            (x, i) =>
              value === i && (
                <TabContainer>
                  <Grid item xs={12} sm={6} md={6}>
                    <h4 className="tab-container__title">{x[0]}</h4>
                    <div className="tab-container__main">
                      {Object.entries(x[1]).map((c, idx) => (
                        <Box className="tab-container__form-holder">
                          {c[1]["type"] === "input" && (
                            <FormControl className={classes.margin}>
                              <InputLabel shrink htmlFor="bootstrap-input">
                                {c[0]}
                              </InputLabel>
                              <BootstrapInput
                                onChange={() =>
                                  props.actions.addToUpdateQueue(x[1], c[1])
                                }
                                defaultValue={
                                  typeof c[1]["value"] != "undefined"
                                    ? c[1]["value"]
                                    : c[1]
                                }
                                id={"outlined-name-" + idx}
                              />
                            </FormControl>
                          )}
                          {c[1]["type"] === "textarea" && (
                            <FormControl className={classes.margin}>
                              <InputLabel shrink htmlFor="bootstrap-input">
                                {c[0]}
                              </InputLabel>
                              <BootstrapInput
                                fullWidth
                                defaultValue={
                                  typeof c[1]["value"] != "undefined"
                                    ? c[1]["value"]
                                    : c[1]
                                }
                                multiline={true}
                                rows="6"
                                id={"outlined-name-" + idx}
                              />
                            </FormControl>
                          )}
                        </Box>
                      ))}
                    </div>
                  </Grid>
                  <div className="single-widget__footer">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      style={{ marginRight: "15px" }}
                      onClick={() => props.actions.saveWidget()}
                    >
                      Save
                    </Button>
                    <Button
                      to="/"
                      component={PageLink}
                      variant="contained"
                      className={classes.button}
                      onClick={() => props.actions.cancelWidgetChanges("test")}
                    >
                    <Button variant="contained" className={classes.button}>
                      Cancel
                    </Button>
                  </div>
                </TabContainer>
              )
          )}
      </Grid>
    </React.Fragment>
  );
}

export default SingleWidget;
