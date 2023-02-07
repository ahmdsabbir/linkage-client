import { NavLink } from "react-router-dom";

interface SidebarProps {
  isSidebar: boolean;
  handleSidebar: () => void;
}

const Sidebar = ({ isSidebar, handleSidebar }: SidebarProps) => {
  return (
    <aside
      onClick={handleSidebar}
      className={`fixed inset-0 z-10 transform overflow-hidden bg-primary bg-opacity-25 text-white ease-in-out 
${
  isSidebar
    ? " -translate-x-0 opacity-100 transition-opacity duration-500  "
    : " -translate-x-full opacity-0 transition-all delay-500  "
}`}
      aria-hidden="true"
    >
      <div
        className={`delay-400 max-w-64 absolute left-0 h-full w-64 transform bg-primary shadow-xl transition-all duration-500 ease-in-out 
  ${isSidebar ? " translate-x-0 " : " -translate-x-full"}
  `}
      >
        <div className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8 rtl:border-r-0 rtl:border-l">
          <div className="flex items-center justify-between p-4 text-lg font-bold">
            <p className="text-gray-800">Dashboard</p>
            <button className=" font-bold" onClick={handleSidebar}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 flex-1 space-y-3 ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg bg-gray-200 px-3 py-2 text-gray-800 transition-colors duration-300"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                }
                to={"/"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg bg-gray-200 px-3 py-2 text-gray-800 transition-colors duration-300"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                }
                to={"/dashboard/create-project"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Crate project</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg bg-gray-200 px-3 py-2 text-gray-800 transition-colors duration-300"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                }
                to={"/dashboard/all-projects"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Projects</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg bg-gray-200 px-3 py-2 text-gray-800 transition-colors duration-300"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                }
                to={"/tasks"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Tasks</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg bg-gray-200 px-3 py-2 text-gray-800 transition-colors duration-300"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                }
                to={"/reporting"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Reporting</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg bg-gray-200 px-3 py-2 text-gray-800 transition-colors duration-300"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                }
                to={"/users"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Users</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg bg-gray-200 px-3 py-2 text-gray-800 transition-colors duration-300"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                }
                to={"/noting"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Setting</span>
              </NavLink>
            </nav>
            <div className="mt-6">
              <div className="rounded-lg bg-gray-100 p-3 ">
                <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                  New feature availabel!
                </h2>
                <p className="mt-1 text-xs text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  harum officia eligendi velit.
                </p>
                <img
                  className="mt-2 h-32 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80"
                  alt=""
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <a
                  href=" http://127.0.0.1:3000/"
                  className="flex items-center gap-x-2"
                >
                  <img
                    className="h-7 w-7 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    John Doe
                  </span>
                </a>
                <a
                  href=" http://127.0.0.1:3000/"
                  className="rotate-180 text-gray-500 transition-colors duration-200 hover:text-blue-500 rtl:rotate-0 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>Children will be here as prop</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
