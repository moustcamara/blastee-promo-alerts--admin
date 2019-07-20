import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import WidgetList from "../components/WidgetList";
import WidgetListActions from "../components/WidgetListActions";

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
        <Grid
          container
          style={{
            marginBottom: "30px"
          }}
        >
          <Grid item md={9}>
            <Typography variant="h4" component="h4">
              Alerts
            </Typography>
          </Grid>
          <Grid item md={3}>
            <WidgetListActions />
          </Grid>
        </Grid>
        <WidgetList user={props.user} dataSource={props.dataSource} />
      </Container>
    </div>
  );
}

export default Home;
