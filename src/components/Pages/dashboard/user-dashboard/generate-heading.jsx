import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const GenerateHeading = ({ title }) => {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <>
      <div className="card-body rounded flex flex-col text-center items-center bg-accent-dark/5">
        {title ? (
          <h2 className="card-title text-accent-dark">{title} </h2>
        ) : (
          <p className="text-accent-dark/40 font-semibold ">
            {"[ Generated heading will be here ]"}
          </p>
        )}
      </div>

      {title && (
        <div className="card-actions">
          <button
            className="btn btn-primary mt-4 w-full sm:w-auto   border-none rounded capitalize"
            onClick={() =>
              navigate(
                `/dashboard/project-starter/${name.toLowerCase()}/generated-heading`
              )
            }
          >
            Next Step
          </button>
        </div>
      )}
    </>
  );
};

export default GenerateHeading;
