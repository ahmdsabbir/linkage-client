import React from "react";
import { Link } from "react-router-dom";

const SidebarSample = ({ children, isSidebar, setIsSidebar }) => {
  return (
    <main
      className={`absolute overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out 
${
  isSidebar
    ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
    : " transition-all delay-500 opacity-0 -translate-x-full  "
}`}
    >
      <section
        className={`w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
  ${isSidebar ? " translate-x-0 " : " -translate-x-full"}
  `}
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="flex items-center justify-between p-4 font-bold text-lg">
            <p className="text-slate-900">Dashboard</p>
            <button className="btn" onClick={() => setIsSidebar(!isSidebar)}>
              close
            </button>
          </header>
          <div>{children}</div>
          <div>
            <nav
              className="text-black font-bold"
              data-dev-hint="second-main-navigation or footer navigation"
            >
              <Link
                to="/dashboard/allprojects"
                class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                All Project Lists
              </Link>
              <Link
                to="/dashboard/enterposttitle"
                class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Enter Post Title
              </Link>
              <Link
                href="#"
                class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                Tokens
              </Link>
            </nav>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsSidebar(false);
        }}
      ></section>
    </main>
  );
};

export default SidebarSample;
