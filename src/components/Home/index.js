import "@material-ui/styles";
import "../bootstrap";
import React from "react";
import Landing from "./Landing";
import "./home.scss";

const Home = props => {
  return (
    <div>
      <h2>SpaceX Launch Programs</h2>
      <Landing {...props} />
    </div>
  );
};

export default Home;
