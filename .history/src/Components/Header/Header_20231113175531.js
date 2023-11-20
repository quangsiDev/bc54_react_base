import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" className="btn btn-warning">
          Home
        </NavLink>
      </div>
    );
  }
}
