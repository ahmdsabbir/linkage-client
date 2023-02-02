import React from "react";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="card rounded lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Site is under construction</h2>
          <p>Hold your horses! This page will be built later.</p>
          <div className="card-actions justify-end">
            <Link to={"/dashboard"} className="btn btn-primary">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
