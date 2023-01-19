import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  children,
  isSidebar,
  handleCloseSidebar,
  handleAllProjects,
  handleLogout,
}) => {
  return (
    <main
      className={`absolute overflow-hidden z-10 bg-gray-900 text-white bg-opacity-25 inset-0 transform ease-in-out 
    ${
      isSidebar
        ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
        : " transition-all delay-500 opacity-0 -translate-x-full  "
    }`}
    >
      <div>{children}</div>
      <section
        className={`w-screen max-w-xs left-0 absolute bg-[#eaedf2]  h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
  ${isSidebar ? " translate-x-0 " : " -translate-x-full"}
  `}
      >
        <article className="relative w-screen max-w-xs p-4 flex flex-col  overflow-y-scroll h-screen max-h-screen">
          <header className="flex items-center justify-between  font-bold text-lg h-auto">
            <p className=" text-[#123354] hover:text-contrast mb-4">
              Dashboard
            </p>
            <button className="" onClick={handleCloseSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4EBF9D"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
          <div className="text-left bg-[#eaedf2] text-[#8D9DAE] flex flex-col rounded p-4 flex-grow">
            <nav
              className=" text-[#123354] "
              data-dev-hint="main-navigation-for-regular-user "
            >
              <ul>
                <li className="pt-2 my-2 block">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    onClick={handleAllProjects}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    onClick={handleAllProjects}
                  >
                    All Projects
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/user-details"
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    to="/dashboard/new-project"
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                  >
                    Start A New Porject
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink className=" block  py-1 px-0 transition duration-200  hover:text-contrast">
                    History
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink className=" block  py-1 px-0 transition duration-200  hover:text-contrast">
                    Payment
                  </NavLink>
                </li>
              </ul>
            </nav>

            <button
              className=" btn bg-contrast text-white rounded  border-none hover:bg-contrast-dark focus:bg-slate-600 mt-auto"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={handleCloseSidebar}
      ></section>
    </main>
  );
};

export default Sidebar;
