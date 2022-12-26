import React from "react";
import { Link } from "react-router-dom";

const SingleProjectCard = ({ title, body, id, userId }) => {
  return (
    <div className="flex flex-col gap-5 card shadow-xl p-10 mb-4">
      <div className="flex flex-col gap-3">
        <p> Project Name: {title}</p>
        <p>URL: {body} </p>
        <p>WP Username: Admin</p>
        <p>WP App. Password: {id}</p>
        <p>Project Created At:{userId}</p>
      </div>
      <div className="flex flew-row gap-2">
        <Link
          className="btn bg-contrast text-base-300 hover:bg-contrast-dark focus:bg-slate-600"
          to={`/dashboard/project-starter/${id}`}
        >
          Start Project
        </Link>
        <button className="btn bg-accent-light text-slate-300 hover:bg-warning hover:text-base-300  focus:bg-slate-600">
          Edit
        </button>
        <button className="btn bg-accent-light text-slate-300 hover:bg-error hover:text-base-300 focus:bg-slate-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleProjectCard;
