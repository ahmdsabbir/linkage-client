import { Link } from "react-router-dom";

const DashboardDetails = () => {
  return (
    <div className="text-5xl text-gray-900">
      Dashboard Details
      <Link to={"/dashboard/single-page"} className="btn-primary btn">
        All Projects
      </Link>
    </div>
  );
};

export default DashboardDetails;
