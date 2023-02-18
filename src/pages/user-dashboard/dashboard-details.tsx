import { NavLink } from "react-router-dom";
import useRefreshToken from "../../hooks/use-refresh-token";

const DashboardDetails = () => {
  const refresh = useRefreshToken();
  return (
    <div className="grid place-content-center">
      <button className="btn-primary btn" onClick={() => refresh()}>
        refresh
      </button>
      <div className="max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
        <img
          className="h-64 w-full object-cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />
        <div className="p-6">
          <div>
            <span className="font-medium uppercase text-blue-600 text-xs dark:text-blue-400">
              Hello,
            </span>
            <p className="text-gray100 mt-2  block font-semibold text-xl   ">
              Welcome to the dashboard
            </p>
            {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Please click the button to see your all projects
            </p> */}
            <NavLink
              to={"/dashboard/all-projects"}
              className={"btn-primary btn mt-5"}
            >
              View my Projects
            </NavLink>
          </div>
          {/*  <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="h-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="http://localhost:3000/"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex={0}
                >
                  Jone Doe
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {new Date().getDate()} - {new Date().getMonth() + 1} -
                {new Date().getFullYear()}
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails;
