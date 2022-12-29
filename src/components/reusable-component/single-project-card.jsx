import React from "react";
import { NavLink } from "react-router-dom";

const SingleProjectCard = ({ name, domain, dateAdded, id, wpPassword }) => {
  return (
    <div className="flex gap-4 card shadow-xl p-4 bg-slate-800">
      <div className="flex flex-col gap-3">
        <p> Project Name: {name}</p>
        <p>URL: {domain} </p>
        <p>WP Username: Admin</p>
        <p>WP App. Password: {wpPassword}</p>
        <p>Project Created At: {dateAdded}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <NavLink
          className="btn bg-contrast text-base-300 hover:bg-contrast-dark focus:bg-slate-600"
          to={`/dashboard/project-starter/${id}`}
        >
          Start Project
        </NavLink>
        <NavLink
          className="btn bg-accent-light text-slate-300 hover:bg-warning hover:text-base-300  focus:bg-slate-600"
          to={`/dashboard/project-starter/${id}/edit-project-details`}
        >
          Edit
        </NavLink>
        <button className="btn bg-accent-light text-slate-300 hover:bg-error hover:text-base-300 focus:bg-slate-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleProjectCard;
