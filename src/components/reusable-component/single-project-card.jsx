import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppState } from "../context/AppProvider";

const SingleProjectCard = ({
  name,
  domain,
  dateAdded,
  wpUserName,
  wpPassword,
  id,
  showModal,
  dispatch,
  setProjectId,
}) => {
  const {
    state: { projects },
  } = useAppState();
  const navigate = useNavigate();

  // start projct handler
  const handleStarteProject = async (id) => {
    const findProject = projects.find((project) => project.id == id);
    await dispatch({
      type: "selectedProject",
      payload: findProject,
    });
    navigate(`/dashboard/project-starter/${name.toLowerCase()}`);
  };

  const handleEditProject = async (id) => {
    const findProject = projects.find((project) => project.id == id);
    await dispatch({
      type: "selectedProject",
      payload: findProject,
    });

    navigate(
      `/dashboard/project-starter/${name.toLowerCase()}/edit-project-details`
    );
  };

  return (
    <div className="flex gap-4 card rounded shadow p-4">
      <div className="flex flex-col gap-3 break-words">
        {name ? (
          <p>
            <span className="font-semibold mr-2">Project Name:</span> {name}
          </p>
        ) : (
          <p>project name not found</p>
        )}
        {domain ? (
          <p>
            <span className="font-semibold mr-2">Domain:</span> {domain}{" "}
          </p>
        ) : (
          <p>domain name not found</p>
        )}

        {wpUserName ? (
          <p>
            <span className="font-semibold mr-2">WP Username:</span>{" "}
            {wpUserName}
          </p>
        ) : (
          <p>wpUserName not found</p>
        )}
        {wpPassword ? (
          <p>
            <span className="font-semibold mr-2">WP App. Password:</span>
            {wpPassword}
          </p>
        ) : (
          <p>wpPassword not found</p>
        )}
        {dateAdded ? (
          <p>
            <span className="font-semibold mr-2">Project Created At:</span>
            {dateAdded}
          </p>
        ) : (
          <p>date not found</p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 ">
        <button
          className="btn bg-contrast text-white rounded  border-none hover:bg-contrast-dark focus:bg-slate-600 "
          onClick={() => handleStarteProject(id)}
        >
          Start Project
        </button>
        <NavLink
          className="btn bg-accent-light text-white rounded  border-none hover:bg-warning hover:text-base-300  focus:bg-slate-600"
          onClick={() => {
            handleEditProject(id);
          }}
          disabled
        >
          Edit
        </NavLink>
        <button
          className="btn bg-accent-light text-white rounded  border-none hover:bg-error hover:text-base-300 focus:bg-slate-600"
          onClick={() => {
            showModal(true);
            setProjectId(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleProjectCard;
