import React, { Component } from "react";

export default class LifeCycle extends Component {
  componentDidMount() {
    console.log("didMount");
  }
  render() {
    console.log("render");
    return <div>LifeCycle</div>;
  }
}
