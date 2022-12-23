import React from "react";

const Sidebar3 = () => {
  return (
    <aside
      id="sidebar"
      class="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
    >
      <div
        class="flex flex-col space-y-6"
        data-dev-hint="optional div for having an extra footer navigation"
      >
        <a
          href="#"
          class="text-white flex items-center space-x-2 px-4"
          title="Your App is cool"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <span class="text-2xl font-extrabold whitespace-nowrap truncate">
            Logo
          </span>
        </a>

        <nav data-dev-hint="main navigation">
          <a
            href="#"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <span>Profile</span>
          </a>
          <a
            href="#"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            <span class="ml-6">Dashboard</span>
          </a>
          <a
            href="#"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group"
          >
            <span class="w-4 h-4 flex-shrink-0 border border-gray-600 rounded group-hover:border-gray-400 transition duration-200"></span>
            <span>Without Icon And a bit longer than usual</span>
          </a>
        </nav>
      </div>

      <nav data-dev-hint="second-main-navigation or footer navigation">
        <a
          href="#"
          class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          All Project Lists
        </a>
        <a
          href="#"
          class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          User Credentials
        </a>
        <a
          href="#"
          class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Tokens
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar3;
