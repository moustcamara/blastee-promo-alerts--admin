import React, { Component } from "react";
import {
  Switch as RouteSwitch,
  Redirect,
  Route,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

const ContentView = props => {
  return (
    <div>
      {props.children}
      {props.currentPage.indexOf("edit-widget") > -1 && (
        <Redirect to="/edit-widget" />
      )}
    </div>
  );
};

export default ContentView;
