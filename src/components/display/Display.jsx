import React from "react";
import "../app/App.css";
import './display.css'

const Display = (props) => {
  return (
    <div id="display">
      {props.message && (
        <div className="d-flex">
          <h1>Coded Message is :</h1>
          <div id="res">{props.items}</div>
        </div>
      )}
    </div>
  );
};
export default Display;
