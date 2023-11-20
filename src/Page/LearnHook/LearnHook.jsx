import React, { useState } from "react";
import Footer from "./Footer";

export default function LearnHook() {
  let [soLuong, setSoLuong] = useState(100);
  // let [like, setLike] = useState(1);
  // useState ~ state ~ trả về 2 giá trị: state và setState
  let handleTang = () => {
    setSoLuong(soLuong + 1);
  };
  let handleReset = () => {
    setSoLuong(0);
  };
  return (
    <div>
      <button onClick={handleTang} className="btn btn-danger">
        -
      </button>
      <strong className="mx-5"> {soLuong} </strong>
      <button
        onClick={() => {
          setSoLuong(soLuong - 1);
        }}
        className="btn btn-success"
      >
        +
      </button>
      <Footer hanldeClick={handleReset} number={soLuong} />
    </div>
  );
}
// rfc ~ function component

// các kiến thức trong class component đều có bên function ~ state, props, redux,...

// function : ko dùng this, mọi thứ phải khai báo bằng let hoặc const
