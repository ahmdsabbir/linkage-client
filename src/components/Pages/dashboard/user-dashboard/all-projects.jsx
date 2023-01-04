import React, { useEffect } from "react";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import SingleProjectCard from "../../../reusable-component/single-project-card";

const AllProjects = () => {
  // global state context provider
  const {
    state: { projects },
    dispatch,
  } = useAppState();

  useEffect(() => {
    const getData = async () => {
      const response = await API.get("/core/project");
      // console.log(response?.data?.projects);
      dispatch({ type: "projects", payload: response?.data?.projects });
    };
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-6 gap-6">
      {projects?.map((project) => (
        <SingleProjectCard
          key={project.id}
          name={project.name}
          domain={project.domain}
          id={project.id}
          dateAdded={project.date_added}
          wpPassword={project.wp_password}
        />
      ))}
    </div>
  );
};

export default AllProjects;
