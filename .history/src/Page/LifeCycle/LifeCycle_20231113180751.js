import React, { Component } from "react";

export default class LifeCycle extends Component {
  componentDidMount() {
    console.log("didMount");
    setInterval(() => {
      console.log("yes");
    }, 1000);
  }
  render() {
    console.log("render");
    return <div>LifeCycle</div>;
  }
}
