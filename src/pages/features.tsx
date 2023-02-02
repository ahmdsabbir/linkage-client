const Features = () => {
  return (
    <div className="container mx-auto flex flex-col space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
            Find your premium new glasses exported from US
          </h1>
          <p className="mt-4 text-gray-600 ">
            We work with the best remunated glasses dealers in US to find your
            new glasses.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
          </div>
        </div>
      </div>
      <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
        <img
          className="h-full w-full max-w-2xl rounded-md object-cover"
          src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="glasses"
        />
      </div>
    </div>
  );
};

export default Features;
