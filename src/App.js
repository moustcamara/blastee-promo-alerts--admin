import React, { Component } from "react";
import {
  Switch as RouteSwitch,
  Route,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import EditWidget from "./pages/edit-widget";
import AddWidget from "./pages/add-widget";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import * as firebase from "firebase";

//var app = firebase.initializeApp({ ... });

//const firebase = require("../firebase");
//require("../firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2It6JcF8rnO3iR_6i0gpD8szFOs4Q6y8",
  authDomain: "blastee-promo-alerts-admin.firebaseapp.com",
  databaseURL: "https://blastee-promo-alerts-admin.firebaseio.com",
  projectId: "blastee-promo-alerts-admin",
  storageBucket: "blastee-promo-alerts-admin.appspot.com",
  messagingSenderId: "692010746936",
  appId: "1:692010746936:web:36894fed8da275e1"
};

// Initialize Firebase
// Remove comment lines for code below when launching app locally (or in Firebase)
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

//import dummyData from 'dummy-data.js'; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "user1",
      page: "home",
      widgets: []
    };
  }

  componentWillMount() {
    if (window.location.href.indexOf("edit-widget") > -1) {
      let urlParams = new URLSearchParams(window.location.search);

      this.setState({
        page: "edit-widget",
        currentWidget: urlParams.get("id")
      });
    }

    let userWidgets = [];

    let getWidgets = db.collection("widgets");
    let widgetQuery = getWidgets
      .where("ownerId", "==", this.state.currentUser)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        snapshot.forEach(doc => {
          userWidgets.push({ ...doc.data(), id: doc.id });
        });

        this.setState({
          widgets: userWidgets
        });

        //return this.state.widgets;
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  render() {
    let users = [
      {
        id: "user1",
        username: "mike-smith",
        name: "Mike Smith"
      }
    ];

    let addUser = (firstName, lastName) => {
      let username = [firstName, lastName].join("-").toLowerCase();
      return db.collection("users").add({
        firstName,
        lastName,
        username
      });
    };

    let widgetCounter = 0;

    db.collection("counters")
      .doc("stats")
      .get()
      .then(function(doc) {
        widgetCounter = doc.data().widgets;
      });

    return (
      <div className="App">
        <Header />
        <Router history={history}>
          <RouteSwitch>
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  {...props}
                  title="Alerts"
                  user={users.find(x => x.id == this.state.currentUser).name}
                  dataSource={this.state.widgets}
                />
              )}
            />
            <Route
              path="/edit-widget"
              render={props => (
                <EditWidget {...props} widgetId={this.state.currentWidget} />
              )}
            />
            <Route
              path="/add-widget"
              render={props => <AddWidget {...props} />}
            />
          </RouteSwitch>
        </Router>
      </div>
    );
  }
}

export default App;
