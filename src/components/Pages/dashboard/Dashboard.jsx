import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { globalData } from "../../context/Provider";
import Card from "./card";
import SidebarSample from "./sidebar-sample";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  const sideBarRef = useRef(null);
  const { userData } = globalData();

  return (
    <>
      <div className="relative flex gap-4 ">
        <div className="bg-white p-4 h-screen z-10 col-span-1">
          <button className="btn btn-accent" onClick={() => setIsSidebar(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 flex-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </button>
          {/* sidebar style 1 */}
          <SidebarSample isSidebar={isSidebar} setIsSidebar={setIsSidebar}>
            <Card />
          </SidebarSample>
        </div>
        {/* side content */}
        <div className="bg-black flex-1 ">
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
