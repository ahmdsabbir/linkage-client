import React from "react";

const buttons = () => {
  return (
    <div>
      <button className="btn bg-contrast text-white hover:bg-contrast-dark">
        Hello World
      </button>
      <button className="btn bg-contrast-dark text-white hover:bg-contrast">
        Hello World
      </button>
      <button className="btn bg-accent-light text-white ">Hello World</button>
      <button className="btn bg-light text-accent-dark ">Hello World</button>
      <button className="btn bg-accent-dark text-white">Hello World</button>
    </div>
  );
};

export default buttons;
