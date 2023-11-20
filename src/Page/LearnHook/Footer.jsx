import React from "react";

export default function Footer({ number, hanldeClick }) {
  return (
    <div className="p-5 bg-primary display-4">
      {number * 2}

      <br />
      <button onClick={hanldeClick} className="btn btn-success">
        Reset
      </button>
    </div>
  );
}
