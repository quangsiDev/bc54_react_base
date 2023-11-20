import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    account: "",
    password: "",
  };
  handleOnchange = (e) => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleLogin = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <input
            onChange={this.handleOnchange}
            value={this.state.account}
            type="text"
            name="account"
            className="form-control"
            placeholder="Account"
          />
        </div>
        <div className="form-group">
          <input
            onChange={this.handleOnchange}
            value={this.state.password}
            type="text"
            name="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button onClick={this.handleLogin} className="btn btn-success">
          Login
        </button>
      </div>
    );
  }
}
let user = {
  name: "Alice",
};

// user.name = "Tommy";
user["name"] = "Tommy";
