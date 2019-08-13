import React, { Component } from "react";

import SingleWidget from "../components/SingleWidget";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Box from "@material-ui/core/Box";

import * as firebase from "firebase";

function EditWidget(props) {
  return (
    <div className="main">
      <Container
        maxWidth="lg"
        style={{
          paddingTop: 40,
          paddingBottom: 40
        }}
      >
        <SingleWidget
          data={props.data}
          actions={props.actions}
          widgetId={props.widgetId}
        />
      </Container>
    </div>
  );
}

export default EditWidget;
