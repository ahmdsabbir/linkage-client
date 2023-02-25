const SiloLinkingTableRow = () => {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-700 text-sm">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <span className="font-normal text-gray-700 text-sm ">
                https://example.com/source-1
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 font-medium text-gray-700 text-sm">
        <div className="inline-flex items-center gap-x-2 rounded-full  px-3 py-1 ">
          <span className="font-normal text-gray-500 text-sm">
            https://example.com/the-pillar
          </span>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-gray-500 text-sm dark:text-gray-300">
        <button className=" text-accent transition-colors duration-200 focus:outline-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button className=" text-error transition-colors duration-200 focus:outline-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-gray-500 text-sm ">
        anchor text
      </td>

      <td className="whitespace-nowrap px-4 py-4 text-sm">
        <div className="flex items-center gap-x-6">
          <button className=" btn-xs btn border-0 py-1 px-2">
            <p>Link it</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </button>
          <button className=" btn-xs btn border-0 py-1 px-2" disabled>
            <p>Link it</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SiloLinkingTableRow;
