import "@material-ui/styles";
import React from "react";
import Landing from "./Landing";
import "./home.scss";

const Home = props => {
  return (
    <>
      <h2>SpaceX Launch Programs</h2>
      <Landing {...props} />
      <h5 className="footer">Developed by Karan Bhatia</h5>
    </>
  );
};

export default Home;
