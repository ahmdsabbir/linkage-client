import React, { useEffect, useRef, useState } from "react";
import { globalData } from "../../context/Provider";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const sideBarRef = useRef(null);
  const { userData } = globalData();

  const handleClickOutside = (e) => {
    if (!sideBarRef.current.contains(e.target)) {
      setIsSidebar(false);
    }
  };

  //  click outSide any where and side bar will close
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <>
      <Sidebar
        userData={userData}
        isSidebar={isSidebar}
        setIsSidebar={setIsSidebar}
        sideBarRef={sideBarRef}
      />
    </>
  );
};

export default Dashboard;
