import React, { useState } from "react";

const Sidebar2 = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? "w-[6.5rem]" : "w-[19rem]"
      } bg-glass h-[96%]  rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-glass relative`}
    >
      <button className="btn btn-accent" onClick={() => setOpen(!open)}>
        Open
      </button>
      <p>Sidebar</p>

      <div className="mt-10 mb-10 hover:bg-slate-600">
        <div
          className={`${
            open ? "last:w-[3.6rem]" : "last:w-[17rem]"
          } flex items-center gap-5 sidebar last:absolute  bottom-4 `}
        >
          <div className=" text-[1.7rem] text-brown">Icon</div>
          <div
            className={`${
              open ? "opacity-0 delay-200" : ""
            } text-4 text-white whitespace-pre`}
          >
            a button Action
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
