import React, { Component } from "react";

import SingleWidget from "../components/SingleWidget";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Box from "@material-ui/core/Box";

import * as firebase from "firebase";

function AddWidgetPage(props) {
  return (
    <div className="main">
      <Container
        maxWidth="lg"
        style={{
          paddingTop: 40,
          paddingBottom: 40
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          style={{
            marginBottom: 30
          }}
        >
          Add New Widget
        </Typography>
        <SingleWidget />
      </Container>
    </div>
  );
}

export default AddWidgetPage;
