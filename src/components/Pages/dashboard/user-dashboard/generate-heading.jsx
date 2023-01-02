import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const GenerateHeading = ({ title }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="card-body rounded flex flex-col text-center items-center">
      {title ? (
        <h2 className="card-title">{title} </h2>
      ) : (
        "generated heading will be here"
      )}

      {title && (
        <div className="card-actions">
          <button
            className=" mt-4 btn bg-contrast text-white hover:bg-contrast-dark border-none rounded"
            onClick={() =>
              navigate(`/dashboard/project-starter/${id}/generated-heading`)
            }
          >
            Next Setp
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateHeading;
