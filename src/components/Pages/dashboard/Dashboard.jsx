import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppState } from "../../context/AppProvider";
import Card from "./card";
import SidebarSample from "./sidebar-sample";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  // close sidebar function
  const handleCloseSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const sideBarRef = useRef(null);
  const context = useAppState();

  return (
    <>
      <div className="relative flex gap-4 ">
        <div className="flex flex-col h-screen bg-base-300 p-4  z-10 col-span-1">
          <button className="btn btn-ghost" onClick={handleCloseSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
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
