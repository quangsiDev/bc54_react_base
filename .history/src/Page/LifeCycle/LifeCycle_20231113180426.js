import React, { Component } from "react";

export default class LifeCycle extends Component {
  componentDidMount() {
    console.log("didMount");
  }
  render() {
    return <div>LifeCycle</div>;
  }
}
