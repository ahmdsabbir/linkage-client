import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import SidebarSample from "./sidebar";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  // close sidebar function
  const handleCloseSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <div className="relative grid grid-cols-12">
        {/* sidebar container */}
        <div className="col-span-2 flex flex-col  bg-[#eaedf2] p-4 min-h-screen">
          <button className="md:hidden" onClick={handleCloseSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* sidebar for desktop */}
          <div className="text-left text-[#8D9DAE]">
            <div className="text-xl mb-6">LOGO</div>
            <nav
              className="text-[#123354]"
              data-dev-hint="main-navigation-for-regular-user"
            >
              <ul>
                <li className="pt-2 my-2 block">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    // onClick={handleAllProjects}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    // onClick={handleAllProjects}
                  >
                    All Projects
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    // onClick={handleAllProjects}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    // onClick={handleAllProjects}
                  >
                    Start A New Porject
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    // onClick={handleAllProjects}
                  >
                    History
                  </NavLink>
                </li>
                <li className="pt-2 my-2 border-t border-dashed border-[#b1bcc8]">
                  <NavLink
                    className=" block  py-1 px-0 transition duration-200  hover:text-contrast"
                    // onClick={handleAllProjects}
                  >
                    Payment
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* sidebar style 1 */}
          <SidebarSample
            isSidebar={isSidebar}
            handleCloseSidebar={handleCloseSidebar}
          >
            {/* <Card /> */}
          </SidebarSample>
        </div>

        {/* Dashboard content will be here */}
        <div className="relative col-span-10 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

/* 

<div
      className={` overflow-hidden z-10 bg-gray-900 text-white   }
    >
      <section
        className={`w-screen max-w-lg left-0 absolute bg-slate-800 h-full shadow-xl`}
      >
        <article className="w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex items-center justify-between p-4 font-bold text-lg">
            <p className="text-slate-100">Dashboard</p>
            <button className="btn font-bold"
            //  onClick={handleCloseSidebar}
            >
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
          </div>
          // <div>{children}</div>
          <div>
            <nav
              className="text-slate-100 font-bold"
              data-dev-hint="second-main-navigation or footer navigation"
            >
              <NavLink
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                // onClick={handleAllProjects}
              >
                All Projects
              </NavLink>
              <NavLink
                to="/dashboard/user-details"
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                // onClick={handleCloseSidebar}
              >
                Profile
              </NavLink>

              <NavLink
                to="/dashboard/new-project"
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                // onClick={handleCloseSidebar}
              >
                Start A New Porject
              </NavLink>
            </nav>
          </div>
          <button
            className="font-bold py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
            // onClick={handleLogout}
          >
            Logout
          </button>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        // onClick={handleCloseSidebar}
      ></section>
    </div>


*/

/* 

  
   <div className="col-span-2 flex flex-col bg-slate-800 p-4 min-h-screen">
   <button className="btn btn-ghost" onClick={handleCloseSidebar}>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="white"
       className="w-6 h-6"
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
       />
     </svg>
   </button>
  
   <SidebarSample
     isSidebar={isSidebar}
     handleCloseSidebar={handleCloseSidebar}
   >
   
   </SidebarSample>
 </div>

*/

{
  /* <main
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
    </main> */
}
