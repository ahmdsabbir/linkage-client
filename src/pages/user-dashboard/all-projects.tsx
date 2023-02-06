import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <div className="text-9xl text-gray-800">
      All Projects list
      <Link className="btn-primary btn" to={"/dashboard/single-page"}>
        Start Project{" "}
      </Link>
    </div>
  );
};

export default AllProjects;
