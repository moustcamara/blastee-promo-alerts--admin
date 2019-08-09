import React, { Component } from "react";
import Logo from "./Logo.js";
import HeaderNav from "./HeaderNav.js";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Header = props => {
  return (
    <header>
      <Container
        maxWidth="lg"
        style={{
          paddingLeft: 30,
          paddlingRight: 30,
          paddingTop: 15,
          paddingBottom: 15
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={6} sm={4}>
            <Logo />
          </Grid>
          <Grid item md={6} sm={8} justify="center">
            <HeaderNav />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
