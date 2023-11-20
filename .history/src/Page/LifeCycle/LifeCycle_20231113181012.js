import React, { Component } from "react";

export default class LifeCycle extends Component {
  componentDidMount() {
    console.log("didMount");
    let timmer = 10;
    setInterval(() => {
      console.log(timmer--);
    }, 1000);
  }
  render() {
    console.log("render");
    return <div>LifeCycle</div>;
  }
}
