const Header = () => {
  return (
    <section className="bg-white ">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <a href="http://localhost:3000/">
          <span className="text-2xl font-bold text-blue-600">linkages.io</span>
        </a>
        <div className="flex items-center gap-2 ">
          <div className=" flex items-center justify-between  ">
            <a
              className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500  dark:hover:text-blue-400 lg:mx-8"
              href="http://localhost:3000/"
            >
              Home
            </a>
            <a
              className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-8"
              href="http://localhost:3000/"
            >
              Features
            </a>
            <a
              className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-8"
              href="http://localhost:3000/"
            >
              Pricing
            </a>
            <a
              className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-8"
              href="http://localhost:3000/"
            >
              Contact
            </a>
          </div>

          <a
            className="mt-4 block rounded-lg bg-blue-600 px-5 py-2 text-center text-sm capitalize text-white hover:bg-blue-500 lg:mt-0 lg:w-auto"
            href="http://localhost:3000/"
          >
            Get started
          </a>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
            AI powered interlinking
          </h1>
          Solutions to all of your interlinking problems in one place
          <p className="mt-6 text-gray-500 dark:text-gray-300"></p>
          <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
            Explore for more
          </button>
          {/* <p className="mt-3 text-sm text-gray-400 ">No credit card required</p> */}
        </div>
        <div className="mt-10 flex justify-center">
          <img
            alt=""
            className="h-96 w-full rounded-xl object-cover lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
