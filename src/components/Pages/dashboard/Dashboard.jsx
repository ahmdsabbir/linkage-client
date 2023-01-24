import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "../../context/AuthProvider";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const { handleLogout } = useAuthState();

  const [isSidebar, setIsSidebar] = useState(false);

  // close sidebar function
  const handleCloseSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <div className="relative grid grid-cols-12">
        {/* menu button for mobile */}
        <div className="md:hidden md:invisible col-span-1 flex flex-col items-center bg-base p-4 min-h-screen">
          <button className=" " onClick={handleCloseSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#4EBF9D"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* for mobile */}
        <Sidebar
          isSidebar={isSidebar}
          handleCloseSidebar={handleCloseSidebar}
          handleLogout={handleLogout}
        ></Sidebar>

        {/* sidebar container for desktop */}

        <div
          className={`hidden invisible visibility md:relative md:flex md:visible md:col-span-2 flex-col bg-base  p-4 min-h-screen `}
        >
          {/* sidebar for desktop */}
          <div className="sticky top-0 text-left bg-[#eaedf2] text-[#8D9DAE] min-h-screen rounded p-4 flex flex-col">
            <nav
              className="flex flex-col text-[#123354] "
              data-dev-hint="main-navigation-for-regular-user "
            >
              <div className=" mb-6">
                <div className="text-xl font-bold ">Linkage</div>
                {/*   <p className="text-sm text-slate-500">
                  All your interlinking issues solved!
                </p> */}
              </div>
              <ul>
                <li className="pt-2 my-2 block">
                  <NavLink
                    to={"/dashboard"}
                    className={({ isActive }) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                {/*  <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to={"/dashboard"}
                    className={(isActive) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    All Projects
                  </NavLink>
                </li> */}
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/user-details"
                    className={({ isActive }) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/new-project"
                    className={({ isActive }) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    Start A New Porject
                  </NavLink>
                </li>

                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/history"
                    className={({ isActive }) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    History
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive }) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    Payment
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/documentation"
                    className={({ isActive }) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    Docmumentation
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/report-a-problem"
                    className={({ isActive }) =>
                      isActive
                        ? " block  py-1 px-0 font-semibold"
                        : " block  py-1 px-0 font-normal transition duration-200  hover:text-contrast"
                    }
                  >
                    Report a Problem
                  </NavLink>
                </li>
              </ul>
            </nav>

            <button
              className=" btn bg-contrast text-white rounded  border-none hover:bg-contrast-dark focus:bg-slate-600 mt-auto capitalize"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard content will be here */}
        <div className="relative col-span-11 md:col-span-10 pt-4 md:pr-4 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
