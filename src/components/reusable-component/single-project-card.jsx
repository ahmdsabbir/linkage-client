import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProjectCard = () => {
  const navigate = useNavigate();
  const handleStartProject = () => {
    navigate("/dashboard/all-projects/project-query-layout");
  };
  return (
    <div className="flex flex-col gap-5 card shadow-xl p-10 mb-4">
      <div className="flex flex-col gap-3">
        <p> Project Name: Interlink</p>
        <p>URL: https://github.com/ </p>
        <p>WP Username: Admin</p>
        <p>WP App. Password: **********</p>
        <p>Project Created At: 12/10/2023</p>
      </div>
      <div className="flex flew-row gap-2">
        <button
          className="btn bg-contrast text-base-300 hover:bg-contrast-dark focus:bg-slate-600"
          onClick={handleStartProject}
        >
          Start Project
        </button>
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
