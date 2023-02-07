import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <nav className="container relative mx-auto  flex items-center justify-between p-6">
        <div className="flex flex-row items-center">
          <div className="h-10 w-10 p-2">
            <button onClick={handleSidebar} className="mr-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex h-5 w-[90px] items-center justify-center py-[18px] pl-4 pr-[14px]">
            <p className="text-sm font-bold text-blue-600">linkages</p>
          </div>
        </div>

        <Link className="btn-primary btn mr-2 font-semibold" to={"/login"}>
          Log In
        </Link>
      </nav>

      {/* onclick Sidebar will show and hide  */}
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
    </>
  );
};

export default Navbar;
