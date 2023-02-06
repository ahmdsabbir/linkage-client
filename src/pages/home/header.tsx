const Header = () => {
  return (
    <section className="bg-white ">
      <nav className="container mx-auto  flex items-center justify-between p-6">
        <div className="flex flex-row items-center">
          <div className="h-10 w-10 p-2">
            <button className="mr-1 ">
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex h-5 w-[90px] items-center justify-center py-[18px] pl-4 pr-[14px]">
            <p className="text-sm font-bold text-blue-600">linkages</p>
          </div>
        </div>

        <a className="btn-primary btn mr-2 " href="http://localhost:3000/">
          Get started
        </a>
      </nav>
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
            AI powered interlinking
          </h1>
          Solutions to all of your interlinking problems in one place
          <p className="mt-6 text-gray-500 dark:text-gray-300"></p>
          <button className="btn-primary btn mt-6">Explore for more</button>
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
