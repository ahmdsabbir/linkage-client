import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const GenerateHeading = ({ title }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <div className="card-body rounded flex flex-col text-center items-center bg-accent-dark/5">
        {title ? (
          <h2 className="card-title text-accent-dark">{title} </h2>
        ) : (
          <p className="text-accent-dark">generated heading will be here</p>
        )}
      </div>

      {title && (
        <div className="card-actions">
          <button
            className=" mt-4 btn bg-contrast text-white capitalize hover:bg-contrast-dark border-none rounded"
            onClick={() =>
              navigate(`/dashboard/project-starter/${id}/generated-heading`)
            }
          >
            Next Step(this button must be secured with logic)
          </button>
        </div>
      )}
    </>
  );
};

export default GenerateHeading;
