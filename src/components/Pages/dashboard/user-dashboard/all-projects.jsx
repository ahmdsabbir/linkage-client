import React from "react";
import SingleProjectCard from "../../../reusable-component/single-project-card";

const AllProjects = () => {
  return (
    <div className="p-5 bg-slate-600 border-slate-50	">
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
    </div>
  );
};

export default AllProjects;
