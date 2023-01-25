import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-center mb-5">Home page</h1>

        {/* <testing></testing> */}

        <NavLink
          className={
            "btn rounded bg-contrast hover:bg-contrast-dark border-none text-white"
          }
          to={"/login"}
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default Home;
