import React from "react";
import "./spinner.css";

const Spinner = ({ customClassName }) => {
  return (
    <div
      className={
        customClassName
          ? customClassName
          : "h-screen w-full grid place-items-center"
      }
    >
      <div className="loader">
        <span>J</span>
        <span>u</span>
        <span>s</span>
        <span>t</span>
        <span>&nbsp;</span>
        <span>A</span>
        <span>&nbsp;</span>
        <span>S</span>
        <span>e</span>
        <span>c...</span>
      </div>
    </div>
  );
};

export default Spinner;
