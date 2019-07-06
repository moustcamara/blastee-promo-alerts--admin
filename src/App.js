import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import WidgetList from './components/WidgetList';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import * as firebase from 'firebase';
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
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

//import dummyData from 'dummy-data.js'; */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'user1',
      widgets: []
    }
  }

  componentDidMount() {

    let userWidgets = [];

    let getWidgets = db.collection('widgets');
    let widgetQuery = getWidgets.where('ownerId', '==', this.state.currentUser).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
      snapshot.forEach(doc => {
        userWidgets.push(doc.data());
        
      });

      this.setState({
          widgets: userWidgets
        });

      //return this.state.widgets;

    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

 

  }


  render(){


      let banana = 'a very nice fruit!';

      let users = [
        {
          id: 'user1',
          username: 'mike-smith',
          name: 'Mike Smith'
        }
      ];

 let uw = [
        {
          title: 'Spring Sale',   
          ownerId: 'user1',
          ownerUsername: 'mike-smith',
          widgetType: 'Pop Up',
          creationDate: 'September 16, 2018',
          status: 'active',
        },

        {
          title: 'End of Season Sale',  
          ownerId: 'user1',
          ownerUsername: 'mike-smith',
          widgetType: 'Banner',
          creationDate: 'September 20, 2018',
          status: 'active',
        },

        {
          title: '2018 New Years Eve Sale: 50% Off',  
          ownerId: 'user1',
          ownerUsername: 'mike-smith',
          widgetType: 'Pop Up',
          creationDate: 'December 20, 2017',
          status: 'not active',
        } 
    ]


      let addUser = (firstName, lastName) => {
        let username = [firstName,lastName].join('-').toLowerCase();
        return(
          db.collection("users").add({
                firstName,
                lastName,
                username 
          })
        )
      };

      let widgetCounter = 0;

      db.collection("counters").doc("stats").get().then(function(doc) {
           widgetCounter = doc.data().widgets;
      });

      let addMultipleWidgets = (widgets) => {
        return(
          uw.map(singleWidget => {
            db.collection("counters").doc("stats").set({widgets: ++widgetCounter});
            db.collection("widgets").doc('bcpa'.concat(widgetCounter)).set(singleWidget)
          })
        )
      };

      return (

        <div className="App">
          <Header/>
          <div className="main">  
            <button onClick={() => alert(widgetCounter)}>Count data</button>
            <button onClick={() => addMultipleWidgets(uw)} >Add Sample Widgets</button>      
            <button onClick={() => addUser('Jenna', 'McKenzie')} >Add User</button>
            <button onClick={() => db.collection("users").doc("rob-hueman").delete()} >Delete a user</button>
            <WidgetList title="Alerts" user={users.find(x => x.id == this.state.currentUser).name} dataSource={this.state.widgets} />
            }
          </div>                 
          <Footer />
        </div>
      );

  }

  
}

export default App;
