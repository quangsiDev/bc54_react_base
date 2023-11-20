import React, { useEffect, useState } from "react";
import FooterHook from "./FooterHook";

export default function UseEffect() {
  const [number, setNumber] = useState(10);
  const [share, setShare] = useState(1);

  useEffect(() => {
    console.log(" useEffect like");
    let timmer = 100;
    let myCountdown = setInterval(() => {
      // console.log(timmer--);
    }, 100);
    return () => {
      console.log("didmount");
      clearInterval(myCountdown);
    };
  }, []);

  useEffect(() => {
    console.log(" useEffect share");
  }, [share]);
  /**
  useEffect: nhận vào 2 params ~ didMount , updating , willUnmout
  params 1 : arrow function
  DependencyList :  array [ ] ~  quyết định useEffect chạy 1 lần hay nhiều lần
    */
  console.log("render");
  return (
    <div className="text-center pt-5">
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
        className="btn btn-danger"
      >
        -
      </button>
      <strong> number : {number} </strong>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-success"
      >
        +
      </button>
      {/* share */}
      <br />
      <button
        onClick={() => {
          setShare(share - 1);
        }}
        className="btn btn-danger"
      >
        -
      </button>
      <strong> share : {share} </strong>
      <button
        onClick={() => {
          setShare(share + 1);
        }}
        className="btn btn-success"
      >
        +
      </button>
      <FooterHook number={number} />
    </div>
  );
}
