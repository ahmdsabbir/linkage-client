import React from "react";
import { Outlet } from "react-router-dom";
import { globalData } from "../../context/Provider";

const Dashboard = () => {
  const { userData } = globalData();
  return (
    <div>
      <Outlet />
      {/* <ProjectDetails postTitle={userData.data?.postTitle} id={userData.id} /> */}

      {/* <EnterPostTitle />
      <h1 className="text-5xl mt-5">step2: Enter Relevent Term</h1>
      <ReleventTerm />
      <h1 className="text-5xl mt-5">
        Get All suggestios && reset suggestions page
      </h1>
      <Suggestions /> */}
    </div>
  );
};

export default Dashboard;
