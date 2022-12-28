import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "./card";
import SidebarSample from "./sidebar";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  // close sidebar function
  const handleCloseSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <div className="relative flex gap-4 ">
        {/* sidebar container */}
        <div className="flex flex-col h-screen bg-base-300 p-4  z-10 col-span-1 w-64 max-w-lg">
          <button className="btn btn-ghost" onClick={handleCloseSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
          {/* sidebar style 1 */}
          <SidebarSample
            isSidebar={isSidebar}
            handleCloseSidebar={handleCloseSidebar}
          >
            <Card />
          </SidebarSample>
        </div>
        <div className="flex-1">
          {/* Dashboard content will be here */}
          <Outlet />
        </div>
      </div>

      {/* sidebar style 2
      <Sidebar2 />

      {/* sidebar 3 */}
      {/* <Sidebar3 /> */}
    </>
  );
};

export default Dashboard;
