import React from "react";
import { NavLink } from "react-router-dom";

const SingleProjectCard = ({ name, domain, dateAdded, wpPassword, admin }) => {
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
        <NavLink
          className="btn bg-contrast text-white rounded  border-none hover:bg-contrast-dark focus:bg-slate-600 "
          to={`/dashboard/project-starter/${name.toLowerCase()}`}
        >
          Start Project
        </NavLink>
        <NavLink
          className="btn bg-accent-light text-white rounded  border-none hover:bg-warning hover:text-base-300  focus:bg-slate-600"
          to={`/dashboard/project-starter/${name.toLowerCase()}/edit-project-details`}
        >
          Edit
        </NavLink>
        <button className="btn bg-accent-light text-white rounded  border-none hover:bg-error hover:text-base-300 focus:bg-slate-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleProjectCard;
