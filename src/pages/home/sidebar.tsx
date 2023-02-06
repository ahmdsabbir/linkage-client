import { useState } from "react";

const Sidebar = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const handleCloseSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <aside
      className={`absolute inset-0 z-10 transform overflow-hidden bg-primary bg-opacity-25 text-white ease-in-out 
${
  isSidebar
    ? " -translate-x-0 opacity-100 transition-opacity duration-500  "
    : " -translate-x-full opacity-0 transition-all delay-500  "
}`}
    >
      <div
        className={`delay-400 max-w-w-72 absolute left-0 h-full w-72 transform bg-primary shadow-xl transition-all duration-500 ease-in-out 
  ${isSidebar ? " translate-x-0 " : " -translate-x-full"}
  `}
      >
        <div className="max-w-w-72 relative flex h-full w-72 flex-col space-y-6 overflow-y-scroll pb-10">
          <div className="flex items-center justify-between p-4 text-lg font-bold">
            <p className="text-slate-100">Dashboard</p>
            <button className=" font-bold" onClick={handleCloseSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <nav
              className="font-bold text-slate-100"
              data-dev-hint="second-main-navigation or footer navigation"
            >
              <a
                href="http://127.0.0.1:3000/"
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                onClick={handleCloseSidebar}
              >
                All Projects
              </a>
              <a
                href="http://127.0.0.1:3000/"
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                onClick={handleCloseSidebar}
              >
                Profile
              </a>
              <a
                href="http://127.0.0.1:3000/"
                className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                onClick={handleCloseSidebar}
              >
                Tokens
              </a>
            </nav>
          </div>
          <div>Children will be here as prop</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
