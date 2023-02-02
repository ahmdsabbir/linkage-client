import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen from-primary to-secondary text-primary-content  grid place-items-center  bg-gradient-to-br pt-20"
        /*  style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        }} */
      >
        {/* <svg
          class="fill-secondary col-start-1 row-start-1 h-auto w-full"
          width="1600"
          height="595"
          viewBox="0 0 1600 595"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
        </svg> */}

        <div className="hero-content text-center text-neutral-content">
          <div className="card w-auto bg-white text-slate-900 opacity-80 p-4">
            <h1 className="mb-5 text-5xl font-extrabold uppercase ">
              linkages.io
            </h1>
            <p className="mb-5 text-2xl">
              Application is currently on beta version. Will be adding more
              features ASAP.
            </p>
            <div className="flex gap-4 items-start justify-center">
              <NavLink
                className={
                  "btn btn-primary rounded  border-none capitalize text-slate-900"
                }
                to={"/login"}
              >
                Login
              </NavLink>
              <NavLink
                className={
                  "btn btn-primary rounded  border-none capitalize text-slate-900"
                }
                to={"/register"}
              >
                Register
              </NavLink>
            </div>
          </div>
          <div className="max-w-md"></div>
        </div>
      </div>

      {/*  */}
      {/* 
      <div className="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20"></div> */}
    </>
  );
};

export default Home;
