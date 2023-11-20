import React, { Component } from "react";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Account" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Password" />
        </div>
      </div>
    );
  }
}
