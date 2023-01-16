import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppState } from "../context/AppProvider";

const SingleProjectCard = ({
  name,
  domain,
  dateAdded,
  wpPassword,
  admin,
  id,
  dispatch,
  deleteProject,
}) => {
  const {
    state: { projects, selectedProject },
  } = useAppState();
  const navigate = useNavigate();

  // delete projct handler
  const handleStarteProject = async (id) => {
    const findProject = projects.find((project) => project.id == id);
    await dispatch({
      type: "selectedProject",
      payload: findProject,
    });
    navigate(`/dashboard/project-starter/${name.toLowerCase()}`);
  };

  return (
    <div className="flex gap-4 card rounded shadow p-4">
      <div className="flex flex-col gap-3">
        {name ? <p> Project Name: {name}</p> : <p>project name not found</p>}
        {domain ? <p>Domain: {domain} </p> : <p>domain name not found</p>}
        {admin ? <p>WP Username: Admin</p> : <p>admin not found</p>}
        {wpPassword ? (
          <p>WP App. Password: {wpPassword}</p>
        ) : (
          <p>wpPassword name not found</p>
        )}
        {dateAdded ? (
          <p>Project Created At: {dateAdded}</p>
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
          to={`/dashboard/project-starter/${name.toLowerCase()}/edit-project-details`}
        >
          Edit
        </NavLink>
        <button
          className="btn bg-accent-light text-white rounded  border-none hover:bg-error hover:text-base-300 focus:bg-slate-600"
          onClick={() => deleteProject(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleProjectCard;
