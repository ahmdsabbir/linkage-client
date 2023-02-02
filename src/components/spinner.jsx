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
        <span>P</span>
        <span>l</span>
        <span>e</span>
        <span>a</span>
        <span>s</span>
        <span>e</span>
        <span>&nbsp;</span>
        <span>w</span>
        <span>a</span>
        <span>i</span>
        <span>t</span>
        <span>&nbsp;</span>
        <span>for a moment...</span>
      </div>
    </div>
  );
};

export default Spinner;
