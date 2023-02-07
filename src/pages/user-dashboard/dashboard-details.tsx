import { Link } from "react-router-dom";

const DashboardDetails = () => {
  return (
    <div>
      <h1 className="text-5xl text-gray-900"> Dashboard Details</h1>

      <Link to={"/dashboard/single-page"} className="btn-primary btn">
        All Projects
      </Link>
    </div>
  );
};

export default DashboardDetails;
