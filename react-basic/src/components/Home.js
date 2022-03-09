import React from "react";
import "../styles/Home.scss";
import logo from "../logo.svg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="title">Welcome to Home Page</h2>
      </div>
    );
  }
}

export default Home;
