/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

import { useAuthState } from "../context/auth-context";
import { useLogout } from "../utils/log-out-handling";
import Sidebar from "./sidebar";

const Navbar = () => {
  // auth hooks
  const { auth } = useAuthState();
  const [isSidebar, setIsSidebar] = useState(false);
  const logout = useLogout();
  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center
       justify-between  bg-white p-2 shadow sm:p-3  "
      >
        <div className="ga flex flex-row items-center">
          <div className="h-10 w-10 p-2">
            <button onClick={handleSidebar} className="mr-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className=" ">
            <Link to={"/"} className="font-bold text-blue-600 text-sm">
              <div className="h-auto w-20 md:w-32">
                <img src={logo} alt="linkages.io" className="h-full w-full" />
              </div>
            </Link>
          </div>
        </div>
        {auth.token ? (
          <div className="flex items-center gap-1 ">
            <span className="flex flex-col items-center justify-center space-x-1 text-center font-normal text-gray-700 text-xs md:flex-row md:text-base">
              <span>Remaining Credit:</span>
              <span>05</span>
            </span>

            <button
              onClick={logout}
              className="btn-primary btn mr-2 font-semibold"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link className="btn-primary btn mr-2 font-semibold" to={"/login"}>
            Log In
          </Link>
        )}
      </nav>

      {/* onclick Sidebar will show and hide  */}
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
    </>
  );
};

export default Navbar;
