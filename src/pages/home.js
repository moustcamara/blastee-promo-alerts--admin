import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import WidgetList from "../components/WidgetList";

function Home(props) {
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
          Alerts
        </Typography>
        <WidgetList user={props.user} dataSource={props.dataSource} />
      </Container>
    </div>
  );
}

export default Home;
