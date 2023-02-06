const SideImage = () => {
  return (
    <div className="lg:flex">
      <div className="order-2 flex w-full items-center justify-center px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className=" max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Build Your New{" "}
            <span className="text-blue-600 dark:text-blue-400">Idea</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
            quam quasi, quibusdam rem tempora voluptates.
          </p>
          <div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
            <a
              href="http://localhost:3000/"
              className="block transform rounded-md bg-gray-900 px-5 py-2 text-center text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700"
            >
              Get Started
            </a>
            <a
              href="http://localhost:3000/"
              className="block transform rounded-md bg-gray-200 px-5 py-2 text-center text-sm font-medium tracking-wider text-gray-700 transition-colors duration-300 hover:bg-gray-300 lg:mx-4"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 h-64 w-full lg:h-auto lg:w-1/2">
        <div
          className="h-full w-full bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)",
          }}
        >
          <div className="h-full w-full bg-black opacity-25" />
        </div>
      </div>
    </div>
  );
};

export default SideImage;
