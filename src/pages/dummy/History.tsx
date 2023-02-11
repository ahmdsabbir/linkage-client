import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="card rounded bg-base-100 shadow-xl lg:card-side">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Site is under construction</h2>
          <p>Hold your horses! This page will be built later.</p>
          <div className="card-actions justify-end">
            <Link to={"/dashboard/all-projects"} className="btn-primary btn">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
