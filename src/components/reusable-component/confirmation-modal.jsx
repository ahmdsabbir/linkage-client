import React from "react";

const ConfirmationModal = ({
  showModal,
  confirmModal,
  projectId,
  setProjectId,
}) => {
  return (
    <main
      onClick={() => {
        showModal(false);
        setProjectId(null);
      }}
      className="fixed inset-0 antialiased bg-gray-200/40 text-gray-900 font-sans overflow-x-hidden"
    >
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div className="md:flex items-center">
            <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="font-bold">Delete your project?</p>
              <p className="text-sm text-gray-700 mt-1">
                You will lose all of your data by deleting your project. This
                action cannot be undone.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2 capitalize"
              onClick={() => confirmModal(projectId)}
            >
              Delete Project
            </button>
            <button
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1 capitalize"
              onClick={() => {
                showModal(false);
                setProjectId(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConfirmationModal;
