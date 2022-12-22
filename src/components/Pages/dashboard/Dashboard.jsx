import React, { useRef, useState } from "react";
import { globalData } from "../../context/Provider";
import Card from "./card";
import SidebarSample from "./sidebar-sample";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const sideBarRef = useRef(null);
  const { userData } = globalData();

  return (
    <>
      <div className="bg-white w-fit p-4 h-screen">
        <button className="btn btn-accent" onClick={() => setIsSidebar(true)}>
          Open
        </button>
        <SidebarSample isSidebar={isSidebar} setIsSidebar={setIsSidebar}>
          <Card />
        </SidebarSample>
      </div>
    </>
  );
};

export default Dashboard;
