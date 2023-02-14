const ComingSoon = () => {
  return (
    <div className="mt-48">
      <section className="flex flex-1 items-center">
        <div className="flex w-full flex-col ">
          <h1 className="text-center text-5xl font-extrabold lg:text-7xl 2xl:text-8xl">
            <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent ">
              Coming
            </span>
            <span className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent ">
              Soon
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700 ">
            The app is currently on alpha version. Bear with us, more handy
            features will be added soon.
          </p>
          {/*  <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <input
              id="email"
              type="text"
              className="rounded-md border bg-white px-6 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  sm:mx-2"
              placeholder="Email Address"
            />
            <button className="transform rounded-md bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
              Notify Me
            </button>
          </div>
           <p className="text-md mt-8 text-center text-gray-700  md:text-xl">
            Notify me when App is launched :)
          </p> */}
        </div>
      </section>
      <footer className="mt-12 flex flex-col items-center sm:flex-row sm:justify-between">
        <a
          href="http://localhost:3000/"
          className="text-gray-700 transition-colors duration-300 hover:text-blue-500  "
        >
          {" "}
          Privacy Policy{" "}
        </a>
        <div className="-mx-4 mt-4 md:mt-0">
          <a
            href="http://localhost:3000/"
            className="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500  "
          >
            {" "}
            Facebook
          </a>
          <a
            href="http://localhost:3000/"
            className="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500  "
          >
            Instagram
          </a>
          <a
            href="http://localhost:3000/"
            className="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500 "
          >
            {" "}
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
