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
            className="btn btn-accent border-none mt-4"
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
