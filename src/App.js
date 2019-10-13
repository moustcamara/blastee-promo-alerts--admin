import React, { Component } from "react";
import {
  Switch as RouteSwitch,
  Redirect,
  Route,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import history from "./history";
import createHistory from "history/createBrowserHistory";

import "./App.css";

import Header from "./components/Header";
import ContentView from "./components/ContentView";
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
      testField: "Gorilla",
      currentUser: "user1",
      page: "home",
      widgets: [],
      currentWidgetData: "",
      currentWidget: "bcpa1"
    };

    this.editWidget = this.editWidget.bind(this);
    this.addWidget = this.addWidget.bind(this);
    this.saveWidget = this.saveWidget.bind(this);
    this.cancelWidgetChanges = this.cancelWidgetChanges.bind(this);
    this.editField = this.editField.bind(this);
    this.addToUpdateQueue = this.addToUpdateQueue.bind(this);

    this.widgetData = this.state.currentWidgetData;
  }

  cancelWidgetChanges = e => {
    console.log("Changes canceled.");
    this.setState({
      currentWidgetData: this.widgetData
    });
  };

  editWidget = id => {
    this.setState({
      page: "edit-widget",
      currentWidget: id
    });

    //let widgetData;
    let getData = db.collection("widgets").doc(id);

    let widgetDataQuery = getData
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No matching data.");
          return;
        } else {
          this.widgetData = snapshot.data();
          console.log(this.widgetData.content);
        }

        this.setState({
          currentWidgetData: this.widgetData
        });
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  };

  editField = event => {
    this.setState({
      testField: event.target.value
    });
  };

  addToUpdateQueue = (category, item) => {
    let toLabel = e => e.replace(/\s/g, "-").toLowerCase();
    //let widgetData = this.state.currentWidgetData;

    //let inputVal;

    //this.widgetData[category][item].value = inputVal;
    // this.state.currentWidgetData = this.widgetData;
    console.log(this.widgetData);
  };

  saveWidget = () => {
    //let widgetData = this.state.currentWidgetData;
    this.setState({
      currentWidgetData: this.widgetData
    });
    console.log(this.widgetData);
  };

  addWidget = () => {
    this.setState({
      page: "add-widget"
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `this.state.currentWidgetData(♻️ componentDidUpdate)`,
      this.state.currentWidgetData
    );
  }

  componentWillMount() {
    if (window.location.href.indexOf("edit-widget") > -1) {
      let urlParams = new URLSearchParams(window.location.search);
      let id = urlParams.get("id");

      this.setState({
        page: "edit-widget",
        currentWidget: id
      });

      this.widgetData = [];
      let getData = db.collection("widgets").doc(id);

      let widgetDataQuery = getData
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("No matching data.");
            return;
          } else {
            this.widgetData = snapshot.data();
            console.log("Wassup!");
            console.log(this.widgetData.content);
          }

          this.setState({
            currentWidgetData: this.widgetData
          });
          //return this.state.widgets;
        })
        .catch(err => {
          console.log("Error getting document", err);
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
                actions={{
                  editWidget: this.editWidget,
                  addWidget: this.addWidget
                }}
              />
            )}
          />
          <Route
            path="/edit-widget"
            render={props => (
              <EditWidget
                {...props}
                parentData={this.state}
                data={this.state.currentWidgetData}
                widgetId={this.state.currentWidget}
                actions={{
                  editWidget: this.editWidget,
                  addWidget: this.addWidget,
                  saveWidget: this.saveWidget,
                  addToUpdateQueue: this.addToUpdateQueue,
                  editField: this.editField,
                  cancelWidgetChanges: this.cancelWidgetChanges
                }}
              />
            )}
          />
          <Route
            path="/add-widget"
            render={props => (
              <AddWidget
                {...props}
                actions={{
                  editWidget: this.editWidget,
                  addWidget: this.addWidget,
                  saveWidget: this.saveWidget,
                  addToUpdateQueue: this.addToUpdateQueue,
                  cancelWidgetChanges: this.cancelWidgetChanges
                }}
              />
            )}
          />
        </RouteSwitch>
      </div>
    );
  }
}

export default App;
