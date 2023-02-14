const Features = () => {
  return (
    <div className=" mx-auto flex flex-col space-y-6  py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-2xl">
          <h1 className="font-semibold tracking-wide text-gray-800 text-3xl  lg:text-4xl">
            <span className="text-blue-500 ">Save Time </span>and Streamline
            Your Internal Linking Process
          </h1>
          <p className="mt-4 text-gray-500 text-sm lg:text-base ">
            Updating internal links can be a tedious and time-consuming task,
            especially if you have a large website. With our internal linking
            tool, you can streamline the process and update posts with just one
            click. No more jumping back and forth between your WordPress editor
            and your site pages. Our tool makes it easy to keep your internal
            links up to date, so you can focus on creating quality content and
            growing your site.
          </p>
          {/* <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="-px-3 flex items-center text-gray-800  ">
              <svg
                className="mx-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Premium selection</span>
            </div>
            <div className="-px-3 flex items-center text-gray-800  ">
              <svg
                className="mx-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Insurance</span>
            </div>
            <div className="-px-3 flex items-center text-gray-800  ">
              <svg
                className="mx-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">All legal documents</span>
            </div>
            <div className="-px-3 flex items-center text-gray-800 ">
              <svg
                className="mx-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">From US glasses dealers</span>
            </div>
            <div className="-px-3 flex items-center text-gray-800  ">
              <svg
                className="mx-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Payment Security</span>
            </div>
            <div className="-px-3 flex items-center text-gray-800  ">
              <svg
                className="mx-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Fast shipping (+ Express)</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
        <img
          className="h-full w-full max-w-2xl rounded-md object-cover"
          src="https://images.unsplash.com/photo-1554774853-b3d587d95440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80"
          alt="glasses"
        />
      </div>
    </div>
  );
};

export default Features;
