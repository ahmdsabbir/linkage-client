import React from "react";
import { Outlet } from "react-router-dom";
import ProjectDetails from "../../../reusable-component/project-details";

const ProjectStarterLayout = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProjectDetails />

      <Outlet />
    </div>
  );
};

export default ProjectStarterLayout;
