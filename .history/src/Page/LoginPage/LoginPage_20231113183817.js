import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    account: "",
    password: "",
  };
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <input
            value={this.state.account}
            type="text"
            className="form-control"
            placeholder="Account"
          />
        </div>
        <div className="form-group">
          <input
            value={this.state.password}
            type="text"
            className="form-control"
            placeholder="Password"
          />
        </div>
      </div>
    );
  }
}
