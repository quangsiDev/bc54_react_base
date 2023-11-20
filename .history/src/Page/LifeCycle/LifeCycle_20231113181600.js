import React, { Component } from "react";

export default class LifeCycle extends Component {
  componentDidMount() {
    console.log("didMount");
    let timer = 10;
    let myCountDown = setInterval(() => {
      console.log(timer--);
    }, 1000);
  }
  render() {
    console.log("render");
    return <div>LifeCycle</div>;
  }
  componentWillUnmount() {
    console.log("will unmount");
  }
}
// clearInterval w3
