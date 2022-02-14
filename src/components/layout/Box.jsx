import React from "react";
import "./Box.modules.css";

const Box = (props) => {
  return (
    <div
      className="boxMain"
      style={{ maxWidth: props.maxWidth, maxHeight: props.maxHeight }}
    >
      {props.children}
    </div>
  );
};
export default Box;
