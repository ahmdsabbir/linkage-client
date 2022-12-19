import React from "react";
import { globalData } from "../context/Provider";
import EnterPostTitle from "../enter-post-title";
import ReleventTerm from "../relevent-term";
import ProjectDetails from "../reusable-component/project-details";
import Suggestions from "../suggestions";

const Dashboard = () => {
  const { userData } = globalData();
  return (
    <div>
      <ProjectDetails postTitle={userData.data?.postTitle} id={userData.id} />

      <EnterPostTitle />
      <h1 className="text-5xl mt-5">step2: Enter Relevent Term</h1>
      <ReleventTerm />
      <h1 className="text-5xl mt-5">
        Get All suggestios && reset suggestions page
      </h1>
      <Suggestions />
    </div>
  );
};

export default Dashboard;
