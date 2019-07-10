import React, { Component } from "react";

const Logo = props => {
  return (
    <div
      className="logo"
      style={{
        paddingLeft: 30,
        paddlingRight: 30,
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      <h1 style={{ marginBottom: 0, marginTop: 10 }}>Blastee</h1>
      <h4 style={{ marginTop: 0 }}>COMMERCE</h4>
    </div>
  );
};

export default Logo;
