import React, { useState } from "react";
import { Outlet } from "react-router-dom";
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
        <div className="col-span-3 xl:col-span-1 flex flex-col bg-base-300 p-4 min-h-screen">
          <button className="btn btn-ghost" onClick={handleCloseSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {/* sidebar style 1 */}
          <SidebarSample
            isSidebar={isSidebar}
            handleCloseSidebar={handleCloseSidebar}
          >
            {/* <Card /> */}
          </SidebarSample>
        </div>

        {/* Dashboard content will be here */}
        <div className="col-span-9 xl:col-span-10 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
