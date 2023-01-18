import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppState } from "../../context/AppProvider";
import { useAuthState } from "../../context/AuthProvider";

const Sidebar = ({ children, isSidebar, handleCloseSidebar }) => {
  const { setAuth } = useAuthState();
  const navigate = useNavigate();

  const { dispatch } = useAppState();

  const handleLogout = async () => {
    await setAuth({});
    navigate("/login");
    localStorage.clear();
  };

  const handleAllProjects = async () => {
    await dispatch({ type: "selectedProject", payload: {} });
    await dispatch({ type: "postTitleUrl", payload: {} });
    await dispatch({ type: "aiSuggestions", payload: [] });
    await dispatch({ type: "choosenTitleUrl", payload: {} });
    await dispatch({ type: "generatedHeading", payload: "" });
    await dispatch({ type: "generatedParagraph", payload: "" });
    await dispatch({ type: "updateAbove", payload: [] });
    await dispatch({ type: "newUpdateAbove", payload: [] });
    await dispatch({ type: "error", payload: "" });
    navigate("/dashboard");
  };

  return (
    <main
      className={`absolute overflow-hidden z-10 bg-gray-900 text-white bg-opacity-25 inset-0 transform ease-in-out 
${
  isSidebar
    ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
    : " transition-all delay-500 opacity-0 -translate-x-full  "
}`}
    >
      <section
        className={`w-screen max-w-lg left-0 absolute bg-slate-800 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
  ${isSidebar ? " translate-x-0 " : " -translate-x-full"}
  `}
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="flex items-center justify-between p-4 font-bold text-lg">
            <p className="text-slate-100">Dashboard</p>
            <button className="btn font-bold" onClick={handleCloseSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
          <div>{children}</div>
          <div>
            <nav
              className="text-slate-100 font-bold"
              data-dev-hint="second-main-navigation or footer navigation"
            >
              <NavLink
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                onClick={handleAllProjects}
              >
                All Projects
              </NavLink>
              <NavLink
                to="/dashboard/user-details"
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                onClick={handleCloseSidebar}
              >
                Profile
              </NavLink>

              <NavLink
                to="/dashboard/new-project"
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                onClick={handleCloseSidebar}
              >
                Start A New Porject
              </NavLink>
            </nav>
          </div>
          <button
            className="font-bold py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
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
