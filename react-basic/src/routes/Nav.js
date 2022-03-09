import React from "react";
import "../styles/Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" className="home" exact={true}>
          Home
        </NavLink>

        <NavLink to="/users" activeClassName="active">
          Users
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </div>
    );
  }
}

export default Nav;
