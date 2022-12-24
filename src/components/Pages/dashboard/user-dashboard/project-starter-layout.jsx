import React from "react";
import { Outlet } from "react-router-dom";
import ProjectDetails from "../../../reusable-component/project-details";

const ProjectStarterLayout = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProjectDetails />
      <div className="divider"></div>
      <Outlet />
    </div>
  );
};

export default ProjectStarterLayout;
